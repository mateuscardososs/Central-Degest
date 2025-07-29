# Importa as bibliotecas necessárias do Python
from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import os # Para ler as variáveis de ambiente
import requests # Para fazer as chamadas à API do Jira
import json # Para formatar a resposta final

# A Vercel exige que a função se chame 'handler' e herde de BaseHTTPRequestHandler
class handler(BaseHTTPRequestHandler):

    # Esta função será executada para requisições GET
    def do_GET(self):
        # --- 1. Extrair o ID do Quadro da URL da Requisição ---
        query_components = parse_qs(urlparse(self.path).query)
        board_id = query_components.get('id', [None])[0]

        # Se o ID não for fornecido, retorna um erro claro
        if not board_id:
            self.send_response(400)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": "O ID do quadro (boardId) é obrigatório."}).encode('utf-8'))
            return

        try:
            # --- 2. Ler as Credenciais Secretas do Ambiente da Vercel ---
            JIRA_BASE_URL = os.environ.get('JIRA_BASE_URL')
            JIRA_USER_EMAIL = os.environ.get('JIRA_USER_EMAIL')
            JIRA_API_TOKEN = os.environ.get('JIRA_API_TOKEN')

            # Verifica se todas as variáveis foram configuradas na Vercel
            if not all([JIRA_BASE_URL, JIRA_USER_EMAIL, JIRA_API_TOKEN]):
                raise ValueError("Variáveis de ambiente do Jira não configuradas corretamente na Vercel.")

            # Prepara a autenticação e os cabeçalhos para a chamada
            auth = (JIRA_USER_EMAIL, JIRA_API_TOKEN)
            headers = {"Accept": "application/json"}

            # --- 3. Buscar os Dados do Jira de forma Otimizada ---

            # Primeiro, busca a configuração das colunas do quadro
            config_url = f"{JIRA_BASE_URL}/rest/agile/1.0/board/{board_id}/configuration"
            config_response = requests.get(config_url, headers=headers, auth=auth)
            config_response.raise_for_status()  # Lança um erro se a requisição falhar
            config_data = config_response.json()

            # Segundo, busca as issues (cards) daquele quadro
            issues_url = f"{JIRA_BASE_URL}/rest/agile/1.0/board/{board_id}/issue?maxResults=100"
            issues_response = requests.get(issues_url, headers=headers, auth=auth)
            issues_response.raise_for_status()
            issues_data = issues_response.json()

            # --- 4. Processar e Combinar os Dados ---

            # Mapeia os IDs de status para os nomes das colunas
            status_to_column_map = {}
            for col in config_data.get('columnConfig', {}).get('columns', []):
                for status in col.get('statuses', []):
                    status_to_column_map[status['id']] = col['name']

            # Cria um dicionário para organizar o quadro final
            board_result = {}
            for col in config_data.get('columnConfig', {}).get('columns', []):
                board_result[col['name']] = {'id': col['name'], 'name': col['name'], 'issues': []}

            # Agrupa cada issue em sua respectiva coluna
            for issue in issues_data.get('issues', []):
                status_id = issue.get('fields', {}).get('status', {}).get('id')
                column_name = status_to_column_map.get(status_id)
                if column_name and column_name in board_result:
                    board_result[column_name]['issues'].append({
                        'id': issue.get('id'),
                        'key': issue.get('key'),
                        'summary': issue.get('fields', {}).get('summary')
                    })
            
            # Converte o dicionário em uma lista, que é o formato que o frontend espera
            final_data = list(board_result.values())

            # --- 5. Enviar a Resposta de Sucesso ---
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(final_data).encode('utf-8'))

        except requests.exceptions.HTTPError as e:
            # Captura erros específicos da API do Jira (ex: ID do quadro não encontrado)
            self.send_response(e.response.status_code)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Erro na comunicação com a API do Jira", "details": str(e), "status_code": e.response.status_code}).encode('utf-8'))
        except Exception as e:
            # Captura qualquer outro erro inesperado (ex: variável de ambiente faltando)
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Erro Interno do Servidor", "details": str(e)}).encode('utf-8'))
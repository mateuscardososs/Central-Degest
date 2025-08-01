# Arquivo: app.py

# --- 1. Importa as bibliotecas necessárias ---
import os
from flask import Flask, jsonify, send_from_directory
from dotenv import load_dotenv
import requests
from requests.auth import HTTPBasicAuth
from urllib.parse import quote

# --- 2. Configuração Inicial ---

# Carrega as variáveis de ambiente (credenciais seguras) do arquivo .env
load_dotenv()

# Cria a aplicação Flask, que será nosso servidor
# O 'static_folder=None' é para garantir que nossas rotas manuais funcionem
app = Flask(__name__, static_folder=None)


# --- 3. Rota da API Segura para o Jira ---
# Esta é a URL que o script.js vai chamar (ex: http://localhost:3000/api/get-jira-tasks)
@app.route('/api/get-jira-tasks')
def get_jira_tasks():
    """
    Atua como um intermediário seguro para buscar tarefas do Jira.
    Lê as credenciais do arquivo .env, monta a query e retorna os dados.
    """
    print("Recebido pedido para buscar tarefas do Jira...")
    
    # Pega as credenciais seguras do ambiente
    JIRA_EMAIL = os.getenv('JIRA_EMAIL')
    JIRA_API_TOKEN = os.getenv('JIRA_API_TOKEN')
    
    # Validação para garantir que as credenciais foram configuradas no .env
    if not JIRA_EMAIL or not JIRA_API_TOKEN:
        print("Erro: Credenciais do Jira não encontradas no arquivo .env")
        return jsonify({"error": "Credenciais do servidor não configuradas."}), 500

    # Monta a autenticação e os cabeçalhos para a chamada da API
    auth = HTTPBasicAuth(JIRA_EMAIL, JIRA_API_TOKEN)
    headers = {"Accept": "application/json"}
    
    # Query JQL para buscar tarefas do projeto "DAS" que não estão na categoria "Done" (Concluído)
    # Ordena pelas mais recentemente atualizadas
    jql_query_raw = 'project = "DAS" AND statusCategory != "Done"'
    
    # Codifica a query para ser segura em uma URL
    jql_query_encoded = quote(jql_query_raw)
    
    url = f"https://trf5.atlassian.net/rest/api/3/search?jql={jql_query_encoded}"
    
    try:
        # Faz a chamada real para a API do Jira
        response = requests.request("GET", url, headers=headers, auth=auth)
        response.raise_for_status() # Lança um erro se a resposta for mal-sucedida (ex: 400, 401, 404)
        
        print("Sucesso! Enviando tarefas para a página.")
        # Retorna apenas a lista de "issues" para a página, que é o que o script.js espera
        return jsonify(response.json().get("issues", []))

    except requests.exceptions.RequestException as e:
        print(f"Erro ao contatar a API do Jira: {e}")
        return jsonify({"error": f"Falha ao buscar dados do Jira: {e}"}), 500


# --- 4. Rotas para Servir os Arquivos do Site (Frontend) ---

# Esta rota serve o arquivo principal 'index.html'
@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

# Esta rota serve todos os outros arquivos (CSS, JS, imagens, PDFs, Excel, etc.)
# O Flask vai procurar por eles na mesma pasta onde o app.py está rodando.
@app.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory('.', path)


# --- 5. Inicia o Servidor ---
if __name__ == '__main__':
    # O Render define a porta através de uma variável de ambiente.
    # O host '0.0.0.0' é necessário para que seja acessível externamente.
    port = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=port)

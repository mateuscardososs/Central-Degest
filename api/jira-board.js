// Este código roda no servidor da Vercel, não no navegador!

export default async function handler(req, res) {
  const { id } = req.query; // Pega o ID do quadro da URL

  if (!id) {
    return res.status(400).json({ message: 'O ID do quadro (boardId) é obrigatório.' });
  }

  // Pega as credenciais das variáveis de ambiente de forma segura
  const JIRA_BASE_URL = process.env.JIRA_BASE_URL;
  const JIRA_USER_EMAIL = process.env.JIRA_USER_EMAIL;
  const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;

  const credentials = Buffer.from(`${JIRA_USER_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');
  const headers = {
    'Authorization': `Basic ${credentials}`,
    'Accept': 'application/json',
  };

  try {
    // Busca a configuração das colunas e as issues em paralelo
    const [configResponse, issuesResponse] = await Promise.all([
      fetch(`${JIRA_BASE_URL}/rest/agile/1.0/board/${id}/configuration`, { headers }),
      fetch(`${JIRA_BASE_URL}/rest/agile/1.0/board/${id}/issue?maxResults=100`, { headers })
    ]);

    if (!configResponse.ok) throw new Error('Falha ao buscar configuração do quadro.');
    if (!issuesResponse.ok) throw new Error('Falha ao buscar issues do quadro.');

    const configData = await configResponse.json();
    const issuesData = await issuesResponse.json();

    // Mapeia os status das colunas para facilitar a organização
    const statusToColumnMap = {};
    configData.columnConfig.columns.forEach(col => {
      col.statuses.forEach(status => {
        statusToColumnMap[status.id] = col.name;
      });
    });

    // Prepara a estrutura final do quadro
    const board = {};
    configData.columnConfig.columns.forEach(col => {
        board[col.name] = { id: col.name, name: col.name, issues: [] };
    });

    // Agrupa as issues em suas respectivas colunas
    issuesData.issues.forEach(issue => {
      const columnName = statusToColumnMap[issue.fields.status.id];
      if (columnName && board[columnName]) {
        board[columnName].issues.push({
          id: issue.id,
          key: issue.key,
          summary: issue.fields.summary,
        });
      }
    });

    // Retorna os dados organizados como um array de colunas
    res.status(200).json(Object.values(board));

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
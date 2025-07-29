// // Este código roda no servidor da Vercel, não no navegador!

// export default async function handler(req, res) {
//     const { id } = req.query; // Pega o ID do quadro da URL

//     if (!id) {
//         return res.status(400).json({ message: 'O ID do quadro (boardId) é obrigatório.' });
//     }

//     // Pega as credenciais das variáveis de ambiente de forma segura
//     //const JIRA_BASE_URL = "https://trf5.atlassian.net/jira/core/projects/DAS/board?filter=assignee%20IN%20(%22712020%3A63090fd1-4edc-40b2-b8c6-6460dd1e56c3%22%2C%20%22712020%3Afe527b71-5827-406c-aeb3-be5efb9966bc%22%2C%20%22712020%3A3af99f14-92b2-4d1e-a643-33174baa6f91%22)&groupBy=status";
//     const JIRA_BASE_URL = "https://trf5.atlassian.net/jira/core/projects/DAS";
//     const JIRA_USER_EMAIL = "e_mscardoso@trf5.jus.br";
//     const JIRA_API_TOKEN = "ATATT3xFfGF0Ot6dRybXjTaH - XCdJshUWMikkl_bWYXMNawGEgPQ57abPJ4RqnzlMRoFxt2vDQTTasirnNgeplurpxPMYYs3xiwvcKefSmCKHU6wGzK8gl2hCXzDJzntYF5i3oIL3zoQtgBEpjnfcmVR1YaOSSriEX6PTHK9TZG4vdcSz8XNVdA=A9F27510";
//     //  const JIRA_API_TOKEN = process.env.JIRA_API_TOKEN;

//     const credentials = Buffer.from(`${JIRA_USER_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');
//     const headers = {
//         'Authorization': `Basic ${credentials}`,
//         'Accept': 'application/json',
//     };

//     try {
//         // Busca a configuração das colunas e as issues em paralelo
//         const [configResponse, issuesResponse] = await Promise.all([
//             fetch(`${JIRA_BASE_URL}/rest/agile/1.0/board/${id}/configuration`, { headers }),
//             fetch(`${JIRA_BASE_URL}/rest/agile/1.0/board/${id}/issue?maxResults=100`, { headers })
//         ]);

//         if (!configResponse.ok) throw new Error('Falha ao buscar configuração do quadro.');
//         if (!issuesResponse.ok) throw new Error('Falha ao buscar issues do quadro.');

//         const configData = await configResponse.json();
//         const issuesData = await issuesResponse.json();

//         // Mapeia os status das colunas para facilitar a organização
//         const statusToColumnMap = {};
//         configData.columnConfig.columns.forEach(col => {
//             col.statuses.forEach(status => {
//                 statusToColumnMap[status.id] = col.name;
//             });
//         });

//         // Prepara a estrutura final do quadro
//         const board = {};
//         configData.columnConfig.columns.forEach(col => {
//             board[col.name] = { id: col.name, name: col.name, issues: [] };
//         });

//         // Agrupa as issues em suas respectivas colunas
//         issuesData.issues.forEach(issue => {
//             const columnName = statusToColumnMap[issue.fields.status.id];
//             if (columnName && board[columnName]) {
//                 board[columnName].issues.push({
//                     id: issue.id,
//                     key: issue.key,
//                     summary: issue.fields.summary,
//                 });
//             }
//         });

//         // Retorna os dados organizados como um array de colunas
//         res.status(200).json(Object.values(board));

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }
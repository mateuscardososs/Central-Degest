// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Initialize Lucide icons
lucide.createIcons();

// =================================================================================
// SEÇÃO DE PASTAS DO SHAREPOINT
// =================================================================================

// URL base para os links do SharePoint
const SHAREPOINT_BASE_URL = 'https://trfcinco.sharepoint.com/sites/gestaoestrategicagovernanca/_layouts/15/onedrive.aspx';

const folders = [
    {
        name: "Acessibilidade e Inclusão",
        description: "Documentos sobre acessibilidade e inclusão social",
        icon: "shield",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2FAcessibilidade%20e%20Inclus%C3%A3o`
    },
    {
        name: "Business Intelligence",
        description: "Análises e relatórios de inteligência de negócios",
        icon: "bar-chart-3",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_Business%20Intelligence&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Caderno de ações",
        description: "Documento com informações trimestrais da equipe",
        icon: "file-text",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2FCaderno%20de%20a%C3%A7%C3%B5es&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Contratações",
        description: "Processos e documentos de contratações",
        icon: "file-text",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_Contrata%C3%A7%C3%B5es&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Gestão de Processos",
        description: "Mapeamento e otimização de processos",
        icon: "settings",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_Gest%C3%A3o%20de%20Processos&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Gestão de Riscos",
        description: "Mapeamento de riscos e elaboração de planos para sua mitigação.",
        icon: "shield",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_Gest%C3%A3o%20de%20Riscos&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Planejamento Estratégico",
        description: "Definição de estratégias e diretrizes para o direcionamento da organização.",
        icon: "target",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_Planejamento%20Estrat%C3%A9gico&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "PMO",
        description: "Project Management Office - Gerenciamento de projetos",
        icon: "users",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_PMO&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Sustentabilidade",
        description: "Iniciativas de sustentabilidade e responsabilidade socioambiental",
        icon: "leaf",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_Sustentabilidade&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Documentos Importantes",
        description: "Central de documentos críticos e materiais de consulta para a equipe",
        icon: "file-stack",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2FDocumentos%20importantes&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Email attachments",
        description: "Anexos importantes recebidos por e-mail",
        icon: "mail",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2FEmail%20attachments&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Identidade Visual DEGEST",
        description: "Manual de identidade visual e materiais gráficos",
        icon: "palette",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2FIdentidade%20visual%20DGEST&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Relatórios",
        description: "Relatórios para acompanhamento de desempenho e resultados",
        icon: "line-chart",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2FRelat%C3%B3rios&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Governança",
        description: "Documentos e práticas de governança institucional",
        icon: "shield-check",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2FGovernan%C3%A7a&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "DEGEST",
        description: "Planilha central para controle e gestão das atividades do departamento",
        icon: "file-spreadsheet",
        url: `https://trfcinco.sharepoint.com/:x:/r/sites/gestaoestrategicagovernanca/_layouts/15/Doc.aspx?sourcedoc=%7BC09384E7-0FED-4506-938C-83F1948EF152%7D&file=DGEST.xlsx&action=default&mobileredirect=true`
    }
];

function renderFolders() {
    const foldersGrid = document.getElementById('foldersGrid');
    if (!foldersGrid) return;
    foldersGrid.innerHTML = folders.map(folder => `
        <div class="folder-card" data-name="${folder.name.toLowerCase()}" data-description="${folder.description.toLowerCase()}">
            <div class="folder-header">
                <div class="folder-icon"><i data-lucide="${folder.icon}"></i></div>
                <div class="folder-info">
                    <h4>${folder.name}</h4>
                    <p>${folder.description}</p>
                </div>
            </div>
            <button class="folder-btn" onclick="window.open('${folder.url}', '_blank')"><i data-lucide="external-link"></i>Acessar Pasta</button>
        </div>
    `).join('');
    lucide.createIcons();
}

// =================================================================================
// SEÇÃO DE EVENTOS DA EQUIPE (CARREGAMENTO AUTOMÁTICO)
// =================================================================================

const BIRTHDAYS_FILE_PATH = '/excel/Aniversariantes.xlsx';
const VACATIONS_FILE_PATH = '/excel/FeriasEquipeAntes.xlsx';

/**
 * LÓGICA FINAL: Encontra o próximo aniversário lendo TODAS as colunas.
 */
function findNextBirthday(data) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const futureEvents = [];

    // Itera sobre cada LINHA da planilha
    data.forEach(row => {
        // Itera sobre cada CÉLULA da linha atual
        Object.values(row).forEach(entry => {
            if (typeof entry !== 'string') return;

            const match = entry.match(/^(.+?)\s+(\d{1,2}\/\d{1,2})$/);
            if (!match) return;

            const name = match[1].trim();
            const dateStr = match[2];
            const [day, month] = dateStr.split('/').map(n => parseInt(n));

            if (isNaN(day) || isNaN(month)) return;

            let eventDate = new Date(today.getFullYear(), month - 1, day);
            if (eventDate < today) {
                eventDate.setFullYear(today.getFullYear() + 1);
            }

            futureEvents.push({ name, date: eventDate });
        });
    });

    if (futureEvents.length === 0) return null;
    futureEvents.sort((a, b) => a.date - b.date);
    return futureEvents[0];
}

/**
 * LÓGICA FINAL: Encontra as próximas férias lendo TODAS as colunas.
 */
function findNextVacation(data) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Zera o horário para comparar apenas os dias

    const futureVacations = [];

    // Itera sobre cada LINHA (objeto) da planilha
    data.forEach(row => {
        // Pega os dados diretamente das colunas "Nome" e "Início"
        const name = row.Nome;
        const startDateValue = row.Início; // O valor pode ser uma string ou número de data do Excel

        // Se não houver nome ou data de início, pula esta linha
        if (!name || !startDateValue) {
            return;
        }

        let eventDate;

        // A biblioteca SheetJS pode ler a data como um número ou como texto.
        // O código abaixo tenta lidar com ambos os casos.
        if (typeof startDateValue === 'number') {
            // Converte o número de série de data do Excel para uma data JavaScript
            // O '25569' é o offset entre as datas do Excel (1900) e do Unix (1970)
            eventDate = new Date((startDateValue - 25569) * 86400 * 1000);
        } else if (typeof startDateValue === 'string') {
            const parts = startDateValue.split('/');
            // Formato esperado M/D/AAAA
            const month = parseInt(parts[0], 10) - 1;
            const day = parseInt(parts[1], 10);
            const year = parseInt(parts[2], 10);
            eventDate = new Date(year, month, day);
        }

        // Se a data não for válida ou já passou, ignora
        if (!eventDate || isNaN(eventDate.getTime()) || eventDate < today) {
            return;
        }

        // Adiciona as férias válidas à lista
        futureVacations.push({ name, date: eventDate });
    });

    if (futureVacations.length === 0) {
        return null; // Nenhuma férias futura encontrada
    }

    // Ordena para encontrar a data mais próxima
    futureVacations.sort((a, b) => a.date - b.date);

    // Retorna a primeira da lista (a mais próxima)
    return futureVacations[0];
}


async function loadAndProcessFiles() {
    const summaryElement = document.getElementById('teamSummary');
    if (!summaryElement) return;

    try {
        const responses = await Promise.all([
            fetch(BIRTHDAYS_FILE_PATH),
            fetch(VACATIONS_FILE_PATH)
        ]);
        responses.forEach(res => {
            if (!res.ok) throw new Error(`Arquivo não encontrado: ${res.url}`);
        });

        const [birthdaysResponse, vacationsResponse] = responses;
        const [birthdaysBuffer, vacationsBuffer] = await Promise.all([
            birthdaysResponse.arrayBuffer(),
            vacationsResponse.arrayBuffer()
        ]);

        const birthdayWb = XLSX.read(birthdaysBuffer, { type: 'array' });
        const vacationWb = XLSX.read(vacationsBuffer, { type: 'array' });

        const birthdayData = XLSX.utils.sheet_to_json(birthdayWb.Sheets[birthdayWb.SheetNames[0]]);
        const vacationData = XLSX.utils.sheet_to_json(vacationWb.Sheets[vacationWb.SheetNames[0]]);

        updateTeamSummary(birthdayData, vacationData);
    } catch (error) {
        console.error("Erro ao carregar ou processar as planilhas:", error);
        summaryElement.innerHTML = `<p style="color: red;">Erro ao carregar dados da equipe. Verifique se os arquivos e o servidor estão configurados corretamente.</p>`;
    }
}

function updateTeamSummary(birthdayData, vacationData) {
    const summaryContainer = document.getElementById('teamSummary');
    if (!summaryContainer) return;

    summaryContainer.innerHTML = '';

    const options = { day: '2-digit', month: 'long' };

    const nextBirthday = findNextBirthday(birthdayData);
    let birthdayCardHTML = `
        <div class="event-card birthday">
            <div class="event-icon"><i data-lucide="cake"></i></div>
            <div class="event-details">
                <h4>Próximo Aniversário</h4>`;
    if (nextBirthday) {
        birthdayCardHTML += `
                <p class="event-person">${nextBirthday.name}</p>
                <p class="event-date">${nextBirthday.date.toLocaleDateString('pt-BR', options)}</p>`;
    } else {
        birthdayCardHTML += `<p class="event-person">Nenhum próximo aniversário agendado.</p>`;
    }
    birthdayCardHTML += `</div></div>`;
    summaryContainer.innerHTML += birthdayCardHTML;

    const nextVacation = findNextVacation(vacationData);
    let vacationCardHTML = `
        <div class="event-card vacation">
            <div class="event-icon"><i data-lucide="sun-lounger"></i></div>
            <div class="event-details">
                <h4>Próximas Férias</h4>`;
    if (nextVacation) {
        vacationCardHTML += `
                <p class="event-person">${nextVacation.name}</p>
                <p class="event-date">Inicia em ${nextVacation.date.toLocaleDateString('pt-BR', options)}</p>`;
    } else {
        vacationCardHTML += `<p class="event-person">Nenhuma próxima saída de férias agendada.</p>`;
    }
    vacationCardHTML += `</div></div>`;
    summaryContainer.innerHTML += vacationCardHTML;

    lucide.createIcons();
}

// =================================================================================
// SEÇÃO DO QUADRO KANBAN DO JIRA
// =================================================================================

const JIRA_BOARD_ID = '5'; // <-- COLOQUE O ID DO SEU QUADRO AQUI

// Função principal para iniciar o carregamento do Kanban
async function initJiraKanban() {
    const sidebarContent = document.getElementById('sidebarContent');
    if (!sidebarContent) return;

    sidebarContent.innerHTML = `<div class="loader">Carregando quadro Kanban...</div>`;

    try {

        const response = await fetch(`/api/jira-board?id=${JIRA_BOARD_ID}`);

        alert("passo1")

        if (!response.ok) {
            alert("responseOK");

            let errorMessage = 'Falha ao carregar o quadro';

            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
                const errorData = await response.json();
                errorMessage = errorData.message || errorMessage;
            } else {
                const errorText = await response.text();
                errorMessage = errorText || errorMessage;
            }

            throw new Error(errorMessage);
        }



        // if (!response.ok) {
        //     alert("responseOK")        
        //     const errorData = await response.json();
        //     throw new Error(errorData.message || 'Falha ao carregar o quadro');

        // }


        const boardData = await response.json();


        renderJiraKanban(boardData);



    } catch (error) {
        console.error("Erro ao carregar o quadro do Jira:", error);
        sidebarContent.innerHTML = `<div class="error-message">Erro ao carregar o quadro: ${error.message}</div>`;
    }
}

// Função para renderizar o HTML do quadro Kanban
function renderJiraKanban(boardData) {
    const sidebarContent = document.getElementById('sidebarContent');
    if (!sidebarContent) return;

    let boardHTML = `<h3>Quadro Kanban</h3><div class="kanban-board">`;

    boardData.forEach(column => {
        boardHTML += `
            <div class="kanban-column">
                <h4 class="kanban-column-title">${column.name} (${column.issues.length})</h4>
                <div class="kanban-card-list">
                    ${column.issues.map(issue => `
                        <div class="kanban-card">
                            <p class="kanban-card-summary">${issue.summary}</p>
                            <span class="kanban-card-key">${issue.key}</span>
                        </div>
                    `).join('')}
                    ${column.issues.length === 0 ? `<p class="kanban-no-issues">Nenhuma issue</p>` : ''}
                </div>
            </div>
        `;
    });

    boardHTML += `</div>`;
    sidebarContent.innerHTML = boardHTML;
}

// =================================================================================
// FUNÇÕES GERAIS DA INTERFACE (FILTRO, MODAL, SIDEBAR, TEMA, ETC.)
// =================================================================================

function filterFolders() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    const folderCards = document.querySelectorAll('.folder-card');
    const searchTerm = searchInput.value.toLowerCase();
    folderCards.forEach(card => {
        const name = card.dataset.name;
        const description = card.dataset.description;
        if (name.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-in-out';
        } else {
            card.style.display = 'none';
        }
    });
}

function openModal(modalId) {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById(modalId);
    if (overlay && modal) {
        overlay.classList.add('active');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    const modals = document.querySelectorAll('.modal');
    if (overlay) {
        overlay.classList.remove('active');
        modals.forEach(modal => modal.style.display = 'none');
        document.body.style.overflow = 'auto';
    }
}

// Variável para controlar se o Jira já foi carregado
let jiraLoaded = false;

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');

        // Se a sidebar está sendo aberta e o Jira ainda não foi carregado
        if (sidebar.classList.contains('active') && !jiraLoaded) {
            initJiraKanban(); // Chama a função para carregar os dados
            jiraLoaded = true; // Marca como carregado para não chamar de novo
        }
    }
}

function toggleChatbot() {
    const popup = document.getElementById('chatbotPopup');
    if (popup) {
        popup.classList.toggle('active');
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark);
    const themeBtn = document.querySelector('.theme-toggle-btn i');
    if (themeBtn) {
        themeBtn.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
        lucide.createIcons();
    }
}

function loadTheme() {
    const isDark = localStorage.getItem('darkTheme') === 'true';
    if (isDark) {
        document.body.classList.add('dark-theme');
        const themeBtn = document.querySelector('.theme-toggle-btn i');
        if (themeBtn) {
            themeBtn.setAttribute('data-lucide', 'sun');
        }
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
        const sidebar = document.getElementById('sidebar');
        if (sidebar && sidebar.classList.contains('active')) toggleSidebar();
        const chatbot = document.getElementById('chatbotPopup');
        if (chatbot && chatbot.classList.contains('active')) toggleChatbot();
    }
});

document.addEventListener('click', function (e) {
    const sidebar = document.getElementById('sidebar');
    const sidebarTrigger = document.querySelector('.sidebar-trigger');
    if (sidebar && sidebar.classList.contains('active') && !sidebar.contains(e.target) && sidebarTrigger && !sidebarTrigger.contains(e.target)) {
        toggleSidebar();
    }
});

function setupLazyLoading() {
    const lazyElements = document.querySelectorAll('img[data-src], iframe[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                if (element.dataset.src) {
                    element.src = element.dataset.src;
                    element.removeAttribute('data-src');
                }
                observer.unobserve(element);
            }
        });
    });
    lazyElements.forEach(element => imageObserver.observe(element));
}

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dateTimeElement = document.getElementById('currentDateTime');
    if (dateTimeElement) {
        dateTimeElement.textContent = now.toLocaleDateString('pt-BR', options);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    loadTheme();
    renderFolders();
    loadAndProcessFiles();
    setupLazyLoading();
    updateDateTime();
    setInterval(updateDateTime, 60000);
    lucide.createIcons();

    const elements = document.querySelectorAll('.card, .folder-card, .team-member');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('ServiceWorker registration successful.'))
            .catch(err => console.log('ServiceWorker registration failed:', err));
    });
}

function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.timing;
                const networkTime = perfData.responseEnd - perfData.navigationStart;
                const renderTime = perfData.loadEventEnd - perfData.responseEnd;
                console.log(`Network time: ${networkTime}ms, Render time: ${renderTime}ms`);
            }, 1000);
        });
    }
}
measurePerformance();

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .fade-in { animation: fadeIn 0.6s ease-in-out; }
`;
document.head.appendChild(style);


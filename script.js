// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Initialize Lucide icons
lucide.createIcons();

// =================================================================================
// SEÇÃO DE PASTAS DO SHAREPOINT (ATUALIZADA)
// =================================================================================

// URL base para os links do SharePoint
const SHAREPOINT_BASE_URL = 'https://trfcinco.sharepoint.com/sites/gestaoestrategicagovernanca/_layouts/15/onedrive.aspx';

// Dados das pastas com a nova propriedade "color" para os setores
const folders = [
    // --- Setores (os 9 primeiros) ---
    {
        name: "Acessibilidade e Inclusão",
        description: "Documentos sobre acessibilidade e inclusão social",
        icon: "shield",
        color: "#9b59b6", // Roxo
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2FAcessibilidade%20e%20Inclus%C3%A3o`
    },
    {
        name: "Business Intelligence",
        description: "Análises e relatórios de inteligência de negócios",
        icon: "bar-chart-3",
        color: "#7f8c8d", // Cinza
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_Business%20Intelligence&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Contratações",
        description: "Processos e documentos de contratações",
        icon: "file-text",
        color: "#3498db", // Azul
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_Contrata%C3%A7%C3%B5es&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Gestão de Processos",
        description: "Mapeamento e otimização de processos",
        icon: "settings",
        color: "#f39c12", // Laranja
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_Gest%C3%A3o%20de%20Processos&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Gestão de Riscos",
        description: "Mapeamento de riscos e planos de mitigação.",
        icon: "shield-alert", // Ícone alterado para diferenciar
        color: "#e74c3c", // Vermelho
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_Gest%C3%A3o%20de%20Riscos&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Planejamento Estratégico",
        description: "Definição de estratégias e diretrizes.",
        icon: "target",
        color: "#2c3e50", // Azul Escuro
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_Planejamento%20Estrat%C3%A9gico&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "PMO",
        description: "Project Management Office",
        icon: "users",
        color: "#f1c40f", // Amarelo
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_PMO&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Sustentabilidade",
        description: "Iniciativas de responsabilidade socioambiental",
        icon: "leaf",
        color: "#2ecc71", // Verde
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2F_Sustentabilidade&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Governança",
        description: "Documentos e práticas de governança",
        icon: "shield-check",
        color: "#8e44ad", // Roxo Escuro
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2FGovernan%C3%A7a&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },

    // --- Documentos (o restante) ---
    {
        name: "Caderno de ações",
        description: "Documento com informações trimestrais da equipe",
        icon: "file-text",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2FCaderno%20de%20a%C3%A7%C3%B5es&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "Documentos Importantes",
        description: "Central de documentos críticos e materiais de consulta",
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
        description: "Relatórios para acompanhamento de desempenho",
        icon: "line-chart",
        url: `${SHAREPOINT_BASE_URL}?id=%2Fsites%2Fgestaoestrategicagovernanca%2FDocumentos%20Compartilhados%2FRelat%C3%B3rios&viewid=16e11edd-470d-455d-8dcf-db8a5cbe741d`
    },
    {
        name: "DEGEST",
        description: "Planilha central para controle e gestão das atividades",
        icon: "file-spreadsheet",
        url: `https://trfcinco.sharepoint.com/:x:/r/sites/gestaoestrategicagovernanca/_layouts/15/Doc.aspx?sourcedoc=%7BC09384E7-0FED-4506-938C-83F1948EF152%7D&file=DGEST.xlsx&action=default&mobileredirect=true`
    }
];

// NOVA FUNÇÃO: Renderiza os cards divididos em Setores e Documentos
function renderFolders() {
    const setoresGrid = document.getElementById('setoresGrid');
    const documentosGrid = document.getElementById('documentosGrid');

    if (!setoresGrid || !documentosGrid) return;

    // Limpa os grids antes de preencher
    setoresGrid.innerHTML = '';
    documentosGrid.innerHTML = '';

    folders.forEach((folder, index) => {
        // Os 9 primeiros são "Setores", o resto é "Documentos"
        const isSetor = index < 9;

        const cardHTML = `
            <div class="folder-card ${isSetor ? 'setor-card' : 'document-card'}" data-name="${folder.name.toLowerCase()}" data-description="${folder.description.toLowerCase()}">
                <div class="folder-header">
                    <div class="folder-icon ${isSetor ? 'colored' : ''}" style="${isSetor ? `--icon-bg-color: ${folder.color}` : ''}">
                        <i data-lucide="${folder.icon}"></i>
                    </div>
                    <div class="folder-info">
                        <h4>${folder.name}</h4>
                        <p>${folder.description}</p>
                    </div>
                </div>
                <button class="folder-btn" onclick="window.open('${folder.url}', '_blank')">
                    <i data-lucide="external-link"></i>Acessar Pasta
                </button>
            </div>
        `;

        if (isSetor) {
            setoresGrid.innerHTML += cardHTML;
        } else {
            documentosGrid.innerHTML += cardHTML;
        }
    });

    // Re-initialize Lucide icons para que eles apareçam
    lucide.createIcons();
}

// =================================================================================
// SEÇÃO DE EVENTOS DA EQUIPE (CARREGAMENTO AUTOMÁTICO)
// =================================================================================

const BIRTHDAYS_FILE_PATH = 'excel/Aniversariantes.xlsx';
const VACATIONS_FILE_PATH = 'excel/FeriasEquipeAntes.xlsx';

function findNextBirthday(data) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const futureEvents = [];

    data.forEach(row => {
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

function findNextVacation(data) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const futureVacations = [];

    data.forEach(row => {
        Object.values(row).forEach(entry => {
            if (typeof entry !== 'string') return;
            const match = entry.match(/^(.+?)\s+(\d{1,2}\/\d{1,2})\s*-\s*(\d{1,2}\/\d{1,2})$/);
            if (!match) return;
            const name = match[1].trim();
            const startStr = match[2];
            const [startDay, startMonth] = startStr.split('/').map(n => parseInt(n));
            if (isNaN(startDay) || isNaN(startMonth)) return;
            let eventDate = new Date(today.getFullYear(), startMonth - 1, startDay);
            if (eventDate < today) {
                eventDate.setFullYear(today.getFullYear() + 1);
            }
            futureVacations.push({ name, date: eventDate });
        });
    });

    if (futureVacations.length === 0) return null;
    futureVacations.sort((a, b) => a.date - b.date);
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
        responses.forEach(res => { if (!res.ok) throw new Error(`Arquivo não encontrado: ${res.url}`); });

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
    let birthdayCardHTML = `<div class="event-card birthday"><div class="event-icon"><i data-lucide="cake"></i></div><div class="event-details"><h4>Próximo Aniversário</h4>`;
    if (nextBirthday) {
        birthdayCardHTML += `<p class="event-person">${nextBirthday.name}</p><p class="event-date">${nextBirthday.date.toLocaleDateString('pt-BR', options)}</p>`;
    } else {
        birthdayCardHTML += `<p class="event-person">Nenhum próximo aniversário agendado.</p>`;
    }
    birthdayCardHTML += `</div></div>`;
    summaryContainer.innerHTML += birthdayCardHTML;

    const nextVacation = findNextVacation(vacationData);
    let vacationCardHTML = `<div class="event-card vacation"><div class="event-icon"><i data-lucide="sun-lounger"></i></div><div class="event-details"><h4>Próximas Férias</h4>`;
    if (nextVacation) {
        vacationCardHTML += `<p class="event-person">${nextVacation.name}</p><p class="event-date">Inicia em ${nextVacation.date.toLocaleDateString('pt-BR', options)}</p>`;
    } else {
        vacationCardHTML += `<p class="event-person">Nenhuma próxima saída de férias agendada.</p>`;
    }
    vacationCardHTML += `</div></div>`;
    summaryContainer.innerHTML += vacationCardHTML;

    lucide.createIcons();
}

// =================================================================================
// SEÇÃO API DO JIRA
// =================================================================================

// Variável para controlar se o Jira já foi carregado para não chamar a API múltiplas vezes
let jiraLoaded = false;

async function fetchJiraTasks() {
    const container = document.getElementById('jira-tasks-container');
    if (!container) return;
    container.innerHTML = `<p>Carregando tarefas...</p>`;

    try {
        const response = await fetch('/api/get-jira-tasks');
        if (!response.ok) {
            throw new Error(`Erro na comunicação com o servidor: ${response.statusText}`);
        }
        const tasks = await response.json();

        if (tasks.length === 0) {
            container.innerHTML = `<p>Nenhuma tarefa encontrada com o filtro atual.</p>`;
            return;
        }
        container.innerHTML = '';

        const taskList = document.createElement('ul');
        taskList.className = 'jira-task-list';
        tasks.forEach(task => {
            const listItem = document.createElement('li');
            const statusCategory = task.fields.status.statusCategory.key;
            listItem.innerHTML = `
                <a href="https://trf5.atlassian.net/browse/${task.key}" target="_blank" title="${task.fields.summary}">
                    <span class="task-key">${task.key}</span>
                    <span class="task-summary">${task.fields.summary}</span>
                    <span class="task-status status-${statusCategory}">${task.fields.status.name}</span>
                </a>
            `;
            taskList.appendChild(listItem);
        });
        container.appendChild(taskList);
    } catch (error) {
        console.error("Erro ao buscar tarefas do Jira:", error);
        container.innerHTML = `<p style="color: #d13438;">Não foi possível carregar as tarefas.</p>`;
    }
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

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('active') && !jiraLoaded) {
            fetchJiraTasks();
            jiraLoaded = true;
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

// CORRIGIDO: Verifica se o elemento 'currentDateTime' existe antes de usá-lo.
function updateDateTime() {
    const dateTimeElement = document.getElementById('currentDateTime');
    if (dateTimeElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        dateTimeElement.textContent = now.toLocaleDateString('pt-BR', options);
    }
}

// =================================================================================
// INICIALIZAÇÃO DA PÁGINA
// =================================================================================

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
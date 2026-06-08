// Data
let experiences = [];
let allTechs = new Set();
let currentModalIndex = 0;
let currentProjectIndex = 0;

const techAliases = {
    "Next": "Next.js",
    "Vue": "Vue.js",
    "Vuejs": "Vue.js",
    "Angular.js": "Angular",
    "React.js": "React",
    "FastApi": "FastAPI",
    "Nest": "Nest.js"
};

// ── Init ──
document.addEventListener('DOMContentLoaded', async () => {
    try {
        experiences = await loadAllExperiences();
    } catch (e) {
        console.error('Failed to load experience data', e);
        return;
    }

    experiences.forEach(exp => exp.techs.forEach(t => allTechs.add(t)));

    renderTechCloud();
    renderTimeline();
    buildModal();
});

// ── Tech Cloud ──
function renderTechCloud() {
    const techCloud = document.getElementById('tech-cloud');
    const normalized = Array.from(allTechs).map(t => techAliases[t] || t).sort();

    normalized.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tag inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium transition-all hover:border-primary/50 cursor-pointer';
        span.textContent = tech;
        span.dataset.tech = tech;
        span.onclick = () => toggleHighlight(tech);
        techCloud.appendChild(span);
    });
}

// ── Timeline ──
function renderTimeline() {
    const container = document.getElementById('timeline-container');

    experiences.forEach((exp, index) => {
        const isLeft = index % 2 === 0;

        const cardHtml = `
        <div class="relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} group">
            <div class="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10 mt-6 md:mt-8 shadow-[0_0_0_4px_hsla(var(--background))]"></div>

            <div class="pl-16 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}">
                <div class="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300">
                    <div class="flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} mb-2">
                        <a href="${exp.link}" target="_blank" class="${isLeft ? 'md:self-end' : ''} mb-2">
                            <img src="${DATA_BASE}${exp.folder}/logo.png" alt="${exp.company}" class="w-[150px] max-h-[100px] object-contain" loading="lazy" onerror="this.parentElement.innerHTML='<span class=text-sm font-medium text-primary>'+this.alt+'</span>'">
                        </a>
                        <h4 class="text-lg font-bold leading-none">${exp.role}</h4>
                    </div>

                    <div class="flex items-center gap-4 text-xs text-muted-foreground mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}">
                        <span class="flex items-center"><svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>${exp.period}</span>
                        <span class="flex items-center"><svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>${exp.location}</span>
                    </div>

                    <p class="text-sm text-muted-foreground mb-4 leading-relaxed ${isLeft ? 'md:text-right' : ''}">${exp.desc}</p>

                    <div class="flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}">
                        ${exp.techs.map(t => {
                            const n = techAliases[t] || t;
                            return `<span class="tag inline-flex items-center rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground transition-all hover:bg-secondary cursor-pointer" data-tech="${n}">${n}</span>`;
                        }).join('')}
                    </div>

                    ${exp.projects && exp.projects.length > 0 ? `
                    <div class="mt-4 ${isLeft ? 'text-right' : 'text-left'}">
                        <button onclick="openProjectModal(${index})" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow-md">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                            Projects (${exp.projects.length})
                        </button>
                    </div>` : ''}
                </div>
            </div>

            <div class="hidden md:block md:w-1/2"></div>
        </div>`;

        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// ── Modal ──
function buildModal() {
    const div = document.createElement('div');
    div.id = 'project-modal';
    div.className = 'fixed inset-0 z-50 hidden';
    div.innerHTML = `
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeProjectModal()"></div>
        <div class="relative max-w-5xl mx-auto mt-24 mb-10 px-4 max-h-[85vh] overflow-y-auto">
            <div class="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
                <div class="flex items-start justify-between p-6 border-b border-border sticky top-0 bg-card z-10">
                    <div>
                        <h2 class="text-xl font-bold" id="modal-company"></h2>
                        <p class="text-sm text-muted-foreground" id="modal-role"></p>
                    </div>
                    <div class="flex items-center gap-4 shrink-0 ml-4">
                        <span class="text-xs text-muted-foreground whitespace-nowrap" id="modal-counter"></span>
                        <button onclick="closeProjectModal()" class="p-1.5 rounded-lg hover:bg-secondary transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                </div>

                <div id="modal-slide-container" class="p-6"></div>

                <div class="flex items-center justify-between p-6 border-t border-border">
                    <button id="modal-prev" onclick="prevProject()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-background hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        Previous
                    </button>

                    <div id="modal-dots" class="flex gap-2"></div>

                    <button id="modal-next" onclick="nextProject()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-border bg-background hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                        Next
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
        </div>`;
    document.body.appendChild(div);
}

function openProjectModal(index) {
    currentModalIndex = index;
    currentProjectIndex = 0;
    renderSlide();
    document.getElementById('project-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('project-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

function nextProject() {
    const projects = experiences[currentModalIndex].projects;
    if (currentProjectIndex < projects.length - 1) {
        currentProjectIndex++;
        renderSlide();
    }
}

function prevProject() {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        renderSlide();
    }
}

function goToProject(index) {
    currentProjectIndex = index;
    renderSlide();
}

function renderSlide() {
    const exp = experiences[currentModalIndex];
    const project = exp.projects[currentProjectIndex];

    document.getElementById('modal-company').textContent = exp.company;
    document.getElementById('modal-role').textContent = exp.role;
    document.getElementById('modal-counter').textContent = `${currentProjectIndex + 1} / ${exp.projects.length}`;

    const imgPath = `${DATA_BASE}${exp.folder}/${project.image}`;
    const tradeoffsHtml = project.tradeoffs.map(t =>
        `<div class="p-4 rounded-lg border border-border bg-secondary/20">
            <strong class="text-sm">${t.title}:</strong>
            <p class="text-sm text-muted-foreground mt-1">${t.body}</p>
        </div>`
    ).join('');

    document.getElementById('modal-slide-container').innerHTML = `
        <div class="project-slide">
            <div class="relative w-full h-48 md:h-72 rounded-xl overflow-hidden bg-secondary/50 mb-6">
                <img src="${imgPath}" alt="${project.title}"
                     class="w-full h-full object-cover"
                     onerror="this.parentElement.innerHTML='<div class=\\'flex items-center justify-center h-full text-muted-foreground text-sm px-4\\'><span>Project cover image</span></div>'">
            </div>

            <h3 class="text-2xl font-bold mb-3">${project.title}</h3>
            <p class="text-muted-foreground mb-8 leading-relaxed">${project.description}</p>

            <div class="space-y-8">
                <div>
                    <h4 class="font-semibold mb-3 flex items-center gap-2 text-primary">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.963-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>
                        Challenges
                    </h4>
                    <ul class="space-y-2">
                        ${project.challenges.map(c => `<li class="flex gap-2 text-sm text-muted-foreground"><span class="text-primary mt-1 shrink-0">\u2022</span>${c}</li>`).join('')}
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold mb-3 flex items-center gap-2 text-primary">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                        Solutions
                    </h4>
                    <ul class="space-y-2">
                        ${project.solutions.map(s => `<li class="flex gap-2 text-sm text-muted-foreground"><span class="text-primary mt-1 shrink-0">\u2022</span>${s}</li>`).join('')}
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold mb-3 flex items-center gap-2 text-primary">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                        Trade-offs
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        ${tradeoffsHtml}
                    </div>
                </div>

                <div>
                    <h4 class="font-semibold mb-3 flex items-center gap-2 text-primary">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Results & Gains
                    </h4>
                    <ul class="space-y-2">
                        ${project.results.map(r => `<li class="flex gap-2 text-sm text-muted-foreground"><span class="text-primary mt-1 shrink-0">\u2022</span>${r}</li>`).join('')}
                    </ul>
                </div>

                <div class="flex flex-wrap gap-6 p-4 rounded-lg border border-border bg-secondary/20 text-sm">
                    <span><strong class="text-foreground">Period:</strong> <span class="text-muted-foreground">${project.period}</span></span>
                    <span><strong class="text-foreground">Duration:</strong> <span class="text-muted-foreground">${project.duration}</span></span>
                </div>
            </div>
        </div>`;

    document.getElementById('modal-prev').disabled = currentProjectIndex === 0;
    document.getElementById('modal-next').disabled = currentProjectIndex === exp.projects.length - 1;

    const dots = exp.projects.map((_, i) =>
        `<button onclick="goToProject(${i})" class="w-2.5 h-2.5 rounded-full transition-all ${i === currentProjectIndex ? 'bg-primary scale-125' : 'bg-border hover:bg-muted-foreground'}"></button>`
    ).join('');
    document.getElementById('modal-dots').innerHTML = dots;

    document.getElementById('modal-slide-container').scrollTop = 0;
    document.getElementById('project-modal').querySelector('.overflow-y-auto').scrollTop = 0;
}

// ── Keyboard ──
document.addEventListener('keydown', e => {
    const modal = document.getElementById('project-modal');
    if (!modal || modal.classList.contains('hidden')) return;

    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowRight') nextProject();
    if (e.key === 'ArrowLeft') prevProject();
});

// ── Highlight ──
let activeHighlight = null;

function toggleHighlight(techName) {
    const allTags = document.querySelectorAll('.tag');
    if (activeHighlight === techName) {
        allTags.forEach(t => {
            t.classList.remove('highlighted', 'dimmed');
        });
        activeHighlight = null;
    } else {
        allTags.forEach(t => {
            if (t.dataset.tech === techName) {
                t.classList.add('highlighted');
                t.classList.remove('dimmed');
            } else {
                t.classList.add('dimmed');
                t.classList.remove('highlighted');
            }
        });
        activeHighlight = techName;
    }
}

// ── Theme Toggle ──
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const html = document.documentElement;

function updateThemeIcons() {
    if (html.classList.contains('dark')) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    updateThemeIcons();
});

if (localStorage.getItem('theme') === 'light') {
    html.classList.remove('dark');
} else {
    html.classList.add('dark');
}
updateThemeIcons();

// ── Smooth Scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

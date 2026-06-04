// Data Extraction
const allTechs = new Set();

const experiences = [
    {
        company: "Eletromidia",
        role: "Senior Full Stack Developer",
        period: "July 2022 - Present",
        location: "Remote, Brazil",
        link: "https://eletromidia.com.br",
        desc: "Architected scalable cloud solutions on GCP, implemented IaC (Terraform), led AI-driven content platform contributing to 10x sales growth, reduced costs by 45%, and led Vue.js adoption roadmap.",
        techs: ["React", "Node.js", "MongoDB", "Electron", "Vue.js", "GCP", "Terraform", "CI/CD", "PHP", "Laravel", "Python", "Kafka", "Redis", "TypeScript", "Next.js", "Angular", "Clean Code", "Docker", "Kubernetes", "Datadog", "Grafana", "Astro", "Tailwind", "Nuxt", "Pinia", "Redux", "Express", "BigQuery", "Linux", "Symfony", "Memcached", "Tauri", "New Relic", "Vite", "Microservices", "Event-Driven"]
    },
    {
        company: "Masterminds.com.ai",
        role: "AI Platform Software Engineer (Contract)",
        period: "June 2025 - Jan 2026",
        location: "Remote, Brazil",
        link: "#",
        desc: "Developed AI collaboration platform with multi-agent system architecture using LangGraph and RAG. Orchestrated multi-model LLMs (OpenAI, Anthropic, Gemini) and optimized PostgreSQL RLS.",
        techs: ["LangGraph", "LangChain", "RAG", "LLM", "Next.js", "React", "Node.js", "GCP", "Supabase", "PostgreSQL", "Kafka", "TypeScript", "Python", "CI/CD", "Redux", "Serverless"]
    },
    {
        company: "Sony Music",
        role: "Full Stack Developer (Contract)",
        period: "Feb 2022 - June 2022",
        location: "Remote, Brazil",
        link: "https://sonymusic.com",
        desc: "Delivered full stack solutions focused on application migration using Node, PHP, Nest, Next, and React. Designed automated CI/CD pipelines with Bitbucket and Jenkins to AWS.",
        techs: ["Node.js", "PHP", "Nest.js", "Next.js", "React", "AWS", "MongoDB", "Redis", "TypeScript", "Laravel", "CodeIgniter", "Java", "Redux", "Express"]
    },
    {
        company: "DrMarket",
        role: "Full Stack Developer & Team Lead",
        period: "Oct 2020 - Jan 2022",
        location: "Remote, Brazil",
        link: "#",
        desc: "Led agile sprints, architected AWS infrastructure, delivered a high-scalable countrywide ecommerce in a complex medical sector.",
        techs: ["PHP", "CodeIgniter", "MySQL", "Node.js", "AWS", "TypeScript", "Vue.js", "Pinia", "Nuxt", "Docker", "Redux"]
    },
    {
        company: "Notion",
        role: "Team Lead & Full Stack Developer",
        period: "Feb 2019 - Oct 2020",
        location: "Rio de Janeiro, Brazil",
        link: "#",
        desc: "Technical leadership for clients, translating business needs into scalable solutions. Designed robust pipelines across AWS and Azure. Delivered customized WordPress ecosystems.",
        techs: ["PHP", "CodeIgniter", "MySQL", "Node.js", "Java", "AWS", "Azure", "TypeScript", "Angular", "WordPress", "Docker"]
    },
    {
        company: "Fireball Multimídia",
        role: "Full Stack Developer",
        period: "Mar 2017 - Feb 2019",
        location: "Rio de Janeiro, Brazil",
        link: "#",
        desc: "Built tailored e-commerce platforms, developed backend systems, administered Linux VPS, managed Azure/AWS services, and developed PWAs/mobile apps.",
        techs: ["PHP", "JavaScript", "CodeIgniter", "MySQL", "PostgreSQL", "Node.js", "Java", "AWS", "Azure", "Angular", "WordPress", "Docker", "Linux"]
    },
    {
        company: "Agente Resolve",
        role: "Independent Full Stack Developer",
        period: "June 2016 - Mar 2017",
        location: "Remote",
        link: "#",
        desc: "Delivered custom e-commerce solutions and cross-platform desktop applications using Electron.",
        techs: ["PHP", "JavaScript", "CodeIgniter", "MySQL", "Node.js", "WordPress", "Angular", "React", "Docker"]
    },
    {
        company: "TMX Gráfica",
        role: "Full Programmer & Team Leader",
        period: "Oct 2009 - June 2016",
        location: "Remote",
        link: "#",
        desc: "Managed and mentored development team for 5 years. Architected countrywide e-commerce platform and developed advanced PDF verification system.",
        techs: ["PHP", "JavaScript", "CodeIgniter", "MySQL", "AWS", "Docker"]
    }
];

// Collect all techs
experiences.forEach(exp => {
    exp.techs.forEach(t => allTechs.add(t));
});

// Standardize tech names for consistency
const techAliases = {
    "Next": "Next.js",
    "Vue": "Vue.js",
    "Vuejs": "Vue.js",
    "Angular.js": "Angular",
    "React.js": "React",
    "FastApi": "FastAPI",
    "Nest": "Nest.js"
};

const normalizedTechs = Array.from(allTechs).map(t => techAliases[t] || t).sort();

// Render Tech Cloud
const techCloud = document.getElementById('tech-cloud');
normalizedTechs.forEach(tech => {
    const span = document.createElement('span');
    span.className = 'tag inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium transition-all hover:border-primary/50';
    span.textContent = tech;
    span.dataset.tech = tech;
    span.onclick = () => toggleHighlight(tech);
    techCloud.appendChild(span);
});

// Render Timeline
const timelineContainer = document.getElementById('timeline-container');

experiences.forEach((exp, index) => {
    const isLeft = index % 2 === 0;
    
    const cardHtml = `
        <div class="relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} group">
            <!-- Center Dot -->
            <div class="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10 mt-6 md:mt-8 shadow-[0_0_0_4px_hsla(var(--background))]"></div>
            
            <!-- Content -->
            <div class="pl-16 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}">
                <div class="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300">
                    <div class="flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} mb-2">
                        <div class="flex items-center gap-2 mb-1 ${isLeft ? 'md:flex-row-reverse' : ''}">
                            <div class="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center overflow-hidden shadow-sm">
                                <span class="text-[10px] font-bold text-muted-foreground">LOGO</span>
                            </div>
                            <h4 class="text-lg font-bold leading-none">${exp.role}</h4>
                        </div>
                        <a href="${exp.link}" target="_blank" class="text-sm font-medium text-primary hover:underline ${isLeft ? 'md:text-right' : ''}">${exp.company}</a>
                    </div>
                    
                    <div class="flex items-center gap-4 text-xs text-muted-foreground mb-3 ${isLeft ? 'md:justify-end' : 'md:justify-start'}">
                        <span class="flex items-center"><svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>${exp.period}</span>
                        <span class="flex items-center"><svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>${exp.location}</span>
                    </div>
                    
                    <p class="text-sm text-muted-foreground mb-4 leading-relaxed ${isLeft ? 'md:text-right' : ''}">${exp.desc}</p>
                    
                    <div class="flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}">
                        ${exp.techs.map(t => {
                            const normalized = techAliases[t] || t;
                            return `<span class="tag inline-flex items-center rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground transition-all hover:bg-secondary" data-tech="${normalized}">${normalized}</span>`;
                        }).join('')}
                    </div>
                </div>
            </div>
            
            <!-- Empty side for desktop -->
            <div class="hidden md:block md:w-1/2"></div>
        </div>
    `;
    timelineContainer.insertAdjacentHTML('beforeend', cardHtml);
});

// Interaction Logic
let activeHighlight = null;

function toggleHighlight(techName) {
    const allTags = document.querySelectorAll('.tag');
    
    if (activeHighlight === techName) {
        // Reset
        allTags.forEach(t => {
            t.classList.remove('highlighted', 'dimmed');
        });
        activeHighlight = null;
    } else {
        // Highlight specific, dim others
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

// Theme Toggle
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

// Initialize theme
if (localStorage.getItem('theme') === 'light') {
    html.classList.remove('dark');
} else {
    html.classList.add('dark');
}
updateThemeIcons();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

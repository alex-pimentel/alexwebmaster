// Auto-generated at build time. Do not edit.
import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    "company": "Eletromidia",
    "role": "Senior Full Stack Developer",
    "period": "July 2022 - Present",
    "location": "Remote, Brazil",
    "link": "https://eletromidia.com.br",
    "desc": "Architected scalable cloud solutions on GCP, implemented IaC (Terraform), led AI-driven content platform contributing to 10x sales growth, reduced costs by 45%, and led Vue.js adoption roadmap.",
    "techs": [
      "React",
      "Node.js",
      "MongoDB",
      "Electron",
      "Vue.js",
      "GCP",
      "Terraform",
      "CI/CD",
      "PHP",
      "Laravel",
      "Python",
      "Kafka",
      "Redis",
      "TypeScript",
      "Next.js",
      "Angular",
      "Clean Code",
      "Docker",
      "Kubernetes",
      "Datadog",
      "Grafana",
      "Astro",
      "Tailwind",
      "Nuxt",
      "Pinia",
      "Redux",
      "Express",
      "BigQuery",
      "Linux",
      "Symfony",
      "Memcached",
      "Tauri",
      "New Relic",
      "Vite",
      "Microservices",
      "Event-Driven"
    ],
    "projects": [
      {
        "id": "cicd-automation-standardization",
        "title": "CI/CD Automation & Standardization",
        "description": "Led the CI/CD automation initiative by convincing the DevOps team to adopt templates and standardized pipelines using GitHub Workflows and Terraform to deploy to GCP. Transformed the deployment process from 10 days to under 1 hour for new projects by implementing reusable workflows that enforced high-quality standards including unit tests, end-to-end tests, static analysis, dependency checking, and comprehensive security scanning.",
        "image": "cicd-automation-standardization.png",
        "prompt": "Modern CI/CD pipeline visualization, GitHub Actions workflow diagram with automated stages for unit tests, end-to-end tests, static analysis, dependency checking, Trivy security scanning, Docker image scanning, vulnerability scanning, Terraform deployment to GCP, clean DevOps infrastructure dashboard, blue-green deployment scheme, glowing connections between stages, futuristic datacenter background, 4k",
        "challenges": [
          "Convincing experienced DevOps engineers to abandon ad-hoc manual processes in favor of standardized templates",
          "Heterogeneous tech stack across 20+ projects — each with its own build, test, and deployment idiosyncrasies",
          "Security team was not involved early, requiring retroactive compliance validation for Trivy and vulnerability scans",
          "Resistance from developers who feared losing autonomy over pipeline configuration",
          "Lack of monitoring for pipeline health — no visibility into failure rates, duration trends, or flaky tests"
        ],
        "solutions": [
          "Presented a phased adoption plan starting with 3 pilot projects to demonstrate ROI before company-wide rollout",
          "Designed GitHub reusable workflows with parameterized inputs, allowing project-level customization within a standardized scaffold",
          "Integrated Trivy for filesystem scan, Docker image scan, and vulnerability scanning as mandatory gates in every pipeline",
          "Added dependency auditing (npm audit, pip-audit) and static analysis (SonarQube, ESLint) as parallel pre-merge checks",
          "Built a centralized Terraform module registry on GCP with versioned infrastructure components shared across all projects"
        ],
        "tradeoffs": [
          {
            "title": "GitHub Actions vs. Cloud Build",
            "body": "We chose GitHub Actions as the orchestrator for tighter developer workflow integration and community marketplace, despite Cloud Build offering deeper GCP-native integration"
          },
          {
            "title": "Reusable workflows vs. Custom pipelines",
            "body": "Standardization reduced pipeline maintenance by 70% but required a strict upgrade process when templates changed, causing short-term migration friction"
          },
          {
            "title": "Security gates vs. Developer velocity",
            "body": "Mandatory Trivy and dependency scans added 8-12 minutes per pipeline run; we mitigated by caching scan results and allowing bypass with security team approval"
          }
        ],
        "results": [
          "Reduced new project deployment setup from 10 days to under 1 hour using standardized templates",
          "Deployment frequency increased from biweekly to multiple times per day across 20+ projects",
          "Zero critical vulnerabilities in production since CI/CD security gates were enforced",
          "70% reduction in pipeline maintenance overhead through reusable workflow centralization",
          "100% of projects adopted the standardized pipeline within 6 months",
          "Achieved SOC 2 compliance readiness for CI/CD processes without additional audit effort"
        ],
        "period": "January 2024 - Present",
        "duration": "Ongoing with progressive rollouts"
      },
      {
        "id": "ai-content-creation-platform",
        "title": "AI Content Creation Platform",
        "description": "AI-powered platform for large-scale automated advertising content creation. It used LLM pipelines (OpenAI, Anthropic, Gemini) orchestrated with LangGraph to generate scripts, storyboards, and media assets for OOH (Out-of-Home) advertising campaigns. The platform allowed creators and advertisers to generate complete campaigns in minutes, reducing production time from weeks to hours.",
        "image": "ai-content-creation-platform.png",
        "prompt": "Futuristic dashboard of an AI content creation platform, modern interface with dark and blue tones, showing script generation panels, OOH campaign previews on urban digital billboards, real-time performance charts, neural network elements in the background, sophisticated UI/UX design, subtle neon lighting, 4k",
        "challenges": [
          "Integrating multiple LLM providers (OpenAI, Anthropic, Gemini) with automatic fallback and output consistency",
          "Ensuring acceptable latency for generating complete campaigns across multiple processing stages",
          "Designing a persistent memory and context system to maintain coherence across different assets generated for the same campaign",
          "Synchronizing complex state between React/Next.js frontend and the event-driven backend",
          "Scaling the system for hundreds of concurrent users generating content simultaneously"
        ],
        "solutions": [
          "Implemented agent orchestration with LangGraph, where each creation stage (briefing, script, storyboard, review) was a graph node with specialized agents",
          "Used Kafka queues to decouple heavy asset generation (images, videos) from the main response flow",
          "Adopted Cloud Run and Cloud Functions on GCP for asynchronous processing, auto-scaling on demand",
          "Built an intelligent cache system with Redis for partial LLM results, reducing costs and latency by 40%",
          "Applied RAG with vector database (Supabase/pgvector) to retrieve past briefings and successful campaigns as context"
        ],
        "tradeoffs": [
          {
            "title": "Cost vs. Quality",
            "body": "Cheaper models (Gemini Flash, GPT-4o-mini) reduced costs but required more revision iterations; premium models (GPT-4, Claude 3.5) delivered superior quality with higher latency"
          },
          {
            "title": "Real-time vs. Batch processing",
            "body": "We chose asynchronous processing with WebSockets for progressive feedback instead of blocking the user until full completion"
          },
          {
            "title": "Flexibility vs. Consistency",
            "body": "More complex graphs allowed greater creativity but made maintenance harder and increased error rates; we simplified the core graph and created extension plugins"
          }
        ],
        "results": [
          "Directly contributed to a 10x sales growth for the company over two consecutive years",
          "Reduced campaign creation time from 2 weeks to 2 hours",
          "45% reduction in operational and infrastructure costs",
          "99.9% uptime during seasonal traffic peaks",
          "Platform adopted by over 500 active advertisers"
        ],
        "period": "July 2022 - Present",
        "duration": "Ongoing project with incremental deliveries"
      },
      {
        "id": "vuejs-adoption-roadmap",
        "title": "Vue.js Adoption Roadmap",
        "description": "A 9-month strategic plan to adopt Vue.js as the company’s primary frontend framework, gradually replacing legacy jQuery and AngularJS applications. This included creating a componentized design system in Vue 3 with Composition API, migrating critical modules, training the team, and establishing code standards, testing, and review practices.",
        "image": "vuejs-adoption-roadmap.png",
        "prompt": "Visual technology adoption roadmap, 9-month timeline with colorful milestones representing Vue.js, Pinia, Nuxt, componentized design system, development team in pair programming session, clean code on monitors, chart showing evolution of performance and quality metrics, modern tech-corporate style, green and blue tones",
        "challenges": [
          "Team of 12 frontend developers with varying experience levels — some with decades of jQuery, others fresh graduates",
          "Critical AngularJS applications that could not stop during migration — no full rewrite window",
          "Lack of a unified design system — each application had its own visual and behavioral implementation",
          "Natural resistance to change — developers comfortable with old technologies were wary of the new framework",
          "Need to maintain feature delivery speed during the learning and migration period"
        ],
        "solutions": [
          "Structured the roadmap into 4 phases: (1) Foundations and Design System, (2) Pilot with low-risk project, (3) Migration of critical applications, (4) Standardization and legacy decommissioning",
          "Created a design system in Vue 3 with Pinia for global component state, documented in Storybook",
          "Implemented a mentorship program with weekly pair programming sessions and coding dojos",
          "Mandated automated testing (vitest, cypress) as a requirement from the first PR in the new stack",
          "Adopted Nuxt 3 for SSR and better SEO in public-facing applications"
        ],
        "tradeoffs": [
          {
            "title": "Vue 3 Options vs. Composition API",
            "body": "We chose Composition API from the start — steeper learning curve but more scalable for complex components and logic reuse"
          },
          {
            "title": "Pinia vs. Vuex",
            "body": "We chose Pinia as the official Vue 3 recommendation, with better TypeScript integration and simpler API, despite a smaller plugin ecosystem"
          },
          {
            "title": "Monorepo vs. Multiple repositories",
            "body": "We chose a monorepo (Turborepo) to share the design system and common libraries, accepting slower builds in exchange for consistency"
          }
        ],
        "results": [
          "33% increase in frontend feature delivery speed",
          "20% reduction in visual regressions and production bugs",
          "92% test coverage on new components vs. 15% on legacy code",
          "Zero critical incidents during the migration period",
          "Frontend team unified under a single stack, eliminating knowledge silos",
          "Design system adopted by 3 squads, with over 70% component reuse"
        ],
        "period": "March 2024 - November 2024",
        "duration": "9 months"
      },
      {
        "id": "legacy-modernization-gcp",
        "title": "Legacy Systems Modernization to GCP",
        "description": "Migration and modernization of legacy monolithic systems to an event-driven cloud architecture on GCP. The project involved a complete restructuring of OOH media delivery platforms, replacing on-premise infrastructure with Google Cloud managed services, resulting in greater resilience, scalability, and significant operational cost reduction.",
        "image": "legacy-modernization-gcp.png",
        "prompt": "Complex cloud architecture on Google Cloud Platform, modern infrastructure diagram with Cloud Run, Pub/Sub, Cloud Functions, BigQuery, Terraform, technology-blue design, luminous connections between services, visual representation of legacy to cloud-native migration, subtle cyberpunk style, 4k",
        "challenges": [
          "15+ year old legacy monolithic system with tight coupling and accumulated technical debt",
          "Zero-downtime migration — 24/7 operation with real-time media delivery",
          "Distributed team with limited cloud-native and IaC knowledge",
          "Deep integrations with third-party systems (media suppliers, data partners) lacking proper documentation",
          "Sensitive advertiser data requiring LGPD compliance during and after migration"
        ],
        "solutions": [
          "Split the migration into 6 phases, each corresponding to a business domain (delivery, billing, reporting, authentication, catalog, integrations)",
          "Adopted strangler pattern — features gradually migrated with intelligent routing between legacy and new systems",
          "Implemented IaC with Terraform for complete infrastructure provisioning, versioned and reviewed via GitOps",
          "Standardized CI/CD with Cloud Build and GitHub Actions, reducing deployment friction by 80%",
          "Designed comprehensive monitoring with Datadog and Grafana for full observability during and after migration"
        ],
        "tradeoffs": [
          {
            "title": "Big Bang vs. Gradual Migration",
            "body": "We chose gradual migration (strangler) — safer but with a prolonged period of maintaining two parallel systems"
          },
          {
            "title": "Re-architecture vs. Lift-and-shift",
            "body": "We chose to re-architect critical components for event-driven, accepting higher initial investment in exchange for future scalability"
          },
          {
            "title": "Dual-run cost",
            "body": "Running legacy and new infrastructure simultaneously for 8 months increased temporary costs by 35%"
          }
        ],
        "results": [
          "99.9% uptime guaranteed during traffic peaks (vs. 95% on legacy)",
          "45% reduction in hardware and datacenter operation costs",
          "80% less deployment friction — from weekly manual deploys to multiple automated deploys per day",
          "60% faster incident response time thanks to intelligent alerts and real-time dashboards",
          "Infrastructure team reduced from 6 to 2 people, reallocated to innovation"
        ],
        "period": "January 2023 - December 2023",
        "duration": "12 months (6 migration phases)"
      }
    ],
    "folder": "eletromidia"
  },
  {
    "company": "Masterminds.com.ai",
    "role": "AI Platform Software Engineer (Contract)",
    "period": "June 2025 - Jan 2026",
    "location": "Remote, Brazil",
    "link": "#",
    "desc": "Developed AI collaboration platform with multi-agent system architecture using LangGraph and RAG. Orchestrated multi-model LLMs (OpenAI, Anthropic, Gemini) and optimized PostgreSQL RLS.",
    "techs": [
      "LangGraph",
      "LangChain",
      "RAG",
      "LLM",
      "Next.js",
      "React",
      "Node.js",
      "GCP",
      "Supabase",
      "PostgreSQL",
      "Kafka",
      "TypeScript",
      "Python",
      "CI/CD",
      "Redux",
      "Serverless"
    ],
    "projects": [
      {
        "id": "multi-agent-collaboration-platform",
        "title": "Multi-Agent Collaboration Platform",
        "description": "Innovative AI-human collaboration platform designed to enable seamless interactions between multiple specialized agents in an orchestrated ecosystem. The platform allowed autonomous agents to collaborate, reason, and execute complex tasks independently, with optional human supervision. Each agent specialized in a domain (research, analysis, writing, code, data), and users could create custom agent teams to solve specific problems.",
        "image": "multi-agent-collaboration-platform.png",
        "prompt": "Multi-agent collaboration platform with dark futuristic interface, multiple AI agents represented as colorful luminous spheres connected by data lines, humans interacting via chat with agent avatars, real-time reasoning graphs, neural graph topology in the background, elegant cyberpunk design, sophisticated UI with purple and cyan tones, 4k",
        "challenges": [
          "Designing an agent orchestration system that supported bidirectional communication between multiple parallel agents",
          "Implementing persistent long-term memory so agents maintained context across sessions and tasks",
          "Managing long-running task execution (hours) without blocking the user interface",
          "Synchronizing complex state between the Next.js/React frontend and the agent backend in real-time",
          "Ensuring data security and isolation between different organizations using the platform (multi-tenancy)",
          "Integrating multiple LLM providers (OpenAI, Anthropic, Gemini) with intelligent task-based routing"
        ],
        "solutions": [
          "Architected the backend with Node.js and LangGraph, building an agent graph where each node represented a specialized agent and edges defined communication protocols",
          "Implemented RAG (Retrieval-Augmented Generation) with vector database (Supabase/pgvector) for long-term memory and persistent context",
          "Used Cloud Run and Cloud Functions (GCP) for asynchronous processing, allowing long tasks to run without UI impact",
          "Adopted PostgreSQL Row Level Security (RLS) to isolate data between organizations on the same database instance",
          "Developed a model orchestrator that routed requests to the most suitable LLM based on task type, cost, and latency",
          "Implemented WebSockets and Server-Sent Events for real-time streaming of agent responses"
        ],
        "tradeoffs": [
          {
            "title": "Synchronous vs. Asynchronous Agents",
            "body": "We chose asynchronous architecture with queues — greater implementation complexity but better user experience without waiting"
          },
          {
            "title": "Shared vs. Isolated Memory",
            "body": "We chose isolated memory per agent with periodic summarization to global context — better performance but some loss of peripheral context"
          },
          {
            "title": "Single model vs. Multi-model",
            "body": "We chose multi-model with routing — higher operational cost but better quality on specialized tasks"
          }
        ],
        "results": [
          "Platform enabled reduced teams (2-3 people) to execute work that previously required 10+ people",
          "70% reduction in research and analysis time for decision-making",
          "99.5% availability for the agent ecosystem",
          "Capacity to execute 500+ simultaneous agent tasks",
          "Complete data isolation between organizations without separate infrastructure overhead"
        ],
        "period": "June 2025 - January 2026",
        "duration": "8 months"
      },
      {
        "id": "agent-memory-rag-system",
        "title": "Agent Memory & RAG System",
        "description": "Persistent memory and RAG (Retrieval-Augmented Generation) system for the multi-agent platform. This subsystem allowed agents to maintain coherent context across sessions, retrieve relevant information from past interactions, and apply institutional knowledge to decisions. The system automatically indexed all interactions, generated embeddings, and provided semantic search with per-agent configurable relevance.",
        "image": "agent-memory-rag-system.png",
        "prompt": "Vector memory system with visual representation of embeddings in three-dimensional space, colorful luminous dots representing agent memories, semantic search lines connecting questions to relevant answers, vector database architecture with PostgreSQL, cosine similarity graphs, tech-futuristic design with green and dark blue tones, 4k",
        "challenges": [
          "Indexing thousands of daily agent interactions without query performance degradation",
          "Balancing relevance vs. data freshness — old memories could still be relevant for certain contexts",
          "Ensuring sensitive information was automatically filtered from search results by agent/organization",
          "Dealing with LLM context limits — summarizing memories without losing critical information",
          "Optimizing embedding costs for large text volumes"
        ],
        "solutions": [
          "Used Supabase (PostgreSQL + pgvector) as the vector database, leveraging IVFFlat indexes for efficient high-dimensional search",
          "Implemented hierarchical summarization — memories were compacted at different granularity levels (session, day, week) for different use cases",
          "Applied PostgreSQL RLS to isolate memories by organization, ensuring agents from one client never saw another’s data",
          "Created a sliding window system that prioritized memories by combined temporal and semantic relevance",
          "Optimized embeddings with batching and Redis caching, reducing embedding API calls by 60%"
        ],
        "tradeoffs": [
          {
            "title": "Precision vs. Recall",
            "body": "We configured higher similarity thresholds (0.85) to prioritize precision in critical tasks, accepting fewer query results"
          },
          {
            "title": "Storage vs. Performance",
            "body": "We decided to keep embeddings in memory (Redis) for the top-1000 most recent contexts, with disk fallback — a trade-off between speed and RAM cost"
          },
          {
            "title": "Automatic vs. Manual summarization",
            "body": "Automatic summarization was more scalable but occasionally missed nuances; we offered human review for critical contexts"
          }
        ],
        "results": [
          "95% precision in retrieving relevant context for agent decisions",
          "Semantic search latency under 50ms for typical queries",
          "60% reduction in embedding API calls with intelligent caching",
          "Capacity to store and query 10M+ vectors without significant degradation",
          "Agents maintained coherent context for sessions up to 7 consecutive days"
        ],
        "period": "July 2025 - October 2025",
        "duration": "4 months"
      }
    ],
    "folder": "masterminds"
  },
  {
    "company": "Sony Music",
    "role": "Full Stack Developer (Contract)",
    "period": "Feb 2022 - June 2022",
    "location": "Remote, Brazil",
    "link": "https://sonymusic.com",
    "desc": "Delivered full stack solutions focused on application migration using Node, PHP, Nest, Next, and React. Designed automated CI/CD pipelines with Bitbucket and Jenkins to AWS.",
    "techs": [
      "Node.js",
      "PHP",
      "Nest.js",
      "Next.js",
      "React",
      "AWS",
      "MongoDB",
      "Redis",
      "TypeScript",
      "Laravel",
      "CodeIgniter",
      "Java",
      "Redux",
      "Express"
    ],
    "projects": [
      {
        "id": "application-migration-aws",
        "title": "Application Migration to AWS",
        "description": "Migration and modernization of legacy applications to AWS at Sony Music. The project involved moving digital distribution and music catalog systems to the cloud, using Node.js, PHP with Laravel, and Nest.js on the backend, with frontend interfaces in Next.js and React. The migration included both lift-and-shift of stable applications and re-architecture of systems that weren’t scaling properly.",
        "image": "application-migration-aws.png",
        "prompt": "Cloud architecture on AWS for the music industry, diagram with EC2, RDS, S3, CloudFront, Lambda, musical note and sound wave design system, data flowing between services, digital distribution dashboard, music catalog in the cloud, modern corporate style with orange and purple tones (Sony Music colors), 4k",
        "challenges": [
          "Tight 4-month deadline for complete migration of 3 critical systems",
          "Complex dependencies between systems — some undocumented and discovered during the process",
          "Music catalog data with strong consistency requirements and low latency needs",
          "Sony Music team with manual deployment processes and little cloud familiarity",
          "Need to maintain integrations with external partners (labels, distributors) during migration"
        ],
        "solutions": [
          "Designed a wave-based migration strategy — less critical systems first to validate the process",
          "Adopted automated CI/CD with Bitbucket Pipelines and Jenkins for consistent, auditable deployments",
          "Used Nest.js to re-architect monolithic APIs into modular microservices",
          "Implemented Redis caching and query optimization to ensure performance even with migrated data",
          "Created detailed runbooks and knowledge transfer sessions for the internal team"
        ],
        "tradeoffs": [
          {
            "title": "Lift-and-shift vs. Re-architecture",
            "body": "We chose lift-and-shift for stable systems and selective re-architecture for those that would benefit most from cloud-native design"
          },
          {
            "title": "Monorepo vs. Multiple repositories",
            "body": "We used a monorepo for better coordination during migration, with plans for future separation"
          },
          {
            "title": "Batch vs. Streaming migration",
            "body": "We chose nightly batch migration for historical data with real-time replication for new data — more complex but zero downtime"
          }
        ],
        "results": [
          "All applications migrated within the 4-month deadline with no critical incidents",
          "50% reduction in deployment time — from 2-hour manual deploys to 10-minute automated ones",
          "30% improvement in music catalog query performance",
          "Internal team trained to operate the new infrastructure autonomously",
          "Zero downtime during the entire migration period"
        ],
        "period": "February 2022 - June 2022",
        "duration": "5 months"
      },
      {
        "id": "cicd-pipeline-automation",
        "title": "CI/CD Pipeline Automation",
        "description": "Complete automation of CI/CD pipelines for Sony Music, unifying build, test, and deployment processes for applications migrated to AWS. The project replaced manual processes and scattered scripts with a standardized pipeline using Bitbucket Pipelines and Jenkins, integrating automated testing, code quality analysis, and progressive deployments with automatic rollback.",
        "image": "cicd-pipeline-automation.png",
        "prompt": "Visual CI/CD pipeline, automated belt with Bitbucket and Jenkins, code flowing through build, test, deploy stages to AWS, test coverage charts, quality indicators, modern flat design with DevOps tool icons, blue and green success tones, luminous arrows and connections, 4k",
        "challenges": [
          "Multiple projects with radically different build configurations (PHP, Node.js, Java)",
          "Manual deployment processes with no standardization — each team deployed differently",
          "Lack of automated tests in most projects — high regression risk",
          "Compliance and audit requirements for deployment processes at a major record label",
          "Teams resistant to giving up their custom processes"
        ],
        "solutions": [
          "Designed a set of reusable pipeline templates in Bitbucket Pipelines, parameterized by project type",
          "Integrated Jenkins as an executor for long-running jobs and deployments requiring manual approval",
          "Implemented mandatory quality gates: lint, unit tests, integration tests, SAST/DAST analysis",
          "Created a blue-green deployment strategy for critical applications, with automatic rollback on failure",
          "Documented deployment runbooks and held workshops with each team for adoption"
        ],
        "tradeoffs": [
          {
            "title": "Bitbucket Pipelines vs. Jenkins",
            "body": "We used both — Bitbucket for fast, simple pipelines; Jenkins for complex workflows requiring specialized agents"
          },
          {
            "title": "Standardization vs. Flexibility",
            "body": "Standardized templates covered 80% of cases; the remaining 20% required custom pipelines reviewed by the platform team"
          },
          {
            "title": "Speed vs. Security",
            "body": "Safer pipelines (with multiple gates) increased total deployment time by 5-10 minutes but drastically reduced production incidents"
          }
        ],
        "results": [
          "80% reduction in deployment friction — from 2-3 hour manual deploys to 10-15 minute automated ones",
          "Zero incidents related to incorrect deployment after implementing blue-green deployments",
          "100% of projects with minimum 60% test coverage (vs. 15% before)",
          "Complete audit trail for all deployments with traceability via tags and automatic release notes",
          "Development team productivity increased by 40% with fast feedback loops"
        ],
        "period": "March 2022 - May 2022",
        "duration": "3 months"
      }
    ],
    "folder": "sony-music"
  },
  {
    "company": "DrMarket",
    "role": "Full Stack Developer & Team Lead",
    "period": "Oct 2020 - Jan 2022",
    "location": "Remote, Brazil",
    "link": "#",
    "desc": "Led agile sprints, architected AWS infrastructure, delivered a high-scalable countrywide ecommerce in a complex medical sector.",
    "techs": [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Node.js",
      "AWS",
      "TypeScript",
      "Vue.js",
      "Pinia",
      "Nuxt",
      "Docker",
      "Redux"
    ],
    "projects": [
      {
        "id": "medical-marketplace",
        "title": "National Medical Marketplace",
        "description": "Large-scale e-commerce platform for the medical sector, connecting manufacturers, distributors, and healthcare professionals across Brazil. The marketplace enabled buying and selling of equipment, supplies, and medications with support for complex regulatory compliance flows, tax document validation, and specialized logistics for sensitive materials. The platform was built with PHP (CodeIgniter) on the legacy backend and Node.js/Vue.js for new modules, running on AWS infrastructure.",
        "image": "medical-marketplace.png",
        "prompt": "B2B medical marketplace, professional dashboard with sales charts, hospital equipment and medication catalog, clean professional interface with navy blue and white tones, map of Brazil showing logistics distribution, health and commerce icons, regulatory compliance dashboard, modern corporate UI/UX design, 4k",
        "challenges": [
          "Medical sector regulatory complexity — ANVISA, electronic invoices, batch tracking, product expiration dates",
          "Scaling nationwide with different tax requirements per state (ICMS, tax substitution)",
          "Integration with multiple distributor legacy systems — some without modern APIs",
          "Search performance on a 500k+ SKU catalog with price variations by distributor",
          "Complex shopping cart sessions requiring multi-step checkout flows"
        ],
        "solutions": [
          "Hybrid architecture: legacy CodeIgniter backend for stable modules, new modules in Node.js + Vue.js with Pinia",
          "Unified catalog system with Redis caching and optimized MySQL full-text search",
          "Tax rules engine configurable by state, integrated with SEFAZ APIs for automatic tax calculation",
          "State-machine order workflows implemented in Node.js, with WebSocket notifications",
          "AWS deployment with Auto Scaling groups for seasonal demand peaks"
        ],
        "tradeoffs": [
          {
            "title": "Monolith vs. Microservices",
            "body": "We started with a modular monolith to accelerate time-to-market, with plans to extract independent domains as the platform grew"
          },
          {
            "title": "CodeIgniter vs. Modern framework",
            "body": "We kept CodeIgniter for stable legacy modules for safety and predictability, while new modules were built in Node.js"
          },
          {
            "title": "Single database vs. Database per domain",
            "body": "We chose a replicated single database with read replicas — sacrificing isolation for the transactional consistency required by the medical domain"
          }
        ],
        "results": [
          "National scalability — platform operating in all Brazilian states",
          "10k+ orders/month processed in the first year of operation",
          "99.5% availability on AWS infrastructure with Auto Scaling",
          "Catalog with 500k+ SKUs and search time under 300ms",
          "Compliance system approved in ANVISA audit",
          "78 NPS among buyers (healthcare professionals)"
        ],
        "period": "October 2020 - January 2022",
        "duration": "16 months"
      }
    ],
    "folder": "drmarket"
  },
  {
    "company": "Notion",
    "role": "Team Lead & Full Stack Developer",
    "period": "Feb 2019 - Oct 2020",
    "location": "Rio de Janeiro, Brazil",
    "link": "#",
    "desc": "Technical leadership for clients, translating business needs into scalable solutions. Designed robust pipelines across AWS and Azure. Delivered customized WordPress ecosystems.",
    "techs": [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Node.js",
      "Java",
      "AWS",
      "Azure",
      "TypeScript",
      "Angular",
      "WordPress",
      "Docker"
    ],
    "projects": [
      {
        "id": "client-solutions-platform",
        "title": "Client Solutions Platform",
        "description": "Served as technical lead and bridge between clients and development teams at Notion, translating complex business needs into scalable solutions. I developed high-performance interfaces with Angular, customized WordPress ecosystems, and backend services with Node.js, Java, and PHP. Managed end-to-end deliveries from technical conception to production deployment, coordinating sprints and ensuring quality through rigorous code reviews.",
        "image": "client-solutions-platform.png",
        "prompt": "Enterprise solutions platform with multiple clients, project management dashboard, icons representing Angular, Node.js, Java, WordPress, AWS and Azure, solution architecture diagrams, team collaborating in sprints, clean corporate design with purple (Notion color) and white tones, modern interface with project cards, 4k",
        "challenges": [
          "Clients with ambiguous business visions requiring constant translation and refinement work",
          "Simultaneous projects on radically different technologies — Angular, WordPress, Node.js, Java — requiring constant context switching",
          "Aggressive deadlines with poorly defined scope — clients expected fast deliveries without clear specifications",
          "Integration with client legacy systems, many without documentation and with inconsistent data schemas",
          "Distributed teams with asynchronous communication — alignment and code review challenges"
        ],
        "solutions": [
          "Established weekly technical refinement sessions with each client, transforming business needs into technical stories with clear acceptance criteria",
          "Created reusable architecture blueprints for common patterns (authentication, payments, notifications) that accelerated new projects",
          "Implemented custom CI/CD pipelines per project on AWS and Azure, automating builds and deployments",
          "Adopted mandatory code reviews with standardized checklists, reducing post-release defects",
          "Documented Architecture Decision Records (ADRs) for each project, creating institutional memory"
        ],
        "tradeoffs": [
          {
            "title": "Speed vs. Documentation",
            "body": "Clients prioritized speed; the balance was to document decisions (ADRs) but not detailed specifications — lean and pragmatic documentation"
          },
          {
            "title": "Custom WordPress vs. Headless",
            "body": "For projects requiring easy client editing, traditional WordPress; for performance and flexibility, headless WordPress with Angular frontend"
          },
          {
            "title": "AWS vs. Azure",
            "body": "Choice guided by the client’s existing ecosystem and team expertise, with a strategy to avoid vendor lock-in using Terraform"
          }
        ],
        "results": [
          "40% reduction in post-release defects through systematic code reviews",
          "Consistent on-time delivery for 90% of projects under my leadership",
          "Client satisfaction above 85% (NPS) — multiple clients returned for new projects",
          "Architecture blueprints reused across 6+ projects, reducing setup time by 60%",
          "Development team more aligned and productive with well-planned sprints and actionable retrospectives"
        ],
        "period": "February 2019 - October 2020",
        "duration": "21 months"
      }
    ],
    "folder": "notion"
  },
  {
    "company": "Fireball Multimídia",
    "role": "Full Stack Developer",
    "period": "Mar 2017 - Feb 2019",
    "location": "Rio de Janeiro, Brazil",
    "link": "#",
    "desc": "Built tailored e-commerce platforms, developed backend systems, administered Linux VPS, managed Azure/AWS services, and developed PWAs/mobile apps.",
    "techs": [
      "PHP",
      "JavaScript",
      "CodeIgniter",
      "MySQL",
      "PostgreSQL",
      "Node.js",
      "Java",
      "AWS",
      "Azure",
      "Angular",
      "WordPress",
      "Docker",
      "Linux"
    ],
    "projects": [
      {
        "id": "ecommerce-platforms",
        "title": "Custom E-commerce Platforms",
        "description": "Development of tailor-made e-commerce platforms for various segments at Fireball Multimídia. Projects ranged from complete online stores for small and medium sellers to complex order and catalog management systems. Each platform was built with PHP and JavaScript on the backend, Node.js for real-time services, and relational databases (PostgreSQL or MySQL) according to client needs.",
        "image": "ecommerce-platforms.png",
        "prompt": "Multiple online stores in a central dashboard, e-commerce interface with product catalog, shopping cart, payment gateway, responsive design for desktop and mobile, corporate blue and orange tones, PHP, JavaScript, Node.js, PostgreSQL, MySQL icons in background, data centers and network connections, modern flat style, 4k",
        "challenges": [
          "Highly diverse client requirements — each e-commerce had different checkout flows, shipping rules, and payment methods",
          "Tight deadlines with limited budgets — typical of small and medium businesses",
          "Need for integration with multiple payment gateways and shipping carriers",
          "Performance on product pages and search with catalogs of varying sizes",
          "Maintaining multiple platforms running simultaneously with a small team"
        ],
        "solutions": [
          "Developed a modular e-commerce base framework in PHP, where common features (cart, checkout, authentication) were reusable components and differences became plugins",
          "Used Node.js for real-time modules — order notifications, support chat, delivery tracking",
          "Implemented Redis caching for catalog and search pages, improving performance by 3x",
          "Created standardized APIs for integration with gateways (PagSeguro, Mercado Pago) and carriers (Correios, Jadlog)",
          "Adopted automated deployment with bash scripts and AWS Elastic Beanstalk for consistent infrastructure"
        ],
        "tradeoffs": [
          {
            "title": "Custom framework vs. Open Source",
            "body": "I chose a custom framework based on CodeIgniter for full control over architecture and performance, instead of relying on solutions like Magento that were too heavy for the client’s scale"
          },
          {
            "title": "MySQL vs. PostgreSQL",
            "body": "MySQL for clients with fewer complex relational data needs; PostgreSQL for those requiring advanced analytical queries"
          },
          {
            "title": "Delivery speed vs. Customization",
            "body": "The base framework reduced setup time by 50%, but clients with very specific requirements needed customizations that broke standardization"
          }
        ],
        "results": [
          "15+ e-commerce stores delivered in 2 years across different segments",
          "Average delivery time of 6 weeks per project (vs. 12 weeks estimated with traditional solutions)",
          "60% reduction in development cost compared to full-service agency solutions",
          "100% of projects with over 99% uptime on AWS infrastructure",
          "Multiple clients saw online sales growth exceeding 200% in the first year"
        ],
        "period": "March 2017 - February 2019",
        "duration": "24 months (ongoing projects)"
      },
      {
        "id": "pwa-multi-service-app",
        "title": "Multi-Service PWA Application",
        "description": "Development of a multi-service PWA (Progressive Web App) that served as an aggregator platform for multimedia services. The app offered offline-first functionality, push notifications, and integration with native device features (camera, geolocation, motion sensor). The experience was comparable to a native app but with significantly lower development and maintenance costs, running on iOS, Android, and desktop.",
        "image": "pwa-multi-service-app.png",
        "prompt": "Progressive Web App running on multiple devices — iPhone, Android smartphone, tablet and notebook — all displaying the same application, modern interface with material design, icons for service workers, cache, push notifications, geolocation and camera, 5G connectivity and offline represented visually, purple-blue gradient, 4k",
        "challenges": [
          "Features traditionally requiring native apps — camera for scanning, GPS for service location, push notifications",
          "Ensuring consistent offline and online experience — users in areas with unstable connectivity",
          "Performance on entry-level Android devices with limited hardware resources",
          "Cross-browser compatibility for PWA features that weren’t yet standard across all browsers",
          "Bundle size — keeping the app lightweight for fast initial load even on 3G"
        ],
        "solutions": [
          "Implemented offline-first strategy with Service Workers and Cache API, prioritizing critical assets and main navigation data",
          "Used Cache API and IndexedDB for local data storage, with background sync when connection was restored",
          "Built UI with responsive design system that adapted to any screen size, from smartphone to desktop",
          "Optimized bundle with code splitting, lazy loading, and Brotli compression — initial app under 50KB",
          "Used Workbox for robust service worker management, with intelligent caching strategies per resource type"
        ],
        "tradeoffs": [
          {
            "title": "PWA vs. Hybrid App (Cordova/React Native)",
            "body": "PWA offered installation without app store and instant updates; we gave up some deeper native APIs (bluetooth, NFC) that weren’t needed for the scope"
          },
          {
            "title": "Offline-first vs. Always online",
            "body": "We prioritized offline experience for browsing and querying, but server-dependent operations (scheduling, payment) clearly displayed “connection required” status"
          },
          {
            "title": "Performance vs. Features",
            "body": "Some complex visual features were simplified to ensure performance on low-end devices"
          }
        ],
        "results": [
          "40% of users installed the PWA on their home screen (vs. 15% average for native apps)",
          "App size under 50KB on first load (vs. 5-50MB for equivalent native apps)",
          "35% lower bounce rate compared to the traditional mobile site version",
          "Push notifications with 3x more engagement than email marketing",
          "95% smartphone coverage without needing app store distribution"
        ],
        "period": "June 2018 - February 2019",
        "duration": "9 months"
      }
    ],
    "folder": "fireball"
  },
  {
    "company": "Agente Resolve",
    "role": "Independent Full Stack Developer",
    "period": "June 2016 - Mar 2017",
    "location": "Remote",
    "link": "#",
    "desc": "Delivered custom e-commerce solutions and cross-platform desktop applications using Electron.",
    "techs": [
      "PHP",
      "JavaScript",
      "CodeIgniter",
      "MySQL",
      "Node.js",
      "WordPress",
      "Angular",
      "React",
      "Docker"
    ],
    "projects": [
      {
        "id": "custom-ecommerce-solution",
        "title": "Custom E-commerce Solution",
        "description": "Development of tailor-made e-commerce solutions for small and medium entrepreneurs who needed to sell online but couldn’t find platforms that met their specific needs. Projects ranged from simple catalog online stores to complete systems with order management, carrier integration, and multiple payment methods. Each solution was hand-crafted with PHP, MySQL, and CodeIgniter, deployed on managed Linux servers.",
        "image": "custom-ecommerce-solution.png",
        "prompt": "Custom e-commerce dashboard, online store with clean professional design, administration panel with order, customer and product management, PagSeguro and Correios integrations, Linux servers in background, dark blue and green tones, PHP, MySQL, CodeIgniter icons, responsive design on desktop and mobile, 4k",
        "challenges": [
          "Very limited budgets — clients were small business owners with restricted resources",
          "Clients with near-zero technical knowledge — they needed solutions that “just worked”",
          "Short deadlines — many clients needed the store live in weeks to avoid missing seasonal opportunities",
          "Ongoing support and maintenance with limited resources — I was the sole developer",
          "Payment gateways and carriers with poor documentation and fragile integrations"
        ],
        "solutions": [
          "Built a reusable e-commerce base in CodeIgniter with essential modules (products, cart, checkout, orders, customers) customized per client",
          "Implemented a complete admin panel so clients could manage products and orders without technical knowledge",
          "Created standardized integration modules for PagSeguro, Mercado Pago, Correios, and Jadlog — tested and stable",
          "Offered managed hosting packages on Linux servers (Debian/Ubuntu) with monitoring and backups",
          "Developed a template system that allowed visual customization without altering core code"
        ],
        "tradeoffs": [
          {
            "title": "Custom framework vs. Ready platforms",
            "body": "A custom framework offered full flexibility but required more maintenance; for clients with very simple needs, I occasionally recommended WooCommerce or Nuvemshop"
          },
          {
            "title": "Performance vs. Completeness",
            "body": "I kept the core lean with optional modules — clients paid only for what they used, but future expansions sometimes required rework"
          },
          {
            "title": "Delivery speed vs. Customization",
            "body": "The base template accelerated 80% of the project; the remaining 20% customization consumed most of the time and cost"
          }
        ],
        "results": [
          "12+ online stores delivered in 10 months of operation",
          "Average launch time of 3-4 weeks per project",
          "100% of clients with operational store in under 30 days",
          "Zero critical downtime on managed infrastructure",
          "Clients reported an average 150% sales increase in the first 3 months"
        ],
        "period": "June 2016 - March 2017",
        "duration": "10 months"
      },
      {
        "id": "electron-desktop-app",
        "title": "Electron Desktop Application",
        "description": "Development of a cross-platform desktop application using Electron to automate administrative and financial processes for small businesses. The app replaced manual spreadsheets and fragmented systems with a unified desktop interface, running on Windows, macOS, and Linux from a single web codebase. Features included invoice issuance, financial control, customer management, and management reports.",
        "image": "electron-desktop-app.png",
        "prompt": "Modern desktop application running on three operating systems — Windows, macOS and Linux — same interface on all, professional UI/UX design with financial charts, customer tables, KPI dashboard, Electron Framework icon, concept of single codebase for multiple platforms, dark background with blue and purple details, 4k",
        "challenges": [
          "Syncing data between desktop and server — users needed to work offline and sync when connected",
          "Performance on modest machines — clients used computers with 4GB RAM and mechanical hard drives",
          "Application needed to feel native on each OS — keyboard shortcuts, menus, notifications, file system integration",
          "Distributing updates to non-technical users — no app store distribution",
          "Chromium embedded memory consumption — constant challenge to keep the app lightweight"
        ],
        "solutions": [
          "Implemented offline-first sync with local SQLite database and replication to MySQL server when online",
          "Optimized the app with context isolation, sandbox mode, and lazy loading of modules — RAM consumption reduced to ~120MB at rest",
          "Used native Electron APIs for menus, notifications, shortcuts, and file system integration on each OS",
          "Configured auto-updater with electron-updater for silent update distribution",
          "Created build pipeline with electron-builder to generate platform-specific installers (NSIS for Windows, DMG for macOS, AppImage for Linux)"
        ],
        "tradeoffs": [
          {
            "title": "Electron vs. Tauri",
            "body": "At the time, Electron was the mature choice, but resource consumption was higher; today Tauri would be a viable alternative to reduce memory footprint by 80%"
          },
          {
            "title": "Offline-first vs. Always online",
            "body": "Offline-first strategy increased implementation complexity but was essential for users with unstable internet"
          },
          {
            "title": "Desktop app vs. Web app",
            "body": "Desktop was chosen for performance on intensive typing and navigation operations, and for working without internet; a complementary web app was offered for quick mobile consultations"
          }
        ],
        "results": [
          "Administrative productivity increased 3x — processes that took a full day were completed in 2-3 hours",
          "95% reduction in typing and calculation errors compared to the previous spreadsheet-based system",
          "30+ companies using the system simultaneously",
          "Automatic updates for 100% of users without manual intervention",
          "App ran stable on machines with 4GB RAM, maintaining good performance"
        ],
        "period": "August 2016 - February 2017",
        "duration": "7 months"
      }
    ],
    "folder": "agente-resolve"
  },
  {
    "company": "TMX Gráfica",
    "role": "Full Programmer & Team Leader",
    "period": "Oct 2009 - June 2016",
    "location": "Remote",
    "link": "#",
    "desc": "Managed and mentored development team for 5 years. Architected countrywide e-commerce platform and developed advanced PDF verification system.",
    "techs": [
      "PHP",
      "JavaScript",
      "CodeIgniter",
      "MySQL",
      "AWS",
      "Docker"
    ],
    "projects": [
      {
        "id": "national-graphic-ecommerce",
        "title": "National Graphic E-commerce Platform",
        "description": "Architecture and maintenance of a nationwide e-commerce platform for the printing industry, enabling clients across Brazil to order customized print materials (cards, flyers, banners, packaging) through an online configurator. The platform integrated automatic price calculation based on technical specifications (size, paper type, finishing, quantity), an art approval workflow, and production integrated with the factory floor. Developed with CodeIgniter and MySQL, hosted on AWS.",
        "image": "national-graphic-ecommerce.png",
        "prompt": "Graphic e-commerce platform with 3D product configurator, client customizing business card online, real-time design preview, production dashboard with order status, industrial printing machines in background, integration diagram between online store and factory floor, vibrant CMYK colors, modern industrial design, 4k",
        "challenges": [
          "Extremely complex product configurator — each print material type had dozens of variables (format, paper, weight, finishing, quantity) affecting price non-linearly",
          "Real-time price calculation — over 10k possible combinations per product, requiring a performant pricing engine",
          "Production integration — approved orders needed to feed directly into the factory’s production system",
          "File upload and validation — receiving print-ready PDFs and technically validating them (resolution, color, bleed, fonts)",
          "Platform maintenance for 5+ years while the market and technologies evolved",
          "Team leadership — mentoring junior developers and coordinating deliveries"
        ],
        "solutions": [
          "Developed PHP pricing engine with an optimized decision tree and caching of frequent results in MySQL",
          "Implemented automatic PDF validation with PHP libraries to check technical specifications before production submission",
          "Created production system integration API (graphic ERP), reducing manual intervention by 90%",
          "Built complete admin panel for order management, production, and management reports",
          "Led gradual migration to AWS, improving scalability and availability",
          "Established code review and testing processes that maintained quality despite the system’s constant evolution"
        ],
        "tradeoffs": [
          {
            "title": "CodeIgniter (monolith) vs. Modernization",
            "body": "Keeping the monolith was safer for a critical system with 5+ years of operation, but made adopting new technologies harder; modernization was done gradually in peripheral modules"
          },
          {
            "title": "Server-side vs. Client-side pricing",
            "body": "Server-side calculation ensured consistency and security but added latency; we implemented aggressive caching to keep the experience smooth"
          },
          {
            "title": "Customization vs. Standardized product",
            "body": "Offering many personalization options was the competitive differentiator, but exponentially increased configurator complexity and order error rates"
          }
        ],
        "results": [
          "Nationwide operation — clients in all Brazilian states",
          "5k+ orders/month processed at peak",
          "90% reduction in manual intervention between order and production",
          "System operated for 7+ years with continuous evolution without requiring a rebuild",
          "3 junior developers mentored who grew to mid-level positions during the period",
          "Average 20% annual revenue growth for the company following the platform’s evolution"
        ],
        "period": "October 2009 - June 2016",
        "duration": "6 years and 9 months"
      },
      {
        "id": "pdf-verification-system",
        "title": "Advanced PDF Verification System",
        "description": "Automated technical verification system for PDF files in graphic production, developed to ensure all client-submitted files met strict printing technical standards before entering production. The system automatically analyzed image resolution, color profile (CMYK/RGB), bleed, embedded fonts, crop marks, and dozens of other parameters, generating detailed approval or rejection reports. The solution dramatically reduced printing errors and factory rework.",
        "image": "pdf-verification-system.png",
        "prompt": "PDF verification system for graphic printing, technical interface showing file analysis with highlighted problems — low resolution, RGB colors, missing bleed, unembedded fonts — detailed report with approval/rejection status, PDF preview with visual markups, technical UI design with red (error) and green (ok) tones, quality charts, 4k",
        "challenges": [
          "Correctly interpreting the PDF standard — complex specification with multiple variations and versions",
          "Performance when analyzing large files (up to 500MB) with dozens of pages",
          "Verification accuracy — false positives generated unnecessary rework, false negatives caused expensive printing errors",
          "Keeping the system updated with new file formats and printing requirements that evolved over time",
          "Concurrent processing of multiple simultaneous uploads without degradation"
        ],
        "solutions": [
          "Used specialized PHP libraries (FPDI, PDFParser) combined with Ghostscript for deep PDF analysis",
          "Implemented queue-based processing with background jobs for large files, notifying users when analysis was complete",
          "Created configurable rules engine — each product type (card, banner, flyer) had its own set of verification rules",
          "Developed weight and scoring system — critical issues (incorrect color mode) auto-rejected; minor issues (unembedded fonts) generated warnings",
          "Incorporated visual problem preview — the system visually marked on the PDF where each issue was found"
        ],
        "tradeoffs": [
          {
            "title": "Full automation vs. Human review",
            "body": "The automated system handled 90% of cases; the remaining 10% with ambiguous results went to manual review by a specialized operator"
          },
          {
            "title": "Strictness vs. Usability",
            "body": "Very strict rules rejected many files and frustrated clients; more flexible rules increased printing error risk — we found a balance with criticality categories"
          },
          {
            "title": "Speed vs. Accuracy",
            "body": "Complete detailed analysis was slower; we optimized for preliminary feedback in seconds and full analysis in the background"
          }
        ],
        "results": [
          "95% reduction in printing errors from improperly formatted files",
          "Eliminated rework — previously the machine operator would discover the error at print time, wasting paper and ink",
          "Average verification time of 15 seconds for typical files (vs. 5-10 minutes manual)",
          "Processing of 500+ files/day with no bottlenecks",
          "Clients received immediate feedback on issues, reducing the approval cycle by 80%",
          "The system became a competitive differentiator — few print shops in Brazil offered automated technical verification"
        ],
        "period": "January 2011 - June 2016",
        "duration": "5 years and 6 months (continuous evolution)"
      }
    ],
    "folder": "tmx-grafica"
  }
];

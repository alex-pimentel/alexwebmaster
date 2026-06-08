# Alex Gomes Pimentel — Portfolio

Senior Full Stack Engineer & Solutions Architect.

This repository contains the source code of my professional portfolio — a single-page static site showcasing my career trajectory, technical skills, and relevant projects.

## Stack

- HTML5 + CSS3 + JavaScript (vanilla, no frameworks)
- Tailwind CSS via CDN
- Data loaded dynamically via `fetch()` from JSON files
- Docker + Nginx for local development

## Structure

```
├── assets/
│   ├── css/style.css        # Custom styles (dark mode, animations)
│   └── js/
│       ├── data-loader.js   # Loads manifest.json and company data
│       └── main.js          # Renders timeline, tech tags, project modal
├── projects/                # Portfolio data (JSON + images)
│   ├── manifest.json        # Company index
│   ├── generate-images.sh   # Image generation via Gemini API
│   └── <company>/           # Each company has data.json and assets
├── docker/
│   └── local/nginx.conf     # Local server config
├── index.html               # Main page
└── docker-compose.yml       # Local server on port 8080
```

## Local development

```bash
docker compose up -d
# Access http://localhost:8080
```

## License

© 2026 Alex Gomes Pimentel. All rights reserved.

# Alex Gomes Pimentel — Portfolio

[![Lint](https://img.shields.io/github/actions/workflow/status/alex-pimentel/alexwebmaster/lint.yml?branch=main&label=Lint)](https://github.com/alex-pimentel/alexwebmaster/actions/workflows/lint.yml)
[![TypeCheck](https://img.shields.io/github/actions/workflow/status/alex-pimentel/alexwebmaster/typecheck.yml?branch=main&label=TypeCheck&color=3178C6)](https://github.com/alex-pimentel/alexwebmaster/actions/workflows/typecheck.yml)
[![Unit Tests](https://img.shields.io/github/actions/workflow/status/alex-pimentel/alexwebmaster/test-unit.yml?branch=main&label=Unit%20Tests&color=6DB33F)](https://github.com/alex-pimentel/alexwebmaster/actions/workflows/test-unit.yml)
[![E2E Tests](https://img.shields.io/github/actions/workflow/status/alex-pimentel/alexwebmaster/test-e2e.yml?branch=main&label=E2E%20Tests&color=45BA4B)](https://github.com/alex-pimentel/alexwebmaster/actions/workflows/test-e2e.yml)
[![Security Audit](https://img.shields.io/github/actions/workflow/status/alex-pimentel/alexwebmaster/audit.yml?branch=main&label=Security&color=success)](https://github.com/alex-pimentel/alexwebmaster/actions/workflows/audit.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/alex-pimentel/alexwebmaster/codeql.yml?branch=main&label=CodeQL&color=8A2BE2)](https://github.com/alex-pimentel/alexwebmaster/actions/workflows/codeql.yml)
[![Build](https://img.shields.io/github/actions/workflow/status/alex-pimentel/alexwebmaster/build.yml?branch=main&label=Build&color=informational)](https://github.com/alex-pimentel/alexwebmaster/actions/workflows/build.yml)

Senior Full Stack Engineer & Solutions Architect.

This repository contains the source code of my professional portfolio — a statically exported Next.js site showcasing my career trajectory, technical skills, and relevant projects.

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **UI:** React 19 + Tailwind CSS v4 + shadcn/ui
- **Language:** TypeScript (strict mode)
- **Animations:** Framer Motion
- **Testing:** Vitest (unit) + Playwright (E2E)
- **Infrastructure:** Cloudflare Pages static hosting

## Structure

```
├── app/                    # Next.js App Router (components, hooks, pages)
│   ├── components/         # UI components + feature components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities, types, data layer
│   └── __tests__/          # Unit + E2E tests
├── projects/               # Portfolio data (JSON + images per company)
├── public/                 # Static assets, PWA manifest, service worker
└── .github/workflows/      # CI/CD pipelines (8 isolated checks)
```

## Local development

```bash
npm install
npm run dev
# Access http://localhost:3000
```

## Quality gates

Every push and pull request runs **7 independent checks**:

| Check | Description |
|-------|-------------|
| Lint | ESLint via Next.js built-in linting |
| TypeCheck | TypeScript strict mode type checking |
| Unit Tests | Vitest with Testing Library (jsdom) |
| E2E Tests | Playwright (Chromium, Firefox, mobile) |
| Security Audit | npm audit (fail on high/critical) |
| CodeQL | GitHub security + quality queries |
| Build | Next.js static export validation |

## License

© 2026 Alex Gomes Pimentel. All rights reserved.

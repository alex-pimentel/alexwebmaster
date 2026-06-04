# National Medical Marketplace

## Description
Large-scale e-commerce platform for the medical sector, connecting manufacturers, distributors, and healthcare professionals across Brazil. The marketplace enabled buying and selling of equipment, supplies, and medications with support for complex regulatory compliance flows, tax document validation, and specialized logistics for sensitive materials. The platform was built with PHP (CodeIgniter) on the legacy backend and Node.js/Vue.js for new modules, running on AWS infrastructure.

## Image Prompt
"B2B medical marketplace, professional dashboard with sales charts, hospital equipment and medication catalog, clean professional interface with navy blue and white tones, map of Brazil showing logistics distribution, health and commerce icons, regulatory compliance dashboard, modern corporate UI/UX design, 4k"

## Challenges
- Medical sector regulatory complexity — ANVISA, electronic invoices, batch tracking, product expiration dates
- Scaling nationwide with different tax requirements per state (ICMS, tax substitution)
- Integration with multiple distributor legacy systems — some without modern APIs
- Search performance on a 500k+ SKU catalog with price variations by distributor
- Complex shopping cart sessions requiring multi-step checkout flows

## Solutions
- **Hybrid architecture**: legacy CodeIgniter backend for stable modules, new modules in Node.js + Vue.js with Pinia
- **Unified catalog system** with Redis caching and optimized MySQL full-text search
- **Tax rules engine** configurable by state, integrated with SEFAZ APIs for automatic tax calculation
- **State-machine order workflows** implemented in Node.js, with WebSocket notifications
- **AWS deployment** with Auto Scaling groups for seasonal demand peaks

## Trade-offs
- **Monolith vs. Microservices**: We started with a modular monolith to accelerate time-to-market, with plans to extract independent domains as the platform grew
- **CodeIgniter vs. Modern framework**: We kept CodeIgniter for stable legacy modules for safety and predictability, while new modules were built in Node.js
- **Single database vs. Database per domain**: We chose a replicated single database with read replicas — sacrificing isolation for the transactional consistency required by the medical domain

## Results & Gains
- **National scalability** — platform operating in all Brazilian states
- **10k+ orders/month** processed in the first year of operation
- **99.5% availability** on AWS infrastructure with Auto Scaling
- Catalog with **500k+ SKUs** and search time under 300ms
- Compliance system approved in ANVISA audit
- **78 NPS** among buyers (healthcare professionals)

## Timeline
**Period:** October 2020 - January 2022
**Duration:** 16 months

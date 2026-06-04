# Legacy Systems Modernization to GCP

## Description
Migration and modernization of legacy monolithic systems to an event-driven cloud architecture on GCP. The project involved a complete restructuring of OOH media delivery platforms, replacing on-premise infrastructure with Google Cloud managed services, resulting in greater resilience, scalability, and significant operational cost reduction.

## Image Prompt
"Complex cloud architecture on Google Cloud Platform, modern infrastructure diagram with Cloud Run, Pub/Sub, Cloud Functions, BigQuery, Terraform, technology-blue design, luminous connections between services, visual representation of legacy to cloud-native migration, subtle cyberpunk style, 4k"

## Challenges
- 15+ year old legacy monolithic system with tight coupling and accumulated technical debt
- Zero-downtime migration — 24/7 operation with real-time media delivery
- Distributed team with limited cloud-native and IaC knowledge
- Deep integrations with third-party systems (media suppliers, data partners) lacking proper documentation
- Sensitive advertiser data requiring LGPD compliance during and after migration

## Solutions
- Split the migration into **6 phases**, each corresponding to a business domain (delivery, billing, reporting, authentication, catalog, integrations)
- Adopted **strangler pattern** — features gradually migrated with intelligent routing between legacy and new systems
- Implemented **IaC with Terraform** for complete infrastructure provisioning, versioned and reviewed via GitOps
- Standardized **CI/CD with Cloud Build and GitHub Actions**, reducing deployment friction by 80%
- Designed **comprehensive monitoring with Datadog and Grafana** for full observability during and after migration

## Trade-offs
- **Big Bang vs. Gradual Migration**: We chose gradual migration (strangler) — safer but with a prolonged period of maintaining two parallel systems
- **Re-architecture vs. Lift-and-shift**: We chose to re-architect critical components for event-driven, accepting higher initial investment in exchange for future scalability
- **Dual-run cost**: Running legacy and new infrastructure simultaneously for 8 months increased temporary costs by 35%

## Results & Gains
- **99.9% uptime** guaranteed during traffic peaks (vs. 95% on legacy)
- **45% reduction** in hardware and datacenter operation costs
- **80% less deployment friction** — from weekly manual deploys to multiple automated deploys per day
- **60% faster incident response time** thanks to intelligent alerts and real-time dashboards
- Infrastructure team reduced from 6 to 2 people, reallocated to innovation

## Timeline
**Period:** January 2023 - December 2023
**Duration:** 12 months (6 migration phases)

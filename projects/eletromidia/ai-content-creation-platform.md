# AI Content Creation Platform

## Description
AI-powered platform for large-scale automated advertising content creation. It used LLM pipelines (OpenAI, Anthropic, Gemini) orchestrated with LangGraph to generate scripts, storyboards, and media assets for OOH (Out-of-Home) advertising campaigns. The platform allowed creators and advertisers to generate complete campaigns in minutes, reducing production time from weeks to hours.

## Image Prompt
"Futuristic dashboard of an AI content creation platform, modern interface with dark and blue tones, showing script generation panels, OOH campaign previews on urban digital billboards, real-time performance charts, neural network elements in the background, sophisticated UI/UX design, subtle neon lighting, 4k"

## Challenges
- Integrating multiple LLM providers (OpenAI, Anthropic, Gemini) with automatic fallback and output consistency
- Ensuring acceptable latency for generating complete campaigns across multiple processing stages
- Designing a persistent memory and context system to maintain coherence across different assets generated for the same campaign
- Synchronizing complex state between React/Next.js frontend and the event-driven backend
- Scaling the system for hundreds of concurrent users generating content simultaneously

## Solutions
- Implemented agent orchestration with LangGraph, where each creation stage (briefing, script, storyboard, review) was a graph node with specialized agents
- Used Kafka queues to decouple heavy asset generation (images, videos) from the main response flow
- Adopted Cloud Run and Cloud Functions on GCP for asynchronous processing, auto-scaling on demand
- Built an intelligent cache system with Redis for partial LLM results, reducing costs and latency by 40%
- Applied RAG with vector database (Supabase/pgvector) to retrieve past briefings and successful campaigns as context

## Trade-offs
- **Cost vs. Quality**: Cheaper models (Gemini Flash, GPT-4o-mini) reduced costs but required more revision iterations; premium models (GPT-4, Claude 3.5) delivered superior quality with higher latency
- **Real-time vs. Batch processing**: We chose asynchronous processing with WebSockets for progressive feedback instead of blocking the user until full completion
- **Flexibility vs. Consistency**: More complex graphs allowed greater creativity but made maintenance harder and increased error rates; we simplified the core graph and created extension plugins

## Results & Gains
- Directly contributed to a **10x sales growth** for the company over two consecutive years
- Reduced campaign creation time from **2 weeks to 2 hours**
- **45% reduction** in operational and infrastructure costs
- **99.9% uptime** during seasonal traffic peaks
- Platform adopted by over 500 active advertisers

## Timeline
**Period:** July 2022 - Present
**Duration:** Ongoing project with incremental deliveries

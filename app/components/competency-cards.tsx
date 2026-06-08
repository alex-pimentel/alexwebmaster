"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Full Stack Development",
    desc: "React, Next.js, Vue, Nuxt, Angular, Astro, PHP, Laravel, Python, Node.js, Nest.js, TypeScript, Tailwind, MongoDB, PostgreSQL, MySQL, Redis, Kafka. Building scalable, secure web applications.",
    color: "from-blue-500/20 to-blue-600/10 text-blue-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "AI & Data Engineering",
    desc: "LangGraph, LangChain, RAG, LLM Orchestration, Vector Databases (Pinecone, Supabase). Agentic ecosystems and automation.",
    color: "from-purple-500/20 to-purple-600/10 text-purple-500",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud Architecture",
    desc: "GCP, AWS, Azure, Docker, Kubernetes, Terraform, CI/CD, Linux, Grafana, Datadog. Multi-cloud, serverless, and IaC.",
    color: "from-green-500/20 to-green-600/10 text-green-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function CompetencyCards() {
  return (
    <section className="py-20 border-t border-border/50 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
        <motion.h3
          className="text-3xl font-bold tracking-tight mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          Core Competencies
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="p-8 rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                {card.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3">{card.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

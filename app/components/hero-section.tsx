"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const badgeItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30 -z-10" />
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,0 L1000,0 L1000,1000 L0,1000 Z" fill="url(#grid)" />
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          className="space-y-6 max-w-4xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center rounded-full border border-border/50 bg-card/80 backdrop-blur-sm px-4 py-2 text-sm font-medium shadow-lg"
            variants={badgeItem}
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 mr-2.5 animate-pulse" />
            Available for new projects
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-foreground via-foreground to-primary/70 bg-clip-text text-transparent"
            variants={badgeItem}
          >
            Alex Gomes <span className="text-primary">Pimentel</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl text-muted-foreground font-light tracking-wide"
            variants={badgeItem}
          >
            Senior Full Stack Software Engineer <br />& Solutions Architect
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            variants={badgeItem}
          >
            Building agentic AI ecosystems, multi-cloud architectures, and high-scale platforms.
            15+ years of experience in software development, from ideation to global scale.
          </motion.p>

          <motion.p
            className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed mt-4"
            variants={badgeItem}
          >
            Full-stack expertise across <strong>TypeScript</strong>, <strong>React</strong>,{" "}
            <strong>Node.js</strong>, <strong>PHP</strong>, <strong>Python</strong>,{" "}
            <strong>Vue.js</strong>, <strong>Angular</strong>, <strong>GCP</strong>,{" "}
            <strong>AWS</strong>, and <strong>Azure</strong>. Specializing in AI agents with{" "}
            <strong>LangGraph</strong> and event-driven architectures.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-10 text-sm"
            variants={stagger}
          >
            <motion.span
              className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-secondary-foreground font-medium"
              variants={badgeItem}
            >
              🇧🇷 Araruama, Brazil
            </motion.span>
            <motion.a
              href="mailto:contato@alexwebmaster.com.br"
              className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer font-medium hover:shadow-lg hover:scale-105"
              variants={badgeItem}
            >
              ✉️ contato@alexwebmaster.com.br
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/alex-webmaster"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer font-medium hover:shadow-lg hover:scale-105"
              variants={badgeItem}
            >
              🔗 LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/icons";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-border/50 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto text-center">
        <h3 className="text-4xl font-bold tracking-tight mb-6">
          Let&apos;s Build Something Amazing
        </h3>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Interested in collaborating on AI solutions or cloud architecture? Reach out via email
          or LinkedIn.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="mailto:contato@alexwebmaster.com.br"
            className="inline-flex items-center justify-center rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-3 hover:shadow-xl hover:-translate-y-0.5 transition-all gap-2"
          >
            <Mail />
            Send Email
          </a>
          <Button
            variant="outline"
            render={<a href="https://linkedin.com/in/alex-webmaster" target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            className="h-12 px-8 hover:shadow-xl hover:-translate-y-0.5 gap-2"
          >
            <ExternalLink />
            Connect on LinkedIn
          </Button>
          <Button
            variant="outline"
            render={<a href="https://github.com/alex-pimentel" target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            className="h-12 px-8 hover:shadow-xl hover:-translate-y-0.5"
          >
            <GitHubIcon />
            Follow on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}

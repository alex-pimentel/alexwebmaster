import { GitHubIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p className="mb-2 md:mb-0">&copy; 2026 Alex Pimentel. All rights reserved.</p>
        <p className="text-center md:text-right flex items-center gap-3">
          <a
            href="https://github.com/alex-pimentel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
          <span>Designed &amp; Developed with precision.</span>
        </p>
      </div>
    </footer>
  );
}

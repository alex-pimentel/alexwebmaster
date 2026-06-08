import { Code2 } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4 md:px-6">
        <a href="/" className="flex items-center space-x-2 font-bold text-xl tracking-tight">
          <Code2 className="w-6 h-6" />
          <span>alex.dev</span>
        </a>
        <nav className="ml-auto flex items-center gap-4">
          <a
            href="#experience"
            className="text-sm font-medium hover:text-primary transition-colors hidden md:inline-block"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-sm font-medium hover:text-primary transition-colors hidden md:inline-block"
          >
            Tech Stack
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors hidden md:inline-block"
          >
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

"use client"

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo size={40} />
            <div className="font-mono text-sm">
              <p className="text-foreground">aftab@devops</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/aftab-alam-devops"
              aria-label="GitHub"
              className="flex size-9 items-center justify-center rounded-lg glass hover:bg-secondary/60 transition-colors"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/aftab-alam-devops"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-lg glass hover:bg-secondary/60 transition-colors"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href="mailto:uxaftab@gmail.com"
              aria-label="Email"
              className="flex size-9 items-center justify-center rounded-lg glass hover:bg-secondary/60 transition-colors"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 flex size-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30 text-primary hover:bg-primary/20 transition-colors"
            >
              <ArrowUp className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Aftab Alam — DevOps &amp; Cloud Engineer · Delhi, India
          </p>
          <p className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Rocket, Building2, CheckCircle2 } from "lucide-react"

type Exp = {
  role: string
  org: string
  period: string
  location: string
  type: "work" | "freelance" | "education" | "open-source"
  badge: string
  description: string
  highlights: string[]
  stack: string[]
}

const experiences: Exp[] = [
  {
    role: "Junior DevOps & Cloud Engineer",
    org: "UMACO",
    period: "June 2025 — Present",
    location: "Gurugram, India",
    type: "work",
    badge: "Current",
    description: "Architecting and managing cloud infrastructure while building fully automated end-to-end CI/CD pipelines.",
    highlights: [
      "Designed and maintained CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by ~40%.",
      "Provisioned AWS infrastructure (EC2, S3, IAM, VPCs) ensuring high availability and cost optimization.",
      "Containerized microservices using Docker and orchestrated deployments on Kubernetes (K8s).",
      "Implemented Infrastructure as Code (IaC) using Terraform for repeatable deployments.",
      "Monitored system health with AWS CloudWatch and Grafana.",
      "Authored Bash and shell scripts to automate routine operational tasks."
    ],
    stack: ["AWS", "Jenkins", "Docker", "Kubernetes", "Terraform", "Grafana", "Bash"],
  }
]

const typeMeta: Record<Exp["type"], { Icon: typeof Briefcase; tone: string }> = {
  work: { Icon: Briefcase, tone: "text-primary" },
  freelance: { Icon: Rocket, tone: "text-accent" },
  education: { Icon: GraduationCap, tone: "text-primary" },
  "open-source": { Icon: Building2, tone: "text-accent" },
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-3 text-center mb-14">
          <span className="font-mono text-xs text-primary tracking-widest">
            // EXPERIENCE
          </span>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Where I&apos;ve been{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              building
            </span>
          </h2>
          <p className="max-w-2xl text-pretty text-muted-foreground">
            A mix of freelance work, open-source labs, and self-driven training — every line
            shipped to a real server, not just a sandbox.
          </p>
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, i) => {
            const { Icon, tone } = typeMeta[exp.type]
            return (
              <motion.article
                key={exp.role + i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl glass p-6 sm:p-7 hover:border-primary/40 transition-colors"
              >
                {/* gradient hover border */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/30" />
                </div>

                <div className="grid md:grid-cols-[auto_1fr_auto] gap-5 items-start">
                  {/* Icon column */}
                  <div className="relative flex size-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30 shrink-0">
                    <Icon className={`size-5 ${tone}`} />
                    <span className="absolute -inset-1 rounded-xl ring-1 ring-primary/10 animate-pulse-ring" />
                  </div>

                  {/* Main column */}
                  <div className="flex flex-col gap-3 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                        {exp.role}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-accent ring-1 ring-accent/30">
                        <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                        {exp.badge}
                      </span>
                    </div>

                    <p className="font-mono text-xs text-muted-foreground">
                      <span className="text-primary">{exp.org}</span>
                      <span className="mx-2 text-border">·</span>
                      <span>{exp.location}</span>
                    </p>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">
                      {exp.description}
                    </p>

                    <ul className="mt-1 grid gap-2">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm text-foreground/90"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-secondary/60 px-2 py-1 text-[11px] font-mono text-muted-foreground ring-1 ring-border"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Period column */}
                  <div className="md:text-right">
                    <span className="inline-block font-mono text-xs text-primary bg-primary/5 px-3 py-1.5 rounded-md ring-1 ring-primary/20">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

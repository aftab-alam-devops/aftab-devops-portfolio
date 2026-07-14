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
      "Built CI/CD pipelines with Jenkins and GitHub Actions, reducing deployment time by 40% and eliminating all manual deployment steps.",
      "Provisioned AWS infrastructure (EC2, S3, IAM, VPC, Security Groups) for reliable, cost-efficient production environments.",
      "Containerized microservices with Docker and managed Kubernetes clusters for consistent, scalable deployments.",
      "Used Terraform to automate cloud provisioning, making infrastructure fully version-controlled and repeatable.",
      "Set up CloudWatch and Grafana monitoring dashboards for proactive issue detection and faster incident response.",
      "Wrote Bash scripts to automate routine tasks, saving team time and reducing human error in daily operations."
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
        <div className="max-w-2xl mb-14 flex flex-col gap-3">
          <span className="inline-flex items-center gap-3 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            <span className="size-3 rounded-full bg-primary animate-pulse" />
            03 experience
          </span>
          <h2 className="text-balance text-xl sm:text-2xl lg:text-3xl font-semibold text-primary tracking-tight mt-2">
            Where I&apos;ve been{" "}
            <span className="text-accent">
              building
            </span>
          </h2>
          <p className="text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed">
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
                      <h3 className="text-xl sm:text-2xl font-semibold leading-tight">
                        {exp.role}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-accent ring-1 ring-accent/30">
                        <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                        {exp.badge}
                      </span>
                    </div>

                    <p className="font-mono text-sm text-muted-foreground">
                      <span className="text-primary">{exp.org}</span>
                      <span className="mx-2 text-border">·</span>
                      <span>{exp.location}</span>
                    </p>

                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                      {exp.description}
                    </p>

                    <ul className="mt-1 grid gap-2">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-base text-foreground/90"
                        >
                          <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-secondary/60 px-2 py-1 text-xs font-mono text-muted-foreground ring-1 ring-border"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Period column */}
                  <div className="md:text-right">
                    <span className="inline-block font-mono text-sm text-primary bg-primary/5 px-3 py-1.5 rounded-md ring-1 ring-primary/20">
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

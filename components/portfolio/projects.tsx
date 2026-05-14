"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { techIconMap } from "./tech-icons"

/* ---------- Project Preview Visuals (inline SVG mocks) ---------- */

function PipelinePreview() {
  const stages = ["Build", "Test", "Push", "Deploy"]
  return (
    <div className="relative h-full w-full p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span>jenkins / pipeline</span>
        <span className="text-accent">● passed</span>
      </div>
      <div className="flex items-center gap-1">
        {stages.map((s, i) => (
          <div key={s} className="flex items-center flex-1">
            <div className="flex-1 rounded-md bg-card/80 border border-border px-2 py-2 text-center">
              <div className="text-[10px] font-mono text-accent">✓</div>
              <div className="text-[10px] mt-0.5">{s}</div>
            </div>
            {i < stages.length - 1 && (
              <svg className="w-4 h-px shrink-0" viewBox="0 0 16 1">
                <line
                  x1="0"
                  y1="0.5"
                  x2="16"
                  y2="0.5"
                  stroke="currentColor"
                  className="text-accent animate-data-flow"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
      <div className="rounded-md bg-card/80 border border-border p-2 font-mono text-[10px] leading-relaxed text-muted-foreground flex-1 overflow-hidden">
        <p>
          <span className="text-accent">[</span>build<span className="text-accent">]</span>{" "}
          docker build -t app:v2.1 .
        </p>
        <p>
          <span className="text-accent">[</span>push<span className="text-accent">]</span>{" "}
          pushing → registry.aws.amazon.com
        </p>
        <p>
          <span className="text-accent">[</span>deploy<span className="text-accent">]</span>{" "}
          rollout to ec2-prod-east-1 ✓
        </p>
        <p className="text-accent">✓ Deployed in 42s</p>
      </div>
    </div>
  )
}

function K8sMonitoringPreview() {
  const bars = [40, 65, 50, 80, 55, 75, 90, 60, 70, 85, 65, 78]
  return (
    <div className="relative h-full w-full p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span>grafana / k8s-overview</span>
        <span className="text-primary">live</span>
      </div>
      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
        <div className="rounded-md bg-card/80 border border-border p-2">
          <div className="text-muted-foreground">CPU</div>
          <div className="text-primary text-sm font-bold">68%</div>
        </div>
        <div className="rounded-md bg-card/80 border border-border p-2">
          <div className="text-muted-foreground">MEM</div>
          <div className="text-accent text-sm font-bold">4.2GB</div>
        </div>
        <div className="rounded-md bg-card/80 border border-border p-2">
          <div className="text-muted-foreground">PODS</div>
          <div className="text-foreground text-sm font-bold">24/24</div>
        </div>
      </div>
      <div className="flex-1 rounded-md bg-card/80 border border-border p-2 flex items-end gap-1">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            className="flex-1 bg-gradient-to-t from-primary/60 to-accent/80 rounded-sm"
          />
        ))}
      </div>
    </div>
  )
}

function K8sArchPreview() {
  return (
    <div className="relative h-full w-full p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span>cluster / production</span>
        <span className="text-accent">3 nodes</span>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-2">
        {[1, 2, 3].map((n) => (
          <div key={n} className="rounded-md bg-card/80 border border-border p-2 flex flex-col gap-1">
            <div className="text-[9px] font-mono text-muted-foreground">node-{n}</div>
            {[1, 2, 3].map((p) => (
              <div
                key={p}
                className="rounded bg-primary/15 border border-primary/30 px-1.5 py-0.5 text-[9px] font-mono text-primary flex items-center gap-1"
              >
                <span className="size-1 rounded-full bg-accent animate-pulse" />
                pod-{n}-{p}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="rounded-md bg-card/80 border border-border p-2 font-mono text-[10px] text-muted-foreground">
        <span className="text-accent">$</span> kubectl scale --replicas=9 deploy/api
      </div>
    </div>
  )
}

function ScriptsPreview() {
  const lines = [
    "#!/bin/bash",
    "# auto-backup.sh",
    'TS=$(date +%Y%m%d)',
    "tar -czf bk-$TS.tar.gz /var/app",
    "aws s3 cp bk-$TS.tar.gz s3://backups/",
    "echo '✓ backup complete'",
  ]
  return (
    <div className="relative h-full w-full p-4 font-mono text-[10px] leading-relaxed">
      <div className="flex items-center justify-between text-muted-foreground mb-2">
        <span>~/scripts/auto-backup.sh</span>
        <span className="text-accent">executable</span>
      </div>
      <div className="rounded-md bg-card/80 border border-border p-3 space-y-1">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-muted-foreground w-3 text-right">{i + 1}</span>
            <span className={l.startsWith("#") ? "text-muted-foreground" : "text-foreground"}>
              {l}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- Project Data ---------- */

const projects = [
  {
    id: "movies-app",
    title: "Containerized Movie Streaming Application",
    summary:
      "Provisioned and managed a secure Kubernetes cluster on AWS EKS, orchestrating Docker containers with Helm charts for high availability.",
    tech: ["Docker", "Kubernetes", "AWS", "Linux"] as const,
    Preview: K8sMonitoringPreview,
    accent: "primary" as const,
    featured: true,
    links: { live: "https://github.com/aftab-alam-devops/movies-app.git", code: "https://github.com/aftab-alam-devops/movies-app.git" },
  },
  {
    id: "mern-deploy",
    title: "MERN E-Commerce Store Deployment",
    summary:
      "Built an automated CI/CD pipeline with Jenkins and GitHub to continuously deliver a Dockerized web application to AWS EC2.",
    tech: ["Jenkins", "Docker", "AWS", "GitHub", "Linux"] as const,
    Preview: PipelinePreview,
    accent: "accent" as const,
    featured: true,
    links: { live: "https://github.com/aftab-alam-devops/MERN-E-Commerce-Store-Deployment.git", code: "https://github.com/aftab-alam-devops/MERN-E-Commerce-Store-Deployment.git" },
  },
  {
    id: "bank-system",
    title: "Bank Management System",
    summary:
      "Developed a scalable Java-based banking application deployed on AWS EC2, featuring secure transaction processing and a normalized MySQL database.",
    tech: ["AWS"] as const,
    Preview: K8sArchPreview,
    accent: "primary" as const,
    featured: false,
    links: { live: "https://github.com/aftab-alam-devops/Bank-Management-System.git", code: "https://github.com/aftab-alam-devops/Bank-Management-System.git" },
  },
]

/* ---------- Card ---------- */

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const { Preview } = project
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className={`group relative gradient-border overflow-hidden flex flex-col ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Preview pane */}
      <div className="relative aspect-[16/9] border-b border-border/60 bg-gradient-to-br from-secondary/40 to-card overflow-hidden">
        {/* subtle grid in preview */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0">
          <Preview />
        </div>
        {/* corner badge */}
        {project.featured && (
          <span className="absolute top-3 right-3 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-mono text-primary ring-1 ring-primary/30">
            featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div>
          <h3 className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => {
            const Icon = techIconMap[t]
            return (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-md bg-secondary/60 px-2 py-1 text-[11px] font-mono text-muted-foreground ring-1 ring-border"
              >
                <Icon className="size-3 text-primary" />
                {t}
              </span>
            )
          })}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-2">
          <a
            href={project.links.live}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ExternalLink className="size-4" />
            Live Demo
          </a>
          <a
            href={project.links.code}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="size-4" />
            Source
          </a>
          <ArrowUpRight className="size-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-primary mb-3">
              <span className="size-1.5 rounded-full bg-primary" />
              03 // production work
            </span>
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Projects that <span className="text-primary">ship</span>.
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Real deployments — not tutorials. Each project solves an operational problem with
              automation, observability, and infrastructure-as-code.
            </p>
          </div>
          <a
            href="https://github.com/"
            className="inline-flex w-fit items-center gap-2 rounded-lg glass px-4 py-2 text-sm font-medium hover:bg-secondary/60 transition-colors"
          >
            <Github className="size-4" />
            All projects on GitHub
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

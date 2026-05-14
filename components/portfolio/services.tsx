"use client"

import { motion } from "framer-motion"
import { Workflow, PackageOpen, CloudUpload, ServerCog, Globe, Activity } from "lucide-react"

const services = [
  {
    Icon: Workflow,
    title: "CI/CD Pipeline Setup",
    desc: "End-to-end Jenkins or GitHub Actions pipelines — build, test, scan, and deploy with zero manual steps.",
  },
  {
    Icon: PackageOpen,
    title: "Dockerization",
    desc: "Containerize your apps with multi-stage builds, optimized images, and compose-ready orchestration.",
  },
  {
    Icon: CloudUpload,
    title: "AWS Cloud Deployment",
    desc: "Provision and deploy production workloads on AWS — EC2, ECS, S3, CloudFront, with proper IAM hygiene.",
  },
  {
    Icon: ServerCog,
    title: "Linux Server Management",
    desc: "Hardening, configuration, package management, and shell scripting for reliable, secure servers.",
  },
  {
    Icon: Globe,
    title: "Web App Deployment",
    desc: "Deploy MERN, Next.js, and static sites with Nginx reverse proxy, SSL via Let's Encrypt, and CDN.",
  },
  {
    Icon: Activity,
    title: "Monitoring & Alerting",
    desc: "Prometheus + Grafana stacks with dashboards, alerting rules, and uptime SLOs you can trust.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-primary mb-3">
            <span className="size-1.5 rounded-full bg-primary" />
            05 // services
          </span>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What I can <span className="text-primary">build for you</span>.
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Available for freelance contracts, internships, and full-time DevOps roles. Let&apos;s
            ship something solid.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              whileHover={{ y: -4 }}
              className="group gradient-border p-6 relative overflow-hidden"
            >
              <div className="pointer-events-none absolute -bottom-12 -right-12 size-32 rounded-full bg-primary/0 group-hover:bg-primary/15 blur-2xl transition-all duration-500" />

              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30 group-hover:bg-primary/20 transition-colors">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>

              <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono text-accent">
                <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                accepting projects
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

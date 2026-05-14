"use client"

import { motion } from "framer-motion"
import { Cloud, Cpu, GitBranch, Shield } from "lucide-react"

const pillars = [
  {
    Icon: Cloud,
    title: "Cloud Native",
    desc: "Designing AWS architectures with EC2, S3, VPC, IAM, and Route53.",
  },
  {
    Icon: GitBranch,
    title: "Automation First",
    desc: "CI/CD with Jenkins & GitHub Actions, IaC with Terraform.",
  },
  {
    Icon: Cpu,
    title: "Containers & K8s",
    desc: "Dockerized services and Kubernetes orchestration at scale.",
  },
  {
    Icon: Shield,
    title: "Observability",
    desc: "Prometheus + Grafana monitoring, alerting, and SLOs.",
  },
]

const stats = [
  { value: "10+", label: "Projects Shipped" },
  { value: "15+", label: "DevOps Tools" },
  { value: "500+", label: "Hours Learning" },
  { value: "24/7", label: "Curiosity" },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
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
            01 // about
          </span>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Engineering reliable systems with{" "}
            <span className="text-primary">automation at the core.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground"
          >
            <p>
              I&apos;m <span className="text-foreground font-medium">Aftab Alam</span>, a DevOps &amp; Cloud Engineer with hands-on experience building scalable, high-availability systems aligned with modern agile practices.
            </p>
            <p>
              My expertise lies in managing AWS infrastructure, containerizing applications with Docker and Kubernetes, and designing automated CI/CD pipelines using Jenkins and GitHub Actions. I rely heavily on Terraform for Infrastructure as Code to eliminate configuration drift.
            </p>
            <p>
              From Linux administration to system monitoring with Grafana and CloudWatch, I am passionate about reducing deployment times and translating complex challenges into robust, production-grade solutions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl glass p-4 text-center hover:border-primary/40 transition-colors"
                >
                  <div className="text-2xl font-bold text-primary">{s.value}</div>
                  <div className="text-[11px] font-mono text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 grid sm:grid-cols-2 gap-3"
          >
            {pillars.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="gradient-border p-5 group"
                style={{
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30 group-hover:bg-primary/20 transition-colors">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { techIconMap, type TechName } from "./tech-icons"

type Skill = {
  name: TechName
  level: number
  category: string
}

const skills: Skill[] = [
  { name: "AWS", level: 90, category: "Cloud" },
  { name: "CloudWatch", level: 85, category: "Cloud" },
  { name: "Docker", level: 88, category: "Containers" },
  { name: "Kubernetes", level: 85, category: "Containers" },
  { name: "Helm", level: 80, category: "Containers" },
  { name: "Docker Compose", level: 85, category: "Containers" },
  { name: "Nginx", level: 75, category: "Containers" },
  { name: "Jenkins", level: 85, category: "CI/CD" },
  { name: "GitHub Actions", level: 85, category: "CI/CD" },
  { name: "GitHub Webhooks", level: 80, category: "CI/CD" },
  { name: "GitHub", level: 90, category: "VCS" },
  { name: "Git", level: 85, category: "VCS" },
  { name: "Terraform", level: 80, category: "IaC" },
  { name: "Grafana", level: 75, category: "Monitoring" },
  { name: "Prometheus", level: 80, category: "Monitoring" },
  { name: "Linux", level: 90, category: "OS & Shell" },
  { name: "Windows", level: 85, category: "OS & Shell" },
  { name: "Bash", level: 85, category: "OS & Shell" },
  { name: "Python", level: 70, category: "Scripting" },
  { name: "Java", level: 60, category: "Scripting" },
  { name: "HTML", level: 80, category: "Scripting" },
  { name: "CSS", level: 75, category: "Scripting" },
  { name: "MySQL", level: 75, category: "Databases" },
  { name: "MongoDB", level: 70, category: "Databases" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Android Studio", level: 65, category: "Tools" },
  { name: "Figma", level: 70, category: "Tools" },
  { name: "Adobe XD", level: 65, category: "Tools" },
]

const categories = [
  "All",
  "Cloud",
  "Containers",
  "CI/CD",
  "VCS",
  "IaC",
  "Monitoring",
  "OS & Shell",
  "Scripting",
  "Databases",
  "Tools",
] as const

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All")
  
  const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory)

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-50"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-3 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            <span className="size-3 rounded-full bg-primary animate-pulse" />
            02 toolbox
          </span>
          <h2 className="text-balance text-xl sm:text-2xl lg:text-3xl font-semibold text-primary tracking-tight mt-2">
            The <span className="text-accent">stack</span> I ship with.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            A growing toolbox of cloud-native technologies — sharpened through real-world projects,
            broken clusters, and a healthy obsession with terminal output.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`rounded-full px-3 py-1 text-xs font-mono ring-1 transition-all ${
                activeCategory === c
                  ? "bg-primary/10 text-primary ring-primary/30"
                  : "text-muted-foreground ring-border hover:bg-secondary/50 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => {
              const Icon = techIconMap[skill.name]
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="group relative gradient-border p-5 overflow-hidden"
                >
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -top-12 -right-12 size-32 rounded-full bg-primary/0 group-hover:bg-primary/15 blur-2xl transition-all duration-500" />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30 group-hover:bg-primary/20 group-hover:ring-primary/50 transition-all">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg">{skill.name}</h3>
                        <p className="text-xs font-mono text-muted-foreground">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Tech marquee */}
        <div className="mt-16 relative overflow-hidden rounded-2xl glass py-6">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...skills, ...skills].map((s, i) => {
              const Icon = techIconMap[s.name]
              return (
                <div
                  key={`${s.name}-${i}`}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <Icon className="size-5 text-primary" />
                  <span className="font-mono text-sm">{s.name}</span>
                  <span className="text-border">/</span>
                </div>
              )
            })}
          </div>
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  )
}

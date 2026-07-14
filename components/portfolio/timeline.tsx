"use client"

import { motion } from "framer-motion"
import { GraduationCap, GitBranch, Container, Cloud, Boxes, Rocket } from "lucide-react"

const items = [
  {
    year: "Jul 2026 — Jun 2028",
    title: "Master of Computer Applications (MCA)",
    desc: "Amity University, Noida. Advanced studies in computer networks, enterprise architectures, and systems engineering (In Progress).",
    Icon: GraduationCap,
    current: true,
  },
  {
    year: "Aug 2022 — Jun 2025",
    title: "Bachelor of Computer Applications (BCA)",
    desc: "Galgotias University, Greater Noida. Graduated with a CGPA of 8.21/10, focusing on software development and cloud technologies.",
    Icon: GraduationCap,
  },
  {
    year: "Certified",
    title: "AWS Cloud & Networking",
    desc: "Comprehensive AWS Cloud Training (Udemy) and Computer Networking specialization (Google / Coursera).",
    Icon: Cloud,
  },
  {
    year: "Certified",
    title: "DevOps & AI on AWS",
    desc: "Completed professional cloud certifications in DevOps methodologies and AI on AWS via Coursera.",
    Icon: Rocket,
  },
  {
    year: "Certified",
    title: "Generative AI & AI Fundamentals",
    desc: "Earned AI Fundamentals and Generative AI credentials from IBM and UpGrad.",
    Icon: Rocket,
  },
]

export function Timeline() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid bg-grid-fade opacity-40 pointer-events-none"
      />
      <div className="relative mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-flex items-center gap-3 font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            <span className="size-3 rounded-full bg-primary animate-pulse" />
            05 journey
          </span>
          <h2 className="text-balance text-xl sm:text-2xl lg:text-3xl font-semibold text-primary tracking-tight mt-2">
            From <span className="text-accent">student</span> to{" "}
            <span className="text-accent">shipping engineer</span>.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            A learning journey driven by curiosity, late-night clusters, and the satisfaction of a
            green pipeline.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <ol className="space-y-10">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0
              const Icon = item.Icon
              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative grid sm:grid-cols-2 gap-4 sm:gap-8"
                >
                  {/* dot */}
                  <div className="absolute left-5 sm:left-1/2 top-4 -translate-x-1/2 z-10">
                    <div
                      className={`relative flex size-10 items-center justify-center rounded-full ring-1 ${
                        item.current
                          ? "bg-accent/15 ring-accent/40"
                          : "bg-primary/10 ring-primary/30"
                      }`}
                    >
                      <Icon
                        className={`size-4 ${item.current ? "text-accent" : "text-primary"}`}
                      />
                      {item.current && (
                        <div className="absolute inset-0 rounded-full animate-pulse-ring ring-1 ring-accent/40" />
                      )}
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`pl-16 sm:pl-0 ${
                      isLeft ? "sm:pr-12 sm:text-right" : "sm:col-start-2 sm:pl-12"
                    }`}
                  >
                    <div className="gradient-border p-5 inline-block text-left">
                      <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-mono text-primary ring-1 ring-primary/30 mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-semibold text-lg">
                        {item.title}
                        {item.current && (
                          <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-mono text-accent">
                            <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                            now
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 text-base text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

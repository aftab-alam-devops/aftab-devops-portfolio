"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, MapPin, Sparkles, Cpu, Network } from "lucide-react"
import { useState, useEffect } from "react"
import { GridBackground } from "./grid-background"
import { TerminalWindow } from "./terminal-window"
import {
  AWSIcon,
  DockerIcon,
  GitHubIcon,
  JenkinsIcon,
  KubernetesIcon,
  LinuxIcon,
  TerraformIcon,
} from "./tech-icons"

const orbitDuration = 28 // seconds, single source of truth
const outerOrbitIcons = [
  { Icon: DockerIcon, label: "Docker" },
  { Icon: KubernetesIcon, label: "Kubernetes" },
  { Icon: AWSIcon, label: "AWS" },
]

const innerOrbitIcons = [
  { Icon: JenkinsIcon, label: "Jenkins" },
  { Icon: TerraformIcon, label: "Terraform" },
  { Icon: LinuxIcon, label: "Linux" },
  { Icon: GitHubIcon, label: "GitHub" },
]

function WanderingOrbiter({ delay, Icon, label }: { delay: number; Icon: any; label: string }) {
  const [isOrbiting, setIsOrbiting] = useState(true)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOrbiting((prev) => {
        const next = !prev
        if (!next) {
          // Wander mode: Shift the center of the orbit randomly
          setPos({
            x: (Math.random() - 0.5) * 450,
            y: (Math.random() - 0.5) * 450,
          })
        }
        return next
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      animate={{
        x: isOrbiting ? 0 : pos.x,
        y: isOrbiting ? 0 : pos.y,
      }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
    >
      <div
        className="animate-orbit"
        style={
          {
            animationDelay: `-${delay}s`,
            animationDuration: `${orbitDuration}s`,
            ["--orbit-radius" as string]: "var(--ring-radius)",
          } as React.CSSProperties
        }
      >
        <div
          className="group relative flex size-12 sm:size-14 items-center justify-center rounded-xl glass hover:scale-110 hover:ring-accent/60 transition-all"
          title={label}
        >
          <Icon className="size-6 sm:size-7 text-accent" />
          <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 ring-1 ring-border transition-opacity">
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-background"
    >
      <GridBackground />

      {/* Background photo on the right side */}
      <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none opacity-90 lg:opacity-100">
        <Image
          src="/aftab-portrait-new.png"
          alt="Aftab Background"
          fill
          className="object-contain object-bottom lg:object-right-bottom scale-90 origin-bottom brightness-110 drop-shadow-[0_0_40px_rgba(0,211,221,0.35)]"
          priority
        />
        {/* Cyan light on the face */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(0,211,221,0.15),transparent_50%)] z-10" />
        {/* Fade into the background on the left edge of the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 w-full z-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative size-20 sm:size-24 rounded-full p-1 bg-gradient-to-tr from-primary via-accent to-primary/20 shrink-0 glow-cyan"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src="/aftab-portrait-new.png"
                    alt="Aftab Alam"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover brightness-100"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col gap-1.5"
              >
                <div className="inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  <span className="text-muted-foreground">
                    Available for <span className="text-foreground">Devops and Cloud</span>
                  </span>
                </div>
                <div className="text-xs font-mono text-muted-foreground/80 pl-2">
                  full time , freelancer
                </div>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              Hi, I&apos;m{" "}
              <span className="text-primary text-glow">Aftab Alam</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">
                I build{" "}
              </span>
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl">
                cloud infrastructure
              </span>
              <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">
                {" "}
                that scales.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-pretty text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              DevOps &amp; Cloud Engineer offering **worldwide freelance support**, **hourly consulting**, and **permanent full-time integration**. Specializing in automated AWS architectures, secure CI/CD pipelines, and scalable Kubernetes operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-cyan hover:scale-[1.02]"
              >
                <Sparkles className="size-4" />
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg glass px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary/60 transition-all"
              >
                <Mail className="size-4" />
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1VDXxo_X0KqZtcxJ4lcPs81D3Ym-KiYux/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
              >
                <Download className="size-4" />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-border/60 text-xs font-mono text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-primary" /> Delhi, India
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-accent" /> Open to Remote / Worldwide Freelancer
              </span>
              <span>BCA Graduate · MCA In Progress</span>
            </motion.div>
          </div>

          {/* Right: orbit + terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[460px] sm:h-[520px] lg:h-[560px] flex items-center justify-center [--ring-radius:210px] sm:[--ring-radius:240px] [--inner-ring-radius:160px] sm:[--inner-ring-radius:180px]"
          >
            {/* Shift the orbit container away from the face and onto the body on smaller screens */}
            <div className="absolute inset-0 flex items-center justify-center scale-[0.7] -translate-x-12 translate-y-[184px] lg:-translate-x-[106px] lg:translate-y-24 xl:-translate-x-[170px] xl:translate-y-8">
              <div className="absolute size-[420px] sm:size-[480px] rounded-full border border-primary/15" />
              <div className="absolute size-[320px] sm:size-[360px] rounded-full border border-primary/10" />
              <div className="absolute size-[220px] sm:size-[240px] rounded-full border border-primary/10" />

              {/* Soft glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute size-[480px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.72_0.18_195/0.18),transparent_70%)] blur-2xl"
              />

              {/* Outer Orbit Icons */}
              {outerOrbitIcons.map(({ Icon, label }, i) => (
                <div
                  key={label}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit"
                  style={
                    {
                      animationDelay: `-${(orbitDuration / outerOrbitIcons.length) * i}s`,
                      animationDuration: `${orbitDuration}s`,
                      ["--orbit-radius" as string]: "var(--ring-radius)",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="group relative flex size-12 sm:size-14 items-center justify-center rounded-xl glass hover:scale-110 hover:ring-primary/60 transition-all"
                    title={label}
                  >
                    <Icon className="size-6 sm:size-7 text-primary" />
                    <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 ring-1 ring-border transition-opacity">
                      {label}
                    </span>
                  </div>
                </div>
              ))}

              {/* Inner Orbit Icons */}
              {innerOrbitIcons.map(({ Icon, label }, i) => (
                <div
                  key={label}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit"
                  style={
                    {
                      animationDelay: `-${((orbitDuration * 0.8) / innerOrbitIcons.length) * i}s`,
                      animationDuration: `${orbitDuration * 0.8}s`,
                      ["--orbit-radius" as string]: "var(--inner-ring-radius)",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="group relative flex size-10 sm:size-12 items-center justify-center rounded-xl glass hover:scale-110 hover:ring-primary/60 transition-all"
                    title={label}
                  >
                    <Icon className="size-5 sm:size-6 text-primary" />
                    <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-mono text-muted-foreground opacity-0 group-hover:opacity-100 ring-1 ring-border transition-opacity">
                      {label}
                    </span>
                  </div>
                </div>
              ))}

              {/* The 2 new wandering animations */}
              <WanderingOrbiter delay={4} Icon={Cpu} label="Compute" />
              <WanderingOrbiter delay={18} Icon={Network} label="Network" />

              {/* Center: terminal window */}
              <div className="relative z-10 w-[280px] sm:w-[340px]">
                <TerminalWindow />
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 hidden sm:flex flex-col gap-0.5 rounded-xl glass px-3 py-2 ring-1 ring-accent/30"
            >
              <span className="font-mono text-[10px] text-muted-foreground">uptime</span>
              <span className="font-mono text-sm font-bold text-accent">99.98%</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors z-20"
        >
          scroll
          <ArrowDown className="size-4" />
        </motion.a>
      </div>
    </section>
  )
}

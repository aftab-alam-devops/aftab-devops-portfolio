"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Line = {
  prompt?: string
  command?: string
  output?: string[]
  status?: "success" | "info" | "warn"
}

const sequence: Line[] = [
  {
    prompt: "aftab@devops:~$",
    command: "kubectl get pods -n production",
    output: [
      "NAME                         READY   STATUS    RESTARTS",
      "api-gateway-7f9d-xk2m        2/2     Running   0",
      "auth-service-6b4c-9p1n       1/1     Running   0",
      "frontend-deploy-8a2e-mt5q    3/3     Running   0",
    ],
    status: "success",
  },
  {
    prompt: "aftab@devops:~$",
    command: "terraform apply -auto-approve",
    output: [
      "aws_instance.app: Creating...",
      "aws_lb.main: Creation complete after 42s",
      "Apply complete! Resources: 12 added, 0 changed.",
    ],
    status: "info",
  },
  {
    prompt: "aftab@devops:~$",
    command: "docker compose up -d",
    output: ["✓ Network app_default created", "✓ 5 containers started successfully"],
    status: "success",
  },
]

export function TerminalWindow() {
  const [step, setStep] = useState(0)
  const [typed, setTyped] = useState("")
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    const current = sequence[step % sequence.length]
    const cmd = current.command ?? ""
    let i = 0
    setTyped("")
    setShowOutput(false)

    const typer = setInterval(() => {
      i++
      setTyped(cmd.slice(0, i))
      if (i >= cmd.length) {
        clearInterval(typer)
        setTimeout(() => setShowOutput(true), 300)
        setTimeout(() => setStep((s) => s + 1), 3800)
      }
    }, 55)

    return () => clearInterval(typer)
  }, [step])

  const current = sequence[step % sequence.length]
  const statusColor =
    current.status === "success"
      ? "text-accent"
      : current.status === "warn"
        ? "text-chart-5"
        : "text-primary"

  return (
    <div className="gradient-border overflow-hidden relative">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-card/80">
        <div className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-destructive/70" />
          <span className="size-3 rounded-full bg-chart-5/70" />
          <span className="size-3 rounded-full bg-accent/70" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">~/deploy — zsh — 96×24</span>
        <span className="font-mono text-[10px] text-accent flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" /> live
        </span>
      </div>

      {/* Body */}
      <div className="px-4 py-4 font-mono text-xs sm:text-sm bg-card/40 min-h-[260px] relative">
        {/* scanline overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0 animate-scanline" />
        </div>

        <div className="space-y-1.5 leading-relaxed">
          <p className="text-muted-foreground">$ Welcome to Aftab&apos;s DevOps terminal</p>
          <p className="text-muted-foreground">$ Initializing infrastructure...</p>

          <div className="flex items-start gap-2 pt-1">
            <span className="text-accent shrink-0">{current.prompt}</span>
            <span className="text-foreground break-all">
              {typed}
              <span className="inline-block w-[7px] h-[14px] bg-primary align-middle ml-0.5 animate-blink" />
            </span>
          </div>

          {showOutput && current.output && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`pl-4 space-y-0.5 ${statusColor}`}
            >
              {current.output.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                  className="text-muted-foreground"
                >
                  <span className={statusColor}>›</span> {line}
                </motion.p>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

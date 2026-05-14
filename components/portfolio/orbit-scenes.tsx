"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

/**
 * Three decorative scenes that cycle every 5 seconds while the main orbit keeps running.
 * 1. Pulse  — expanding rings from the center
 * 2. Mesh   — connecting lines drawn between points on the outer ring
 * 3. Flow   — small data packets travel along the outer orbit
 */
const SCENE_DURATION_MS = 5000

export function OrbitScenes() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setPhase((p) => (p + 1) % 3)
    }, SCENE_DURATION_MS)
    return () => window.clearInterval(id)
  }, [])

  const labels = ["pulse", "mesh", "flow"] as const

  return (
    <>
      <AnimatePresence mode="wait">
        {phase === 0 && <PulseScene key="pulse" />}
        {phase === 1 && <MeshScene key="mesh" />}
        {phase === 2 && <FlowScene key="flow" />}
      </AnimatePresence>

      {/* Tiny mode indicator — keeps it feeling intentional, not random */}
      <div className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 flex items-center gap-1.5 rounded-full glass px-2.5 py-1 text-[10px] font-mono z-20">
        <span className="size-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-muted-foreground">mode:</span>
        <span className="text-primary">{labels[phase]}</span>
      </div>
    </>
  )
}

/* ---------------- Scene 1: Pulse rings expanding outward ---------------- */
function PulseScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute rounded-full ring-2 ring-primary/40"
          style={{
            width: 220,
            height: 220,
            animation: `pulse-expand 2.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.8}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes pulse-expand {
          0%   { transform: scale(0.5); opacity: 0.7; }
          80%  { opacity: 0.05; }
          100% { transform: scale(2.1); opacity: 0; }
        }
      `}</style>
    </motion.div>
  )
}

/* ---------------- Scene 2: Constellation mesh lines ---------------- */
function MeshScene() {
  // 7 points on the outer ring (matches the 7 orbiting icons spacing visually)
  const points = Array.from({ length: 7 }).map((_, i) => {
    const angle = (i / 7) * Math.PI * 2 - Math.PI / 2
    const r = 47 // % from center to outer ring
    return {
      x: 50 + Math.cos(angle) * r,
      y: 50 + Math.sin(angle) * r,
    }
  })

  // Build a chain + a few cross-links for a network feel
  const edges: Array<[number, number]> = []
  for (let i = 0; i < points.length; i++) {
    edges.push([i, (i + 1) % points.length])
  }
  edges.push([0, 3], [1, 4], [2, 5])

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 size-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mesh-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.18 195)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.78 0.18 155)" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a].x}
          y1={points[a].y}
          x2={points[b].x}
          y2={points[b].y}
          stroke="url(#mesh-grad)"
          strokeWidth="0.25"
          strokeDasharray="60"
          strokeDashoffset="60"
          style={{
            animation: `mesh-draw 1.2s ease-out ${i * 0.08}s forwards, mesh-glow 2.4s ease-in-out ${i * 0.08 + 1.2}s infinite`,
          }}
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="0.8"
          fill="oklch(0.72 0.18 195)"
          style={{
            animation: `mesh-dot 2s ease-in-out ${i * 0.1}s infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes mesh-draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes mesh-glow {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 1; }
        }
        @keyframes mesh-dot {
          0%, 100% { r: 0.7; opacity: 0.7; }
          50%      { r: 1.2; opacity: 1; }
        }
      `}</style>
    </motion.svg>
  )
}

/* ---------------- Scene 3: Data packets flowing along the outer ring ---------------- */
function FlowScene() {
  const packets = [0, 1, 2, 3]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Glowing trail ring */}
      <div className="absolute size-[420px] sm:size-[480px] rounded-full ring-1 ring-primary/30 shadow-[0_0_30px_-10px_oklch(0.72_0.18_195/0.5)]" />

      {packets.map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
          style={{
            animation: `flow-spin 6s linear infinite`,
            animationDelay: `${-i * 1.5}s`,
          }}
        >
          <span
            className="absolute left-1/2 top-1/2 block size-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_oklch(0.78_0.18_155/0.8)]"
            style={{
              transform: "translate(-50%, calc(var(--flow-radius) * -1))",
            }}
          />
        </div>
      ))}

      <style>{`
        @keyframes flow-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { Mail, MapPin, Send, Github, Linkedin, ArrowRight, Check, Phone } from "lucide-react"
import { GridBackground } from "./grid-background"
import emailjs from '@emailjs/browser'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    
    if (formRef.current) {
      emailjs
        .sendForm(
          'service_hhhjv6g',
          'template_xb916j6',
          formRef.current,
          '6bO2mKvejmRHNthSx'
        )
        .then(
          (result) => {
            setLoading(false)
            setSent(true)
          },
          (error) => {
            setLoading(false)
            console.error('Failed to send email:', error.text)
          }
        )
    } else {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <GridBackground />

      <div className="relative mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs text-primary mb-3">
            <span className="size-1.5 rounded-full bg-primary" />
            06 // contact
          </span>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Let&apos;s build the{" "}
            <span className="text-primary">next deploy</span> together.
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Open to DevOps Engineer roles, Cloud Engineer positions, remote internships, and
            freelance work. I respond within 24 hours.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <a
              href="mailto:uxaftab@gmail.com"
              className="gradient-border p-5 flex items-center gap-4 group hover:bg-secondary/30 transition-colors"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <Mail className="size-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-mono text-muted-foreground">email</p>
                <p className="font-medium truncate">uxaftab@gmail.com</p>
              </div>
              <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </a>

            <a
              href="tel:+917310008925"
              className="gradient-border p-5 flex items-center gap-4 group hover:bg-secondary/30 transition-colors"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <Phone className="size-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-mono text-muted-foreground">phone</p>
                <p className="font-medium truncate">+91 7310008925</p>
              </div>
              <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </a>

            <div className="gradient-border p-5 flex items-center gap-4">
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-muted-foreground">based in</p>
                <p className="font-medium">Delhi, India</p>
                <p className="text-xs text-muted-foreground">UTC+5:30 · Open to remote globally</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/aftab-alam-devops"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border p-4 flex flex-col items-center text-center hover:bg-secondary/30 transition-colors"
              >
                <Github className="size-5 text-primary" />
                <span className="mt-2 text-xs font-mono text-muted-foreground">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/aftab-alam-devops"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border p-4 flex flex-col items-center text-center hover:bg-secondary/30 transition-colors"
              >
                <Linkedin className="size-5 text-primary" />
                <span className="mt-2 text-xs font-mono text-muted-foreground">LinkedIn</span>
              </a>
            </div>

            <div className="rounded-xl glass p-4 font-mono text-[11px] text-muted-foreground">
              <div className="flex items-center gap-1.5 text-accent mb-1">
                <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                status: available
              </div>
              <p>Currently accepting new opportunities for 2026.</p>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 gradient-border p-6 sm:p-8 space-y-4"
          >
            {sent ? (
              <div className="flex flex-col items-center text-center py-12 gap-3">
                <div className="flex size-14 items-center justify-center rounded-full bg-accent/15 ring-1 ring-accent/40">
                  <Check className="size-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Message sent</h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-mono text-primary hover:text-primary/80"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-2">
                  <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                  ./contact-form.sh
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-muted-foreground mb-1.5"
                    >
                      // your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-lg bg-secondary/40 border border-border px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-muted-foreground mb-1.5"
                    >
                      // your email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full rounded-lg bg-secondary/40 border border-border px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-muted-foreground mb-1.5"
                  >
                    // subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="DevOps Engineer role at Acme Corp"
                    className="w-full rounded-lg bg-secondary/40 border border-border px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-muted-foreground mb-1.5"
                  >
                    // message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about the role, project, or just say hi..."
                    className="w-full rounded-lg bg-secondary/40 border border-border px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all glow-cyan disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="size-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                      Deploying message...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Message
                    </>
                  )}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

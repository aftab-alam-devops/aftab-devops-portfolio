import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aftab Alam — DevOps & Cloud Engineer",
  description:
    "Portfolio of Aftab Alam — DevOps & Cloud Engineer specializing in AWS, Docker, Kubernetes, Jenkins, Terraform, and CI/CD automation. Building reliable, scalable cloud infrastructure.",
  keywords: [
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "CI/CD",
    "Aftab Alam",
  ],
  authors: [{ name: "Aftab Alam" }],
  generator: "v0.app",
  openGraph: {
    title: "Aftab Alam — DevOps & Cloud Engineer",
    description:
      "Building reliable, scalable cloud infrastructure with AWS, Kubernetes, Docker, and CI/CD pipelines.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a1020",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}

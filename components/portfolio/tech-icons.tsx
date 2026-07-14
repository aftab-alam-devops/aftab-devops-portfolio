import type { SVGProps } from "react"
import { Database, FileCode2, Monitor, PenTool, Smartphone, Boxes, LayoutTemplate, Network, Activity } from "lucide-react"

type IconProps = SVGProps<SVGSVGElement>

/**
 * Stylized monochrome DevOps tech icons.
 * All icons inherit currentColor so they can be themed per usage.
 */

export function DockerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.5 9.5c-.4-.3-1.4-.4-2.2-.2-.1-.7-.5-1.4-1.1-1.9l-.4-.3-.3.4c-.5.6-.7 1.6-.6 2.4 0 .3.2.7.4.9-.4.2-1 .3-1.8.3H1.4c-.4 2.6.2 6 1.7 7.7 1.7 1.9 4.3 2.7 7.7 2.7 7.4 0 12.9-3.4 15.4-9.6 1 0 3.1 0 4.1-2 .1-.1.3-.5.4-.7l-.1-.1c-.2 0-1.4-.3-2.1-.1zM6.5 13H4v-2.5h2.5V13zm3 0H7V10.5h2.5V13zm3 0H10V10.5h2.5V13zm3 0H13V10.5h2.5V13zm-6-3H7V7.5h2.5V10zm3 0H10V7.5h2.5V10zm3 0H13V7.5h2.5V10zm0-3H13V4.5h2.5V7z" />
    </svg>
  )
}

export function KubernetesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 2.5 3.5 6.5v9L12 21.5l8.5-6V6.5L12 2.5z" />
      <path d="M12 8v8M8 10l8 4M16 10l-8 4" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function AWSIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.3 11c0 .3 0 .5.1.7l.3.7c0 .1.1.2.1.2 0 .1-.1.2-.2.3l-.6.4-.2.1c-.1 0-.2 0-.3-.1l-.4-.4-.3-.5c-.7.9-1.7 1.3-2.8 1.3-.8 0-1.5-.2-2-.7-.5-.5-.7-1.1-.7-1.9 0-.8.3-1.5.9-2 .6-.5 1.4-.7 2.5-.7.3 0 .7 0 1.1.1.4 0 .8.1 1.2.2v-.7c0-.7-.1-1.2-.4-1.5-.3-.3-.8-.4-1.5-.4-.3 0-.6 0-1 .1-.4.1-.7.2-1 .3-.1.1-.2.1-.3.1h-.1c-.1 0-.2-.1-.2-.3v-.4c0-.1 0-.2.1-.3 0-.1.1-.1.2-.2.3-.2.7-.3 1.2-.4.5-.1 1-.2 1.5-.2 1.2 0 2 .3 2.6.8.5.5.8 1.3.8 2.4V11zm-3.9 1.4c.3 0 .6 0 1-.1.3-.1.7-.3 1-.5.2-.1.3-.3.4-.5.1-.2.1-.4.1-.7v-.3c-.3-.1-.6-.1-.9-.2-.3 0-.6-.1-.9-.1-.7 0-1.2.1-1.5.4-.3.3-.5.6-.5 1.1 0 .4.1.7.4.9.2.1.6.2.9 0zm7.7 1c-.2 0-.3 0-.3-.1-.1-.1-.1-.2-.2-.3L8.9 6.7c0-.1-.1-.2-.1-.3 0-.1.1-.2.2-.2h.9c.2 0 .3 0 .4.1.1.1.1.2.2.3l1.4 5.7L13.2 6.5c0-.1.1-.2.2-.3.1-.1.2-.1.4-.1h.7c.2 0 .3 0 .4.1.1.1.2.2.2.3l1.3 5.8L17.7 6.6c0-.1.1-.2.2-.3.1-.1.2-.1.4-.1h.8c.2 0 .2.1.2.2v.2c0 .1 0 .1-.1.2l-1.8 5.8c0 .1-.1.2-.2.3-.1.1-.2.1-.3.1h-.8c-.2 0-.3 0-.4-.1-.1-.1-.2-.2-.2-.3l-1.3-5.5-1.3 5.5c0 .1-.1.2-.2.3-.1.1-.2.1-.4.1h-.9zm10.7.2c-.5 0-1-.1-1.4-.2-.5-.1-.8-.2-1.1-.4-.2-.1-.3-.2-.3-.3v-.4c0-.2.1-.3.2-.3h.1c.1 0 .2.1.3.1.4.2.7.3 1.1.4.4.1.8.1 1.1.1.6 0 1.1-.1 1.4-.3.3-.2.5-.5.5-.9 0-.3-.1-.5-.3-.7-.2-.2-.5-.3-1-.5l-1.4-.4c-.7-.2-1.2-.5-1.5-.9-.3-.4-.5-.8-.5-1.3 0-.4.1-.7.2-1 .2-.3.4-.6.6-.8.3-.2.6-.4 1-.5.4-.1.8-.2 1.2-.2.2 0 .4 0 .6.1.2 0 .4.1.6.1.2.1.4.1.5.2.2.1.3.1.4.2.1.1.2.1.2.2 0 .1.1.2.1.3v.4c0 .2-.1.3-.2.3-.1 0-.2 0-.4-.1-.6-.3-1.3-.4-2-.4-.5 0-1 .1-1.3.3-.3.2-.4.4-.4.8 0 .3.1.5.3.7.2.2.6.3 1.1.5l1.3.4c.7.2 1.2.5 1.5.9.3.4.4.8.4 1.3 0 .4-.1.8-.2 1.1-.2.3-.4.6-.7.8-.3.2-.6.4-1 .5-.4.2-.9.2-1.4.2zM18 17.9c-2.5 1.9-6.2 2.9-9.4 2.9-4.4 0-8.4-1.6-11.4-4.3-.2-.2 0-.5.3-.4 3.3 1.9 7.4 3.1 11.6 3.1 2.9 0 6-.6 8.9-1.8.4-.2.8.3.4.5zm1-1.2c-.3-.4-2-.2-2.8-.1-.2 0-.3-.2-.1-.3 1.4-1 3.6-.7 3.9-.4.3.3-.1 2.6-1.4 3.6-.2.2-.4.1-.3-.2.3-.7 1-2.3.7-2.6z" />
    </svg>
  )
}

export function JenkinsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="9" r="3.5" />
      <path d="M8.5 13c0 1.5.5 3 1.5 4M15.5 13c0 1.5-.5 3-1.5 4" />
      <path d="M9 17h6l-.5 4h-5L9 17z" fill="currentColor" />
      <path d="M11 6.5c.5-.5 1.5-.5 2 0" strokeLinecap="round" />
    </svg>
  )
}

export function LinuxIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 2.5c-2.5 0-3.5 2-3.5 4.5 0 1.5.5 2.5 1 3.5-.8.8-2 2.5-2.5 4.5-.5 2-1 4 .5 5s3-.5 4.5-.5 3 1.5 4.5.5 1-3 .5-5-1.7-3.7-2.5-4.5c.5-1 1-2 1-3.5 0-2.5-1-4.5-3.5-4.5z" />
      <circle cx="10.5" cy="7" r="0.7" fill="currentColor" />
      <circle cx="13.5" cy="7" r="0.7" fill="currentColor" />
      <path d="M11 9c.5.3 1.5.3 2 0" strokeLinecap="round" />
    </svg>
  )
}

export function TerraformIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3 4v6l5 3V7L3 4zm6 3.5v6l5 3v-6l-5-3zm6-3.5v6l5 3V7l-5-3zm-6 10.5v6l5 3v-6l-5-3z" opacity="0.85" />
    </svg>
  )
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.78 0c2.21-1.5 3.18-1.18 3.18-1.18.62 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.26 5.68.41.35.78 1.05.78 2.11v3.13c0 .31.21.66.8.55C20.21 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

export function PrometheusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 2.5c-3 0-5 2.5-5 5 0 2 1 3 1 4.5 0 1-1 1.5-1 1.5h10s-1-.5-1-1.5c0-1.5 1-2.5 1-4.5 0-2.5-2-5-5-5z" />
      <rect x="6" y="14" width="12" height="2" rx="0.5" />
      <path d="M9 18h6l-1 3h-4l-1-3z" fill="currentColor" />
    </svg>
  )
}

export function GrafanaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="13" r="4.5" />
      <circle cx="12" cy="13" r="1.5" fill="currentColor" />
      <path d="M12 4v2.5M5 9l2 1.5M19 9l-2 1.5M5 17l2-1.5M19 17l-2-1.5M12 19v2.5" strokeLinecap="round" />
    </svg>
  )
}

export function NginxIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5z" />
      <path d="M9 16V9l6 6V9" strokeLinecap="round" />
    </svg>
  )
}

export function PythonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11.9 2c-2 0-4 .3-4 2.5v2.4h4V8h-6c-2 0-3.5 1-3.5 4s1.5 4 3.5 4H8v-2.5c0-2 1.5-3.5 4-3.5h4c1.5 0 3-1 3-3.5V4.5C19 3 17.5 2 16 2c-1.5 0-3-.3-4-.3-.1 0-.1.3-.1.3zM9 4.5c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z" />
      <path d="M12.1 22c2 0 4-.3 4-2.5v-2.4h-4V16h6c2 0 3.5-1 3.5-4s-1.5-4-3.5-4H16v2.5c0 2-1.5 3.5-4 3.5H8c-1.5 0-3 1-3 3.5v3.5C5 21 6.5 22 8 22c1.5 0 3 .3 4 .3.1 0 .1-.3.1-.3zM15 19.5c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z" opacity="0.7" />
    </svg>
  )
}

export function GitIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true" {...props}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M6 8v8M8 18c4 0 8-2 8-6" />
    </svg>
  )
}

export function ReactIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  )
}

export function BashIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true" {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3M12 15h5" />
    </svg>
  )
}

export function CICDIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true" {...props}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="12" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 6h3M14 6h3M7 18h3M14 18h3M5 8v8M12 8v8M19 8v8" />
    </svg>
  )
}

export function DatabaseIcon(props: IconProps) {
  return <Database strokeWidth={1.5} {...props as any} />
}
export function CodeIcon(props: IconProps) {
  return <FileCode2 strokeWidth={1.5} {...props as any} />
}
export function MonitorIcon(props: IconProps) {
  return <Monitor strokeWidth={1.5} {...props as any} />
}
export function DesignIcon(props: IconProps) {
  return <PenTool strokeWidth={1.5} {...props as any} />
}
export function MobileIcon(props: IconProps) {
  return <Smartphone strokeWidth={1.5} {...props as any} />
}
export function HelmIcon(props: IconProps) {
  return <Boxes strokeWidth={1.5} {...props as any} />
}
export function ComposeIcon(props: IconProps) {
  return <LayoutTemplate strokeWidth={1.5} {...props as any} />
}
export function WebhooksIcon(props: IconProps) {
  return <Network strokeWidth={1.5} {...props as any} />
}
export function ActivityIcon(props: IconProps) {
  return <Activity strokeWidth={1.5} {...props as any} />
}

export const techIconMap = {
  Docker: DockerIcon,
  Kubernetes: KubernetesIcon,
  AWS: AWSIcon,
  Jenkins: JenkinsIcon,
  Linux: LinuxIcon,
  Terraform: TerraformIcon,
  GitHub: GitHubIcon,
  Git: GitIcon,
  Prometheus: PrometheusIcon,
  Grafana: GrafanaIcon,
  Nginx: NginxIcon,
  Python: PythonIcon,
  React: ReactIcon,
  Bash: BashIcon,
  "CI/CD": CICDIcon,
  Helm: HelmIcon,
  "Docker Compose": ComposeIcon,
  "GitHub Actions": GitHubIcon,
  "GitHub Webhooks": WebhooksIcon,
  CloudWatch: ActivityIcon,
  Java: CodeIcon,
  HTML: CodeIcon,
  CSS: CodeIcon,
  Windows: MonitorIcon,
  MySQL: DatabaseIcon,
  MongoDB: DatabaseIcon,
  "VS Code": CodeIcon,
  "Android Studio": MobileIcon,
  Figma: DesignIcon,
  "Adobe XD": DesignIcon,
  "Web Scraping": CodeIcon,
  "BeautifulSoup": CodeIcon,
  "Requests": WebhooksIcon,
} as const

export type TechName = keyof typeof techIconMap

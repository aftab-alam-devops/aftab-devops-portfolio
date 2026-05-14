export function GridBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade" />
      <div className="absolute top-0 left-1/4 size-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 size-[500px] rounded-full bg-accent/10 blur-3xl" />
    </div>
  )
}

export function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs text-accent">{label}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

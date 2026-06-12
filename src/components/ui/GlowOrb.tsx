export default function GlowOrb({
  className = "",
  color = "gold",
}: {
  className?: string;
  color?: "gold" | "blue";
}) {
  const bg =
    color === "gold"
      ? "bg-[radial-gradient(circle,rgba(246,217,140,0.35)_0%,rgba(212,169,75,0.08)_55%,transparent_75%)]"
      : "bg-[radial-gradient(circle,rgba(36,49,64,0.6)_0%,rgba(22,34,53,0.2)_55%,transparent_75%)]";

  return (
    <div
      aria-hidden="true"
      className={`glow-blob pointer-events-none ${bg} ${className}`}
    />
  );
}

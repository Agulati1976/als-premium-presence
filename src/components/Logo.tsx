export function Logo({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <img
      src="/als-logo.webp"
      alt="Asset Light Solutions International"
      className={className}
      width={240}
      height={80}
      decoding="async"
      fetchPriority="high"
    />
  );
}

import logoAsset from "@/assets/als-logo-v2.png.asset.json";

export function Logo({ className = "h-16 w-auto" }: { className?: string }) {
  return <img src={logoAsset.url} alt="Asset Light Solutions International" className={className} />;
}

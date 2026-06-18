import logoAsset from "@/assets/als-logo.png.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={logoAsset.url} alt="Asset Light Solutions International" className={className} />;
}

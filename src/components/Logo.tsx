
import { Zap } from "lucide-react";

export default function Logo({ size = 32, withText = true, className = "" }: { size?: number; withText?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2">
        <Zap size={size} color="#F5B400" strokeWidth={2.2} />
      </span>
      {withText && (
        <span
          className="font-poppins text-[2rem] font-bold tracking-tight text-primary"
          style={{ letterSpacing: "-1.5px" }}
        >
          Ziada.<span className="text-accent">mu</span>
        </span>
      )}
    </div>
  );
}

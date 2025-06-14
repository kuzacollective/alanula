
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({
  size = 32,
  withText = true,
  className = "",
  clickable = false
}: { size?: number; withText?: boolean; className?: string; clickable?: boolean }) {
  const logoContent = (
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

  if (clickable) {
    return (
      <Link to="/" aria-label="Go home">
        {logoContent}
      </Link>
    );
  }
  return logoContent;
}


import AlanulaIcon from "./AlanulaIcon";
import { Link } from "react-router-dom";

export default function Logo({
  size = 32,
  withText = true,
  className = "",
  clickable = false
}: { size?: number; withText?: boolean; className?: string; clickable?: boolean }) {
  const logoContent = (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="inline-flex items-center justify-center rounded-lg p-2 bg-muted border border-border/20 shadow-sm">
        <AlanulaIcon size={size} />
      </span>
      {withText && (
        <span
          className="font-poppins text-[2rem] font-bold tracking-tight"
          style={{ letterSpacing: "-1.5px" }}
        >
          <span className="text-primary">al</span>
          <span className="text-accent">anula</span>
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

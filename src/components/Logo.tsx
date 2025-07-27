
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
          style={{ letterSpacing: "-2px" }}
        >
          <span className="bg-gradient-to-r from-teal-400 via-orange-500 via-yellow-400 via-teal-600 via-teal-500 via-teal-600 to-teal-700 bg-clip-text text-transparent">
            alanula
          </span>
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

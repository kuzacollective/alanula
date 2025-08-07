import AlanulaTextLogo from "./AlanulaTextLogo";
import { Link } from "react-router-dom";

export default function Logo({
  size = 32,
  className = "",
  clickable = false,
}: { 
  size?: number; 
  className?: string; 
  clickable?: boolean; 
}) {
  const logoContent = (
    <div className={`flex items-center ${className}`}>
      <AlanulaTextLogo size={size} />
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
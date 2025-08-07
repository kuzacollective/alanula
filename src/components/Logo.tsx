import AlanulaIcon from "./AlanulaIcon";
import AlanulaLogoSVG from "./AlanulaLogoSVG";
import { Link } from "react-router-dom";

export default function Logo({
  size = 32,
  className = "",
  clickable = false,
  logoImageUrl,
  variant = 'full'
}: { 
  size?: number; 
  className?: string; 
  clickable?: boolean; 
  logoImageUrl?: string;
  variant?: 'full' | 'icon' | 'text';
}) {
  const logoContent = (
    <div className={`flex items-center ${className}`}>
      {logoImageUrl ? (
        <img
          src={logoImageUrl}
          alt="Alanula Logo"
          height={size}
          width="auto"
          className="object-contain"
        />
      ) : (
        <AlanulaLogoSVG size={size} variant={variant} />
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
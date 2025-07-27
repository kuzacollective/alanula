import AlanulaIcon from "./AlanulaIcon";
import { Link } from "react-router-dom";

export default function Logo({
  size = 32,
  className = "",
  clickable = false,
  logoImageUrl
}: { size?: number; className?: string; clickable?: boolean; logoImageUrl?: string }) {
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
        <AlanulaIcon size={size} />
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
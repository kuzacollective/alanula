
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function Header() {
  const location = useLocation();
  // Simple route-based breadcrumb for MVP (Home > Page)
  let breadcrumb = null;
  if (location.pathname !== "/") {
    const parts = location.pathname.split("/").filter(Boolean);
    breadcrumb = (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {parts.map((part, idx) => (
            <React.Fragment key={part}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {idx === parts.length - 1 ? (
                  <BreadcrumbPage>
                    {part.charAt(0).toUpperCase() + part.slice(1)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={`/${part}`}>{part.charAt(0).toUpperCase() + part.slice(1)}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  return (
    <header className="w-full py-4 px-2 border-b border-border bg-background sticky top-0 z-30">
      <div className="mx-auto max-w-4xl flex items-center justify-between gap-2">
        <Link to="/" aria-label="Ziada.mu Home" className="flex items-center gap-2">
          <Logo size={36} withText />
        </Link>
        <nav>
          <Link to="/" className="font-inter text-primary text-base font-semibold hover:underline hidden sm:inline">
            Home
          </Link>
        </nav>
      </div>
      <div className="mx-auto max-w-4xl mt-1">
        {breadcrumb}
      </div>
    </header>
  );
}

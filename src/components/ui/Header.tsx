import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

export default function Header() {
  const { isAuthenticated, user, signOut } = useAuth();
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
    <header className="w-full py-3 sm:py-4 px-3 sm:px-4 border-b border-border bg-background sticky top-0 z-30">
      <div className="mx-auto max-w-4xl flex items-center justify-between gap-2">
        <Link to="/" aria-label="Alanula Home" className="flex items-center gap-2">
          <Logo size={20} variant="full" className="hover:opacity-80 transition-opacity" />
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {isAuthenticated && (
            <div className="flex items-center gap-1 sm:gap-2">
              <Logo size={16} variant="icon" />
              <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                <User size={16} />
                <span className="hidden sm:inline">{user?.email}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={signOut}
                className="text-muted-foreground hover:text-foreground px-2 sm:px-3"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline ml-1">Sign Out</span>
              </Button>
            </div>
          )}
          <ThemeToggle />
        </div>
      </div>
      <div className="mx-auto max-w-4xl mt-1 px-1 sm:px-0">
        {breadcrumb}
      </div>
    </header>
  );
}
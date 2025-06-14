
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={scrollToTop}
      className="
        fixed z-50 bottom-6 right-6 rounded-full shadow-lg bg-primary text-primary-foreground p-3 transition 
        hover:bg-primary/90 animate-fade-in focus:outline-none focus:ring-2 focus:ring-primary/70
        backdrop-blur ring-offset-background border border-primary/50
      "
      tabIndex={0}
    >
      <ArrowUp size={22} />
    </button>
  );
}


import Logo from "../Logo";
import { Instagram, MessageCircle, FileText, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingFooter() {
  return (
    <footer className="w-full border-t border-border bg-background py-6 sm:py-8 px-4 mt-6 sm:mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <Logo size={18} className="mx-auto md:mx-0" />
          <span className="text-muted-foreground text-xs sm:text-sm px-2 md:px-0">A project to empower Mauritius' service hustlers</span>
        </div>
        <ul className="flex flex-wrap gap-3 sm:gap-5 mt-3 md:mt-0 justify-center">
          <li>
            <Link to="/about" className="hover:underline text-secondary text-sm sm:text-base font-medium">About</Link>
          </li>
          <li>
            <Link to="/faq" className="hover:underline flex items-center gap-1 text-sm sm:text-base text-secondary font-medium">
              <MessageSquare size={16} className="sm:w-[18px] sm:h-[18px]" /> FAQ
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline text-secondary text-sm sm:text-base font-medium">Contact</Link>
          </li>
          <li>
            <a href="https://instagram.com/alanula" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:underline flex items-center gap-1 text-sm sm:text-base text-secondary font-medium">
              <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" /> Instagram
            </a>
          </li>
          <li>
            <a href="https://wa.me/23059170001" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:underline flex items-center gap-1 text-sm sm:text-base text-secondary font-medium">
              <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" /> WhatsApp
            </a>
          </li>
          <li>
            <Link to="/legal" className="hover:underline flex items-center gap-1 text-sm sm:text-base text-secondary font-medium">
              <FileText size={16} className="sm:w-[18px] sm:h-[18px]" /> Legal
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:underline flex items-center gap-1 text-sm sm:text-base text-secondary font-medium">
              <FileText size={16} className="sm:w-[18px] sm:h-[18px]" /> Privacy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:underline flex items-center gap-1 text-sm sm:text-base text-secondary font-medium">
              <FileText size={16} className="sm:w-[18px] sm:h-[18px]" /> Terms
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center text-xs text-muted-foreground mt-4 px-4">&copy; {new Date().getFullYear()} Alanula. All rights reserved.</div>
    </footer>
  );
}

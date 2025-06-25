
import { Instagram, MessageCircle, FileText, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingFooter() {
  return (
    <footer className="w-full border-t border-border bg-background py-8 px-4 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="font-poppins font-bold text-xl text-primary">Alanula</span>
          <span className="text-muted-foreground text-sm">A project to empower Mauritius' service hustlers</span>
        </div>
        <ul className="flex flex-wrap gap-5 mt-3 md:mt-0">
          <li>
            <Link to="/about" className="hover:underline text-secondary text-base font-medium">About</Link>
          </li>
          <li>
            <Link to="/faq" className="hover:underline flex items-center gap-1 text-base text-secondary font-medium">
              <MessageSquare size={18} /> FAQ
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline text-secondary text-base font-medium">Contact</Link>
          </li>
          <li>
            <a href="https://instagram.com/alanula" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:underline flex items-center gap-1 text-base text-secondary font-medium">
              <Instagram size={18} /> Instagram
            </a>
          </li>
          <li>
            <a href="https://wa.me/23059170001" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:underline flex items-center gap-1 text-base text-secondary font-medium">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </li>
          <li>
            <Link to="/legal" className="hover:underline flex items-center gap-1 text-base text-secondary font-medium">
              <FileText size={18} /> Legal
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:underline flex items-center gap-1 text-base text-secondary font-medium">
              <FileText size={18} /> Privacy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:underline flex items-center gap-1 text-base text-secondary font-medium">
              <FileText size={18} /> Terms
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center text-xs text-muted-foreground mt-4">&copy; {new Date().getFullYear()} Alanula. All rights reserved.</div>
    </footer>
  );
}

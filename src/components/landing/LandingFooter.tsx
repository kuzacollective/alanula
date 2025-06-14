
import { Instagram, MessageCircle, FileText } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="w-full border-t border-border bg-background py-8 px-4 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="font-poppins font-bold text-xl text-primary">Ziada.mu</span>
          <span className="text-muted-foreground text-sm">A project to empower Mauritius’ service hustlers</span>
        </div>
        <ul className="flex flex-wrap gap-5 mt-3 md:mt-0">
          <li>
            <a href="/about" className="hover:underline text-secondary text-base font-medium">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline text-secondary text-base font-medium">Contact</a>
          </li>
          <li>
            <a href="https://instagram.com/ziada.mu" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:underline flex items-center gap-1 text-base text-secondary font-medium">
              <Instagram size={18} /> Instagram
            </a>
          </li>
          <li>
            <a href="https://wa.me/23059170001" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:underline flex items-center gap-1 text-base text-secondary font-medium">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </li>
          <li>
            <a href="/legal" className="hover:underline flex items-center gap-1 text-base text-secondary font-medium">
              <FileText size={18} /> Legal
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center text-xs text-muted-foreground mt-4">&copy; {new Date().getFullYear()} Ziada.mu. All rights reserved.</div>
    </footer>
  );
}

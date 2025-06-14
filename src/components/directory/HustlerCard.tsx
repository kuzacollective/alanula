
import React from "react";
import { Badge } from "../ui/badge";
import { Star, Check, MessageCircle } from "lucide-react"; // Replaced Whatsapp with MessageCircle

export type Hustler = {
  id: string;
  name: string;
  location: string;
  category: string;
  price: number;
  summary: string;
  whatsapp: string;
  photo?: string;
  verified?: boolean;
  featured?: boolean;
};

function formatPrice(price: number) {
  return `Rs ${price}`;
}

export default function HustlerCard({ hustler }: { hustler: Hustler }) {
  const { name, location, category, price, summary, whatsapp, photo, verified, featured } = hustler;
  const waLink = `https://wa.me/${whatsapp}?text=Hi!%20I%20found%20you%20on%20Ziada.mu%20and%20I'm%20interested%20in%20your%20${encodeURIComponent(category)}%20services.`;

  return (
    <div className="bg-white dark:bg-card border rounded-lg shadow-sm flex flex-col h-full relative overflow-hidden">
      {featured && (
        <div className="absolute right-3 top-3 z-10">
          <Badge className="bg-accent text-accent-foreground px-2 py-1 flex items-center gap-1">
            <Star size={16} className="text-accent" />
            Featured
          </Badge>
        </div>
      )}
      <div className="flex flex-col items-center px-4 pt-6 pb-4">
        <div className="relative mb-3">
          <img
            src={photo || "/placeholder.svg"}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-2 border-primary shadow"
          />
          {verified && (
            <span className="absolute -bottom-2 -right-2">
              <Check className="bg-primary text-white rounded-full p-1" size={28} />
            </span>
          )}
        </div>
        <h2 className="font-poppins text-lg font-bold text-primary text-center leading-tight">{name}</h2>
        <div className="text-sm text-muted-foreground mb-1 text-center">{location}</div>
        <Badge variant="secondary" className="mb-1">{category}</Badge>
        <div className="font-semibold text-xl text-secondary mb-2">{formatPrice(price)} <span className="text-sm text-muted-foreground font-normal">/start</span></div>
        <div className="text-sm text-center text-muted-foreground mb-4 line-clamp-3">{summary}</div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full"
        >
          <button
            className="bg-accent text-accent-foreground font-semibold w-full rounded-md py-2 px-3 flex items-center justify-center gap-2 hover:bg-accent/90 transition animate-fade-in"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
}


import React from "react";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";

// You can replace this with dynamic data in the future
const spotlightHustler = {
  name: "Aisha Peerun",
  location: "Port Louis",
  category: "Makeup Artist",
  photo: "https://randomuser.me/api/portraits/women/65.jpg",
  quote: `"The bookings from Ziada changed my life."`,
};

export default function HustlerSpotlight() {
  return (
    <section className="bg-yellow-50 dark:bg-yellow-900/10 rounded-xl shadow mb-8 p-6 flex flex-col md:flex-row items-center gap-6 animate-fade-in">
      <img
        src={spotlightHustler.photo}
        alt={spotlightHustler.name}
        className="w-28 h-28 rounded-full object-cover border-4 border-yellow-300 shadow"
      />
      <div className="flex flex-1 flex-col items-center md:items-start text-center md:text-left">
        <Badge className="mb-2 bg-yellow-200 text-yellow-900 px-3 py-1 flex items-center gap-1">
          <Star size={16} className="text-yellow-500" />
          Hustler of the Week
        </Badge>
        <h2 className="font-poppins text-xl font-bold text-primary mb-1">{spotlightHustler.name}</h2>
        <span className="text-muted-foreground text-sm mb-1">{spotlightHustler.category} – {spotlightHustler.location}</span>
        <blockquote className="font-inter italic text-secondary-foreground mt-2">{spotlightHustler.quote}</blockquote>
      </div>
    </section>
  );
}


import React from "react";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";

const spotlightHustler = {
  name: "Aisha Peerun",
  location: "Port Louis",
  category: "Makeup Artist",
  photo: "https://randomuser.me/api/portraits/women/65.jpg",
  quote: `"The bookings from Ziada changed my life."`,
  achievements: [
    "20+ bridal bookings",
    "Featured in local magazines",
    "4.9/5 average rating",
  ],
};

export default function HustlerSpotlight() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-12 md:py-16">
      <img
        src={spotlightHustler.photo}
        alt={spotlightHustler.name}
        className="w-32 h-32 rounded-full object-cover border-4 border-yellow-300 shadow mb-4 md:mb-0"
      />
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <Badge className="mb-2 bg-yellow-200 text-yellow-900 px-3 py-1 flex items-center gap-1">
          <Star size={16} className="text-yellow-500" />
          Hustler of the Week
        </Badge>
        <h2 className="font-poppins text-2xl font-bold text-primary mb-1">{spotlightHustler.name}</h2>
        <span className="text-muted-foreground text-sm mb-2">{spotlightHustler.category} – {spotlightHustler.location}</span>
        <blockquote className="font-inter italic text-secondary-foreground mt-2 mb-3">{spotlightHustler.quote}</blockquote>
        <ul className="text-xs text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start">
          {spotlightHustler.achievements.map(ach => (
            <li key={ach} className="flex items-center gap-1">&#8226; {ach}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

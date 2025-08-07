import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Star, Check } from "lucide-react";
import StarRating from "./StarRating";

const spotlightPro = {
  name: "Aisha Peerun",
  location: "Port Louis",
  category: "Makeup Artist",
  photo: "https://randomuser.me/api/portraits/women/65.jpg",
  quote: `"The bookings from Alanula changed my life."`,
  achievements: [
    { text: "20+ bridal bookings", icon: <Check className="text-accent" size={15} /> },
    { text: "Featured in local magazines", icon: <Check className="text-accent" size={15} /> },
    { text: "4.9/5 average rating", icon: <Star className="text-yellow-400" size={15} fill="currentColor"/> },
  ],
  rating: 4.9,
  profileUrl: "/pro/1", // Link to Aisha's profile (she has ID "1" in mockPros)
};

export default function ProSpotlight() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-14 md:py-20 max-w-4xl mx-auto">
      <div className="relative group mb-4 md:mb-0">
        <div className="rounded-full bg-gradient-to-tr from-accent/20 to-accent/10 p-1.5 shadow-lg transition-transform duration-150 group-hover:scale-105">
          <img
            src={spotlightPro.photo}
            alt={spotlightPro.name}
            className="w-36 h-36 rounded-full object-cover border-4 border-accent shadow-lg transition-transform duration-200 group-hover:scale-105"
          />
        </div>
        <div className="absolute right-[-8px] bottom-0 flex items-center gap-0.5 animate-pulse">
          <Check className="w-5 h-5 text-secondary bg-background rounded-full p-0.5 border-2 border-secondary shadow" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <Badge
          className="mb-2 bg-accent/20 text-accent-foreground px-3 py-1 flex items-center gap-1 font-semibold text-base tracking-wide animate-fade-in"
        >
          <Star size={17} className="text-accent animate-scale-in" /> 
          Pro of the Week
        </Badge>
        <h2 className="font-poppins text-2xl md:text-3xl font-bold text-primary mb-1 leading-snug">{spotlightPro.name}</h2>
        <span className="text-muted-foreground text-sm mb-2 font-medium">
          {spotlightPro.category} <span>–</span> {spotlightPro.location}
        </span>
        <div className="flex items-center gap-2 mt-1 mb-2 justify-center md:justify-start">
          <StarRating rating={spotlightPro.rating} size={17} />
          <span className="text-xs text-accent-foreground font-semibold">{spotlightPro.rating}/5</span>
        </div>
        <blockquote className="relative bg-accent/10 px-6 py-4 rounded-xl italic text-foreground leading-relaxed shadow-sm mb-3 animate-fade-in">
          <span className="absolute left-2 top-3 text-accent text-xl select-none">"</span>
          {spotlightPro.quote}
          <span className="absolute right-2 bottom-3 text-accent text-xl select-none">"</span>
        </blockquote>
        <ul className="text-xs text-foreground/60 flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start mb-4">
          {spotlightPro.achievements.map((ach, i) => (
            <li key={ach.text} className="flex items-center gap-1">
              {ach.icon}
              {ach.text}
            </li>
          ))}
        </ul>
        <Button
          asChild
          size="sm"
          className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-5 py-2 shadow-lg hover:scale-105 transition-transform"
        >
          <a href={spotlightPro.profileUrl} aria-label={`View ${spotlightPro.name}'s profile`}>
            View Profile
          </a>
        </Button>
      </div>
    </div>
  );
}
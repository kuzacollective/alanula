import React from "react";
import { Users, Star, MapPin, Briefcase, Award } from "lucide-react";

const stats = [
  { icon: Users, label: "Active Pros", value: 18 },
  { icon: Briefcase, label: "Services Listed", value: 25 },
  { icon: MapPin, label: "Cities Covered", value: 15 },
  { icon: Star, label: "Total Reviews", value: 48 },
  { icon: Award, label: "Avg. Rating", value: "4.8/5" },
];

export default function CommunityStats() {
  return (
    <div className="py-12 md:py-16">
      <h2 className="text-3xl font-bold font-poppins text-primary mb-8 text-center">Community Impact</h2>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex flex-col items-center bg-accent/10 px-7 py-5 rounded-xl shadow min-w-[140px]">
            <Icon size={34} className="mb-2 text-accent" />
            <span className="text-xl font-bold">{value.toLocaleString()}</span>
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
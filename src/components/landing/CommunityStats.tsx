
import React from "react";
import { Users, Star } from "lucide-react";

// Dummy data; in real implementation, fetch dynamically
const stats = [
  { icon: Users, label: "Active Hustlers", value: 6 },
  { icon: Star, label: "Total Reviews", value: 8 },
];

export default function CommunityStats() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-8 mb-8 animate-fade-in">
      {stats.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex flex-col items-center bg-accent/10 px-6 py-4 rounded-xl shadow min-w-[130px]">
          <Icon size={32} className="mb-2 text-accent" />
          <span className="text-lg font-semibold">{value.toLocaleString()}</span>
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
      ))}
    </section>
  );
}

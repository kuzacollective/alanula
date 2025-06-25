
import { Wand2, MapPin, Smartphone, BadgeCheck, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: <Wand2 className="text-primary" size={28} />,
    title: "Smart Matching",
    desc: "Connect with talent that fits your needs.",
  },
  {
    icon: <MapPin className="text-accent" size={28} />,
    title: "Local Only",
    desc: "Every provider is proudly based in Mauritius.",
  },
  {
    icon: <Smartphone className="text-primary" size={28} />,
    title: "Mobile First",
    desc: "Fast and easy—on any device.",
  },
  {
    icon: <BadgeCheck className="text-yellow-400" size={28} />,
    title: "No Fees",
    desc: "No commission—book & pay hustlers directly.",
  },
  {
    icon: <HeartHandshake className="text-accent" size={28} />,
    title: "Community Driven",
    desc: "Built to empower local micro-entrepreneurs.",
  },
];

export default function WhyAlanula() {
  return (
    <div className="py-12 md:py-16">
      <h2 className="text-3xl md:text-3xl font-bold font-poppins text-secondary text-center mb-8">Why Alanula?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
        {reasons.map(r => (
          <div key={r.title} className="flex flex-col items-center gap-2 text-center">
            {r.icon}
            <div className="font-bold font-poppins text-lg text-secondary">{r.title}</div>
            <div className="text-base text-muted-foreground">{r.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

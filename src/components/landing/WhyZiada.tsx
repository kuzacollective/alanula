
import { Wand2, MapPin, Smartphone, BadgeCheck } from "lucide-react";

const reasons = [
  {
    icon: <Wand2 className="text-primary" size={28} />,
    title: "Smart Matching",
    desc: "Get connected to great local talent for your needs.",
  },
  {
    icon: <MapPin className="text-accent" size={28} />,
    title: "Local Only",
    desc: "All hustlers are based right here in Mauritius.",
  },
  {
    icon: <Smartphone className="text-primary" size={28} />,
    title: "Mobile First",
    desc: "Easy to use on any phone or device.",
  },
  {
    icon: <BadgeCheck className="text-yellow-400" size={28} />,
    title: "No Fees",
    desc: "100% free — pay your hustler directly.",
  },
];

export default function WhyZiada() {
  return (
    <section className="py-10 md:py-16 bg-white dark:bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-secondary text-center mb-8">Why Ziada?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 px-6">
          {reasons.map(r => (
            <div key={r.title} className="flex flex-col items-center gap-2 text-center">
              {r.icon}
              <div className="font-bold font-poppins text-lg text-secondary">{r.title}</div>
              <div className="text-base text-muted-foreground">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

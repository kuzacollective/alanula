
import { Search, MessageCircle, Star } from "lucide-react";

const steps = [
  {
    icon: <Search className="text-primary" size={36} />,
    title: "Discover a service",
    desc: "Browse and find what you need in seconds.",
  },
  {
    icon: <MessageCircle className="text-accent" size={36} />,
    title: "Book via WhatsApp",
    desc: "Connect instantly with a hustler on WhatsApp.",
  },
  {
    icon: <Star className="text-yellow-400" size={36} />,
    title: "Rate & rebook",
    desc: "Leave feedback & hire again easily.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-9 md:py-14 bg-white dark:bg-background">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-secondary text-center mb-8">How it works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-3">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center text-center animate-fade-in md:w-1/3">
              <div className="mb-2">{step.icon}</div>
              <h3 className="font-bold font-poppins text-lg text-secondary mb-1">{step.title}</h3>
              <p className="text-base font-inter text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

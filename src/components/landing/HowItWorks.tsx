import { Search, MessageCircle, Star, UserPlus, Sparkle } from "lucide-react";

const steps = [
  {
    icon: <Search className="text-primary" size={36} />,
    title: "Discover a Service",
    desc: "Browse Mauritius' top local gigs in seconds.",
  },
  {
    icon: <MessageCircle className="text-accent" size={36} />,
    title: "Book via WhatsApp",
    desc: "Message a pro instantly. No middlemen—ever.",
  },
  {
    icon: <UserPlus className="text-yellow-500" size={36} />,
    title: "Become a Pro",
    desc: "Share your side gig. Get more clients, fast.",
  },
  {
    icon: <Star className="text-yellow-400" size={36} />,
    title: "Rate & Rebook",
    desc: "Leave reviews & hire again with confidence.",
  },
];

export default function HowItWorks() {
  return (
    <div className="py-12 md:py-16">
      <h2 className="text-3xl md:text-3xl font-bold font-poppins text-secondary text-center mb-8">How it works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex flex-col items-center text-center animate-fade-in">
            <div className="mb-2">{step.icon}</div>
            <h3 className="font-bold font-poppins text-lg text-secondary mb-1">{step.title}</h3>
            <p className="text-base font-inter text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
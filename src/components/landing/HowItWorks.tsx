import { Search, MessageCircle, Star, UserPlus, Shield, Clock } from "lucide-react";

const steps = [
  {
    icon: <Search className="text-primary" size={40} />,
    title: "Discover Services",
    desc: "Browse verified local pros by category, location, and price. Read reviews and see portfolios.",
    color: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    icon: <MessageCircle className="text-accent" size={40} />,
    title: "Connect Instantly",
    desc: "Message pros directly via WhatsApp. No middlemen, no complicated booking systems.",
    color: "bg-green-50 dark:bg-green-900/20"
  },
  {
    icon: <Shield className="text-yellow-500" size={40} />,
    title: "Book with Confidence",
    desc: "All pros are verified. See ratings, reviews, and work samples before you book.",
    color: "bg-yellow-50 dark:bg-yellow-900/20"
  },
  {
    icon: <Star className="text-purple-500" size={40} />,
    title: "Rate & Review",
    desc: "Share your experience to help others and build trust in our community.",
    color: "bg-purple-50 dark:bg-purple-900/20"
  },
];

const forPros = [
  {
    icon: <UserPlus className="text-accent" size={36} />,
    title: "List Your Service",
    desc: "Create your profile in minutes. Showcase your skills and build your client base.",
  },
  {
    icon: <Clock className="text-primary" size={36} />,
    title: "Get Booked Fast",
    desc: "Receive direct inquiries from local clients looking for your expertise.",
  },
];

export default function HowItWorks() {
  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-secondary mb-4">How Alanula Works</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connecting clients with trusted local professionals has never been easier
        </p>
      </div>

      {/* For Clients */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold font-poppins text-center mb-12 text-primary">For Clients</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center text-center animate-fade-in group">
              <div className={`mb-6 p-6 rounded-2xl ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                {idx + 1}
              </div>
              <h4 className="font-bold font-poppins text-xl text-secondary mb-3">{step.title}</h4>
              <p className="text-base font-inter text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* For Pros */}
      <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
        <h3 className="text-2xl font-bold font-poppins text-center mb-12 text-primary">For Service Providers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {forPros.map((item, idx) => (
            <div key={item.title} className="flex flex-col items-center text-center animate-fade-in">
              <div className="mb-6 p-6 rounded-2xl bg-accent/10">
                {item.icon}
              </div>
              <div className="bg-accent/20 text-accent rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                {idx + 1}
              </div>
              <h4 className="font-bold font-poppins text-xl text-secondary mb-3">{item.title}</h4>
              <p className="text-base font-inter text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a 
            href="/join" 
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            <UserPlus size={20} />
            Join as a Pro
          </a>
        </div>
      </div>
    </div>
  );
}
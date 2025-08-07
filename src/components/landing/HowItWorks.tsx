import { Search, MessageCircle, Star, UserPlus, Shield, Clock } from "lucide-react";

const steps = [
  {
    icon: <Search className="text-primary" size={40} />,
    title: "Discover Services",
    desc: "Browse verified local pros by category, location, and price. Read reviews and see portfolios.",
    color: "bg-primary/10"
  },
  {
    icon: <MessageCircle className="text-secondary" size={40} />,
    title: "Connect Instantly",
    desc: "Message pros directly via WhatsApp. No middlemen, no complicated booking systems.",
    color: "bg-secondary/10"
  },
  {
    icon: <Shield className="text-accent-foreground" size={40} />,
    title: "Book with Confidence",
    desc: "All pros are verified. See ratings, reviews, and work samples before you book.",
    color: "bg-accent/10"
  },
  {
    icon: <Star className="text-primary" size={40} />,
    title: "Rate & Review",
    desc: "Share your experience to help others and build trust in our community.",
    color: "bg-primary/10"
  },
];

const forPros = [
  {
    icon: <UserPlus className="text-secondary" size={36} />,
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
    <div className="py-12 sm:py-16 md:py-24 px-4">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-secondary mb-4">How Alanula Works</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
          Connecting clients with trusted local professionals has never been easier
        </p>
      </div>

      {/* For Clients */}
      <div className="mb-16 sm:mb-20">
        <h3 className="text-xl sm:text-2xl font-bold font-poppins text-center mb-8 sm:mb-12 text-primary">For Clients</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center text-center animate-fade-in group">
              <div className={`mb-4 sm:mb-6 p-4 sm:p-6 rounded-2xl ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <div className="bg-primary/10 text-primary rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-sm font-bold mb-3 sm:mb-4">
                {idx + 1}
              </div>
              <h4 className="font-bold font-poppins text-lg sm:text-xl text-secondary mb-2 sm:mb-3">{step.title}</h4>
              <p className="text-sm sm:text-base font-inter text-muted-foreground leading-relaxed px-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* For Pros */}
      <div className="bg-muted/30 rounded-3xl p-6 sm:p-8 md:p-12">
        <h3 className="text-xl sm:text-2xl font-bold font-poppins text-center mb-8 sm:mb-12 text-primary">For Service Providers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {forPros.map((item, idx) => (
            <div key={item.title} className="flex flex-col items-center text-center animate-fade-in">
              <div className="mb-4 sm:mb-6 p-4 sm:p-6 rounded-2xl bg-secondary/10">
                {item.icon}
              </div>
              <div className="bg-secondary/20 text-secondary rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-sm font-bold mb-3 sm:mb-4">
                {idx + 1}
              </div>
              <h4 className="font-bold font-poppins text-lg sm:text-xl text-secondary mb-2 sm:mb-3">{item.title}</h4>
              <p className="text-sm sm:text-base font-inter text-muted-foreground leading-relaxed px-2">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8">
          <a 
            href="/join-pro" 
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-sm sm:text-base"
          >
            <UserPlus size={20} />
            Join as a Pro
          </a>
        </div>
      </div>
    </div>
  );
}
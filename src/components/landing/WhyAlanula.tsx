import { Wand2, MapPin, Smartphone, BadgeCheck, HeartHandshake, Shield } from "lucide-react";

const reasons = [
  {
    icon: <Shield className="text-primary" size={32} />,
    title: "Verified Pros Only",
    desc: "Every service provider is manually verified for quality and authenticity.",
    color: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    icon: <MapPin className="text-accent" size={32} />,
    title: "100% Local",
    desc: "Supporting Mauritian talent and keeping money in our community.",
    color: "bg-green-50 dark:bg-green-900/20"
  },
  {
    icon: <Smartphone className="text-purple-500" size={32} />,
    title: "WhatsApp Direct",
    desc: "No app downloads needed. Book through the platform you already use.",
    color: "bg-purple-50 dark:bg-purple-900/20"
  },
  {
    icon: <BadgeCheck className="text-yellow-500" size={32} />,
    title: "Zero Commission",
    desc: "Pros keep 100% of their earnings. Fair pricing for everyone.",
    color: "bg-yellow-50 dark:bg-yellow-900/20"
  },
  {
    icon: <HeartHandshake className="text-pink-500" size={32} />,
    title: "Community First",
    desc: "Built by locals, for locals. Empowering everyday entrepreneurs.",
    color: "bg-pink-50 dark:bg-pink-900/20"
  },
  {
    icon: <Wand2 className="text-indigo-500" size={32} />,
    title: "Smart Matching",
    desc: "Advanced filters help you find exactly what you need, when you need it.",
    color: "bg-indigo-50 dark:bg-indigo-900/20"
  },
];

export default function WhyAlanula() {
  return (
    <div className="py-12 sm:py-16 md:py-24 px-4">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-secondary mb-4">Why Choose Alanula?</h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
          We're not just another marketplace. We're a community-driven platform built specifically for Mauritius.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {reasons.map((reason, idx) => (
          <div key={reason.title} className="group">
            <div className="bg-white dark:bg-card rounded-2xl p-6 sm:p-8 shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl ${reason.color} w-fit group-hover:scale-110 transition-transform duration-300`}>
                {reason.icon}
              </div>
              <h3 className="font-bold font-poppins text-lg sm:text-xl text-secondary mb-2 sm:mb-3">{reason.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="text-center mt-12 sm:mt-16">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 sm:p-8 md:p-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins text-secondary mb-4">
            Ready to experience the difference?
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Join thousands of satisfied clients and successful service providers who trust Alanula.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
            <a 
              href="/services" 
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Browse Services
            </a>
            <a 
              href="/join-pro" 
              className="inline-flex items-center justify-center border-2 border-accent text-accent px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors text-sm sm:text-base"
            >
              Join as a Pro
            </a>
            <a 
              href="/join-customer" 
              className="inline-flex items-center justify-center border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-sm sm:text-base"
            >
              Request a Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
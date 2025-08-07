import Logo from "../Logo";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-8 sm:py-12 md:py-20 gap-4 sm:gap-6 bg-gradient-to-b from-background to-muted/20 px-4">
      <Logo size={64} className="mb-2 animate-fade-in" />
      <div className="text-center max-w-4xl mx-auto w-full">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-poppins font-bold tracking-tight text-primary text-center mb-4 sm:mb-6 animate-fade-in leading-tight">
          Find trusted local pros.<br className="hidden md:block" /> 
          <span className="text-accent">Book in minutes.</span>
        </h1>
        <p className="text-lg xs:text-xl md:text-2xl font-inter text-muted-foreground text-center mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
          Alanula connects you with verified local service providers across Mauritius. From tutors to photographers, find the perfect pro for your needs—fast, easy, and trusted.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md mx-auto justify-center">
          <Button asChild className="w-full font-semibold text-base sm:text-lg bg-primary hover:bg-primary/90 text-primary-foreground py-3 sm:py-4 px-6 sm:px-8 shadow-lg animate-scale-in">
            <Link to="/services">Browse Services</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full font-semibold text-base sm:text-lg border-2 border-accent text-accent py-3 sm:py-4 px-6 sm:px-8 hover:bg-accent hover:text-accent-foreground animate-scale-in"
          >
            <Link to="/join-pro">Join as a Pro</Link>
          </Button>
        </div>
        
        {/* Additional CTA for customers */}
        <div className="mt-3 sm:mt-4">
          <Button
            variant="ghost"
            asChild
            className="font-semibold text-sm sm:text-base text-muted-foreground hover:text-primary underline px-2"
          >
            <Link to="/join-customer">Looking for Service Providers (Alanula Pros)? Request here</Link>
          </Button>
        </div>
      </div>
      
      {/* Trust indicators */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground px-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>18+ Verified Pros</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span>15+ Cities Covered</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          <span>4.8★ Average Rating</span>
        </div>
      </div>
    </section>
  );
}
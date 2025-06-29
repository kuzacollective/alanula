import Logo from "../Logo";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-20 gap-6 bg-background">
      <Logo size={42} />
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold tracking-tight text-primary text-center mb-6 animate-fade-in leading-tight">
          Connect with local pros.<br className="hidden md:block" /> 
          <span className="text-accent">Book in minutes.</span>
        </h1>
        <p className="text-xl md:text-2xl font-inter text-muted-foreground text-center mb-8 max-w-3xl mx-auto leading-relaxed">
          Alanula will be the fastest, easiest way to find and book trusted local service providers in Mauritius. 
          We're building a platform to help everyday pros gain visibility and grow their income—while helping clients find great help, fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto justify-center">
          <Button asChild className="w-full font-semibold text-lg bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-8 shadow-lg animate-scale-in">
            <Link to="/services">Preview Services</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full font-semibold text-lg border-2 border-accent text-accent py-4 px-8 hover:bg-accent hover:text-accent-foreground animate-scale-in"
          >
            <Link to="/join">Join Waitlist</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
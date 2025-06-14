
import Logo from "../Logo";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-7 md:py-16 gap-4 bg-background">
      <Logo size={38} />
      <h1 className="text-3xl md:text-5xl font-poppins font-bold tracking-tight text-primary text-center mb-3 animate-fade-in">
        Find local hustlers.<br className="hidden md:block" /> Book them in minutes.
      </h1>
      <p className="text-lg md:text-xl font-inter text-secondary-foreground text-center mb-6 max-w-xl">
        Ziada.mu is the fastest, easiest way to find and book trusted local service providers in Mauritius. We help everyday hustlers build visibility and grow their income—while helping clients find great help, fast.
      </p>
      <div className="flex flex-col md:flex-row gap-3 w-full max-w-sm justify-center">
        <Button asChild className="w-full font-semibold text-base bg-primary hover:bg-primary/90 text-primary-foreground py-3 shadow-lg animate-scale-in">
          <Link to="/services">Browse Services</Link>
        </Button>
        <Button
          variant="outline"
          asChild
          className="w-full font-semibold text-base border-primary text-primary py-3 hover:bg-primary hover:text-primary-foreground animate-scale-in"
        >
          <Link to="/join">List Your Service</Link>
        </Button>
      </div>
    </section>
  );
}

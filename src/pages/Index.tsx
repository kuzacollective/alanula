
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PopularCategories from "@/components/landing/PopularCategories";
import WhyZiada from "@/components/landing/WhyZiada";
import LandingFooter from "@/components/landing/LandingFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-inter">
      <Hero />
      <HowItWorks />
      <PopularCategories />
      <WhyZiada />
      <LandingFooter />
    </div>
  );
};

export default Index;

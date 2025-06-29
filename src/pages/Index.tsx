import Hero from "@/components/landing/Hero";
import CommunityStats from "@/components/landing/CommunityStats";
import PopularCategories from "@/components/landing/PopularCategories";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyAlanula from "@/components/landing/WhyAlanula";
import LandingFooter from "@/components/landing/LandingFooter";

// Consistent section wrapper for layout
const Section = ({ children, bg = "" }: { children: React.ReactNode; bg?: string }) => (
  <section className={`w-full ${bg}`}><div className="max-w-6xl mx-auto px-6">{children}</div></section>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-inter">
      <Section><Hero /></Section>
      <Section bg="bg-muted/10"><CommunityStats /></Section>
      <Section><PopularCategories /></Section>
      <Section bg="bg-muted/10"><HowItWorks /></Section>
      <Section><WhyAlanula /></Section>
      <LandingFooter />
    </div>
  );
};

export default Index;
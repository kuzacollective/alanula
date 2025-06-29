import Hero from "@/components/landing/Hero";
import HustlerSpotlight from "@/components/landing/HustlerSpotlight";
import CommunityStats from "@/components/landing/CommunityStats";
import RecentlyJoined from "@/components/landing/RecentlyJoined";
import PopularCategories from "@/components/landing/PopularCategories";
import HowItWorks from "@/components/landing/HowItWorks";
import SuccessStories from "@/components/landing/SuccessStories";
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
      <Section bg="bg-yellow-50 dark:bg-yellow-900/10"><HustlerSpotlight /></Section>
      <Section><CommunityStats /></Section>
      <Section bg="bg-muted/10"><RecentlyJoined /></Section>
      <Section><PopularCategories /></Section>
      <Section bg="bg-muted/10"><HowItWorks /></Section>
      <Section><SuccessStories /></Section>
      <Section bg="bg-muted/10"><WhyAlanula /></Section>
      <LandingFooter />
    </div>
  );
};

export default Index;
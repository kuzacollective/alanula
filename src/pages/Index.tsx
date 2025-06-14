import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import PopularCategories from "@/components/landing/PopularCategories";
import WhyZiada from "@/components/landing/WhyZiada";
import LandingFooter from "@/components/landing/LandingFooter";
import HustlerSpotlight from "@/components/landing/HustlerSpotlight";
import CommunityStats from "@/components/landing/CommunityStats";
import SuccessStories from "@/components/landing/SuccessStories";
import RecentlyJoined from "@/components/landing/RecentlyJoined";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-inter">
      <Hero />
      <HustlerSpotlight />
      <RecentlyJoined />
      <CommunityStats />
      <HowItWorks />
      <PopularCategories />
      <SuccessStories />
      <WhyZiada />
      <LandingFooter />
    </div>
  );
};

export default Index;

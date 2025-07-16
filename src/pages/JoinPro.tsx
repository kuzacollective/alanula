import Header from "@/components/ui/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Users, MessageCircle, TrendingUp, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function JoinPro() {
  const navigate = useNavigate();
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const providerFormUrl = "https://airtable.com/embed/appYCffZwGEMJ3xcF/pagEvCD1lwQwVV0qx/form?backgroundColor=transparent";

  const benefits = [
    {
      icon: <TrendingUp className="text-primary" size={24} />,
      title: "Grow Your Income",
      desc: "Turn your skills into a thriving business with direct client bookings"
    },
    {
      icon: <Users className="text-accent" size={24} />,
      title: "Build Your Client Base",
      desc: "Get discovered by customers actively looking for your services"
    },
    {
      icon: <MessageCircle className="text-green-500" size={24} />,
      title: "Direct WhatsApp Booking",
      desc: "No middlemen - communicate directly with clients via WhatsApp"
    },
    {
      icon: <Shield className="text-blue-500" size={24} />,
      title: "Zero Commission",
      desc: "Keep 100% of your earnings - we don't take any fees from your bookings"
    },
    {
      icon: <Star className="text-yellow-500" size={24} />,
      title: "Build Your Reputation",
      desc: "Showcase your work and collect reviews to attract more clients"
    },
    {
      icon: <Zap className="text-purple-500" size={24} />,
      title: "Get Featured",
      desc: "Top-performing pros get featured placement for maximum visibility"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-10 px-3 font-inter">
      <Header />
      <div className="w-full max-w-4xl mb-8">
        <Button
          variant="ghost"
          className="flex items-center gap-2 mb-6"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Button>
        
        <div className="text-center mb-12">
          <h1 className="text-primary font-poppins font-bold text-4xl sm:text-6xl mb-6 leading-tight">
            Turn Your Skills Into <span className="text-accent">Income</span>
          </h1>
          <p className="text-secondary-foreground text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join Mauritius' fastest-growing platform for service providers. Get discovered by clients who need your expertise and grow your business with zero commission fees.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>25+ Active Pros</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>4.8★ Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span>Zero Commission</span>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, idx) => (
            <div key={benefit.title} className="bg-white dark:bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 bg-muted/30 rounded-lg w-fit">
                {benefit.icon}
              </div>
              <h3 className="font-bold font-poppins text-lg text-secondary mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full max-w-2xl bg-white dark:bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 text-center">
          <h2 className="text-2xl font-bold font-poppins text-primary mb-2">Ready to Get Started?</h2>
          <p className="text-muted-foreground">Fill out this form to join our waitlist and be among the first pros when we launch!</p>
        </div>
        
        <div className="relative">
          {/* Show spinner until iframe loads */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-background/90 z-10 rounded-md animate-fade-in min-h-[600px]">
              <div className="flex flex-col items-center gap-4">
                <svg
                  className="animate-spin h-8 w-8 text-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-label="Loading form"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                <p className="text-sm text-muted-foreground">Loading form...</p>
              </div>
            </div>
          )}
          
          <iframe
            className="w-full min-h-[600px] border-0 transition-opacity duration-300"
            src={providerFormUrl}
            title="Alanula Service Provider Waitlist Form"
            onLoad={() => setIframeLoaded(true)}
            onError={() => {
              console.error('Failed to load Airtable form');
              setIframeLoaded(true);
            }}
            style={{ 
              background: "transparent",
              opacity: iframeLoaded ? 1 : 0
            }}
            allow="camera; microphone; geolocation"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </div>
      
      <div className="text-center text-sm text-muted-foreground mt-6 max-w-md">
        <p className="mb-2">
          Having trouble with the form? Try refreshing the page or{" "}
          <a 
            href={providerFormUrl.replace('/embed/', '/')} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent font-semibold underline hover:text-accent/80"
          >
            open it in a new tab
          </a>.
        </p>
        <p>
          Questions? <a href="/contact" className="text-accent font-semibold underline">Contact us</a>
        </p>
      </div>
    </div>
  );
}
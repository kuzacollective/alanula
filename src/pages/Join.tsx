import Header from "@/components/ui/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Briefcase, Star, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

type FormType = 'provider' | 'customer' | null;

export default function Join() {
  const navigate = useNavigate();
  const [selectedForm, setSelectedForm] = useState<FormType>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Updated Airtable embed URLs with proper parameters
  const providerFormUrl = "https://airtable.com/embed/appYCffZwGEMJ3xcF/pagEvCD1lwQwVV0qx/form?backgroundColor=transparent";
  const customerFormUrl = "https://airtable.com/embed/appYCffZwGEMJ3xcF/pagKPQDue1zA7yulf/form?backgroundColor=transparent";

  const currentFormUrl = selectedForm === 'provider' ? providerFormUrl : customerFormUrl;

  if (selectedForm) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center py-10 px-3 font-inter">
        <Header />
        <div className="w-full max-w-2xl mb-8">
          <Button
            variant="ghost"
            className="flex items-center gap-2 mb-4"
            onClick={() => {
              setSelectedForm(null);
              setIframeLoaded(false);
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to form selection
          </Button>
          <h1 className="text-primary font-poppins font-bold text-3xl sm:text-4xl mb-2 text-center">
            {selectedForm === 'provider' ? 'Join as a Service Provider' : 'Join as a Customer'}
          </h1>
          <p className="text-secondary-foreground text-lg text-center mb-6">
            {selectedForm === 'provider' 
              ? "Ready to grow your business? Fill out this form to be among the first service providers when we launch!"
              : "Looking for quality local services? Join our waitlist to get early access to trusted providers in Mauritius!"
            }
          </p>
        </div>
        
        <div className="w-full max-w-2xl bg-white dark:bg-card rounded-lg shadow-lg overflow-hidden">
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
              src={currentFormUrl}
              title={`Alanula ${selectedForm === 'provider' ? 'Service Provider' : 'Customer'} Waitlist Form`}
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
              href={selectedForm === 'provider' ? providerFormUrl.replace('/embed/', '/') : customerFormUrl.replace('/embed/', '/')} 
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

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-10 px-3 font-inter">
      <Header />
      <div className="w-full max-w-4xl mb-8">
        <Button
          variant="ghost"
          className="flex items-center gap-2 mb-4"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Button>
        <h1 className="text-primary font-poppins font-bold text-3xl sm:text-5xl mb-4 text-center">
          Join the Alanula Waitlist
        </h1>
        <p className="text-secondary-foreground text-lg text-center mb-8 max-w-3xl mx-auto">
          Be among the first to experience Mauritius' premier service provider platform! 
          Choose your path below to get started.
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service Provider Card */}
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group" onClick={() => setSelectedForm('provider')}>
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-poppins text-primary mb-2">
              I'm a Service Provider
            </CardTitle>
            <p className="text-muted-foreground">
              Ready to grow your business and reach more customers?
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Build Your Profile</h4>
                  <p className="text-xs text-muted-foreground">Showcase your skills, experience, and portfolio</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Connect with Clients</h4>
                  <p className="text-xs text-muted-foreground">Get direct bookings through WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">No Commission Fees</h4>
                  <p className="text-xs text-muted-foreground">Keep 100% of your earnings</p>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              Join as Service Provider
            </Button>
          </CardContent>
        </Card>

        {/* Customer Card */}
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group" onClick={() => setSelectedForm('customer')}>
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-colors">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <CardTitle className="text-2xl font-poppins text-primary mb-2">
              I'm Looking for Services
            </CardTitle>
            <p className="text-muted-foreground">
              Need help finding trusted local service providers?
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Verified Providers</h4>
                  <p className="text-xs text-muted-foreground">All service providers are verified and rated</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Easy Booking</h4>
                  <p className="text-xs text-muted-foreground">Book services directly via WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Local Expertise</h4>
                  <p className="text-xs text-muted-foreground">Find the best local talent in Mauritius</p>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Join as Customer
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-sm text-muted-foreground mt-8 max-w-2xl">
        <p className="mb-2">
          <strong>Why join the waitlist?</strong> Be the first to know when we launch, get exclusive early access, 
          and help shape the platform with your feedback.
        </p>
        <p>
          Questions? <a href="/contact" className="text-accent font-semibold underline hover:text-accent/80">Contact us</a>
        </p>
      </div>
    </div>
  );
}
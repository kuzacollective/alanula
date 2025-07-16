import Header from "@/components/ui/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Briefcase, Star, MessageCircle, TrendingUp, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Join() {
  const navigate = useNavigate();

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
        <p className="text-muted-foreground text-lg text-center mb-8 max-w-3xl mx-auto">
          Be among the first to experience Mauritius' premier service provider platform! 
          Choose your path below to get started.
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service Provider Card */}
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group" onClick={() => navigate('/join-pro')}>
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
                <TrendingUp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Grow Your Income</h4>
                  <p className="text-xs text-muted-foreground">Turn your skills into a thriving business</p>
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
                <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
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
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group" onClick={() => navigate('/join-customer')}>
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
                <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
                <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Quality Guaranteed</h4>
                  <p className="text-xs text-muted-foreground">Read reviews and ratings from real customers</p>
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
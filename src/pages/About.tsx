import Header from "@/components/ui/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Shield, Zap, Target, Globe } from "lucide-react";
import React from "react";

const ABOUT_VALUES = [
  { 
    icon: <Heart className="text-red-500" size={24} />,
    label: "Community First", 
    desc: "We prioritize local talent and community growth over corporate profits" 
  },
  { 
    icon: <Shield className="text-blue-500" size={24} />,
    label: "Trust & Transparency", 
    desc: "Verified profiles, honest reviews, and clear communication always" 
  },
  { 
    icon: <Users className="text-green-500" size={24} />,
    label: "Empowerment", 
    desc: "Helping everyday entrepreneurs build sustainable businesses" 
  },
  { 
    icon: <Zap className="text-yellow-500" size={24} />,
    label: "Simplicity", 
    desc: "No complex apps or systems—just simple, effective connections" 
  },
];

const TEAM_STATS = [
  { label: "Founded", value: "2024" },
  { label: "Team Size", value: "Small & Agile" },
  { label: "Location", value: "Mauritius" },
  { label: "Mission", value: "Local First" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-primary">About Alanula</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building Mauritius' most trusted platform for local services—
            connecting talented professionals with clients who need them.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-primary" size={32} />
              <h2 className="text-3xl font-bold font-poppins text-primary">Our Mission</h2>
            </div>
            <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6">
              Alanula exists to empower local entrepreneurs and make quality services accessible to everyone in Mauritius. 
              We believe that talented individuals shouldn't struggle to find clients, and clients shouldn't struggle to find reliable help.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By creating a trusted, transparent marketplace, we're building bridges between supply and demand, 
              helping our community thrive economically while maintaining the personal touch that makes Mauritius special.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-poppins mb-8 text-secondary">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">The Problem We Saw</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Despite being home to incredibly talented individuals—from skilled tutors to creative photographers—
                Mauritius lacked a centralized, trusted platform where people could easily find and book local services.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Word-of-mouth was the primary way to find help, limiting opportunities for both service providers and clients.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Solution</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Alanula bridges this gap by providing a simple, trustworthy platform where verified local professionals 
                can showcase their skills and connect directly with clients who need their expertise.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                No complicated booking systems, no hidden fees—just honest connections that benefit everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-poppins mb-12 text-secondary text-center">What Drives Us</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {ABOUT_VALUES.map(({ icon, label, desc }) => (
              <Card key={label} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-muted rounded-lg">
                      {icon}
                    </div>
                    <div>
                      <div className="font-bold text-lg text-secondary mb-2">{label}</div>
                      <div className="text-muted-foreground text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold font-poppins mb-8 text-secondary">Our Team</h2>
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {TEAM_STATS.map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold font-poppins text-primary mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-base text-muted-foreground leading-relaxed text-center">
              We're a passionate, small team working alongside AI tools, local creators, and community leaders 
              to bring visibility to the incredible talent that exists across Mauritius. Every feature we build 
              is designed with our local community in mind.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe className="text-accent" size={32} />
              <h2 className="text-3xl font-bold font-poppins text-secondary">Looking Ahead</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Our vision is simple: to become the go-to platform for local services in Mauritius, 
              where every talented individual has the opportunity to build a thriving business, 
              and every client can easily find the help they need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Explore Services
              </a>
              <a 
                href="/join-pro" 
                className="inline-flex items-center justify-center border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Join as a Pro
              </a>
              <a 
                href="/join-customer" 
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Request a Service
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
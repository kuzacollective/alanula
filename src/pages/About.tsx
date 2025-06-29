import Header from "@/components/ui/Header";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const ABOUT_VALUES = [
  { label: "Local First", desc: "We highlight Mauritian providers" },
  { label: "Trust & Transparency", desc: "Verified profiles, ratings, and real people" },
  { label: "Digital Access for All", desc: "Easy tools to list your service, no tech skills needed" },
  { label: "Community Over Corporates", desc: "We're here for micro-entrepreneurs and side pros" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold font-poppins mb-4 text-primary">About Alanula</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Mission</h2>
          <p className="text-base mb-2">
            Alanula is the fastest, easiest way to find and book trusted local service providers in Mauritius. We help everyday pros build visibility and grow their income—while helping clients find great help, fast.
          </p>
          <p className="text-base mb-2">
            We're building the go-to marketplace for everyday services in Mauritius—powered by local talent, trust, and drive. Whether you're booking a tutor or showcasing your side gig, Alanula makes it seamless.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Our Story</h2>
          <p className="text-base mb-2">
            Alanula was born from a simple question: <span className="italic">"Why is it so hard to find reliable help locally?"</span> In a country full of talented individuals offering incredible services, there was no central, trusted platform to connect them with those who need them. We're here to change that.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Our Values</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {ABOUT_VALUES.map(({ label, desc }) => (
              <Card key={label}>
                <CardContent className="pt-4 pb-4">
                  <div className="font-bold text-accent mb-1">{label}</div>
                  <div className="text-muted-foreground text-sm">{desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Team</h2>
          <p className="text-base">
            We are a small, passionate team working with AI tools, local creators, and community leaders to bring visibility to the under-recognized talent of Mauritius.
          </p>
        </section>
      </main>
    </div>
  );
}
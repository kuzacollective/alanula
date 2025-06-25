
import Header from "@/components/ui/Header";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { MessageSquare } from "lucide-react";

const FAQS = [
  {
    q: "How do I book a service?",
    a: "Simply browse listings, click on the provider you like, and use the WhatsApp button to contact them directly."
  },
  {
    q: "How do I list my service?",
    a: "Click \"List My Hustle\" on the homepage. Fill out the Airtable form and upload your details. We'll do the rest."
  },
  {
    q: "Do I need to pay to be listed?",
    a: "No. Basic listings are free! You can upgrade to Featured status for more visibility."
  },
  {
    q: "How does verification work?",
    a: "Our team reviews submissions and verifies providers based on completeness and trust indicators."
  },
  {
    q: "Is payment handled through Alanula?",
    a: "Not at the moment. Clients and hustlers arrange payment directly, usually via cash, bank transfer, or mobile wallet."
  },
  {
    q: "Can I edit my profile later?",
    a: "Yes. Just message us via WhatsApp or submit updates through the same form."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="text-primary" size={32} />
          <h1 className="text-4xl font-bold font-poppins text-primary">Frequently Asked Questions</h1>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          {FAQS.map(({ q, a }, idx) => (
            <Card key={idx}>
              <CardContent className="pt-4 pb-4">
                <div className="font-semibold mb-1">{q}</div>
                <div className="text-muted-foreground text-sm">{a}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}


import Header from "@/components/ui/Header";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, Phone } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="text-primary" size={32} />
          <h1 className="text-4xl font-bold font-poppins text-primary">Contact Us</h1>
        </div>
        <Card>
          <CardContent className="pt-6 pb-6 flex flex-col gap-4">
            <div>
              We'd love to hear from you! Reach out anytime for support, feedback, or partnership inquiries.
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/23059170001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Phone size={20} /> WhatsApp: +230 5917 0001
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@alanula.com"
                className="flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Mail size={20} /> hello@alanula.com
              </a>
              <span className="ml-2 text-xs text-muted-foreground">(Business/Partnerships)</span>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Prefer WhatsApp? Message us for help, edits, or questions.
              </span>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}


import Header from "@/components/ui/Header";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, FileText, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

export default function Legal() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="text-primary" size={32} />
          <h1 className="text-4xl font-bold font-poppins text-primary">Legal &amp; Trust Center</h1>
        </div>
        <Card className="mb-7">
          <CardContent className="flex flex-col gap-4 py-6">
            <div>
              Welcome to the Alanula Legal Center.
              Here you&apos;ll find our site policies and guidelines for safe, compliant usage.
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="flex items-center gap-2 text-primary hover:underline">
                <FileText aria-hidden size={20} /> Privacy Policy
              </Link>
              <Link to="/terms" className="flex items-center gap-2 text-primary hover:underline">
                <Scale aria-hidden size={20} /> Terms of Use
              </Link>
              <Link to="/legal#trust" className="flex items-center gap-2 text-primary hover:underline">
                <ShieldCheck aria-hidden size={20} /> Trust &amp; Safety
              </Link>
            </div>
          </CardContent>
        </Card>
        <section id="trust">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="text-accent" size={20} />
            <span className="font-semibold text-lg">Trust &amp; Safety</span>
          </div>
          <Card>
            <CardContent className="pt-6 pb-6 flex flex-col gap-3">
              <div>
                <strong>Verified Profiles:</strong> We check each hustler submission before publishing. Verified badges are granted to complete and trusted profiles.
              </div>
              <div>
                <strong>No Middlemen:</strong> We don't take commission from payments. All bookings happen directly between client and provider.
              </div>
              <div>
                <strong>Reviews Matter:</strong> After every service, clients are encouraged to leave honest ratings. Good work gets rewarded with visibility.
              </div>
              <div>
                <strong>Flagging Inappropriate Listings:</strong> Users can report suspicious or misleading listings via our WhatsApp support or feedback form.
              </div>
              <div>
                <strong>Protecting Your Info:</strong> We only show the WhatsApp number you provide. No emails or private data are shared publicly.
              </div>
              <div>
                <strong>Community First:</strong> We reserve the right to remove any provider or listing that violates trust, respect, or professionalism.
              </div>
            </CardContent>
          </Card>
        </section>
        <div className="text-center text-xs text-muted-foreground mt-8">
          &copy; {new Date().getFullYear()} Alanula. All rights reserved.
        </div>
      </main>
    </div>
  );
}

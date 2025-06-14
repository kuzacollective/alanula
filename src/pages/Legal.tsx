
import Header from "@/components/ui/Header";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, ShieldAlert } from "lucide-react";
import React from "react";

export default function Legal() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="text-primary" size={32} />
          <h1 className="text-4xl font-bold font-poppins text-primary">Trust &amp; Safety</h1>
        </div>
        <Card className="mb-8">
          <CardContent className="pt-6 pb-6 flex flex-col gap-3">
            <div>
              <strong>Verified Profiles:</strong> We check each hustler submission before publishing. Verified badges are granted to complete and trusted profiles.
            </div>
            <div>
              <strong>No Middlemen:</strong> We don’t take commission from payments. All bookings happen directly between client and provider.
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
        <div className="flex items-center gap-2 mb-2">
          <ShieldAlert className="text-destructive" size={20} />
          <span className="font-semibold text-lg">Important Legal Notice</span>
        </div>
        <div className="text-sm text-muted-foreground mb-2">
          By using Ziada.mu, you agree to our terms:
        </div>
        <ul className="list-disc pl-5 text-sm text-muted-foreground mb-6 leading-relaxed">
          <li>
            Ziada.mu is a marketplace connecting clients and service providers for informational purposes only. We do not guarantee outcomes or handle payments.
          </li>
          <li>
            Users are responsible for verifying the identity and credentials of providers or clients before engaging in services.
          </li>
          <li>
            We reserve the right to moderate, remove, or refuse any listing or review for any reason, including safety or trust concerns.
          </li>
          <li>
            Our privacy policy: We never share your info with outside parties. WhatsApp numbers are only visible to logged-in users.
          </li>
        </ul>
        <div className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Ziada.mu. All rights reserved.
        </div>
      </main>
    </div>
  );
}

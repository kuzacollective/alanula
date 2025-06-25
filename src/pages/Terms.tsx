
import Header from "@/components/ui/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Scale } from "lucide-react";
import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-4">
          <Scale className="text-primary" size={32} />
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-primary">Terms of Use</h1>
        </div>
        <div className="text-sm text-muted-foreground mb-6">Effective Date: June 15th, 2025</div>
        <Card>
          <CardContent className="pt-6 pb-6 flex flex-col gap-4 text-base leading-7">
            <div>
              By using Alanula, you agree to these terms:
            </div>
            <div>
              <strong>1. General</strong>
              <p>
                Alanula is a platform for connecting clients with local service providers (&quot;hustlers&quot;).
                We do not process payments or act as a legal representative of either party.
              </p>
            </div>
            <div>
              <strong>2. User Responsibilities</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Hustlers are responsible for the accuracy and honesty of their listings.</li>
                <li>Clients must communicate respectfully and honor agreed bookings.</li>
              </ul>
            </div>
            <div>
              <strong>3. No Guarantees</strong>
              <p>
                Alanula is not liable for any damage, loss, or dispute arising from services booked through the platform.
                We simply facilitate visibility and connections.
              </p>
            </div>
            <div>
              <strong>4. Content Guidelines</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Misleading, harmful, or illegal services</li>
                <li>Copyrighted or plagiarized material</li>
                <li>Offensive or inappropriate images</li>
              </ul>
              <span>You may not post or promote the above.</span>
            </div>
            <div>
              <strong>5. Termination</strong>
              <p>
                We reserve the right to suspend or remove any listing that violates our guidelines or disrupts trust in the community.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

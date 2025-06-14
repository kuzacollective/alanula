
import Header from "@/components/ui/Header";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="text-primary" size={32} />
          <h1 className="text-3xl md:text-4xl font-bold font-poppins text-primary">Privacy Policy</h1>
        </div>
        <div className="text-sm text-muted-foreground mb-6">Last updated: June 15th, 2025</div>
        <Card>
          <CardContent className="pt-6 pb-6 flex flex-col gap-4 text-base leading-7">
            <div>
              At Ziada.mu, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information.
            </div>
            <div>
              <strong>1. What We Collect</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Personal info you submit (name, WhatsApp number, service description, uploads)</li>
                <li>Analytics from website use (via cookies or third-party tools)</li>
              </ul>
            </div>
            <div>
              <strong>2. How We Use It</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>To publish your profile or service listing</li>
                <li>To help users connect with service providers</li>
                <li>To improve platform performance and user experience</li>
              </ul>
            </div>
            <div>
              <strong>3. What We Don&apos;t Do</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>We do not sell or share your information with third parties for marketing</li>
                <li>We do not publish your email or private details outside your listing</li>
              </ul>
            </div>
            <div>
              <strong>4. Your Rights</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>You can request your data be updated or removed at any time</li>
                <li>You may opt out of communications by contacting our team</li>
              </ul>
            </div>
            <div>
              <strong>5. Contact</strong>
              <div>
                For privacy questions, contact us via WhatsApp or email at{" "}
                <a className="text-primary underline" href="mailto:support@ziadamu.africa">
                  support@ziadamu.africa
                </a>.
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

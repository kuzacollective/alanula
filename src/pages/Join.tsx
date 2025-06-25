
import Header from "@/components/ui/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Join() {
  const navigate = useNavigate();

  // Update with the provided Airtable embed URL
  const airtableEmbedUrl =
    "https://airtable.com/embed/appYCffZwGEMJ3xcF/pagEvCD1lwQwVV0qx/form";

  // Simple loading state for iframe
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-10 px-3 font-inter">
      <Header />
      <div className="w-full max-w-2xl mb-8">
        <Button
          variant="ghost"
          className="flex items-center gap-2 mb-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Button>
        <h1 className="text-primary font-poppins font-bold text-3xl sm:text-4xl mb-2 text-center">
          List Your Service on Alanula
        </h1>
        <p className="text-secondary-foreground text-lg text-center mb-6">
          Fill this short form to join Mauritius' growing community of side-hustlers!
        </p>
      </div>
      <div className="w-full max-w-xl bg-white dark:bg-card rounded-lg shadow-lg p-4 md:p-8 flex flex-col items-center">
        <div className="relative w-full">
          {/* Show spinner until iframe loads */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/60 dark:bg-background/70 z-10 rounded-md animate-fade-in">
              <svg
                className="animate-spin h-7 w-7 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-label="Loading"
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
            </div>
          )}
          <iframe
            className="airtable-embed w-full h-[533px] rounded-md border transition-opacity duration-300"
            src={airtableEmbedUrl}
            title="Alanula Hustler Intake Form"
            frameBorder="0"
            style={{ background: "transparent", border: "1px solid #ccc" }}
            onLoad={() => setIframeLoaded(true)}
            width="100%"
            height="533"
            allowFullScreen
          >
            Loading…
          </iframe>
        </div>
      </div>
      <div className="text-center text-sm text-muted-foreground mt-6">
        Questions? <a href="/contact" className="text-accent font-semibold underline">Contact us</a>
      </div>
    </div>
  );
}

import Header from "@/components/ui/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const navigate = useNavigate();

  // Replace this Airtable URL with your actual published Airtable form link!
  const airtableFormUrl =
    "https://airtable.com/embed/YOUR_AIRTABLE_FORM_ID"; // TODO: Replace with the real Airtable form link

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
          List Your Service on Ziada.mu
        </h1>
        <p className="text-secondary-foreground text-lg text-center mb-6">
          Fill this short form to join Mauritius' growing community of side-hustlers!
        </p>
      </div>
      <div className="w-full max-w-xl bg-white dark:bg-card rounded-lg shadow-lg p-4 md:p-8 flex flex-col items-center">
        <iframe
          className="w-full min-h-[700px] rounded-md border"
          src={airtableFormUrl}
          title="Ziada.mu Hustler Intake Form"
          frameBorder="0"
          style={{ background: "transparent" }}
        >
          Loading…
        </iframe>
      </div>
      <div className="text-center text-sm text-muted-foreground mt-6">
        Questions? <a href="/contact" className="text-accent font-semibold underline">Contact us</a>
      </div>
    </div>
  );
}

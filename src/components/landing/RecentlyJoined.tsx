import React from "react";
import HustlerCard, { Hustler } from "../directory/HustlerCard";
import { HustlerWithAdminFields } from "../directory/HustlerList";

// This should match mockHustlers data structure for demo
const hustlers: HustlerWithAdminFields[] = [
  {
    id: "2",
    name: "Jean-Marc Dumas",
    location: "Curepipe",
    category: "Math Tutor",
    price: 600,
    summary: "Ex-teacher, expert in SC/HSC prep. Patient, bilingual, and proven results. Online & in-person.",
    whatsapp: "23057118822",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    verified: true,
    featured: false,
    isNew: true,
    needsReview: false,
    profileComplete: true,
    status: "verified",
    referredBy: "Aisha Peerun",
    referralCode: "ZU0002",
  },
  {
    id: "4",
    name: "Kavi Luchmun",
    location: "Quatre Bornes",
    category: "Dog Walking",
    price: 250,
    summary: "",
    whatsapp: "",
    photo: "",
    verified: false,
    featured: false,
    isNew: true,
    needsReview: true,
    profileComplete: false,
    status: "under_review",
    referralCode: "ZU0004",
  },
];

export default function RecentlyJoined() {
  // For the demo, use the list above. In real app, fetch dynamically.
  // Only show verified & newly joined hustlers (isNew && verified)
  const verifiedNewHustlers = hustlers.filter(h => h.isNew && h.verified);

  if (verifiedNewHustlers.length === 0) return null;

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold font-poppins text-primary mb-4 text-center md:text-left">
        Recently Joined Hustlers
      </h3>
      <div className="flex gap-4 flex-wrap justify-center md:justify-start">
        {verifiedNewHustlers.map(h => (
          <div key={h.id} className="max-w-xs w-full">
            <HustlerCard
              hustler={h}
              isNew={h.isNew}
              needsReview={h.needsReview}
              profileComplete={!!h.profileComplete}
              status={h.status}
              // Don't show reviews here, keep it simple
              isAdmin={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

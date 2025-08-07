import React from "react";
import ProCard, { Pro } from "../directory/ProCard";
import { ProWithAdminFields } from "../directory/ProList";

const pros: ProWithAdminFields[] = [
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
    id: "5",
    name: "Lina Chun",
    location: "Port Louis",
    category: "Makeup Artist",
    price: 900,
    summary: "Classic & bridal makeup artist. Transformative looks with a personal touch.",
    whatsapp: "23058115612",
    photo: "https://randomuser.me/api/portraits/women/69.jpg",
    verified: true,
    featured: false,
    isNew: true,
    needsReview: false,
    profileComplete: true,
    status: "verified",
    referralCode: "ZU0005",
  },
  {
    id: "9",
    name: "Krish Poolalah",
    location: "Grand Baie",
    category: "Photographer",
    price: 1200,
    summary: "Portrait & event specialist. Capturing moments with an artistic eye.",
    whatsapp: "23059509591",
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    verified: true,
    featured: false,
    isNew: true,
    needsReview: false,
    profileComplete: true,
    status: "verified",
    referralCode: "ZU0009",
  },
  {
    id: "11",
    name: "Ria Sofa",
    location: "Flic en Flac",
    category: "Yoga Instructor",
    price: 500,
    summary: "Yoga for all ages – group & private sessions with a holistic approach.",
    whatsapp: "23057214521",
    photo: "https://randomuser.me/api/portraits/women/58.jpg",
    verified: true,
    featured: false,
    isNew: true,
    needsReview: false,
    profileComplete: true,
    status: "verified",
    referralCode: "ZU0011",
  },
];

export default function RecentlyJoined() {
  // Only show verified & newly joined pros (isNew && verified)
  const verifiedNewPros = pros.filter(h => h.isNew && h.verified);

  if (verifiedNewPros.length === 0) return null;

  return (
    <div className="py-12 md:py-16">
      <h3 className="text-3xl font-bold font-poppins text-primary mb-8 text-center">
        Recently Joined Pros
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {verifiedNewPros.map(h => (
          <div key={h.id} className="w-full">
            <ProCard
              pro={h}
              isNew={h.isNew}
              needsReview={h.needsReview}
            <div className="text-xs text-foreground/60 mb-2">{story.category}</div>
            <blockquote className="text-center text-sm italic text-foreground/70 leading-relaxed">
              isAdmin={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

import { Hustler } from "@/components/directory/HustlerCard";

/** Mock hustlers data used for the services page */
export const mockHustlers: (Hustler & {
  isNew?: boolean;
  needsReview?: boolean;
  profileComplete?: boolean;
  status?: "verified" | "unverified" | "under_review";
  referredBy?: string;
  referralCode?: string;
})[] = [
  {
    id: "1",
    name: "Aisha Peerun",
    location: "Port Louis",
    category: "Makeup Artist",
    price: 800,
    summary: "Certified MUA with 5+ years experience. Bridal, casual and editorial styles. 5⭐ reviews.",
    whatsapp: "23057940001",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    verified: true,
    featured: true,
    isNew: false,
    needsReview: false,
    profileComplete: true,
    status: "verified",
    referredBy: "Sarah Wong",
    referralCode: "ZU0001"
  },
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
    referralCode: "ZU0002"
  },
  {
    id: "3",
    name: "Shana Gopee",
    location: "Rose Hill",
    category: "CV Writing",
    price: 350,
    summary: "Professional resume and LinkedIn makeover, tailored to Mauritian job market.",
    whatsapp: "23059487733",
    photo: "",
    verified: false,
    featured: false,
    isNew: false,
    needsReview: true, // flagged for incomplete
    profileComplete: false,
    status: "unverified",
    referralCode: "ZU0003"
  },
  // Under review & incomplete profile
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
    referralCode: "ZU0004"
  },
  // Verified, but missing profile pic (incomplete)
  {
    id: "5",
    name: "Nirvana Appadoo",
    location: "Moka",
    category: "Yoga Instructor",
    price: 500,
    summary: "Certified yoga trainer. Group & private classes. All levels welcome.",
    whatsapp: "23058740056",
    photo: "",
    verified: true,
    featured: false,
    isNew: false,
    needsReview: true,
    profileComplete: false,
    status: "verified",
    referredBy: "",
    referralCode: "ZU0005"
  },
  // Unverified and incomplete profile
  {
    id: "6",
    name: "Sarah Wong",
    location: "Vacoas",
    category: "Guitar Teacher",
    price: 700,
    summary: "",
    whatsapp: "",
    photo: "",
    verified: false,
    featured: false,
    isNew: false,
    needsReview: true,
    profileComplete: false,
    status: "unverified",
    referralCode: "ZU0006"
  }
];

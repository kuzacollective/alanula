import React, { useState } from "react";
import HustlerCard, { Hustler } from "@/components/directory/HustlerCard";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const mockHustlers: (Hustler & {
  isNew?: boolean;
  needsReview?: boolean;
  profileComplete?: boolean;
  status?: "verified" | "unverified" | "under_review";
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
    status: "verified"
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
    status: "verified"
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
    status: "unverified"
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
    status: "under_review"
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
    status: "verified"
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
    status: "unverified"
  }
];

const categories = [
  { label: "Makeup Artist", value: "Makeup Artist" },
  { label: "Math Tutor", value: "Math Tutor" },
  { label: "CV Writing", value: "CV Writing" },
  { label: "Dog Walking", value: "Dog Walking" },
  { label: "Yoga Instructor", value: "Yoga Instructor" },
  { label: "Guitar Teacher", value: "Guitar Teacher" }
];

const locations = [
  { label: "Port Louis", value: "Port Louis" },
  { label: "Curepipe", value: "Curepipe" },
  { label: "Rose Hill", value: "Rose Hill" },
  { label: "Quatre Bornes", value: "Quatre Bornes" },
  { label: "Moka", value: "Moka" },
  { label: "Vacoas", value: "Vacoas" }
];

function isProfileComplete(h: typeof mockHustlers[0]) {
  return !!h.summary && !!h.whatsapp && !!h.photo;
}

export default function Services() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [adminMode, setAdminMode] = useState(false);

  const filtered = mockHustlers.filter((h) => {
    const matchSearch =
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.summary.toLowerCase().includes(search.toLowerCase());
    const matchCat = !category || h.category === category;
    const matchLoc = !location || h.location === location;

    if (adminMode) {
      return matchSearch && matchCat && matchLoc;
    }
    // Filter for normal users: only verified + complete
    const complete = isProfileComplete(h);
    return matchSearch && matchCat && matchLoc && h.verified && complete;
  });

  return (
    <div className="py-8 px-2 min-h-screen bg-background">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-poppins font-bold text-primary mb-2">
            Browse Local Hustlers
          </h1>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">MVP Preview</Badge>
            <div className="flex items-center gap-1 ml-3">
              <Switch checked={adminMode} onCheckedChange={setAdminMode} id="admin-mode" />
              <label htmlFor="admin-mode" className="text-xs text-muted-foreground">Admin view</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 items-stretch mb-6">
          <Input
            placeholder="Search for a service, name or skill…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="md:w-[220px] bg-white dark:bg-card"
          />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="md:w-[180px] bg-white dark:bg-card">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(opt => (
                <SelectItem value={opt.value} key={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="md:w-[160px] bg-white dark:bg-card">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map(opt => (
                <SelectItem value={opt.value} key={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-muted-foreground py-16">
              No hustlers found. Try again!
            </div>
          ) : (
            filtered.map(h => (
              <HustlerCard
                key={h.id}
                hustler={h}
                isAdmin={adminMode}
                isNew={h.isNew}
                needsReview={h.needsReview}
                profileComplete={isProfileComplete(h)}
                status={h.status}
              />
            ))
          )}
        </div>
        <div className="text-center text-sm mt-7 text-muted-foreground">
          Powered by <span className="text-primary font-medium">Airtable</span> & Ziada.mu community 🚀
        </div>
      </div>
    </div>
  );
}

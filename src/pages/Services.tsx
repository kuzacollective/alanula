import React, { useState, useMemo, useCallback, useEffect } from "react";
import HustlerCard, { Hustler } from "@/components/directory/HustlerCard";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import ReviewDialog, { Review } from "@/components/directory/ReviewDialog";
import { ServiceSearchBar } from "@/components/directory/ServiceSearchBar";
import { HustlerList } from "@/components/directory/HustlerList";
import { useReviews } from "@/hooks/useReviews";
import Header from "@/components/ui/Header";
import { Slider } from "@/components/ui/slider";

const mockHustlers: (Hustler & {
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

type ReviewsDict = {
  [hustlerId: string]: ReturnType<typeof useReviews>["reviews"][string];
};

// Extract price min/max (based on mockHustlers data)
const rawPrices = mockHustlers.map(h => h.price ?? 0).filter(p => typeof p === "number" && !isNaN(p));
const minPrice = Math.min(...rawPrices, 0);
const maxPrice = Math.max(...rawPrices, 0);

export default function Services() {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState(""); // debounced effective search
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [adminMode, setAdminMode] = useState(false);

  // Price range filter
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);

  // Debounce search input for performance (300ms)
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(searchInput);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchInput]);

  // Reviews handled via custom hook
  const { reviews, getStats, addReview } = useReviews();

  const [reviewDialogFor, setReviewDialogFor] = useState<string | null>(null);

  // Admin: manage featured state
  const [featuredState, setFeaturedState] = useState<{ [id: string]: boolean }>(
    Object.fromEntries(mockHustlers.map(h => [h.id, !!h.featured]))
  );

  const hustlersWithFeatured = mockHustlers.map(h => ({
    ...h,
    featured: featuredState[h.id] ?? false,
  }));

  // Filtering and sorting
  const filtered = hustlersWithFeatured
    .filter((h) => {
      const matchSearch =
        h.name.toLowerCase().includes(search.toLowerCase()) ||
        h.summary.toLowerCase().includes(search.toLowerCase()) ||
        h.category?.toLowerCase().includes(search.toLowerCase());
      const matchCat = !category || h.category === category;
      const matchLoc = !location || h.location === location;
      const matchPrice =
        h.price >= priceRange[0] && h.price <= priceRange[1];

      if (adminMode) {
        return matchSearch && matchCat && matchLoc && matchPrice;
      }
      // For users: only verified + complete
      const complete = isProfileComplete(h);
      return matchSearch && matchCat && matchLoc && matchPrice && h.verified && complete;
    })
    .sort((a, b) => {
      if (a.featured === b.featured) return 0;
      return a.featured ? -1 : 1;
    });

  // Admin: toggle featured badge
  const handleFeatureToggle = (id: string, newVal: boolean) => {
    setFeaturedState(prev => ({ ...prev, [id]: newVal }));
  };

  // Count active filters (except for search, which is not "resettable")
  const activeFilterCount =
    (category ? 1 : 0) +
    (location ? 1 : 0) +
    ((priceRange[0] !== minPrice || priceRange[1] !== maxPrice) ? 1 : 0);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-2 py-8 w-full">
        <div className="max-w-4xl mx-auto flex flex-col gap-0 w-full">
          {/* Top controls: Title, MVP badge, Admin toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 w-full justify-between">
            <h1 className="text-3xl font-poppins font-bold text-primary">
              Browse Local Hustlers
            </h1>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="shrink-0">MVP Preview</Badge>
              <div className="flex items-center gap-2">
                <Switch
                  checked={adminMode}
                  onCheckedChange={setAdminMode}
                  id="admin-mode"
                  className="shrink-0"
                />
                <label htmlFor="admin-mode" className="text-xs text-muted-foreground">Admin view</label>
              </div>
            </div>
          </div>

          {/* Search/filter bar */}
          <ServiceSearchBar
            search={searchInput}
            setSearch={setSearchInput}
            category={category}
            setCategory={setCategory}
            location={location}
            setLocation={setLocation}
            categories={categories}
            locations={locations}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />

          {/* Results count and clear filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 mt-[-12px]">
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              {filtered.length > 0
                ? `Showing ${filtered.length} hustler${filtered.length > 1 ? "s" : ""}`
                : "No hustlers match your filters."}
              {activeFilterCount > 0 && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[11px] font-semibold ml-2">{activeFilterCount} filter{activeFilterCount>1 ? 's':''} active</span>
              )}
            </div>
            {(category || location || (priceRange[0] !== minPrice || priceRange[1] !== maxPrice)) && (
              <button
                className="text-xs underline text-accent font-bold hover:text-accent/80 transition"
                onClick={() => {
                  setCategory("");
                  setLocation("");
                  setPriceRange([minPrice, maxPrice]);
                }}
                aria-label="Clear all filters"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Hustler grid list */}
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr mb-6">
            <HustlerList
              hustlers={filtered}
              adminMode={adminMode}
              reviewDialogFor={reviewDialogFor}
              openReviewDialog={setReviewDialogFor}
              onReviewSubmit={addReview}
              getStats={getStats}
              canFeatureToggle={adminMode}
              onFeatureToggle={handleFeatureToggle}
              isProfileComplete={isProfileComplete}
            />
          </div>
        </div>
        {/* Moved footer out of flex column for better stacking and responsive layout */}
        <div className="text-center text-sm mt-7 text-muted-foreground pb-8">
          Powered by <span className="text-primary font-medium">Airtable</span> & Ziada.mu community 🚀
        </div>
      </main>
    </>
  );
}

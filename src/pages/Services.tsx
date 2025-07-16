import React, { useState, useMemo, useCallback, useEffect } from "react";
import ProCard, { Pro } from "@/components/directory/ProCard";
import ProCardSkeleton from "@/components/directory/ProCardSkeleton";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import ReviewDialog, { Review } from "@/components/directory/ReviewDialog";
import { ServiceSearchBar } from "@/components/directory/ServiceSearchBar";
import { ProList } from "@/components/directory/ProList";
import { useReviews } from "@/hooks/useReviews";
import Header from "@/components/ui/Header";
import { Slider } from "@/components/ui/slider";
import { mockPros } from "@/mocks/pros";
import { categories, locations } from "@/constants/filters";
import { isProfileComplete } from "@/utils/isProfileComplete";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { useAirtablePros } from "@/hooks/useAirtablePros";
import { useAuth } from "@/hooks/useAuth";

// Simulate data fetching/loading state
function useDemoLoading(deps: any[]) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1200); // 1.2s
    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return loading;
}

type ReviewsDict = {
  [proId: string]: ReturnType<typeof useReviews>["reviews"][string];
};

const rawPrices = mockPros.map(p => p.price ?? 0).filter(p => typeof p === "number" && !isNaN(p));
const minPrice = Math.min(...rawPrices, 0);
const maxPrice = Math.max(...rawPrices, 0);

export default function Services() {
  const { isAuthenticated } = useAuth();
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [adminMode, setAdminMode] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(searchInput);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchInput]);

  // Reviews handled via custom hook
  const { reviews, getStats, addReview } = useReviews();
  const [reviewDialogFor, setReviewDialogFor] = useState<string | null>(null);

  // Use Airtable data if available, fallback to mockPros
  const { pros: airtablePros, loading: airtableLoading, error: airtableError } = useAirtablePros();
  const prosSource = airtableError ? mockPros : (airtablePros.length > 0 ? airtablePros : mockPros);

  // Admin: manage featured state
  const [featuredState, setFeaturedState] = useState<{ [id: string]: boolean }>(
    Object.fromEntries(prosSource.map(p => [p.id, !!p.featured]))
  );

  const prosWithFeatured = prosSource.map(p => ({
    ...p,
    featured: featuredState[p.id] ?? false,
  }));

  // Demo loading skeletons when any filter/search changes (simulates fetching)
  const loading = useDemoLoading([search, category, location, priceRange, adminMode]) || airtableLoading;

  const filtered = prosWithFeatured
    .filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.summary.toLowerCase().includes(search.toLowerCase()) ||
        p.category?.toLowerCase().includes(search.toLowerCase());
      const matchCat = !category || p.category === category;
      const matchLoc = !location || p.location === location;
      const matchPrice =
        p.price >= priceRange[0] && p.price <= priceRange[1];

      if (adminMode) {
        return matchSearch && matchCat && matchLoc && matchPrice;
      }
      // For users: only verified + complete
      const complete = isProfileComplete(p);
      return matchSearch && matchCat && matchLoc && matchPrice && p.verified && complete;
    })
    .sort((a, b) => {
      if (a.featured === b.featured) return 0;
      return a.featured ? -1 : 1;
    });

  const handleFeatureToggle = (id: string, newVal: boolean) => {
    setFeaturedState(prev => ({ ...prev, [id]: newVal }));
  };

  const activeFilterCount =
    (category ? 1 : 0) +
    (location ? 1 : 0) +
    ((priceRange[0] !== minPrice || priceRange[1] !== maxPrice) ? 1 : 0);

  return (
    <ErrorBoundary>
      <Header />
      {/* Optionally show Airtable error */}
      {airtableError && <div className="bg-red-100 text-red-700 p-2 text-center mb-2 font-semibold animate-fade-in">{airtableError}</div>}
      <main className="min-h-screen bg-background px-2 py-8 w-full relative">
        <BackToTopButton />
        <div className="max-w-4xl mx-auto flex flex-col gap-0 w-full">
          {/* Top controls: Title, MVP badge, Admin toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 w-full justify-between">
            <h1 className="text-3xl font-poppins font-bold text-primary">
              Browse Local Pros
            </h1>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="shrink-0">MVP Preview</Badge>
              {isAuthenticated && (
                <div className="flex items-center gap-2">
                  <Switch
                    checked={adminMode}
                    onCheckedChange={setAdminMode}
                    id="admin-mode"
                    className="shrink-0"
                  />
                  <label htmlFor="admin-mode" className="text-xs text-muted-foreground">Admin view</label>
                </div>
              )}
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
                ? `Showing ${filtered.length} pro${filtered.length > 1 ? "s" : ""}`
                : loading
                  ? "Loading local pros..."
                  : "No pros match your filters."}
              {activeFilterCount > 0 && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[11px] font-semibold ml-2">{activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''} active</span>
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

          {/* Pro grid list with animation */}
          <div
            className="
              grid gap-5 
              grid-cols-1 
              sm:grid-cols-2 
              lg:grid-cols-3 
              auto-rows-fr 
              mb-6
              px-1
              xs:px-2
            "
            aria-live="polite"
          >
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse animate-fade-in">
                  <ProCardSkeleton />
                </div>
              ))
            ) : (
              <ProList
                pros={filtered}
                adminMode={adminMode}
                reviewDialogFor={reviewDialogFor}
                openReviewDialog={setReviewDialogFor}
                onReviewSubmit={addReview}
                getStats={getStats}
                canFeatureToggle={adminMode}
                onFeatureToggle={handleFeatureToggle}
                isProfileComplete={isProfileComplete}
              />
            )}
          </div>
        </div>
        {/* Moved footer out of flex column for better stacking and responsive layout */}
        <div className="text-center text-sm mt-7 text-muted-foreground pb-8">
          Powered by <span className="text-primary font-medium">Airtable</span> & Alanula community 🚀
        </div>
      </main>
    </ErrorBoundary>
  );
}
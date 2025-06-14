
import React from "react";
import { Badge } from "../ui/badge";
import { Star, Check } from "lucide-react";

export type Hustler = {
  id: string;
  name: string;
  location: string;
  category: string;
  price: number;
  summary: string;
  whatsapp: string;
  photo?: string;
  verified?: boolean;
  featured?: boolean;
};

type TrustProps = {
  isAdmin?: boolean;
  isNew?: boolean;
  needsReview?: boolean;
  profileComplete?: boolean;
  status?: "verified" | "unverified" | "under_review";
};

type Review = {
  rating: number;
  comment: string;
  hustlerId: string;
  createdAt: string;
};

function formatPrice(price: number) {
  return `Rs ${price}`;
}

// New: Show star rating (avg), review count, Leave Review button if handler provided
export default function HustlerCard({
  hustler,
  isAdmin = false,
  isNew = false,
  needsReview = false,
  profileComplete = true,
  status = "verified",
  averageRating,
  reviewCount,
  onReviewClick,
  canFeatureToggle,
  onFeatureToggle,
}: {
  hustler: Hustler;
  averageRating?: number;
  reviewCount?: number;
  onReviewClick?: () => void;
  canFeatureToggle?: boolean;
  onFeatureToggle?: (featured: boolean) => void;
} & TrustProps) {
  const { name, location, category, price, summary, whatsapp, photo, verified, featured } = hustler;
  const waLink = `https://wa.me/${whatsapp}?text=Hi!%20I%20found%20you%20on%20Ziada.mu%20and%20I'm%20interested%20in%20your%20${encodeURIComponent(category)}%20services.`;
  const canContact = !!summary && !!whatsapp && !!photo;

  return (
    <div
      className={
        "bg-white dark:bg-card border rounded-lg shadow-sm flex flex-col h-full relative overflow-hidden" +
        (isAdmin && !profileComplete ? " border-red-400" : "")
      }
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute right-3 top-3 z-10">
          <Badge className="bg-yellow-300 text-yellow-800 px-2 py-1 flex items-center gap-1">
            <Star size={16} className="text-yellow-500" />
            Featured
          </Badge>
        </div>
      )}

      {/* Trust Layer Badges */}
      {(isAdmin || isNew || needsReview || status === "under_review") && (
        <div className="absolute left-3 top-3 flex flex-col gap-1 z-10">
          {isNew && <Badge className="bg-green-50 text-green-700 border-green-500 font-normal">New</Badge>}
          {needsReview && <Badge variant="destructive" className="font-normal">Needs Review</Badge>}
          {status === "under_review" && <Badge className="bg-yellow-200 text-yellow-900 border-yellow-500 font-normal">Under Review</Badge>}
          {isAdmin && !profileComplete && (
            <Badge className="bg-red-200 text-red-900 border-red-500 font-normal">Incomplete Profile</Badge>
          )}
        </div>
      )}

      <div className="flex flex-col items-center px-4 pt-6 pb-4 w-full">
        <div className="relative mb-3">
          <img
            src={photo || "/placeholder.svg"}
            alt={name}
            className={"w-24 h-24 rounded-full object-cover border-2 shadow " + (profileComplete ? "border-primary" : "border-red-300")}
          />
          {verified && (
            <span className="absolute -bottom-2 -right-2">
              <Check className="bg-primary text-white rounded-full p-1" size={28} />
            </span>
          )}
        </div>
        <h2 className="font-poppins text-lg font-bold text-primary text-center leading-tight">{name}</h2>
        <div className="text-sm text-muted-foreground mb-1 text-center">{location}</div>
        <Badge variant="secondary" className="mb-1">{category}</Badge>
        <div className="font-semibold text-xl text-secondary mb-2">{formatPrice(price)} <span className="text-sm text-muted-foreground font-normal">/start</span></div>
        <div className="text-sm text-center text-muted-foreground mb-2 line-clamp-3">{summary || <span className="italic text-muted-foreground/60">No summary provided</span>}</div>
        
        {/* Average rating and count */}
        <div className="flex items-center gap-1 mb-2">
          {!!averageRating && (
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={i < Math.round(averageRating) ? "text-yellow-400 fill-yellow-300" : "text-gray-300"} />
              ))}
            </span>
          )}
          {typeof reviewCount === "number" && (
            <span className="text-xs text-muted-foreground ml-2">
              {reviewCount === 1 ? "1 review" : `${reviewCount} reviews`}
            </span>
          )}
        </div>

        {/* Leave Review button */}
        {onReviewClick && (
          <button
            onClick={onReviewClick}
            className="mb-2 underline text-xs text-accent-foreground hover:text-primary transition"
          >
            ⭐ Leave a Review
          </button>
        )}

        {canContact ? (
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full"
          >
            <button
              className="bg-accent text-accent-foreground font-semibold w-full rounded-md py-2 px-3 flex items-center justify-center gap-2 hover:bg-accent/90 transition animate-fade-in"
            >
              <Check size={18} /> Chat on WhatsApp
            </button>
          </a>
        ) : (
          <button
            className="bg-muted text-muted-foreground font-semibold w-full rounded-md py-2 px-3 flex items-center justify-center gap-2 opacity-70 cursor-not-allowed mt-auto"
            disabled
            title="Profile incomplete"
          >
            <Check size={18} /> Chat on WhatsApp
          </button>
        )}

        {/* Admin: Toggle Featured status */}
        {isAdmin && canFeatureToggle && onFeatureToggle && (
          <button
            className={`mt-2 text-xs px-2 py-1 rounded border border-yellow-400 bg-yellow-50 text-yellow-700 font-medium hover:bg-yellow-100 transition`}
            onClick={() => onFeatureToggle(!featured)}
            type="button"
          >
            {featured ? "Remove Featured" : "Make Featured"}
          </button>
        )}

        {/* Profile completeness visual for admin */}
        {isAdmin && (
          <div className="mt-2 text-xs w-full flex justify-center">
            <span
              className={
                "rounded px-2 py-1 " +
                (profileComplete
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700")
              }
            >
              {profileComplete ? "Profile complete" : "Profile incomplete"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

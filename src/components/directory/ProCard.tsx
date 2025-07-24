import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Star, Check } from "lucide-react";

export type Pro = {
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
  startingSoon?: boolean;
};

type Review = {
  rating: number;
  comment: string;
  proId: string;
  createdAt: string;
};

function formatPrice(price: number) {
  return `Rs ${price}`;
}

const ProCard = React.memo(function ProCard({
  pro,
  averageRating,
  reviewCount,
  onReviewClick,
  canFeatureToggle,
  onFeatureToggle,
  isAdmin = false,
  isNew = false,
  needsReview = false,
  profileComplete = true,
  status = "verified",
  startingSoon = false,
}: {
  pro: Pro & { referredBy?: string; referralCode?: string };
  averageRating?: number;
  reviewCount?: number;
  onReviewClick?: () => void;
  canFeatureToggle?: boolean;
  onFeatureToggle?: (featured: boolean) => void;
} & TrustProps) {
  const { name, location, category, price, summary, whatsapp, photo, verified, featured, referredBy, referralCode } = pro;
  const customerFormUrl = "https://airtable.com/embed/appYCffZwGEMJ3xcF/pagKPQDue1zA7yulf/form";
  const canContact = !!summary && !!whatsapp && !!photo;
  // Check for loading fallback for profile photo
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div
      className={
        "bg-white dark:bg-card border rounded-lg shadow-sm flex flex-col h-full relative overflow-hidden " +
        "transition-transform duration-200 transform hover:scale-105 hover:shadow-lg focus-within:scale-105 focus-within:shadow-lg animate-fade-in" +
        (isAdmin && !profileComplete ? " border-red-400" : "")
      }
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute right-3 top-3 z-10">
          <Badge className="bg-yellow-300 text-yellow-800 px-2 py-1 flex items-center gap-1 shadow animate-fade-in">
            <Star size={16} className="text-yellow-500" />
            Featured
          </Badge>
        </div>
      )}

      {/* Starting Soon banner */}
      {startingSoon && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-2 z-20">
          <Badge className="bg-blue-500 text-white px-3 py-1 text-xs font-semibold shadow-lg animate-fade-in">
            Starting Soon
          </Badge>
        </div>
      )}

      {/* Trust Layer Badges (Left) */}
      {(isAdmin || isNew || needsReview || status === "under_review") && (
        <div className="absolute left-3 top-3 flex flex-col gap-1 z-10 w-max min-w-[110px]">
          {isNew && <Badge className="bg-green-50 text-green-700 border-green-500 font-normal shadow-md animate-fade-in">New</Badge>}
          {needsReview && <Badge variant="destructive" className="font-normal shadow-md animate-fade-in">Needs Review</Badge>}
          {status === "under_review" && <Badge className="bg-yellow-200 text-yellow-900 border-yellow-500 font-normal shadow-md animate-fade-in">Under Review</Badge>}
          {isAdmin && !profileComplete && (
            <Badge className="bg-red-200 text-red-900 border-red-500 font-normal shadow-md animate-fade-in">Incomplete Profile</Badge>
          )}
          {/* Referral info - admin only */}
          {isAdmin && referredBy && referredBy.trim() && (
            <Badge className="bg-blue-100 text-blue-800 border-blue-400 font-normal shadow-md animate-fade-in">
              Referred by {referredBy}
            </Badge>
          )}
        </div>
      )}

      <Link 
        to={`/pro/${pro.id}`}
        className="flex flex-col items-center px-4 pt-6 pb-4 w-full flex-1 hover:bg-muted/10 transition-colors"
        aria-label={`View ${name}'s profile - ${category} in ${location}`}
      >
        <div className="relative mb-3">
          {!imgLoaded && (
            <div className="absolute left-0 top-0 w-24 h-24 rounded-full bg-muted animate-pulse" aria-hidden="true" />
          )}
          <img
            src={photo || "/placeholder.svg"}
            alt={name}
            loading="lazy"
            className={
              "w-24 h-24 rounded-full object-cover border-2 shadow transition-all duration-150 " +
              (profileComplete ? "border-primary" : "border-red-300") +
              (imgLoaded ? "" : " opacity-0")
            }
            onLoad={() => setImgLoaded(true)}
            style={{ transition: "opacity 0.2s" }}
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
      </Link>
      
      <div className="px-4 pb-4">
        {/* Referral code - admin only */}
        {isAdmin && referralCode && (
          <div className="mb-2">
            <Badge className="bg-violet-100 text-violet-900 border-violet-300 font-normal">Referral Code: {referralCode}</Badge>
          </div>
        )}

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
            href={customerFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full"
          >
            <button
              className="bg-accent text-accent-foreground font-semibold w-full rounded-md py-2 px-3 flex items-center justify-center gap-2 hover:bg-accent/90 transition animate-fade-in"
            >
              Pre-book Service
            </button>
          </a>
        ) : (
          <button
            className="bg-muted text-muted-foreground font-semibold w-full rounded-md py-2 px-3 flex items-center justify-center gap-2 opacity-70 cursor-not-allowed mt-auto"
            disabled
            title="Profile incomplete"
          >
            Pre-book Service
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
}, (prev, next) => {
  // Prevent re-render if props are deeply the same
  return (
    prev.pro.id === next.pro.id &&
    prev.pro.featured === next.pro.featured &&
    prev.averageRating === next.averageRating &&
    prev.reviewCount === next.reviewCount &&
    prev.isAdmin === next.isAdmin &&
    prev.isNew === next.isNew &&
    prev.needsReview === next.needsReview &&
    prev.profileComplete === next.profileComplete &&
    prev.status === next.status
  );
});
export default ProCard;

export type ProWithAdminFields = Pro & {
  isNew?: boolean;
  needsReview?: boolean;
  profileComplete?: boolean;
  status?: "verified" | "unverified" | "under_review";
  referredBy?: string;
  referralCode?: string;
};
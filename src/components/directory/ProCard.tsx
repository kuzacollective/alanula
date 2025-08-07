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
  const whatsappNumber = "+230 5921 4463";
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in your services on Alanula. Can we chat?");
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;
  const canContact = !!summary && !!whatsapp && !!photo;
  // Check for loading fallback for profile photo
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div
      className={
        "bg-card border rounded-lg shadow-card flex flex-col h-full relative overflow-hidden min-h-[400px] " +
        "transition-transform duration-200 transform hover:scale-105 hover:shadow-lg focus-within:scale-105 focus-within:shadow-lg animate-fade-in" +
        (isAdmin && !profileComplete ? " border-destructive" : "")
      }
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute right-3 top-3 z-10">
          <Badge className="bg-accent text-accent-foreground px-2 py-1 flex items-center gap-1 shadow animate-fade-in">
            <Star size={16} className="text-accent-foreground" />
            Featured
          </Badge>
        </div>
      )}


      {/* Trust Layer Badges (Left) */}
      {(isAdmin || isNew || needsReview || status === "under_review") && (
        <div className="absolute left-3 top-3 flex flex-col gap-1 z-10 w-max min-w-[110px]">
          {isNew && <Badge className="bg-secondary/20 text-secondary border-secondary font-normal shadow-md animate-fade-in">New</Badge>}
          {needsReview && <Badge variant="destructive" className="font-normal shadow-md animate-fade-in">Needs Review</Badge>}
          {status === "under_review" && <Badge className="bg-accent/20 text-accent-foreground border-accent font-normal shadow-md animate-fade-in">Under Review</Badge>}
          {isAdmin && !profileComplete && (
            <Badge className="bg-destructive/20 text-destructive border-destructive font-normal shadow-md animate-fade-in">Incomplete Profile</Badge>
          )}
          {/* Referral info - admin only */}
          {isAdmin && referredBy && referredBy.trim() && (
            <Badge className="bg-primary/20 text-primary border-primary font-normal shadow-md animate-fade-in">
              Referred by {referredBy}
            </Badge>
          )}
        </div>
      )}

      <Link 
        to={`/pro/${pro.id}`}
        className="flex flex-col items-center px-3 sm:px-4 pt-4 sm:pt-6 pb-3 sm:pb-4 w-full flex-1 hover:bg-muted/10 transition-colors"
        aria-label={`View ${name}'s profile - ${category} in ${location}`}
      >
        <div className="relative mb-2 sm:mb-3">
          {!imgLoaded && (
            <div className="absolute left-0 top-0 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-muted animate-pulse" aria-hidden="true" />
          )}
          <img
            src={photo || "/placeholder.svg"}
            alt={name}
            loading="lazy"
            className={
              "w-20 sm:w-24 h-20 sm:h-24 rounded-full object-cover border-2 shadow transition-all duration-150 " +
              (profileComplete ? "border-primary" : "border-destructive") +
              (imgLoaded ? "" : " opacity-0")
            }
            onLoad={() => setImgLoaded(true)}
            style={{ transition: "opacity 0.2s" }}
          />
          {verified && (
            <span className="absolute -bottom-2 -right-2">
              <Check className="bg-primary text-white rounded-full p-1" size={24} />
            </span>
          )}
        </div>
        <h2 className="font-poppins text-base sm:text-lg font-bold text-primary text-center leading-tight px-1">{name}</h2>
        <div className="text-xs sm:text-sm text-foreground/60 mb-1 text-center">{location}</div>
        <Badge variant="secondary" className="mb-1 text-xs">{category}</Badge>
        <div className="font-semibold text-lg sm:text-xl text-secondary mb-2">{formatPrice(price)} <span className="text-xs sm:text-sm text-foreground/60 font-normal">/start</span></div>
        <div className="text-xs sm:text-sm text-center text-foreground/70 mb-2 line-clamp-3 px-1">{summary || <span className="italic text-foreground/50">No summary provided</span>}</div>
      </Link>
      
      <div className="px-3 sm:px-4 pb-3 sm:pb-4 mt-auto">
        {/* Referral code - admin only */}
        {isAdmin && referralCode && (
          <div className="mb-2">
            <Badge className="bg-secondary/20 text-secondary border-secondary font-normal text-xs">Referral Code: {referralCode}</Badge>
          </div>
        )}

        {/* Average rating and count */}
        <div className="flex items-center gap-1 mb-2">
          {!!averageRating && (
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => {
                const isFilled = i < Math.round(averageRating);
                return (
                  <Star 
                    key={i} 
                    size={14} 
                    className={isFilled ? "text-accent fill-accent" : "text-muted-foreground"} 
                  />
                );
              })}
            </span>
          )}
          {typeof reviewCount === "number" && (
            <span className="text-xs text-foreground/60 ml-2">
              {reviewCount === 1 ? "1 review" : `${reviewCount} reviews`}
            </span>
          )}
        </div>

        {/* Leave Review button */}
        {onReviewClick && (
          <button
            onClick={onReviewClick}
            className="mb-2 underline text-xs text-secondary hover:text-primary transition"
          >
            ⭐ Leave a Review
          </button>
        )}

        {canContact ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full"
          >
            <button
              className="bg-accent text-accent-foreground font-semibold w-full rounded-md py-2 px-2 sm:px-3 flex items-center justify-center gap-1 sm:gap-2 hover:bg-accent/90 transition animate-fade-in text-xs sm:text-sm"
            >
              Chat with Alanula Pro
            </button>
          </a>
        ) : (
          <button
            className="bg-muted text-muted-foreground font-semibold w-full rounded-md py-2 px-2 sm:px-3 flex items-center justify-center gap-1 sm:gap-2 opacity-70 cursor-not-allowed mt-auto text-xs sm:text-sm"
            disabled
            title="Profile incomplete"
          >
            Chat with Alanula Pro
          </button>
        )}

        {/* Admin: Toggle Featured status */}
        {isAdmin && canFeatureToggle && onFeatureToggle && (
          <button
            className={`mt-2 text-xs px-2 py-1 rounded border border-accent bg-accent/10 text-accent-foreground font-medium hover:bg-accent/20 transition w-full sm:w-auto`}
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
                  ? "bg-secondary/20 text-secondary"
                  : "bg-destructive/20 text-destructive")
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
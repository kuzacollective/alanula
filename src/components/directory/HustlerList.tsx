
import React from "react";
import HustlerCard, { Hustler } from "./HustlerCard";
import ReviewDialog, { Review } from "./ReviewDialog";

export type HustlerWithAdminFields = Hustler & {
  isNew?: boolean;
  needsReview?: boolean;
  profileComplete?: boolean;
  status?: "verified" | "unverified" | "under_review";
  referredBy?: string;
  referralCode?: string;
};

interface HustlerListProps {
  hustlers: HustlerWithAdminFields[];
  adminMode: boolean;
  reviewDialogFor: string | null;
  openReviewDialog: (id: string | null) => void;
  onReviewSubmit: (review: Omit<Review, "createdAt">) => void;
  getStats: (id: string) => { avg: number | undefined; count: number };
  canFeatureToggle?: boolean;
  onFeatureToggle?: (id: string, val: boolean) => void;
  isProfileComplete: (h: HustlerWithAdminFields) => boolean;
  isLoading?: boolean;
}

export const HustlerList = ({
  hustlers,
  adminMode,
  reviewDialogFor,
  openReviewDialog,
  onReviewSubmit,
  getStats,
  canFeatureToggle,
  onFeatureToggle,
  isProfileComplete,
  isLoading = false,
}: HustlerListProps) => {
  if (isLoading) {
    // Let Services decide how many skeletons to show—handled outside this component for flexibility
    return null;
  }

  if (hustlers.length === 0) {
    return (
      <div className="col-span-full text-center text-muted-foreground py-16 flex flex-col items-center animate-fade-in">
        <div className="text-lg font-semibold mb-2">No hustlers found.</div>
        <div className="text-sm text-muted-foreground mb-4">Try adjusting your filters or search keywords.</div>
        <div className="w-full max-w-xs flex flex-col gap-3 items-center">
          <span className="inline-block bg-muted text-foreground rounded px-3 py-1 text-xs mb-1">Tip: Broaden your search for more results!</span>
        </div>
      </div>
    );
  }
  return (
    <>
      {hustlers.map(h => {
        const stats = getStats(h.id);
        return (
          <React.Fragment key={h.id}>
            <HustlerCard
              hustler={h}
              isAdmin={adminMode}
              isNew={h.isNew}
              needsReview={h.needsReview}
              profileComplete={isProfileComplete(h)}
              status={h.status}
              averageRating={stats.avg}
              reviewCount={stats.count}
              onReviewClick={() => openReviewDialog(h.id)}
              canFeatureToggle={canFeatureToggle}
              onFeatureToggle={val => onFeatureToggle && onFeatureToggle(h.id, val)}
            />
            {reviewDialogFor === h.id && (
              <ReviewDialog
                key={h.id + "_modal"}
                hustlerId={h.id}
                onSubmit={onReviewSubmit}
                triggerButton={null}
              />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

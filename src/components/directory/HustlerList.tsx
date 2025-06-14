import React from "react";
import HustlerCard, { Hustler } from "./HustlerCard";
import ReviewDialog, { Review } from "./ReviewDialog";

// Extend Hustler type with admin/meta fields
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
}: HustlerListProps) => {
  if (hustlers.length === 0) {
    return (
      <div className="col-span-full text-center text-muted-foreground py-16">
        No hustlers found. Try again!
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

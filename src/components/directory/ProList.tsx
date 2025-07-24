import React from "react";
import ProCard, { Pro } from "./ProCard";
import ReviewDialog, { Review } from "./ReviewDialog";

export type ProWithAdminFields = Pro & {
  isNew?: boolean;
  needsReview?: boolean;
  profileComplete?: boolean;
  status?: "verified" | "unverified" | "under_review";
  referredBy?: string;
  referralCode?: string;
};

interface ProListProps {
  pros: ProWithAdminFields[];
  adminMode: boolean;
  reviewDialogFor: string | null;
  openReviewDialog: (id: string | null) => void;
  onReviewSubmit: (review: Omit<Review, "createdAt">) => void;
  getStats: (id: string) => { avg: number | undefined; count: number };
  canFeatureToggle?: boolean;
  onFeatureToggle?: (id: string, val: boolean) => void;
  isProfileComplete: (h: ProWithAdminFields) => boolean;
  isLoading?: boolean;
}

export const ProList = ({
  pros,
  adminMode,
  reviewDialogFor,
  openReviewDialog,
  onReviewSubmit,
  getStats,
  canFeatureToggle,
  onFeatureToggle,
  isProfileComplete,
  isLoading = false,
}: ProListProps) => {
  if (isLoading) {
    // Let Services decide how many skeletons to show—handled outside this component for flexibility
    return null;
  }

  if (pros.length === 0) {
    return (
      <div className="col-span-full text-center text-muted-foreground py-16 flex flex-col items-center animate-fade-in">
        <div className="text-lg font-semibold mb-2">No pros found.</div>
        <div className="text-sm text-muted-foreground mb-4">Try adjusting your filters or search keywords.</div>
        <div className="w-full max-w-xs flex flex-col gap-3 items-center">
          <span className="inline-block bg-muted text-foreground rounded px-3 py-1 text-xs mb-1">Tip: Broaden your search for more results!</span>
        </div>
      </div>
    );
  }
  return (
    <>
      {pros.map(h => {
        const stats = getStats(h.id);
        return (
          <React.Fragment key={h.id}>
            <ProCard
              pro={h}
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
                proId={h.id}
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
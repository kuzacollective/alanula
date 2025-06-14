
import { useState } from "react";
import { Review } from "@/components/directory/ReviewDialog";

export type ReviewsDict = {
  [hustlerId: string]: Review[];
};

export function useReviews() {
  const [reviews, setReviews] = useState<ReviewsDict>({});

  const getStats = (id: string) => {
    const r = reviews[id] || [];
    if (r.length === 0) return { avg: undefined, count: 0 };
    const avg = r.reduce((s, x) => s + x.rating, 0) / r.length;
    return { avg, count: r.length };
  };

  const addReview = (review: Omit<Review, "createdAt">) => {
    setReviews(prev => {
      const arr = prev[review.hustlerId] || [];
      const newReview: Review = {
        ...review,
        createdAt: new Date().toISOString()
      };
      return { ...prev, [review.hustlerId]: [newReview, ...arr] };
    });
  };

  return {
    reviews,
    getStats,
    addReview
  };
}

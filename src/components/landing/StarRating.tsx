
import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number; // out of 5
  max?: number;
  size?: number;
  className?: string;
}
const StarRating: React.FC<StarRatingProps> = ({ rating, max = 5, size = 18, className }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={`flex items-center gap-0.5 ${className || ""}`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} size={size} className="text-yellow-400 fill-yellow-400" />
      ))}
      {halfStar && (
        <Star size={size} className="text-yellow-400" style={{ clipPath: "inset(0 50% 0 0)" }} />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i} size={size} className="text-zinc-300 dark:text-zinc-700" />
      ))}
    </div>
  );
};

export default StarRating;

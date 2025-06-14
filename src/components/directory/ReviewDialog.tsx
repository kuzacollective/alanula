
import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";

type Review = {
  rating: number;
  comment: string;
  hustlerId: string;
  createdAt: string;
};

export default function ReviewDialog({
  onSubmit,
  hustlerId,
  triggerButton,
}: {
  onSubmit: (review: Omit<Review, "createdAt">) => void;
  hustlerId: string;
  triggerButton: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    onSubmit({ rating, comment, hustlerId });
    setTimeout(() => { // Simulate delay
      setOpen(false);
      setRating(0);
      setComment("");
      setSubmitting(false);
    }, 350);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span>{triggerButton}</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Leave a review</DialogTitle>
          <DialogDescription>
            Share your experience with this hustler. Your feedback helps others!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-1 mb-2">
              {[1,2,3,4,5].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setRating(val)}
                  onMouseEnter={() => setHover(val)}
                  onMouseLeave={() => setHover(0)}
                  className="focus:outline-none"
                  aria-label={`${val} star`}
                >
                  <Star size={28} className={(hover || rating) >= val ? "text-yellow-400 fill-yellow-300" : "text-gray-300"} />
                </button>
              ))}
            </div>
            <div className="text-xs text-muted-foreground">
              {rating === 0 ? "Select a rating" : `${rating} Star${rating > 1 ? "s" : ""}`}
            </div>
          </div>
          <div>
            <Input
              placeholder="What did you love? (Optional)"
              value={comment}
              onChange={e => setComment(e.target.value)}
              maxLength={120}
              disabled={submitting}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={rating === 0 || submitting}>Submit</Button>
            <DialogClose asChild>
              <Button variant="secondary" type="button">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export type { Review };

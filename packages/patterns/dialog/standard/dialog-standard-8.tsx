"use client";

import { StarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const title = "Rating";

const Example = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Rate Experience</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>How was your experience?</DialogTitle>
          <DialogDescription>
            Please rate your experience and share any additional feedback.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Rating</Label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  className="transition-transform hover:scale-110"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  type="button"
                >
                  <StarIcon
                    className={cn(
                      "h-8 w-8 transition-colors",
                      (hoverRating || rating) >= star
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback">Additional feedback (optional)</Label>
            <Textarea
              className="min-h-[100px]"
              id="feedback"
              placeholder="Tell us more about your experience..."
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button disabled={rating === 0} type="button">
            Submit Rating
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Example;

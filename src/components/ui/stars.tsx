import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Discreet 5-star rating row. */
export function Stars({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating}/5`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden
          className={cn(
            "size-3",
            index < rating
              ? "fill-brand/80 text-brand/80"
              : "fill-border text-border",
          )}
        />
      ))}
    </div>
  );
}

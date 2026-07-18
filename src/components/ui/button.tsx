import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-lg font-medium select-none",
    "transition-[background-color,border-color,color,box-shadow,transform] duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-brand text-brand-foreground",
          "shadow-[0_1px_2px_-1px_var(--shadow-color)]",
          "hover:brightness-105 hover:shadow-[0_4px_12px_-4px_var(--brand)]",
        ],
        secondary: [
          "border border-border bg-card text-foreground",
          "hover:border-foreground/25 hover:bg-muted",
        ],
        ghost: ["text-muted-foreground", "hover:bg-muted hover:text-foreground"],
        link: ["text-brand underline-offset-4 hover:underline"],
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

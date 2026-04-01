import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-11 w-full rounded-xl border border-brand bg-[rgb(var(--input))] px-4 text-sm text-brand-foreground outline-none placeholder:text-brand-muted focus:ring-2 focus:ring-brand",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
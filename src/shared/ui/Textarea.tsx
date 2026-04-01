import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "../lib/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "min-h-[120px] w-full rounded-xl border border-brand bg-[rgb(var(--input))] px-4 py-3 text-sm text-brand-foreground outline-none placeholder:text-brand-muted focus:ring-2 focus:ring-brand",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "../lib/cn";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "h-11 w-full rounded-xl border border-brand bg-[rgb(var(--input))] px-4 text-sm text-brand-foreground outline-none focus:ring-2 focus:ring-brand",
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";
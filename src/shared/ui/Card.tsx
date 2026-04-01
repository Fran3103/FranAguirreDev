import type { ReactNode } from "react";
import { cn } from "../lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-brand bg-brand-card text-brand-foreground shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}
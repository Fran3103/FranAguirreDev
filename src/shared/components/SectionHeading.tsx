import { cn } from "../lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-primary">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight text-brand-foreground sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="max-w-2xl text-sm leading-6 text-brand-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
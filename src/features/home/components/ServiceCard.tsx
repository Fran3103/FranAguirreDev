import type { ServiceItem } from "../types/home.types";
import { Card } from "@/shared/ui/Card";
import { cn } from "@/shared/lib/cn";
import { Check, X } from "lucide-react";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card
      className={cn(
        "relative flex h-full flex-col p-8 transition-transform duration-200 hover:-translate-y-1",
        service.featured && "bg-brand-dark text-brand-dark-foreground"
      )}
    >
      {service.featured && (
        <span className="mb-5 inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Opción recomendada
        </span>
      )}

      <div
        className={cn(
          "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full",
          service.featured
            ? "bg-white/10 text-white"
            : "bg-brand-secondary text-brand-foreground"
        )}
      >
        <Icon size={20} strokeWidth={2.2} />
      </div>

      <h3
        className={cn(
          "mb-2 text-2xl font-bold",
          service.featured
            ? "text-brand-dark-foreground"
            : "text-brand-foreground"
        )}
      >
        {service.title}
      </h3>

      <p
        className={cn(
          "mb-6 text-sm font-medium",
          service.featured ? "text-white/75" : "text-brand-muted"
        )}
      >
        {service.description}
      </p>

      <div
        className={cn(
          "mb-6 border-t pt-6",
          service.featured ? "border-white/10" : "border-brand"
        )}
      >
        <span
          className={cn(
            "text-3xl font-bold",
            service.featured ? "text-white" : "text-brand-primary"
          )}
        >
          {service.price}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-6">
        <div>
          <p
            className={cn(
              "mb-3 text-sm font-semibold uppercase tracking-wide",
              service.featured ? "text-white/80" : "text-brand-foreground"
            )}
          >
            Incluye
          </p>

          <ul className="space-y-3">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  size={16}
                  className={cn(
                    "mt-1 shrink-0",
                    service.featured ? "text-black  " : "text-brand-primary"
                  )}
                />
                <span
                  className={cn(
                    "text-sm leading-6",
                    service.featured ? "text-brand-dark-foreground" : "text-brand-muted"
                  )}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p
            className={cn(
              "mb-3 text-sm font-semibold uppercase tracking-wide",
              service.featured ? "text-white/80" : "text-brand-foreground"
            )}
          >
            No incluye
          </p>

          <ul className="space-y-3">
            {service.notIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <X
                  size={16}
                  className={cn(
                    "mt-1 shrink-0",
                    service.featured ? "text-white/70" : "text-brand-muted"
                  )}
                />
                <span
                  className={cn(
                    "text-sm leading-6",
                    service.featured ? "text-white/70" : "text-brand-muted"
                  )}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        className={cn(
          "mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition cursor-pointer",
          service.featured
            ? "bg-white text-brand-foreground hover:opacity-90"
            : "bg-brand-primary text-white hover:opacity-90"
        )}
      >
        {service.cta ?? "Elegir opción"}
      </button>
    </Card>
  );
}
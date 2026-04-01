import type { ServiceItem } from "../types/home.types";
import { Card } from "@/shared/ui/Card";
import { cn } from "@/shared/lib/cn";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card
      className={cn(
        "flex h-full flex-col justify-between p-8 transition-transform duration-200 hover:-translate-y-1",
        service.featured && "bg-brand-dark text-brand-dark-foreground"
      )}
    >
      <div>
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
            "mb-3 text-xl font-bold",
            service.featured
              ? "text-brand-dark-foreground"
              : "text-brand-foreground"
          )}
        >
          {service.title}
        </h3>

        <p
          className={cn(
            "text-sm leading-7",
            service.featured ? "text-white/75" : "text-brand-muted"
          )}
        >
          {service.description}
        </p>
      </div>

      <div
        className={cn(
          "mt-8 border-t pt-6",
          service.featured ? "border-white/10" : "border-brand"
        )}
      >
        <span
          className={cn(
            "text-2xl font-bold",
            service.featured ? "text-white" : "text-brand-primary"
          )}
        >
          {service.price}
        </span>
      </div>
    </Card>
  );
}
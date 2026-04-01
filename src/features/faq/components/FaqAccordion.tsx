import type { FaqItem } from "../types/faq.types";

type FaqAccordionProps = {
  item: FaqItem;
};

export function FaqAccordion({ item }: FaqAccordionProps) {
  return (
    <details className="group rounded-[24px] bg-brand-card p-6 shadow-soft">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <h3 className="text-base font-bold text-brand-foreground sm:text-lg">
          {item.question}
        </h3>

        <span className="text-xl font-bold text-brand-primary transition-transform duration-200 group-open:rotate-45">
          +
        </span>
      </summary>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-muted sm:text-base">
        {item.answer}
      </p>
    </details>
  );
}
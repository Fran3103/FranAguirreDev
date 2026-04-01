import { X } from "lucide-react";
import { Link } from "react-router-dom";
import type { NavItem } from "../types/navigation.type";
import { Button } from "@/shared/ui/Button";
import { SITE_CONFIG } from "@/shared/constants/site.constants";
import { cn } from "@/shared/lib/cn";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  pathname: string;
  activeSection?: string;
  hash?: string;
};

export function MobileMenu({
  isOpen,
  onClose,
  items,
  pathname = "",
  activeSection = "",
  hash = "",
}: MobileMenuProps) {
  if (!isOpen) return null;

 const isItemActive = (item: NavItem) => {
  if (item.type === "route") return pathname === item.href;
  return activeSection === item.sectionId || hash === item.sectionId;
};

  return (
    <div className="absolute left-0 top-full w-full border-b border-brand bg-brand-background shadow-soft md:hidden">
      <div className="container-page py-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-brand-muted">Menú</span>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand bg-white text-brand-foreground"
            aria-label="Cerrar menú"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-3">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={onClose}
              className={cn(
                "rounded-xl bg-white px-4 py-3 text-sm font-medium shadow-soft transition-colors",
                isItemActive(item)
                  ? "text-brand-primary"
                  : "text-brand-foreground hover:text-brand-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-4">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
          >
            <Button className="w-full">Hablemos</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
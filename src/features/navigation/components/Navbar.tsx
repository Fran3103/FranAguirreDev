import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "@/shared/components/Container";
import { Button } from "@/shared/ui/Button";
import { navItems } from "@/features/navigation/data/nav.data";
import { SITE_CONFIG } from "@/shared/constants/site.constants";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/shared/lib/cn";
import { IoRocketSharp } from "react-icons/io5";

const SECTION_OFFSET = 140;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const anchorItems = navItems.filter(
      (item) => item.type === "anchor" && item.sectionId
    );

    const handleScroll = () => {
      const scrollPosition = window.scrollY + SECTION_OFFSET;

      let currentSection = "";

      for (const item of anchorItems) {
        const element = document.getElementById(item.sectionId!);
        if (!element) continue;

        const sectionTop = element.offsetTop;
        const sectionBottom = sectionTop + element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = item.sectionId!;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const currentHash = location.hash.replace("#", "");

  const isItemActive = (item: (typeof navItems)[number]) => {
    if (item.type === "route") {
      return location.pathname === item.href;
    }

    if (location.pathname !== "/") return false;

    return currentHash === item.sectionId || activeSection === item.sectionId;
  };



  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand bg-[rgba(245,241,237,0.50)] backdrop-blur-md shadow-sm">
      <Container className="relative flex h-20 items-center justify-between">
        <div className="flex gap-3 items-center">
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight text-brand-foreground"
          >
            Fran Aguirre
          </Link>
          <IoRocketSharp className="text-brand-primary" />
        </div>


        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "relative text-sm font-semibold transition-colors after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-primary after:transition-transform",
                isItemActive(item)
                  ? "text-brand-primary after:scale-x-100"
                  : "text-brand-foreground hover:text-brand-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noreferrer">
            <Button size="sm">Hablemos</Button>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand bg-white text-brand-foreground shadow-soft md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <Menu size={20} />
        </button>

        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          items={navItems}
          pathname={location.pathname}
          activeSection={activeSection}
        />
      </Container>
    </header>
  );
}
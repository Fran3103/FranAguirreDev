import { Container } from "@/shared/components/Container";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-brand bg-brand-card">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div className="space-y-2">
          <p className="text-base font-semibold text-brand-foreground">
            Fran Aguirre
          </p>
          <p className="text-sm text-brand-muted">
            © 2026 Fran Aguirre. Hecho con calidez para emprendedores.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-brand-muted">
          <a href="#" className="transition-colors hover:text-brand-primary">
            Instagram
          </a>
          <a href="#" className="transition-colors hover:text-brand-primary">
            LinkedIn
          </a>
          <Link
            to="/privacidad"
            className="transition-colors hover:text-brand-primary"
          >
            Privacidad
          </Link>
        </div>
      </Container>
    </footer>
  );
}
import { Link } from "react-router-dom";
import { Container } from "@/shared/components/Container";
import { Button } from "@/shared/ui/Button";

export function NotFoundPage() {
  return (
    <section className="section-padding">
      <Container className="flex flex-col items-center justify-center text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-brand-primary">
          404
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-brand-foreground">
          Página no encontrada
        </h1>
        <p className="mb-8 max-w-xl text-brand-muted">
          La ruta que buscás no existe o fue movida.
        </p>

        <Link to="/">
          <Button>Volver al inicio</Button>
        </Link>
      </Container>
    </section>
  );
}
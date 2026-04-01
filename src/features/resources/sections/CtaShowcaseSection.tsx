import { Container } from "@/shared/components/Container";
import { Button } from "@/shared/ui/Button";

export function CtaDemoSection() {
  return (
    <section className="pb-20">
      <Container>
        <div className="mb-8">
          <h2 className="mb-3 text-3xl font-bold text-brand-foreground">
            Botones y llamados a la acción
          </h2>
          <p className="text-brand-muted">
            También se pueden sumar CTAs más visibles o con más presencia
            visual para dirigir mejor al usuario.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button size="lg">Quiero empezar</Button>
          <Button variant="secondary" size="lg">
            Ver más información
          </Button>
          <Button variant="dark" size="lg">
            Aprovechar oferta
          </Button>
        </div>
      </Container>
    </section>
  );
}
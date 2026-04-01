import { Container } from "@/shared/components/Container";

export function PrivacyPage() {
  return (
    <section className="section-padding">
      <Container className="max-w-4xl">
        <div className="mb-10">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
            INFORMACIÓN LEGAL
          </span>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-brand-foreground sm:text-5xl">
            Política de privacidad
          </h1>

          <p className="text-sm text-brand-muted">
            Última actualización: abril 2026
          </p>
        </div>

        <div className="space-y-10 text-brand-foreground">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">1. Información que puedo recibir</h2>
            <p className="leading-8 text-brand-muted">
              Este sitio puede recopilar información que el usuario envía de forma
              voluntaria a través del formulario de contacto, como nombre, nombre
              del negocio, email, WhatsApp, tipo de servicio solicitado y mensaje.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">2. Uso de la información</h2>
            <p className="leading-8 text-brand-muted">
              La información compartida se utiliza únicamente para responder
              consultas, coordinar propuestas de trabajo, brindar información
              sobre servicios y mantener una comunicación relacionada con el
              proyecto solicitado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">3. Herramientas de analítica</h2>
            <p className="leading-8 text-brand-muted">
              Este sitio puede utilizar herramientas de analítica, como Google
              Analytics o servicios similares, para entender de forma general cómo
              se usa la web y mejorar la experiencia del usuario. Estos datos se
              usan con fines estadísticos y de mejora del sitio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">4. Compartir información</h2>
            <p className="leading-8 text-brand-muted">
              No se venden ni se comparten datos personales con terceros con fines
              comerciales. La información solo se utiliza en el marco de la
              comunicación entre el usuario y Fran Aguirre.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">5. Contacto</h2>
            <p className="leading-8 text-brand-muted">
              Si querés realizar una consulta sobre esta política o solicitar la
              modificación o eliminación de tus datos, podés escribir a:
            </p>

            <a
              href="mailto:hola@franaguirre.com"
              className="font-semibold text-brand-primary transition-opacity hover:opacity-80"
            >
              hola@franaguirre.com
            </a>
          </section>
        </div>
      </Container>
    </section>
  );
}
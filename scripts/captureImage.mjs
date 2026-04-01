import puppeteer from "puppeteer";

const templates = [
  "adiestramiento-canino",
  "automaquillaje-glam",
  "ayuno-intermitente-pro",
  "bienestar-menopausia",
  "capcut-master",
  "curso-barista-ebook",
  "desafio-fitness-30-dias",
  "finanzas-pareja",
  "fotografia-movil",
  "guia-cripto-estrategica",
  "jardineria-urbana-facil",
  "kettlebell-elite",
  "master-afiliados",
  "oratoria-masterclass-pro",
  "piano-express",
  "recetario-airfryer-pro",
  "taller-encuadernacion",
  "yoga-calma-interior",
];

const run = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1280, height: 900 });

  // Generar capturas para cada plantilla

  for (const t of templates) {
    const url = `http://localhost:5173/previews/${t}.html`;
    const output = `public/images/templates/${t}-cover.png`;

    console.log(`Generando captura de: ${url}`);

    await page.goto(url, {
      waitUntil: "networkidle0",
    });

    await page.screenshot({
      path: output,
      fullPage: false,
    });
  }


  // Ejemplo de captura de una página externa (descomenta si quieres probarlo)
//   const url = `http://localhost:8081/swagger-ui/index.html#/Cocktails/find`;

// const output = `public/images/templates/-cover.png`;
// await page.goto(url, {
//        waitUntil: "networkidle0",
//      });

// await page.screenshot({
//        path: output,
//        fullPage: false,
//      });

  await browser.close();
  console.log("Capturas generadas.");
};

run().catch((error) => {
  console.error("Error generando capturas:", error);
});
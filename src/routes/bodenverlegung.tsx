import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import htmlBody from "@/content/bodenverlegung.html?raw";
import homeCss from "@/content/home.css?raw";
import badCss from "@/content/bad.css?raw";
import js from "@/content/bodenverlegung.js?raw";
import ld from "@/content/bodenverlegung.ld.json";
import boden1 from "@/assets/boden-projekt-1.jpg";
import boden2 from "@/assets/boden-projekt-2.jpg";
import boden3 from "@/assets/boden-projekt-3.jpg";

const html = htmlBody
  .replaceAll("__BODEN1__", boden1)
  .replaceAll("__BODEN2__", boden2)
  .replaceAll("__BODEN3__", boden3);

export const Route = createFileRoute("/bodenverlegung")({
  head: () => ({
    meta: [
      {
        title:
          "Bodenverlegung Heidelberg, Mannheim & Heilbronn – Festpreis, fertig in 2–5 Tagen | HM Sanierung",
      },
      {
        name: "description",
        content:
          "Bodenverlegung in Heidelberg, Mannheim und Heilbronn: Parkett, Vinyl, Laminat und Fliesen inklusive Untergrund und Fußleisten. Verbindlicher Festpreis, eigene Handwerker, fertig in 2–5 Tagen.",
      },
      {
        property: "og:title",
        content:
          "Bodenverlegung Heidelberg, Mannheim & Heilbronn – Festpreis | HM Sanierung",
      },
      {
        property: "og:description",
        content:
          "Ihr neuer Boden. Sauber verlegt. Parkett, Vinyl, Laminat und Fliesen aus einer Hand – verbindlicher Festpreis, fertig in 2–5 Tagen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://hm-sanierung.com/bodenverlegung" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <StaticPage html={html} css={homeCss + "\n" + badCss} js={js} jsonLd={ld} />
  );
}

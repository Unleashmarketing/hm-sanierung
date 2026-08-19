import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import htmlBody from "@/content/home.html?raw";
import css from "@/content/home.css?raw";
import js from "@/content/home.js?raw";
import ld from "@/content/home.ld.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HeinzelM\u00e4nner \u2014 Sanierung aus einer Hand \u00b7 Heidelberg / Mannheim / Heilbronn" },
      {
        name: "description",
        content:
          "Sanierung & Renovierung in Heidelberg, Mannheim und Heilbronn: Komplettsanierung, Bad, Boden, Trockenbau und Malerarbeiten \u2013 mit Festpreisgarantie und eigenen Handwerkern.",
      },
      { property: "og:title", content: "HeinzelM\u00e4nner \u2014 Sanierung aus einer Hand \u00b7 Heidelberg / Mannheim / Heilbronn" },
      {
        property: "og:description",
        content:
          "Sanierung & Renovierung in Heidelberg, Mannheim und Heilbronn: Komplettsanierung, Bad, Boden, Trockenbau und Malerarbeiten \u2013 mit Festpreisgarantie und eigenen Handwerkern.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hm-sanierung.com/" }],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={htmlBody} css={css} js={js} jsonLd={ld} />;
}

import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import htmlBody from "@/content/entruempelung.html?raw";
import css from "@/content/entruempelung.css?raw";
import js from "@/content/entruempelung.js?raw";
import ld from "@/content/entruempelung.ld.json";

export const Route = createFileRoute("/entruempelung/")({
  head: () => ({
    meta: [
      { title: "Entr\u00fcmpelung Heidelberg & Rhein-Neckar \u2013 Festpreis in 24h | HeinzelM\u00e4nner" },
      { name: "description", content: "Entr\u00fcmpelung, Haushalts- und Wohnungsaufl\u00f6sung in Heidelberg, Mannheim und dem Rhein-Neckar-Kreis. Festpreis binnen 24 Stunden, besenrein garantiert. 45 Mitar" },
      { property: "og:title", content: "Entr\u00fcmpelung Heidelberg & Rhein-Neckar \u2013 Festpreis in 24h | HeinzelM\u00e4nner" },
      { property: "og:description", content: "Entr\u00fcmpelung, Haushalts- und Wohnungsaufl\u00f6sung in Heidelberg, Mannheim und dem Rhein-Neckar-Kreis. Festpreis binnen 24 Stunden, besenrein garantiert. 45 Mitar" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={htmlBody} css={css} js={js} jsonLd={ld} />;
}

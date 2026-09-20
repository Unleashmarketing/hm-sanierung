import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import htmlBody from "@/content/entruempelung.html?raw";
import css from "@/content/entruempelung.css?raw";
import js from "@/content/entruempelung.js?raw";
import ld from "@/content/entruempelung.ld.json";

export const Route = createFileRoute("/entruempelung/")({
  head: () => ({
    meta: [
      { title: "Entr\u00fcmpelung Rhein-Neckar, Vorderpfalz & Heilbronn | HM Sanierung" },
      {
        name: "description",
        content:
          "Entr\u00fcmpelung in Heidelberg, Mannheim, Ludwigshafen, Frankenthal, Neustadt, Worms und Heilbronn: Festpreis binnen 24 Stunden, besenrein und versichert.",
      },
      { property: "og:title", content: "Entr\u00fcmpelung Rhein-Neckar, Vorderpfalz & Heilbronn | HM Sanierung" },
      {
        property: "og:description",
        content:
          "Entr\u00fcmpelung in Heidelberg, Mannheim, Ludwigshafen, Frankenthal, Neustadt, Worms und Heilbronn: Festpreis binnen 24 Stunden, besenrein und versichert.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hm-sanierung.com/entruempelung" }],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={htmlBody} css={css} js={js} jsonLd={ld} />;
}

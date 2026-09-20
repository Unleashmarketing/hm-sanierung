import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import htmlBody from "@/content/home.html?raw";
import css from "@/content/home.css?raw";
import js from "@/content/home.js?raw";
import ld from "@/content/home.ld.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HM Sanierung | Rhein-Neckar, Vorderpfalz & Heilbronn" },
      {
        name: "description",
        content:
          "Sanierung & Renovierung in Heidelberg, Mannheim, Ludwigshafen, Frankenthal, Neustadt, Worms und Heilbronn: alle Gewerke mit Festpreisgarantie.",
      },
      { property: "og:title", content: "HM Sanierung | Rhein-Neckar, Vorderpfalz & Heilbronn" },
      {
        property: "og:description",
        content:
          "Sanierung & Renovierung in Heidelberg, Mannheim, Ludwigshafen, Frankenthal, Neustadt, Worms und Heilbronn: alle Gewerke mit Festpreisgarantie.",
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

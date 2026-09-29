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
    links: [
      { rel: "canonical", href: "https://hm-sanierung.com/" },
      {
        rel: "preload",
        as: "image",
        href: "/__l5e/assets-v1/981a8e0a-bf50-49d6-9a3e-3ac22fdee09e/Wohnung-optimized.webp",
        imageSrcSet:
          "/__l5e/assets-v1/a605954f-da68-4a77-86ec-5a7ceeb14789/Wohnung-560.webp 560w, /__l5e/assets-v1/981a8e0a-bf50-49d6-9a3e-3ac22fdee09e/Wohnung-optimized.webp 1000w",
        imageSizes: "(max-width: 640px) 92vw, (max-width: 1100px) 50vw, 560px",
        fetchPriority: "high",
        type: "image/webp",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={htmlBody} css={css} js={js} jsonLd={ld} />;
}

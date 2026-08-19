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
      { name: "description", content: "HeinzelM\u00e4nner \u2013 Sanierung & Renovierung in Heidelberg, Mannheim und Heilbronn. Komplettsanierung, Badsanierung, Bodenverlegung, Trockenbau, Malerarbeiten. Fes" },
      { property: "og:title", content: "HeinzelM\u00e4nner \u2014 Sanierung aus einer Hand \u00b7 Heidelberg / Mannheim / Heilbronn" },
      { property: "og:description", content: "HeinzelM\u00e4nner \u2013 Sanierung & Renovierung in Heidelberg, Mannheim und Heilbronn. Komplettsanierung, Badsanierung, Bodenverlegung, Trockenbau, Malerarbeiten. Fes" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={htmlBody} css={css} js={js} jsonLd={ld} />;
}

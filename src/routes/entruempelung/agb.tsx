import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import htmlBody from "@/content/entruempelung-agb.html?raw";
import css from "@/content/entruempelung-agb.css?raw";
import js from "@/content/entruempelung-agb.js?raw";
import ld from "@/content/entruempelung-agb.ld.json";

export const Route = createFileRoute("/entruempelung/agb")({
  head: () => ({
    meta: [
      { title: "Allgemeine Gesch\u00e4ftsbedingungen \u00b7 HeinzelM\u00e4nner" },
      { name: "description", content: "" },
      { property: "og:title", content: "Allgemeine Gesch\u00e4ftsbedingungen \u00b7 HeinzelM\u00e4nner" },
      { property: "og:description", content: "" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={htmlBody} css={css} js={js} jsonLd={ld} />;
}

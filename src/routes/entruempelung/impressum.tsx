import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import htmlBody from "@/content/entruempelung-impressum.html?raw";
import css from "@/content/entruempelung-impressum.css?raw";
import js from "@/content/entruempelung-impressum.js?raw";
import ld from "@/content/entruempelung-impressum.ld.json";

export const Route = createFileRoute("/entruempelung/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum \u00b7 HeinzelM\u00e4nner" },
      { name: "description", content: "" },
      { property: "og:title", content: "Impressum \u00b7 HeinzelM\u00e4nner" },
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

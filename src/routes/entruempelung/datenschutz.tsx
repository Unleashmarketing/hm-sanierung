import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import htmlBody from "@/content/entruempelung-datenschutz.html?raw";
import css from "@/content/entruempelung-datenschutz.css?raw";
import js from "@/content/entruempelung-datenschutz.js?raw";
import ld from "@/content/entruempelung-datenschutz.ld.json";

export const Route = createFileRoute("/entruempelung/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerkl\u00e4rung \u00b7 HeinzelM\u00e4nner" },
      { name: "description", content: "" },
      { property: "og:title", content: "Datenschutzerkl\u00e4rung \u00b7 HeinzelM\u00e4nner" },
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

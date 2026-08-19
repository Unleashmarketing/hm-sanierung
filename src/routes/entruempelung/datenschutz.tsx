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
      {
        name: "description",
        content:
          "Datenschutzerkl\u00e4rung der HeinzelM\u00e4nner GmbH: Welche Daten wir bei Anfragen zur Entr\u00fcmpelung erheben, wie wir sie verarbeiten und welche Rechte Sie nach DSGVO haben.",
      },
      { property: "og:title", content: "Datenschutzerkl\u00e4rung \u00b7 HeinzelM\u00e4nner" },
      {
        property: "og:description",
        content:
          "Datenschutzerkl\u00e4rung der HeinzelM\u00e4nner GmbH: Datenverarbeitung bei Anfragen, Speicherdauer und Ihre Rechte nach DSGVO.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hm-sanierung.com/entruempelung/datenschutz" }],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={htmlBody} css={css} js={js} jsonLd={ld} />;
}

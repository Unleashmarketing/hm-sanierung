import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import htmlBody from "@/content/datenschutz.html?raw";
import css from "@/content/datenschutz.css?raw";
import js from "@/content/datenschutz.js?raw";
import ld from "@/content/datenschutz.ld.json";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerkl\u00e4rung \u00b7 HM Sanierung" },
      {
        name: "description",
        content:
          "Datenschutzerkl\u00e4rung der HeinzelMänner Hausmeister Dienste und Gebäude Service GmbH: Welche Daten wir bei Anfragen zur Entr\u00fcmpelung erheben, wie wir sie verarbeiten und welche Rechte Sie nach DSGVO haben.",
      },
      { property: "og:title", content: "Datenschutzerkl\u00e4rung \u00b7 HM Sanierung" },
      {
        property: "og:description",
        content:
          "Datenschutzerkl\u00e4rung der HeinzelMänner Hausmeister Dienste und Gebäude Service GmbH: Datenverarbeitung bei Anfragen, Speicherdauer und Ihre Rechte nach DSGVO.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hm-sanierung.com/datenschutz" }],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={htmlBody} css={css} js={js} jsonLd={ld} />;
}

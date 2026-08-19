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
      {
        name: "description",
        content:
          "Impressum der HeinzelM\u00e4nner Hausmeister Dienste und Geb\u00e4ude Service GmbH in Leimen: Anbieterangaben nach \u00a7 5 TMG, Gesch\u00e4ftsf\u00fchrung, Kontakt und Umsatzsteuer-ID.",
      },
      { property: "og:title", content: "Impressum \u00b7 HeinzelM\u00e4nner" },
      {
        property: "og:description",
        content:
          "Impressum der HeinzelM\u00e4nner Hausmeister Dienste und Geb\u00e4ude Service GmbH in Leimen: Anbieterangaben, Gesch\u00e4ftsf\u00fchrung, Kontakt und Umsatzsteuer-ID.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hm-sanierung.com/entruempelung/impressum" }],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={htmlBody} css={css} js={js} jsonLd={ld} />;
}

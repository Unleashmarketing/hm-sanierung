import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import htmlBody from "@/content/impressum.html?raw";
import css from "@/content/impressum.css?raw";
import js from "@/content/impressum.js?raw";
import ld from "@/content/impressum.ld.json";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum \u00b7 HM Sanierung" },
      {
        name: "description",
        content:
          "Impressum der HeinzelMänner Hausmeister Dienste und Gebäude Service GmbH in Leimen: Anbieterangaben nach \u00a7 5 TMG, Gesch\u00e4ftsf\u00fchrung, Kontakt und Umsatzsteuer-ID.",
      },
      { property: "og:title", content: "Impressum \u00b7 HM Sanierung" },
      {
        property: "og:description",
        content:
          "Impressum der HeinzelMänner Hausmeister Dienste und Gebäude Service GmbH in Leimen: Anbieterangaben, Gesch\u00e4ftsf\u00fchrung, Kontakt und Umsatzsteuer-ID.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hm-sanierung.com/impressum" }],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={htmlBody} css={css} js={js} jsonLd={ld} />;
}

import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import htmlBody from "@/content/agb.html?raw";
import css from "@/content/agb.css?raw";
import js from "@/content/agb.js?raw";
import ld from "@/content/agb.ld.json";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "Allgemeine Gesch\u00e4ftsbedingungen \u00b7 HM Sanierung" },
      {
        name: "description",
        content:
          "Allgemeine Gesch\u00e4ftsbedingungen der HeinzelMänner Hausmeister Dienste und Gebäude Service GmbH f\u00fcr Entr\u00fcmpelung und Haushaltsaufl\u00f6sung: Angebot, Festpreis, Termine, Zahlung, Haftung und Widerruf.",
      },
      { property: "og:title", content: "Allgemeine Gesch\u00e4ftsbedingungen \u00b7 HM Sanierung" },
      {
        property: "og:description",
        content:
          "AGB der HeinzelMänner Hausmeister Dienste und Gebäude Service GmbH f\u00fcr Entr\u00fcmpelung und Haushaltsaufl\u00f6sung: Festpreis, Termine, Zahlung, Haftung und Widerruf.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hm-sanierung.com/agb" }],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={htmlBody} css={css} js={js} jsonLd={ld} />;
}

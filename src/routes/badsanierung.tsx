import { createFileRoute } from "@tanstack/react-router";
import StaticPage from "@/components/StaticPage";
import htmlBody from "@/content/bad.html?raw";
import homeCss from "@/content/home.css?raw";
import badCss from "@/content/bad.css?raw";
import js from "@/content/bad.js?raw";
import ld from "@/content/bad.ld.json";

export const Route = createFileRoute("/badsanierung")({
  head: () => ({
    meta: [
      {
        title:
          "Badsanierung Heidelberg, Mannheim & Heilbronn \u2013 Festpreis, fertig in 2\u20134 Wochen | HeinzelM\u00e4nner",
      },
      {
        name: "description",
        content:
          "Badsanierung in Heidelberg, Mannheim und Heilbronn: Komplettbad, Walk-in-Dusche und barrierefreies Bad aus einer Hand. Verbindlicher Festpreis, eigene Handwerker, fertig in 2\u20134 Wochen \u2013 Sie k\u00f6nnen wohnen bleiben.",
      },
      {
        property: "og:title",
        content:
          "Badsanierung Heidelberg, Mannheim & Heilbronn \u2013 Festpreis | HeinzelM\u00e4nner",
      },
      {
        property: "og:description",
        content:
          "Ihr neues Bad. Ehrlich geplant. Festpreis, der h\u00e4lt. Sanit\u00e4r, Fliesen und Elektrik aus einer Hand \u2013 fertig in 2\u20134 Wochen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hm-sanierung.com/badsanierung" }],
  }),
  component: Page,
});

function Page() {
  return <StaticPage html={htmlBody} css={homeCss + "\n" + badCss} js={js} jsonLd={ld} />;
}

import { useEffect, useRef } from "react";

type Props = {
  html: string;
  css: string;
  js?: string;
  jsonLd?: unknown[];
};

export default function StaticPage({ html, css, js, jsonLd }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!js) return;
    const el = document.createElement("script");
    el.textContent = js;
    document.body.appendChild(el);
    return () => {
      el.remove();
    };
  }, [js]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {jsonLd?.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

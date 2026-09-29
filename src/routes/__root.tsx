import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

const FONT_CSS =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HM Sanierung, Sanierung aus einer Hand" },
      {
        name: "description",
        content:
          "Sanierung & Renovierung in Heidelberg, Mannheim und Heilbronn, Festpreisgarantie, eigene Handwerker.",
      },
      { name: "author", content: "HM Sanierung" },
      { property: "og:title", content: "HM Sanierung, Sanierung aus einer Hand" },
      {
        property: "og:description",
        content:
          "Sanierung & Renovierung in Heidelberg, Mannheim und Heilbronn, Festpreisgarantie, eigene Handwerker.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "google-site-verification",
        content: "U-E8-UOo_4E1_z8fNeH2tPje1YmBPPgRj2XoJ1bkG7Y",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "style",
        href: FONT_CSS,
      },
    ],
    scripts: [
      {
        children: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='${FONT_CSS}';document.head.appendChild(l);})();`,
      },
      {
        // Load gtag.js after the page is idle or on first interaction to keep it off the critical path.
        children: `(function(){var done=false;function load(){if(done)return;done=true;var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-SMCEYF0863';document.head.appendChild(s);}
['pointerdown','keydown','scroll','touchstart'].forEach(function(e){window.addEventListener(e,load,{once:true,passive:true});});
window.addEventListener('load',function(){if('requestIdleCallback' in window){requestIdleCallback(load,{timeout:3500});}else{setTimeout(load,2500);}});})();`,
      },
      {
        children: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', 'G-SMCEYF0863');
gtag('config', 'AW-16711717313');
window.gtag_report_conversion = function(url, send_to) {
  var callback = function () {
    if (typeof(url) != 'undefined') { window.location = url; }
  };
  gtag('event', 'conversion', { 'send_to': send_to, 'event_callback': callback });
  return false;
};
window.gtag_report_lead = function(send_to) {
  gtag('event', 'conversion', { 'send_to': send_to });
};
window.gtag_report_pageview = function(path) {
  gtag('event', 'page_view', {
    send_to: 'G-SMCEYF0863',
    page_location: window.location.href,
    page_path: path || window.location.pathname,
    page_title: document.title
  });
};
`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = router.subscribe("onResolved", ({ toLocation }) => {
      const w = window as unknown as {
        gtag?: (...args: unknown[]) => void;
        gtag_report_pageview?: (path?: string) => void;
      };
      if (w.gtag_report_pageview) {
        w.gtag_report_pageview(toLocation.pathname);
      } else {
        w.gtag?.("event", "page_view", {
          send_to: "G-SMCEYF0863",
          page_path: toLocation.pathname,
          page_location: window.location.href,
          page_title: document.title,
        });
      }
    });
    return unsubscribe;
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

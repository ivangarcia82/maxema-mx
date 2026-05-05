// Map any maxema.com source URL onto the local route equivalent.
// Used by every cloned page when ingesting links scraped from the live site.
// External hosts (instagram, linkedin, youtube, fast.fonts, landing.maxema.com)
// pass through unchanged.

const HOST_RE = /^(?:https?:)?\/\/(?:www\.)?maxema\.com/;

const PRODUCT_RE = /^\/product\/en\/(\d+)\/?$/;
const SEARCH_RE = /^\/search\/en\/(\d+)\/?$/;
const RESERVED_AREA_RE = /^\/(?:request-sample|favorites|user-profile)\/en\/?$/;
const ANCHOR_RE = /^\/customisation\/en\/?#sezione_(\w+)$/;

const STATIC_MAP: Record<string, string> = {
  "/about/en/": "/about",
  "/contacts/en/": "/contacts",
  "/customisation/en/": "/customisation",
  "/finishes/en/": "/finishes",
  "/services/en/": "/services",
  "/sample_cases/en/": "/sample-cases",
  "/recycled-plastic-pens/en/": "/recycled-plastic-pens",
  "/products/en/": "/products",
  "/faq/en/": "/faq",
  "/media/en/": "/media",
  "/cookie_privacy_policy/en": "/cookie-privacy-policy",
  "/kind-rpet/en": "/kind-rpet",
  "/no-news-good-news/en": "/no-news-good-news",
};

const SECTION_ANCHOR_MAP: Record<string, string> = {
  packaging: "packaging",
  pantone: "pantone",
  stampa: "print",
};

export function rewriteHref(href: string | null | undefined): string {
  if (!href) return "#";
  let h = href.trim();
  if (!h) return "#";

  // Already-relative anchors / fragments
  if (h.startsWith("#")) return h;

  // External or non-maxema URLs pass through
  if (
    /^(?:mailto:|tel:|javascript:)/i.test(h) ||
    /^https?:\/\/(?!(?:www\.)?maxema\.com)/i.test(h) ||
    /landing\.maxema\.com/i.test(h)
  ) {
    return h;
  }

  // Strip protocol+host to get pathname
  let pathAndRest = h.replace(HOST_RE, "");
  if (!pathAndRest.startsWith("/")) pathAndRest = "/" + pathAndRest;

  // Split on first ? or #
  const qIdx = pathAndRest.indexOf("?");
  const fIdx = pathAndRest.indexOf("#");
  let cut = pathAndRest.length;
  if (qIdx !== -1) cut = Math.min(cut, qIdx);
  if (fIdx !== -1) cut = Math.min(cut, fIdx);
  const pathname = pathAndRest.slice(0, cut);
  const query = qIdx !== -1 ? pathAndRest.slice(qIdx, fIdx === -1 ? undefined : fIdx) : "";
  const fragment = fIdx !== -1 ? pathAndRest.slice(fIdx) : "";

  // Drop ?l=en / ?l=it (locale switcher targets)
  const cleanedQuery = query.replace(/(?:[?&])l=[a-z]{2}(?=&|$)/g, "");
  const finalQuery = cleanedQuery === "?" ? "" : cleanedQuery;

  // Root
  if (pathname === "/" || pathname === "") return "/" + finalQuery + fragment;

  // Static pages
  const staticHit = STATIC_MAP[pathname];
  if (staticHit) {
    // Map customisation anchors (sezione_pantone -> #pantone, etc.)
    if (fragment.startsWith("#sezione_")) {
      const key = fragment.replace("#sezione_", "");
      const mapped = SECTION_ANCHOR_MAP[key] || key;
      return staticHit + "#" + mapped;
    }
    return staticHit + finalQuery + fragment;
  }

  // Reserved area (request-sample / favorites / user-profile)
  if (RESERVED_AREA_RE.test(pathname)) return "/reserved-area";

  // Product detail
  const pm = pathname.match(PRODUCT_RE);
  if (pm) return `/products/${pm[1]}`;

  // Search category
  const sm = pathname.match(SEARCH_RE);
  if (sm) return `/search/${sm[1]}`;

  // Customisation anchor without trailing slash
  const am = pathname.match(ANCHOR_RE);
  if (am) return `/customisation#${SECTION_ANCHOR_MAP[am[1]] || am[1]}`;

  // Anything else: best-effort — keep pathname, drop locale segments
  const stripped = pathname.replace(/\/en\/?$/, "").replace(/\/it\/?$/, "");
  return stripped + finalQuery + fragment || "/";
}

// Asset URLs (images, videos) — drop the host so /assets/... and /media/... resolve
// against our public/ directory which mirrors the source path structure.
export function rewriteAsset(src: string | null | undefined): string {
  if (!src) return "";
  const cleaned = src.replace(HOST_RE, "");
  return cleaned.startsWith("/") ? cleaned : "/" + cleaned;
}

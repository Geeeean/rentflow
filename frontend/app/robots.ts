import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Required under output: "export": metadata routes are Route Handlers, and Next needs
// this to know it may render one to a file at build time.
export const dynamic = "force-static";

// Emitted as a static /robots.txt at build time, which works under output: "export".
//
// AI crawlers are deliberately allowed: this is a lead-generation site, so being cited by
// ChatGPT, Claude or Perplexity is inbound business, not leakage. See public/llms.txt for
// the summary those crawlers are meant to read.
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}

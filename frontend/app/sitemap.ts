import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Required under output: "export": metadata routes are Route Handlers, and Next needs
// this to know it may render one to a file at build time.
export const dynamic = "force-static";

// Trailing slashes match next.config.ts `trailingSlash: true` and the canonical tags, so a
// crawler never sees two spellings of the same URL.
const ROUTES: { path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/servizi/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/alloggi/", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contatti/", priority: 0.6, changeFrequency: "yearly" },
    { path: "/per-agenzie/", priority: 0.6, changeFrequency: "yearly" },
    { path: "/about-us/", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy-policy/", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return ROUTES.map(({ path, priority, changeFrequency }) => ({
        url: `${SITE_URL}${path}`,
        lastModified,
        changeFrequency,
        priority,
    }));
}

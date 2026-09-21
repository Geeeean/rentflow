import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Required under output: "export": metadata routes are Route Handlers, and Next needs
// this to know it may render one to a file at build time.
export const dynamic = "force-static";

// Trailing slashes match next.config.ts `trailingSlash: true` and the canonical tags, so a
// crawler never sees two spellings of the same URL. No priority/changefreq: Google ignores both.
// /privacy-policy/ is left out while it is noindex — add it back when that page is finalised.
const ROUTES: { path: string, source: string }[] = [
    { path: "/", source: "app/page.tsx" },
    { path: "/servizi/", source: "app/servizi/page.tsx" },
    { path: "/alloggi/", source: "app/alloggi/page.tsx" },
    { path: "/contatti/", source: "app/contatti/page.tsx" },
    { path: "/per-agenzie/", source: "app/per-agenzie/page.tsx" },
    { path: "/about-us/", source: "app/about-us/page.tsx" },
];

const git = (...args: string[]) => execFileSync("git", args, { encoding: "utf8" }).trim();

/**
 * When the page's source last changed, so lastmod carries real signal instead of the build
 * time repeated on every URL. Uncommitted edits count as "now". Without git history (e.g. a
 * host that builds from a snapshot) lastmod is omitted: no date beats a wrong one.
 */
const lastModified = (source: string) => {
    try {
        if (git("status", "--porcelain", "--", source)) return new Date();
        const committed = git("log", "-1", "--format=%cI", "--", source);
        return committed ? new Date(committed) : undefined;
    } catch {
        return undefined;
    }
};

export default function sitemap(): MetadataRoute.Sitemap {
    return ROUTES.map(({ path, source }) => ({
        url: `${SITE_URL}${path}`,
        lastModified: lastModified(source),
    }));
}

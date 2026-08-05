import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

// Required under output: "export": metadata routes are Route Handlers, and Next needs
// this to know it may render one to a file at build time.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${SITE_NAME} — Il partner strategico per il tuo immobile`,
        short_name: SITE_NAME,
        description: SITE_DESCRIPTION,
        lang: "it",
        start_url: "/",
        display: "standalone",
        background_color: "#fafaf9", // stone-50, the page background
        theme_color: "#0f172a",      // slate-900, the nav/panel colour
        icons: [
            { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
            { src: "/apple-icon", sizes: "180x180", type: "image/png" },
        ],
    };
}

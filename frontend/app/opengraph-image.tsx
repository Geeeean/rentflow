import { SITE_NAME } from "@/lib/site";
import { OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = `${SITE_NAME} — Gestione affitti brevi a Perugia e in Umbria`;
export const size = OG_SIZE;
export const contentType = "image/png";
// Required under output: "export" — tells Next this image route is fully static and can be
// rendered to a file at build time rather than served from a running server.
export const dynamic = "force-static";

export default function OpengraphImage() {
    return renderOgImage({ eyebrow: "Gestione immobiliare · Perugia", lines: ["Il partner strategico", "per il tuo immobile."] });
}

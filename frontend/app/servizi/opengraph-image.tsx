import { OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Rentflow — Servizi di gestione immobiliare a Perugia";
export const size = OG_SIZE;
export const contentType = "image/png";
// See app/opengraph-image.tsx — required under output: "export".
export const dynamic = "force-static";

export default function OpengraphImage() {
    return renderOgImage({ eyebrow: "Servizi · Perugia e Umbria", lines: ["Cinque servizi,", "infinite combinazioni."] });
}

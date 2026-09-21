import { OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Rentflow — Alloggi in gestione a Perugia";
export const size = OG_SIZE;
export const contentType = "image/png";
// See app/opengraph-image.tsx — required under output: "export".
export const dynamic = "force-static";

export default function OpengraphImage() {
    return renderOgImage({ eyebrow: "Alloggi · Perugia", lines: ["Immobili selezionati,", "gestiti e ottimizzati."] });
}

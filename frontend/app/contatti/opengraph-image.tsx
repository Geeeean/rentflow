import { OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Rentflow — Richiedi la valutazione gratuita";
export const size = OG_SIZE;
export const contentType = "image/png";
// See app/opengraph-image.tsx — required under output: "export".
export const dynamic = "force-static";

export default function OpengraphImage() {
    return renderOgImage({ eyebrow: "Valutazione gratuita", lines: ["Il primo passo", "non costa nulla."] });
}

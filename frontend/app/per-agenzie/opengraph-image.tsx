import { OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Rentflow — Collaborazione per agenzie immobiliari";
export const size = OG_SIZE;
export const contentType = "image/png";
// See app/opengraph-image.tsx — required under output: "export".
export const dynamic = "force-static";

export default function OpengraphImage() {
    return renderOgImage({ eyebrow: "Per agenzie immobiliari", lines: ["Un servizio in più,", "una provvigione in più."] });
}

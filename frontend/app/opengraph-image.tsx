import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME} — Il partner strategico per il tuo immobile`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Required under output: "export" — tells Next this image route is fully static and can be
// rendered to a file at build time rather than served from a running server.
export const dynamic = "force-static";

// No custom font on purpose: ImageResponse needs font data, and fetching Google Fonts at
// build time is the usual way this step breaks. The bundled default keeps the build hermetic.
export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#0f172a",
                    padding: 80,
                    color: "white",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 999, background: "#34d399" }} />
                    <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#94a3b8" }}>
                        Gestione immobiliare · Perugia
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05 }}>rentflow.</div>
                    <div style={{ fontSize: 44, color: "#cbd5e1", marginTop: 16, lineHeight: 1.2 }}>
                        Il partner strategico
                    </div>
                    <div style={{ fontSize: 44, color: "#cbd5e1", lineHeight: 1.2 }}>
                        per il tuo immobile.
                    </div>
                </div>

                <div style={{ display: "flex", fontSize: 26, color: "#64748b" }}>
                    rentflow.it
                </div>
            </div>
        ),
        size,
    );
}

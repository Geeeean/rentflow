import { ImageResponse } from "next/og";

const OG_SIZE = { width: 1200, height: 630 };

// No custom font on purpose: ImageResponse needs font data, and fetching Google Fonts at
// build time is the usual way this step breaks. The bundled default keeps the build hermetic.
/** The shared share-card layout; each route's opengraph-image.tsx only supplies its words. */
const renderOgImage = ({ eyebrow, lines }: { eyebrow: string, lines: [string, string] }) => new ImageResponse(
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
                    {eyebrow}
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05 }}>rentflow.</div>
                {lines.map(line => (
                    <div key={line} style={{ fontSize: 44, color: "#cbd5e1", marginTop: 8, lineHeight: 1.2 }}>
                        {line}
                    </div>
                ))}
            </div>

            <div style={{ display: "flex", fontSize: 26, color: "#64748b" }}>
                rentflow.it
            </div>
        </div>
    ),
    OG_SIZE,
);

export { renderOgImage, OG_SIZE }

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
// Required under output: "export" — tells Next this image route is fully static and can be
// rendered to a file at build time rather than served from a running server.
export const dynamic = "force-static";

// Same "r" outline as app/icon.svg and app/favicon.ico, so every surface shows one mark.
// Drawn as a path rather than set as text: ImageResponse has no serif/bold face bundled,
// and the glyph shape shouldn't depend on what fonts happen to be available.
const R_PATH = "M19 53 L19 15 L32 15 L32 24 C36 17 45 12 53 15 L49 28 C42 26 34 32 32 40 L32 53 Z";

// Apple fills the full square and applies its own rounding, so no corner radius here.
export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0f172a",
                }}
            >
                <svg width="132" height="132" viewBox="0 0 64 64">
                    <path d={R_PATH} fill="#ffffff" />
                </svg>
            </div>
        ),
        size,
    );
}

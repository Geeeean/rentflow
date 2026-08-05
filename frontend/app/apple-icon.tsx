import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
// Required under output: "export" — tells Next this image route is fully static and can be
// rendered to a file at build time rather than served from a running server.
export const dynamic = "force-static";

// Same "R" outline as app/icon.svg, matching the favicon.ico that came in from the remote.
// Drawn as strokes rather than set as text: ImageResponse has no bold face bundled, and the
// glyph shouldn't depend on what fonts happen to be available at build time.
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
                    background: "#0738ca",
                }}
            >
                <svg width="132" height="132" viewBox="0 0 64 64">
                    <g fill="none" stroke="#ffffff" strokeWidth="11" strokeLinejoin="round">
                        <path d="M18 11.5V52" />
                        <path d="M18 17h18a10 10 0 0 1 0 20H18" />
                        <path d="M30 37L44 52" />
                    </g>
                </svg>
            </div>
        ),
        size,
    );
}

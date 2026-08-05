import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Layout } from "../components/layout";
import { OrganizationSchema } from "../components/structured_data";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../lib/site";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    // Required before any relative canonical or og:image resolves to an absolute URL.
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SITE_NAME} — Il partner strategico per il tuo immobile`,
        // Pages export a bare title ("Servizi") and the suffix is applied here, once.
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "it_IT",
        siteName: SITE_NAME,
        url: "/",
        title: `${SITE_NAME} — Il partner strategico per il tuo immobile`,
        description: SITE_DESCRIPTION,
    },
    twitter: {
        // Reuses the opengraph-image automatically — no separate twitter-image needed.
        card: "summary_large_image",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            // Allows full-size thumbnails and untruncated snippets in results.
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden bg-stone-50`}
            >
                <OrganizationSchema />
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from 'next/font/google'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RentFlow",
  description: "Rendimento sicuro",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={inter.className}>
      <SpeedInsights/>
      <body>{children}</body>
    </html>
  );
}

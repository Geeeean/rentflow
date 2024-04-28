import { Inter } from 'next/font/google'
import type { Metadata } from "next";
import Head from 'next/head';
import Script from 'next/script';

import Wrapper from './components/Wrapper';
import NavWrapper from './components/NavWrapper';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "RentFlow",
  description: "Rendimento sicuro",
  icons: "/favicon.ico"
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
      <body>
        <Wrapper>
          <NavWrapper />
          {children}
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}

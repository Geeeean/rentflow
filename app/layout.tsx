import { Inter } from 'next/font/google'
import type { Metadata } from "next";
import Wrapper from './components/Wrapper';
import NavWrapper from './components/NavWrapper';

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
        </Wrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jade Collective | Talent Management, San Diego",
  description:
    "Jade Collective is a boutique talent management agency based in San Diego, CA, representing creators and talent with intention and care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${redHatDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}

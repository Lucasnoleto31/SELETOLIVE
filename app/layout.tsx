import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { VideoGate } from "@/components/VideoGate";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const TITLE = "Sala ao Vivo - Fabrício Gonçalvez";
const DESCRIPTION =
  "Opere o pregão ao lado do Fabrício Gonçalvez. Acompanhe cada decisão na tela, ao vivo.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "pt_BR",
    siteName: "Sala ao Vivo",
    images: [
      {
        url: "/zeve-logo.png",
        width: 320,
        height: 234,
        alt: "Sala ao Vivo - Fabrício Gonçalvez",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/zeve-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        {children}
        <FloatingWhatsApp />
        <VideoGate />
      </body>
    </html>
  );
}

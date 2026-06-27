import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { VideoGate } from "@/components/VideoGate";

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

export const metadata: Metadata = {
  title: "Sala ao Vivo — Fabrício Gonçalvez | Zeve",
  description:
    "Opere o pregão ao lado do Fabrício Gonçalvez. Acompanhe cada decisão na tela, ao vivo. A sala é por nossa conta para quem opera com a Zeve.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-bg text-fg antialiased">
        {children}
        <VideoGate />
      </body>
    </html>
  );
}

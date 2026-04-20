import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BNG Event Planners | Premium Event Planning in Vijayawada",
  description:
    "Make every celebration grand with BNG Event Planners. Luxury event planning, wedding decorations, photography, DJ sound, and entertainment services in Vijayawada, Andhra Pradesh.",
  keywords: [
    "event planners vijayawada",
    "wedding decorators",
    "birthday party planners",
    "luxury events",
    "BNG Event Planners",
    "event management andhra pradesh",
  ],
  openGraph: {
    title: "BNG Event Planners | Premium Event Planning in Vijayawada",
    description:
      "Make every celebration grand with BNG Event Planners. Luxury event planning and decorations.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#D4AF37",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-[#0a0a0a]`}>
      <body className="font-sans antialiased bg-[#0a0a0a]">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

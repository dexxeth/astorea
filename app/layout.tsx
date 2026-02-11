import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "ASTOREA | Industrial Luxury Construction Adhesives",
  description: "The Gold Standard for Tile & Stone. Premium construction adhesives, grouts, and epoxy.",
  icons: [
    {
      rel: "icon",
      url: "/logo-dark.ico",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      url: "/logo-light.ico",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

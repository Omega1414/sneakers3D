import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { obrazec, huitside } from './fonts';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interactive Sneakers Showcase",
  description: "An immersive 3D web experience showcasing the legendary Air Jordan 1. Concept design created for portfolio presentation only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${obrazec.variable} ${huitside.variable}  ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

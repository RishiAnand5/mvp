import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "./components/Nav";
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
  title: "Allanki — Built for Creative",
  description:
    "Allanki helps talent managers, writers, film makers, and content creators do their best work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#F6F2E7", color: "#2D1B4E" }}
      >
        <header className="sticky top-0 z-50" style={{ backgroundColor: "#F6F2E7" }} >
          <Nav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

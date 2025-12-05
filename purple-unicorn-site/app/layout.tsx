import type { Metadata } from "next";
import { Oswald, PT_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Purple Unicorn - A Candidate So Rare, They're Almost Mythical",
  description: "Where exceptional talent meets strategic growth. Purple Unicorn provides premier talent acquisition and HR consultancy services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ptSans.variable} ${oswald.variable} font-sans antialiased`}
      >
        <NavBar />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

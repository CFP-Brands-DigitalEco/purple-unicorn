import type { Metadata } from "next";
import { Oswald, PT_Sans } from "next/font/google";
import Script from "next/script";
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
  title: "Purple Unicorn | Full Cycle Talent Solutions",
  description: "We support advancing organizations and professionals of all levels to reach their maximum potential for impact",
  keywords: ["career coaching", "hr services", "hr consulting", "talent acquisition", "recruitment", "career development"],
  authors: [{ name: "Purple Unicorn" }],
  metadataBase: new URL('https://purpluni.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Purple Unicorn | Full Cycle Talent Solutions",
    description: "We support advancing organizations and professionals of all levels to reach their maximum potential for impact",
    url: 'https://purpluni.com',
    siteName: 'Purple Unicorn',
    type: 'website',
    images: [
      {
        url: '/images/PUE_Favicon.jpeg',
        width: 1200,
        height: 630,
        alt: 'Purple Unicorn - Full Cycle Talent Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Purple Unicorn | Full Cycle Talent Solutions",
    description: "We support advancing organizations and professionals of all levels to reach their maximum potential for impact",
    images: ['/images/PUE_Favicon.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/PUE_Favicon.jpeg',
    shortcut: '/images/PUE_Favicon.jpeg',
    apple: '/images/PUE_Favicon.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TL677PMP');`}
        </Script>

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R38GDP5861"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R38GDP5861');`}
        </Script>
      </head>
      <body
        className={`${ptSans.variable} ${oswald.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TL677PMP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <NavBar />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

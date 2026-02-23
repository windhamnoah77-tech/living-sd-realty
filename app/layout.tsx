import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

const siteUrl =
  rawSiteUrl && rawSiteUrl.startsWith("http")
    ? rawSiteUrl
    : rawSiteUrl
      ? `https://${rawSiteUrl}`
      : "https://livingsandiegorealty.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Living San Diego Realty | Noah Windham",
    template: "%s | Living San Diego Realty",
  },
  description:
    "Trust & estate real estate representation for trustees, executors, and serious investors. Defensible pricing, disciplined marketing, and clean execution.",
  verification: {
    google: "J2odBLATDAsa_8J1FJQFZHReovHTEZ3LxcfvUDLe1AM",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Living San Diego Realty | Noah Windham",
    description:
      "Trust & estate real estate representation for trustees, executors, and serious investors.",
    siteName: "Living San Diego Realty",
    type: "website",
    url: "https://livingsandiegorealty.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Living San Diego Realty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Living San Diego Realty | Noah Windham",
    description:
      "Trust & estate real estate representation for trustees, executors, and serious investors.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DS08FHFQ8N"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DS08FHFQ8N', { anonymize_ip: true });
          `}
        </Script>

        <Nav />

        {/* Consistent spacing under sticky header */}
        <main className="pt-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
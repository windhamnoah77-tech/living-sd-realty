import type { Metadata } from "next";
import "./globals.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Living San Diego Realty | Noah Windham",
  description:
    "Trust & estate real estate representation for trustees, executors, and serious investors across San Diego and California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

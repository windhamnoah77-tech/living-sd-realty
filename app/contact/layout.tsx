import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Noah Windham | Get Your Home's Value",
  description:
    "Ask Noah Windham for a price range on your San Diego home. Trust, estate and 55+ community sales. Call (707) 305-6499 or send the address.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

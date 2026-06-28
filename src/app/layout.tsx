import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Suraj Shetty | Data & AI",
  description:
    "Suraj Shetty is a Melbourne-based data engineering lead and platform owner with over seven years of experience. He built and runs an entire multi-tenant analytics data platform end to end.",
  keywords: [
    "data engineering",
    "platform architect",
    "AWS",
    "Databricks",
    "dbt",
    "AI integration",
    "Melbourne",
  ],
  authors: [{ name: "Suraj Shetty" }],
  openGraph: {
    title: "Suraj Shetty, Data Engineering & Platform Lead",
    description:
      "Built an analytics data platform from zero to production. Deep expertise in AWS, Databricks, dbt, and AI/LLM integration.",
    url: "https://surajpshetty.com",
    siteName: "Suraj Shetty",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Shetty, Data Engineering & Platform Lead",
    description:
      "Built an analytics data platform from zero to production. End-to-end ownership across data engineering, cloud and AI.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}

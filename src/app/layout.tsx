import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import SchemaMarkup from "@/components/SchemaMarkup";
import ConversionTracking from "@/components/ConversionTracking";
import ClientBody from "@/app/ClientBody";

export const metadata: Metadata = {
  title: "Iron Works Solution | Premium Iron Fencing & Metal Fabrication in Southern California",
  description: "Expert iron fencing, custom gates, and metal fabrication for homes and businesses in Southern California. Licensed, insured, BBB A+ rated. Free quotes available.",
  keywords: "iron fence installation, custom iron gates, metal fabrication, wrought iron railing, Los Angeles iron fencing, Southern California ironworks, automated gates, powder coating",
  authors: [{ name: "Iron Works Solution" }],
  creator: "Iron Works Solution",
  publisher: "Iron Works Solution",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ironworkssolution.net',
    title: 'Iron Works Solution | Premium Iron Fencing & Metal Fabrication',
    description: 'Expert iron fencing, custom gates, and metal fabrication for homes and businesses in Southern California.',
    siteName: 'Iron Works Solution',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iron Works Solution | Premium Iron Fencing & Metal Fabrication',
    description: 'Expert iron fencing, custom gates, and metal fabrication for homes and businesses in Southern California.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <SchemaMarkup />
        <ConversionTracking />
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}

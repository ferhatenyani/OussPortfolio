import type { Metadata, Viewport } from "next";
import "./globals.css";

// TODO: replace SITE with your real production domain when ready.
const SITE = "https://oussamabenberkane.dev";
const TITLE = "Oussama Benberkane — Full Stack Developer";
const DESC =
  "Full-stack developer with a Master's in AI — building production systems end-to-end. REST APIs, cloud infrastructure, and React/Next.js. Béjaïa, Algeria · Remote.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  metadataBase: new URL(SITE),
  alternates: { canonical: "/" },
  keywords: [
    "Oussama Benberkane",
    "full stack developer",
    "portfolio",
    "Next.js",
    "TypeScript",
    "Spring Boot",
    "Django",
    "AI engineer",
    "Béjaïa",
    "Remote developer",
  ],
  authors: [{ name: "Oussama Benberkane", url: SITE }],
  creator: "Oussama Benberkane",
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE,
    siteName: "oussamabenberkane",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Oussama Benberkane — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4EDD8" },
    { media: "(prefers-color-scheme: dark)", color: "#1E1E2E" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="min-h-full"
        style={{ background: "#1A1A18", color: "#F4EDD8" }}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ouss — Software Engineer & Product Builder",
  description:
    "Portfolio of Ouss — engineer building considered, performant interfaces and systems. Selected work, experience, and writings.",
  metadataBase: new URL("https://oussthecodeguy.dev"),
  openGraph: {
    title: "Ouss — Software Engineer & Product Builder",
    description:
      "Selected work, experience, and writings. A studio-grade engineering portfolio.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--bg)] text-[color:var(--fg)]">
        {children}
      </body>
    </html>
  );
}

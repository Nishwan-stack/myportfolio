import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/lib/data";

const siteUrl = "https://nishwan.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — Software Developer & AI Enthusiast`,
  description: profile.summary,
  keywords: [
    "Nishwan S",
    "Software Developer",
    "Full Stack Developer",
    "AI Enthusiast",
    "React Developer",
    "SNS College of Engineering",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Software Developer & AI Enthusiast`,
    description: profile.summary,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Software Developer & AI Enthusiast`,
    description: profile.summary,
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased noise">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

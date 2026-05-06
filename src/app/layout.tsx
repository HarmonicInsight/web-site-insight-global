import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://insightoffice.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HARMONIC insight — Stop juggling three apps for one Office file",
    template: "%s · HARMONIC insight",
  },
  description:
    "AI translation, simplification, and summarization for PowerPoint, PDF, Word, and Excel — in one desktop app. 47 languages, 6 AI engines, layout untouched. Use your own AI keys. No subscription. Local processing.",
  keywords: [
    "office translator",
    "powerpoint translator",
    "pdf translator",
    "AI translation",
    "training video",
    "powerpoint to video",
    "BYOK",
    "DeepL alternative",
    "ChatGPT for office",
    "document localization",
    "layout preserving translation",
  ],
  authors: [{ name: "HARMONIC insight" }],
  creator: "HARMONIC insight",
  publisher: "HARMONIC insight",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "HARMONIC insight — One Office file. Four kinds of work.",
    description:
      "Translate into 47 languages across 6 AI engines, simplify for non-native readers, summarize, and refine — layout untouched. Use your own AI keys. No subscription.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "HARMONIC insight",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop juggling three apps for one Office file",
    description:
      "Translate, simplify, summarize, and refine PowerPoint, PDF, Word, and Excel in one desktop app. 47 languages, 6 AI engines, layout untouched.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

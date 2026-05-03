import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HARMONIC insight — Stop juggling 4 apps for one Office file",
  description:
    "AI translation, simplification, summarization, and training video generation for PowerPoint, PDF, Word, and Excel — in one Windows desktop app. 47 languages, 6 AI engines, layout always preserved.",
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
  ],
  authors: [{ name: "HARMONIC insight" }],
  openGraph: {
    title: "HARMONIC insight — One Office file. Four AI operations.",
    description:
      "Translate into 47 languages × 6 AI engines, simplify for non-native readers, summarize, and generate narrated videos. Layout always preserved. BYOK.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HARMONIC insight — Stop juggling 4 apps for one Office file",
    description:
      "Translate, simplify, summarize PowerPoint/PDF/Word/Excel in one Windows app. 47 languages × 6 AI engines.",
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

/**
 * Global product catalog and Checkout URLs.
 *
 * Live store: harmonic-insight-global.lemonsqueezy.com (separate from the JP store).
 * Env vars on Vercel can override these (useful for staging / future re-mapping):
 *   NEXT_PUBLIC_LS_GLOBAL_INST_PERS  — INST Personal variant URL
 *   NEXT_PUBLIC_LS_GLOBAL_INST_BIZ   — INST Business variant URL
 *   NEXT_PUBLIC_LS_GLOBAL_INMV_PERS  — INMV Personal variant URL
 *   NEXT_PUBLIC_LS_GLOBAL_INMV_BIZ   — INMV Business variant URL
 */

const FALLBACK_CHECKOUT = {
  INST_PERS: "https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/83eaa3a9-d5cc-4f92-badd-61172d3f1689",
  INST_BIZ: "https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/f50fb84b-2afa-446b-82ef-64caa3a09964",
  INMV_PERS: "https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/8188b251-c68e-437a-8c85-143e90038ec7",
  INMV_BIZ: "https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/8bd3095e-f4b0-4a67-9e4b-a2420c4d8195",
};

export const CHECKOUT_URLS = {
  INST_PERS: process.env.NEXT_PUBLIC_LS_GLOBAL_INST_PERS || FALLBACK_CHECKOUT.INST_PERS,
  INST_BIZ: process.env.NEXT_PUBLIC_LS_GLOBAL_INST_BIZ || FALLBACK_CHECKOUT.INST_BIZ,
  INMV_PERS: process.env.NEXT_PUBLIC_LS_GLOBAL_INMV_PERS || FALLBACK_CHECKOUT.INMV_PERS,
  INMV_BIZ: process.env.NEXT_PUBLIC_LS_GLOBAL_INMV_BIZ || FALLBACK_CHECKOUT.INMV_BIZ,
} as const;

export const TRIAL_BASE = "https://license.h-insight.jp/download";

export type ProductCode = "INST" | "INMV";
export type Plan = "PERS" | "BIZ";

export type Product = {
  code: ProductCode;
  name: string;
  tagline: string;
  iconBg: string; // tailwind gradient class
  emoji: string;
  description: string;
  features: { title: string; desc: string }[];
  bestFor: string[];
  prices: { personal: string; business: string };
};

export const products: Product[] = [
  {
    code: "INST",
    name: "Insight Doc Translator",
    tagline: "Translate, simplify, summarize, refine — one Office document, four operations.",
    iconBg: "from-rose-400 via-pink-500 to-fuchsia-600",
    emoji: "🌐",
    description:
      "DeepL for translation, ChatGPT for simplification, Acrobat for PDFs — Insight Doc Translator does all of it on one file, with your layout fully preserved.",
    features: [
      { title: "47 languages, 6 AI engines", desc: "DeepL · Google · Azure · Claude · Gemini · OpenAI. Switch per file or per row." },
      { title: "Four operations on one file", desc: "Translate · Simplify (CEFR / JLPT / HSK / TOPIK) · Summarize · Refine to formal tone." },
      { title: "Layout stays intact", desc: "Fonts, tables, images, embedded objects — preserved exactly as the original." },
      { title: "Glossary + translation memory", desc: "CSV/Excel + DeepL Glossary sync, TMX standard. CAT-tool features in a drag-and-drop UI." },
      { title: "Use your own AI keys (BYOK)", desc: "Bring keys for any of the six engines. Most teams stay within free tiers (~3M chars/month, combined)." },
      { title: "Local processing", desc: "Your documents never leave your PC. No cloud upload. No data harvesting." },
    ],
    bestFor: [
      "Localization specialists tired of post-editing layout breaks",
      "Knowledge workers translating proposals, reports, contracts",
      "Educators creating multilingual training materials",
      "Teams needing terminology consistency across translators",
    ],
    prices: { personal: "$199", business: "$499" },
  },
  {
    code: "INMV",
    name: "Insight Training Studio",
    tagline: "Your slides already have the script. Turn them into a narrated video.",
    iconBg: "from-violet-400 via-purple-500 to-indigo-600",
    emoji: "🎬",
    description:
      "The traditional way to produce one training video: voice actor + studio + editor + two weeks + $1,800–3,000. The Insight Training Studio way: drop a PowerPoint, pick a narration language, export MP4 in five minutes.",
    features: [
      { title: "PowerPoint or PDF → MP4 in five minutes", desc: "Speaker notes become AI narration. No voice actor. No studio. No editor." },
      { title: "47-language AI narration", desc: "Edge Neural TTS delivers near-human voices across all 47 languages." },
      { title: "Three TTS engines, freely switchable", desc: "Cloud (Edge Neural) + offline (VOICEVOX, Windows OneCore)." },
      { title: "Pro-quality output", desc: "Auto subtitles, BGM library, eight transitions, AI thumbnails, watermarks, step capture." },
      { title: "MP4 export up to 1080p", desc: "A standard format that plays anywhere. Up to 200 MB per video." },
      { title: "Local processing", desc: "Your slides and narration stay on your PC. No cloud upload." },
    ],
    bestFor: [
      "Corporate training teams with PowerPoint backlogs",
      "E-learning creators producing localized content",
      "SaaS companies generating onboarding videos",
      "Language teachers building course content",
    ],
    prices: { personal: "$199", business: "$499" },
  },
];

export function getCheckoutUrl(code: ProductCode, plan: Plan): string {
  const key = `${code}_${plan}` as keyof typeof CHECKOUT_URLS;
  return CHECKOUT_URLS[key];
}

export function getTrialUrl(code: ProductCode): string {
  return `${TRIAL_BASE}/${code}?lang=en`;
}

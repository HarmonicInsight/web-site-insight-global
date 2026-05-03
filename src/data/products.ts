/**
 * Global product catalog and Checkout URLs.
 *
 * The new Global LemonSqueezy store is being set up separately.
 * Until it's live, env vars or fallback URLs control the actual Checkout destinations.
 *
 * Once the new store is created, set these env vars on Vercel:
 *   NEXT_PUBLIC_LS_GLOBAL_INST_PERS  — INST Personal variant URL
 *   NEXT_PUBLIC_LS_GLOBAL_INST_BIZ   — INST Business variant URL
 *   NEXT_PUBLIC_LS_GLOBAL_INMV_PERS  — INMV Personal variant URL
 *   NEXT_PUBLIC_LS_GLOBAL_INMV_BIZ   — INMV Business variant URL
 */

const FALLBACK_CHECKOUT = {
  // 暫定: Global store ができるまでは既存 JP store の Global版variant に飛ばす
  INST_PERS: "https://harmonic-insight.lemonsqueezy.com/checkout/buy/01531472-5828-4771-81f2-4fefe0c64fd6",
  INST_BIZ: "https://harmonic-insight.lemonsqueezy.com/checkout/buy/30ef5925-4a7a-40d1-ab09-679ff702e22f",
  INMV_PERS: "https://harmonic-insight.lemonsqueezy.com/checkout/buy/d893fd97-3653-4d0a-b5ab-c95b3ff3843a",
  INMV_BIZ: "https://harmonic-insight.lemonsqueezy.com/checkout/buy/a26d7be1-897f-47cc-b973-293d111cbcb2",
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
    tagline: "Translate, simplify, summarize, polish — one Office file, all operations.",
    iconBg: "from-rose-400 via-pink-500 to-fuchsia-600",
    emoji: "🌐",
    description:
      "Stop juggling DeepL for translation, ChatGPT for simplification, and Acrobat for PDFs. Insight Doc Translator handles all of it on one file with layout fully preserved.",
    features: [
      { title: "47 languages × 6 AI engines", desc: "DeepL · Google · Azure · Claude · Gemini · OpenAI. Switch per file or per row." },
      { title: "4 operations on one file", desc: "Translate · Simplify (CEFR/JLPT/HSK/TOPIK) · Summarize · Polish to formal tone." },
      { title: "Layout always preserved", desc: "Fonts, tables, images, embedded objects — exactly as the original." },
      { title: "Glossary + Translation Memory", desc: "CSV/Excel + DeepL Glossary sync, TMX standard. CAT-tool features in a drag-and-drop UI." },
      { title: "BYOK (Bring Your Own Key)", desc: "Use your API keys for any of the 6 engines. ~3M chars/month free across providers." },
      { title: "Local processing only", desc: "Your documents never leave your PC. No cloud upload, no data harvesting." },
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
    tagline: "Your slides already have the script. Turn them into a video.",
    iconBg: "from-violet-400 via-purple-500 to-indigo-600",
    emoji: "🎬",
    description:
      "Producing one training video the traditional way: voice actor + studio + editor + 2 weeks + $1,800-3,000. Insight Training Studio replaces all of it with a Windows app: drop a PowerPoint, choose narration language, export MP4 in 5 minutes.",
    features: [
      { title: "PowerPoint or PDF → MP4 in 5 min", desc: "Speaker notes become AI narration. No voice actor, no studio, no editor." },
      { title: "47-language AI narration", desc: "Edge Neural TTS covers all 47 languages with near-human voices." },
      { title: "3 TTS engines, freely switchable", desc: "Cloud (Edge Neural) + Offline (VOICEVOX, Windows OneCore)." },
      { title: "Pro-quality output", desc: "Auto subtitles, BGM library, 8 transitions, AI thumbnails, watermarks, step capture." },
      { title: "MP4 export up to 1080p", desc: "Standard format, plays anywhere. Up to 200 MB per video." },
      { title: "Local processing only", desc: "Your slides and narration stay on your PC. No cloud upload." },
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

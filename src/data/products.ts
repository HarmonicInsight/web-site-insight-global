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
  INST_PERS: "https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/46732d69-c34f-4eb4-bdd6-31667b6a6985",
  INST_BIZ: "https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/b46f437b-2903-430f-acc0-c11ef436c951",
  INMV_PERS: "https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/a9d85148-f3ad-4a98-8f15-a78f7925591d",
  INMV_BIZ: "https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/d7e2bc72-9f8b-40aa-a6b2-f7abccf0ed38",
  INPY_PERS: "https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/8770e161-a63a-4d40-8389-d452fa12c6a7",
  INPY_BIZ: "https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/c33c3f25-006d-4a6b-a603-35057dad468f",
};

export const CHECKOUT_URLS = {
  INST_PERS: process.env.NEXT_PUBLIC_LS_GLOBAL_INST_PERS || FALLBACK_CHECKOUT.INST_PERS,
  INST_BIZ: process.env.NEXT_PUBLIC_LS_GLOBAL_INST_BIZ || FALLBACK_CHECKOUT.INST_BIZ,
  INMV_PERS: process.env.NEXT_PUBLIC_LS_GLOBAL_INMV_PERS || FALLBACK_CHECKOUT.INMV_PERS,
  INMV_BIZ: process.env.NEXT_PUBLIC_LS_GLOBAL_INMV_BIZ || FALLBACK_CHECKOUT.INMV_BIZ,
  INPY_PERS: process.env.NEXT_PUBLIC_LS_GLOBAL_INPY_PERS || FALLBACK_CHECKOUT.INPY_PERS,
  INPY_BIZ: process.env.NEXT_PUBLIC_LS_GLOBAL_INPY_BIZ || FALLBACK_CHECKOUT.INPY_BIZ,
} as const;

export const TRIAL_BASE = "https://license.h-insight.jp/download";

export type ProductCode = "INST" | "INMV" | "INPY";
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
    tagline: "Four kinds of work. One Office file. Layout intact.",
    iconBg: "from-rose-400 via-pink-500 to-fuchsia-600",
    emoji: "🌐",
    description:
      "DeepL for translation, ChatGPT for simplification, Acrobat for PDFs — Insight Doc Translator does all of it on one file, with your layout fully preserved.",
    features: [
      { title: "47 languages, 6 AI engines", desc: "DeepL · Google · Azure · Claude · Gemini · OpenAI. Switch per file or per row." },
      { title: "Four operations on one file", desc: "Translate · Simplify (CEFR / JLPT / HSK / TOPIK) · Summarize · Refine to formal tone." },
      { title: "Layout stays intact", desc: "Fonts, tables, images, embedded objects — preserved exactly as the original." },
      { title: "Glossary + translation memory", desc: "CSV/Excel + DeepL Glossary sync, TMX standard. CAT-tool features in a drag-and-drop UI." },
      { title: "Use your own AI keys (BYOK)", desc: "Bring keys for any of the six engines. Several engines (DeepL, Google, Gemini) offer free monthly quotas you can tap before paid usage." },
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
    tagline: "PowerPoint to multilingual training video, on your desktop.",
    iconBg: "from-violet-400 via-purple-500 to-indigo-600",
    emoji: "🎬",
    description:
      "Speaker notes become AI narration. Slides become MP4. Screen recordings become tutorial manuals. Scripts become podcast episodes. Insight Training Studio is the all-in-one content studio that turns the work you already do into broadcast-quality training material — in 47 languages, on your PC, with no editor in the loop.",
    features: [
      { title: "PowerPoint or PDF → narrated MP4", desc: "Speaker notes become AI narration automatically. No voice actor, no studio, no editor in the loop." },
      { title: "47-language AI narration", desc: "Edge Neural TTS delivers near-human voices across all 47 languages. Localize a global onboarding deck without re-recording a single slide." },
      { title: "Three TTS engines + ElevenLabs", desc: "Cloud (Edge Neural) + offline (VOICEVOX, Windows OneCore). ElevenLabs voice cloning via BYOK for branded narrators." },
      { title: "Three ways to add narration", desc: "AI voice (47 languages), record your own voice in-app (per scene), or import existing WAV/MP3. Mix and match per scene — founder message in real voice, the rest in AI." },
      { title: "Screen recording → tutorial / manual", desc: "Capture on-screen actions, AI converts to documented tutorial slides with auto-narration. Perfect for SaaS onboarding and IT manuals." },
      { title: "Audio podcast export", desc: "Same workflow, audio-only output. Generate WAV / MP3 podcast episodes from PPTX or scripts. Ready for Spotify, Apple Podcasts, or internal feeds." },
      { title: "Audio-first video workflow", desc: "Export the narration as WAV first, then build matching slides or footage to fit. Pro-grade studio flexibility for high-end production." },
      { title: "Pro-quality output", desc: "Auto subtitles, BGM library, eight transitions, AI thumbnails, watermarks, step capture — all built in." },
      { title: "MP4 / WAV / MP3 export", desc: "Standard formats that play anywhere. Up to 1080p video, broadcast-quality audio." },
      { title: "SCORM 1.2 package export", desc: "Drop your training video straight into Moodle, TalentLMS, Cornerstone, or any SCORM 1.2 LMS. Resume bookmark and review-mode protection built in. Verified with Moodle + SCORM Cloud." },
      { title: "Local processing", desc: "Your slides, narration, screen recordings, and source files stay on your PC. No cloud upload, no third-party retention." },
      { title: "Picture-in-picture overlay", desc: "Drop in a presenter video, branded watermark, or sign-language interpreter — your call. Built-in accessibility support when you need it, no extra editing pipeline." },
    ],
    bestFor: [
      "L&D and corporate training teams turning PowerPoint backlogs into video courses",
      "Global organizations rolling out the same onboarding deck in 47 languages",
      "SaaS customer success and onboarding teams turning screen recordings into multilingual tutorials",
      "IT departments creating system migration manuals and software training videos",
      "Technical writers and DevRel producing step-captured documentation from one recording",
      "Internal communications producing podcast-style audio for distributed workforces",
      "Public-sector, education, and regulated industries needing accessibility-ready output",
    ],
    prices: { personal: "$199", business: "$499" },
  },
  {
    code: "INPY",
    name: "InsightPy",
    tagline: "Zero-setup Python. Write it, save it, run it on a schedule.",
    iconBg: "from-blue-400 via-sky-500 to-violet-600",
    emoji: "🐍",
    description:
      "The AI wrote the code — but there's nowhere to run it. InsightPy bundles a Python runtime and the core libraries inside a Windows app, so you can paste AI-written code and run it on the spot: Excel / Word / PowerPoint automation, file cleanup, screen-level RPA, and unattended scheduled execution. No pip, no PATH, no setup.",
    features: [
      { title: "Bundled Python — zero setup", desc: "The Python runtime and libraries ship inside the app. No install, no pip, no PATH. Write and run on day one." },
      { title: "Run AI-written code as-is", desc: "Paste generated Python and run it. openpyxl / python-pptx / python-docx / pypdf / pyautogui / Pillow are bundled." },
      { title: "Office automation & RPA", desc: "Drive Excel, Word and PowerPoint, organize files, and automate screen-level tasks (RPA)." },
      { title: "Scheduled, unattended execution", desc: "Run your scripts daily or weekly with no one at the keyboard. Set it once and let it run." },
      { title: "Free learning center", desc: "Built-in lessons make Python approachable — learn for free, pay only when you use it for real work." },
      { title: "Local processing", desc: "Your scripts and data stay on your PC. No cloud upload." },
    ],
    bestFor: [
      "Ops and back-office teams automating repetitive Excel and file work",
      "People who have AI write code but have nowhere to run it",
      "Analysts scheduling recurring reports and data pulls",
      "Anyone replacing a heavyweight RPA tool with a simple, no-setup alternative",
    ],
    prices: { personal: "$99", business: "$299" },
  },
];

export function getCheckoutUrl(code: ProductCode, plan: Plan): string {
  const key = `${code}_${plan}` as keyof typeof CHECKOUT_URLS;
  return CHECKOUT_URLS[key];
}

export function getTrialUrl(code: ProductCode): string {
  return `${TRIAL_BASE}/${code}?lang=en`;
}

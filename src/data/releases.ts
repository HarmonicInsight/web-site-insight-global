/**
 * Release notes for insightoffice.io (global, EN-only).
 *
 * Single source of truth lives in web-site-insight-office/src/data/release-notes.ts.
 * When a new version ships:
 *   1. Update insight-office release-notes.ts (all locales)
 *   2. Update harmonic-license-manager release-notes.ts (ja/en latest)
 *   3. Add the new entry at the head of the corresponding array here (EN only)
 *
 * Audience positioning differs from insight-office.com:
 *   - insight-office.com = Japan-market (育成就労 / 改正障害者差別解消法 / 建設業 DX)
 *   - insightoffice.io  = global market (multilingual workflows, BYOK economics,
 *                                        cross-cultural training, USD pricing)
 *   Use copy that emphasizes global concerns, not Japan-specific regulations,
 *   when describing what's new.
 */

export type ReleaseVersion = {
  version: string;
  releaseDate: string;
  highlight: string;
  bullets: string[];
};

export type ProductCode = "INMV" | "INST";

const INMV_VERSIONS: ReleaseVersion[] = [
  {
    version: "1.0.7",
    releaseDate: "2026-05-07",
    highlight:
      "License stability fix, global rollout, and UI consistency improvements.",
    bullets: [
      "Removed WMI CPU ID dependency from DeviceFingerprint, eliminating 'in use on another device' and 'license auto-deleted' incidents.",
      "UI-language-based LemonSqueezy store routing (Japanese → JPY JP store, others → USD global store).",
      "30s HttpClient timeout to prevent freezes on slow international connections.",
      "Help ribbon reordered, Backstage labels unified, GPT Image 2.0 premium installer banners, locale-specific subtitle preview samples.",
    ],
  },
  {
    version: "1.0.6",
    releaseDate: "2026-05-03",
    highlight:
      "Two-way sync between subtitles and PowerPoint speaker notes. Two-person review/production workflow now possible.",
    bullets: [
      "Subtitle ↔ PowerPoint speaker note bi-directional sync. Reviewers proofread subtitles inside PowerPoint while video producers tune narration in Insight Training Studio.",
      "Stabilized single-PPTX workflow (customXml now well-formed) and unified multi-language license dialog across INMV / INST via InsightCommon.",
      "Ribbon cleanup (Open split into PPTX/PDF, Recent dropdown), unified taskbar name, refreshed Welcome screen hero icon.",
    ],
  },
  {
    version: "1.0.5",
    releaseDate: "2026-04-15",
    highlight: "47 languages supported + 9-country worker visa language presets built in.",
    bullets: [
      "47 languages for narration and subtitles (VoiceVox / Microsoft Neural / ElevenLabs / Edge TTS).",
      "Built-in language presets for 9 specified-skill worker origin countries (Vietnam, Indonesia, Myanmar, Philippines, Thailand, Cambodia, Nepal, Mongolia, Laos).",
    ],
  },
];

const INST_VERSIONS: ReleaseVersion[] = [
  {
    version: "1.0.4",
    releaseDate: "2026-05-03",
    highlight: "Release build enabled + semantic translation + Language label unified.",
    bullets: [
      "Semantic translation: contextual rather than literal word-for-word output.",
      "Release build now treats warnings as errors; non-impactful analyzer warnings moved to NoWarn.",
      "'Toggle Language' renamed to 'Language' across the Insight Slide / Sheet / Doc / Cast / Agent suite for consistency.",
    ],
  },
  {
    version: "1.0.3",
    releaseDate: "2026-04-19",
    highlight: "Major UI/UX overhaul + 5-engine consolidation + PDF translation quality improvements.",
    bullets: [
      "Both settings and target panels toggle via edge strips (VS Code style), with cost-estimate comparison across engines and Shift+/ shortcut overview.",
      "Translation engines consolidated to 5 (DeepL / Google / Azure / Claude / Gemini); NMT vs LLM use cases now explicit in the UI.",
      "PDF translation quality: dedicated TOC clustering, 50% color propagation threshold, iterative font-shrink to prevent text-box overflow.",
      "Fixed double-launch crash during translation and resolved Windows hang / 15 GB memory spike on PDF save.",
      "Added EULA: install-time consent page clarifying responsibility for BYOK, AI translation, PDF translation, and third-party APIs.",
    ],
  },
];

const VERSIONS_BY_PRODUCT: Record<ProductCode, ReleaseVersion[]> = {
  INMV: INMV_VERSIONS,
  INST: INST_VERSIONS,
};

export const PRODUCT_DISPLAY: Record<ProductCode, { name: string; tagline: string }> = {
  INMV: {
    name: "Insight Training Studio",
    tagline: "PowerPoint to multilingual training video in five minutes. SCORM 1.2 ready.",
  },
  INST: {
    name: "Insight Doc Translator",
    tagline: "Translate Word / Excel / PowerPoint / PDF — layout intact, 47 languages × 6 engines.",
  },
};

export function getAllVersions(code: ProductCode): ReleaseVersion[] {
  return VERSIONS_BY_PRODUCT[code] ?? [];
}

export function getLatestVersion(code: ProductCode): ReleaseVersion | null {
  return VERSIONS_BY_PRODUCT[code]?.[0] ?? null;
}

export const SUPPORTED_PRODUCTS: ProductCode[] = ["INMV", "INST"];

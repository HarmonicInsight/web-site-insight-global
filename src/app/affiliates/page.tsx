import type { Metadata } from "next";
import FamilyBar from "@/components/FamilyBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description:
    "Earn 20% recurring commission on every HARMONIC insight customer you bring. Tracking, attribution, and payout via Lemon Squeezy. Free marketing assets — banners, brochures, video formats, comparison briefs, brand kit, and a strategic playbook.",
  alternates: { canonical: "https://insightoffice.io/affiliates" },
};

const PROGRAM_HIGHLIGHTS = [
  { stat: "20%", label: "commission on every sale", detail: "Recurring on renewals" },
  { stat: "30-day", label: "free trial", detail: "No credit card required" },
  { stat: "Lemon Squeezy", label: "tracking & payout", detail: "PayPal or Wise" },
  { stat: "48 h", label: "approval turnaround", detail: "Manual review" },
];

const STRATEGIC_DOCS = [
  {
    title: "Official Kit Bundle (ZIP)",
    file: "kit-bundle.zip",
    size: "ZIP",
    pages: "13+ docs",
    desc: "Source-of-truth bundle — media kit, comparison tables, 18-question FAQ, copy library, blog templates, YouTube scripts, social templates, onboarding emails. Markdown + PDF.",
    icon: "🎁",
  },
  {
    title: "Affiliate Playbook",
    file: "affiliate-playbook.pdf",
    size: "636 KB",
    pages: "8 pages",
    desc: "Strategic guide — target personas, messaging that works, do's and don'ts, tracking and payout details. Read this first.",
    icon: "📘",
  },
  {
    title: "Comparison brief — vs DeepL",
    file: "comparison-deepl.pdf",
    size: "129 KB",
    pages: "1 page",
    desc: "Drop-in attachment for emails or blog posts. Side-by-side comparison with the dominant translation incumbent. (INST)",
    icon: "⚖️",
  },
  {
    title: "Comparison brief — vs ChatGPT",
    file: "comparison-chatgpt.pdf",
    size: "126 KB",
    pages: "1 page",
    desc: "Same format, different competitor. Use when your audience defaults to ChatGPT for translation tasks. (INST)",
    icon: "⚖️",
  },
  {
    title: "Comparison brief — vs Synthesia",
    file: "comparison-synthesia.pdf",
    size: "~130 KB",
    pages: "1 page",
    desc: "INMV-focused. Synthesia builds avatar videos; INMV turns slides into multilingual narrated videos. Different jobs, fair comparison. (INMV)",
    icon: "⚖️",
  },
  {
    title: "Press Kit",
    file: "press-kit.pdf",
    size: "148 KB",
    pages: "1 page",
    desc: "About the company, quick facts, story angles, press contact. For journalists, podcast hosts, or tech reviewers.",
    icon: "📰",
  },
];

const BANNER_SIZES: ReadonlyArray<{
  slug: string;
  name: string;
  w: number;
  h: number;
  use: string;
  variants: ReadonlyArray<"outcome" | "emotional" | "testimonial" | "comparison" | "ivory">;
}> = [
  { slug: "leaderboard-728x90",       name: "Leaderboard",         w: 728,  h: 90,   use: "Top of page",                variants: ["outcome", "emotional"] },
  { slug: "medium-rectangle-300x250", name: "Medium Rectangle",    w: 300,  h: 250,  use: "Sidebar / in-content",       variants: ["outcome", "emotional"] },
  { slug: "skyscraper-160x600",       name: "Wide Skyscraper",     w: 160,  h: 600,  use: "Sidebar tall",               variants: ["outcome", "emotional"] },
  { slug: "mobile-320x100",           name: "Mobile Banner",       w: 320,  h: 100,  use: "Mobile sites",               variants: ["outcome", "emotional"] },
  { slug: "billboard-970x250",        name: "Billboard",           w: 970,  h: 250,  use: "Premium top of page",        variants: ["outcome", "emotional", "testimonial", "comparison", "ivory"] },
  { slug: "social-og-1200x628",       name: "Social Open Graph",   w: 1200, h: 628,  use: "Twitter/X · LinkedIn share", variants: ["outcome", "emotional", "testimonial", "comparison", "ivory"] },
  { slug: "instagram-1080x1080",      name: "Instagram Square",    w: 1080, h: 1080, use: "Instagram feed",             variants: ["outcome", "emotional", "testimonial", "comparison", "ivory"] },
  { slug: "story-vertical-1080x1920", name: "Story / Vertical",    w: 1080, h: 1920, use: "Stories · TikTok · Reels",   variants: ["outcome", "emotional", "testimonial", "comparison", "ivory"] },
];

const VARIANT_LABELS: Record<string, { label: string; angle: string; color: string }> = {
  outcome:     { label: "Outcome",     angle: "Big numbers + benefit",            color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  emotional:   { label: "Emotional",   angle: "Pain → relief",                    color: "bg-rose-100 text-rose-700 border-rose-200" },
  testimonial: { label: "Testimonial", angle: "Composite quote with avatar",      color: "bg-violet-100 text-violet-700 border-violet-200" },
  comparison:  { label: "Comparison",  angle: "vs DeepL / vs Synthesia framing",  color: "bg-amber-100 text-amber-700 border-amber-200" },
  ivory:       { label: "Ivory",       angle: "Light background — visual variety", color: "bg-stone-100 text-stone-700 border-stone-300" },
};

const PRODUCTS = [
  { code: "inst", name: "Insight Doc Translator", accent: "from-rose-500 to-fuchsia-500" },
  { code: "inmv", name: "Insight Training Studio", accent: "from-violet-500 to-indigo-500" },
] as const;

const VIDEOS = [
  { file: "insight-90s-1080p.mp4", title: "Hero (full)",      ratio: "16:9", res: "1920×1080", duration: "60 s", size: "9.5 MB", use: "LP embed · YouTube" },
  { file: "insight-90s-720p.mp4",  title: "Hero (mobile)",    ratio: "16:9", res: "1280×720",  duration: "60 s", size: "6.3 MB", use: "Mobile-fallback embed" },
  { file: "insight-30s-1080p.mp4", title: "30-second cut",    ratio: "16:9", res: "1920×1080", duration: "30 s", size: "4.4 MB", use: "Paid ads · LinkedIn" },
  { file: "insight-15s-teaser.mp4", title: "15-second teaser", ratio: "16:9", res: "1920×1080", duration: "15 s", size: "2.0 MB", use: "YouTube pre-roll" },
  { file: "insight-90s-vertical.mp4", title: "Vertical (full)", ratio: "9:16", res: "1080×1920", duration: "60 s", size: "5.5 MB", use: "TikTok · Reels · Shorts" },
  { file: "insight-30s-vertical.mp4", title: "Vertical (30s)",  ratio: "9:16", res: "1080×1920", duration: "30 s", size: "2.8 MB", use: "Stories · Shorts" },
  { file: "insight-30s-square.mp4",   title: "Square 1:1",     ratio: "1:1",  res: "1080×1080", duration: "30 s", size: "2.8 MB", use: "Instagram feed" },
] as const;

const GIFS = [
  { file: "hero-6s.gif", title: "Hero teaser",  duration: "6 s", size: "2.9 MB", use: "Twitter/X embed · email signature" },
  { file: "inst-4s.gif", title: "INST teaser",  duration: "4 s", size: "1.7 MB", use: "Tight loop for ad creative" },
] as const;

const COPY_SNIPPETS = [
  {
    label: "Twitter / X (≤280 chars)",
    file: "INST_short_280.txt",
    preview:
      "One Office file. Four AI operations. Translate, simplify, summarize, refine — across Word, Excel, PowerPoint, PDF — with layout intact. BYOK. From $199/year. insightoffice.io",
  },
  {
    label: "LinkedIn / Note (≤700 chars)",
    file: "INST_medium_700.txt",
    preview:
      "Stop juggling DeepL for translation, ChatGPT for simplification, Acrobat for PDFs. Insight Doc Translator handles all four operations on one Office file with layout fully preserved...",
  },
  {
    label: "Blog / Article (~1500 chars)",
    file: "INST_long_1500.txt",
    preview:
      "Long-form article-length copy with key features, use cases, pricing, and links. Drop-in ready for Substack, Medium, Qiita, or your blog.",
  },
];

type FaqItem = { q: string; a: string };
type FaqGroup = { heading: string; items: FaqItem[] };

const FAQ_GROUPS: FaqGroup[] = [
  {
    heading: "A · Features & format",
    items: [
      {
        q: "How's the translation quality? Better than DeepL?",
        a: "You choose from 6 engines based on use case: DeepL (general docs, contracts), Claude/GPT (technical docs with jargon), Google/Azure (high-volume batches), Gemini (cost). Quality depends on which engine you pick. The strength isn't \"better than DeepL\" — it's that you get DeepL plus the ability to switch when needed.",
      },
      {
        q: "Can it translate PDFs?",
        a: "Yes — PDF is one of the four directly supported formats alongside PowerPoint, Word, and Excel. Layout, fonts, tables, and embedded objects are preserved across all four.",
      },
      {
        q: "Does it work on Mac?",
        a: "Currently Windows 10/11 64-bit. Mac is on the roadmap. In the meantime, Mac users can run it via Parallels or Boot Camp (works well in our testing).",
      },
      {
        q: "Can I work offline?",
        a: "First-time license activation requires online; after that, the app runs offline within the license window. If your engine of choice runs offline (e.g., VOICEVOX for TTS), you can have a fully offline workflow.",
      },
      {
        q: "Can I cross-check translations across engines?",
        a: "Yes. The Business plan supports side-by-side output from multiple engines. A common workflow: \"accept only the parts where DeepL and Claude agree\" for high-stakes docs.",
      },
    ],
  },
  {
    heading: "B · Security & privacy",
    items: [
      {
        q: "My company forbids cloud translation. Can we use this?",
        a: "This is exactly what we built it for. Zero data ever reaches HARMONIC insight servers. The translation engine sees your data only via your own API key, governed by your contract with that provider (DeepL Pro, Azure OpenAI Private, etc.). For maximum security, point Insight Doc Translator at an on-prem LLM in your tenant.",
      },
      {
        q: "Can you issue tax-compliant invoices (VAT, US sales tax)?",
        a: "Yes. Lemon Squeezy is the Merchant of Record and handles tax compliance globally — VAT in EU/UK, GST, US sales tax, JCT in Japan. Generate invoices anytime from the order confirmation link.",
      },
      {
        q: "GDPR compliant?",
        a: "Yes. Lemon Squeezy as MoR handles GDPR data processing terms for EU customers. The app itself never stores or transmits customer documents to our infrastructure.",
      },
      {
        q: "What happens if a license key leaks?",
        a: "Keys are bound to a device fingerprint. The same key on another device won't activate. The customer portal allows device resets within a fair-use limit.",
      },
    ],
  },
  {
    heading: "C · Setup & operations",
    items: [
      {
        q: "Is installation hard?",
        a: "Three steps: download installer → launch → paste your key. Most IT review boards approve quickly because it's local-only with no data exfiltration risk.",
      },
      {
        q: "We need multiple seats. Options?",
        a: "Business plan adds seats by request (roughly half-price per additional seat). Enterprise contracts (10+ seats, site license, custom features): info@h-insight.jp.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes — 30-day free trial with full feature access, no credit card required.",
      },
      {
        q: "Easy to cancel?",
        a: "One click in the customer portal stops the next renewal. You retain access through the current term. We don't pro-rate refunds, but we don't make you jump through hoops either.",
      },
    ],
  },
  {
    heading: "D · Sales & affiliate",
    items: [
      {
        q: "Who can join?",
        a: "Anyone with an audience that overlaps with knowledge workers handling multilingual Office documents — bloggers, YouTubers, newsletter writers, agency owners, course creators, consultants. We approve manually to keep program quality high.",
      },
      {
        q: "Is the commission recurring?",
        a: "Yes. 20% on every annual renewal for as long as the customer stays subscribed. Personal: ~$39.80/yr per customer. Business: ~$99.80/yr per customer. That builds.",
      },
      {
        q: "How does tracking and payout work?",
        a: "Lemon Squeezy handles affiliate tracking with first-party cookies and an explicit ?aff=YOUR_ID parameter. Real-time dashboard with click count, signups, conversions, and refund-adjusted commissions. Payouts via PayPal or Wise on Lemon Squeezy's schedule.",
      },
      {
        q: "Can I run paid ads?",
        a: "Yes, with two restrictions: (1) no bidding on our brand terms (HARMONIC insight, Insight Doc Translator, Insight Training Studio, insightoffice.io); (2) no fake urgency or false claims. Beyond that — Google, Meta, X, LinkedIn — go for it.",
      },
      {
        q: "Can I self-purchase to earn my own commission?",
        a: "Self-purchase voids commission per program terms. If you need a license to demo or review, email info@h-insight.jp — we issue free reviewer licenses.",
      },
      {
        q: "Can I get a custom discount code?",
        a: "Yes. After approval, we issue codes like YT_YOURNAME10 for 10% off. The discount doesn't reduce your 20% commission — we cover the gap.",
      },
      {
        q: "Can I review competing products too?",
        a: "Absolutely. Honest comparisons earn audience trust, which is what we want. Use the comparison briefs in the kit (vs DeepL / vs ChatGPT / vs Synthesia) for fair feature breakdowns.",
      },
      {
        q: "Do you offer co-marketing?",
        a: "Yes. If you have an audience of 5,000+ in localization, SaaS-tools, or AI productivity, reach out — we can do guest posts, joint webinars, or exclusive discount codes for your audience.",
      },
    ],
  },
];

const DownloadIcon = (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export default function AffiliatesPage() {
  const lsApply = "https://harmonic-insight.lemonsqueezy.com/affiliates";

  return (
    <>
      <FamilyBar />
      <Header />
      <main className="pb-16">
        {/* Hero */}
        <section className="relative bg-hero-gradient overflow-hidden pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="hero-blob bg-gold-300 -top-40 -right-40" />
          <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
          <div className="container-narrow relative">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700 mb-4">
                Affiliate Program
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-ink-900 leading-[1.05] tracking-tight mb-6">
                Earn 20% on every customer{" "}
                <span className="text-gradient-gold">you send our way.</span>
              </h1>
              <p className="text-lg md:text-xl text-ink-500 leading-relaxed max-w-2xl mb-8">
                Recurring commission on every annual renewal. Lemon Squeezy handles tracking, attribution, and payout. A complete kit — playbook, banners, brochures, video formats, brand assets, copy library — everything ready the moment you&apos;re approved.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={lsApply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-7 py-3.5 text-base"
                >
                  Apply on Lemon Squeezy
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#playbook" className="btn-secondary px-7 py-3.5 text-base">
                  Browse the kit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights bar */}
        <section className="py-12 md:py-16 bg-white border-y border-ink-100">
          <div className="container-narrow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {PROGRAM_HIGHLIGHTS.map((h) => (
                <div key={h.stat}>
                  <div className="text-3xl md:text-4xl font-bold text-gradient-gold leading-none mb-2">
                    {h.stat}
                  </div>
                  <div className="text-sm font-semibold text-ink-800 mb-0.5">{h.label}</div>
                  <div className="text-xs text-ink-500">{h.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic docs */}
        <section id="playbook" className="py-16 md:py-20">
          <div className="container-narrow">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
                Read first
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-ink-900 leading-tight tracking-tight mb-3">
                Strategic docs.{" "}
                <span className="text-gradient-gold">Start with the playbook.</span>
              </h2>
              <p className="text-base text-ink-500">
                Eight-page strategic guide on positioning, target personas, messaging, and tracking. Plus comparison briefs and a press kit.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {STRATEGIC_DOCS.map((d) => (
                <a
                  key={d.file}
                  href={`/affiliate/${d.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl bg-white border border-ink-100 hover:border-gold-300 p-6 transition-colors flex gap-4"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center text-2xl">
                    {d.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-bold text-ink-900">{d.title}</h3>
                      <span className="text-[11px] text-ink-400 whitespace-nowrap">
                        {d.pages} · {d.size}
                      </span>
                    </div>
                    <p className="text-sm text-ink-500 leading-relaxed mb-3">{d.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 group-hover:text-gold-900">
                      Download PDF
                      {DownloadIcon}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing assets — banners, brochures, brand kit */}
        <section id="assets" className="py-16 md:py-20 bg-ink-50/40 border-y border-ink-100">
          <div className="container-narrow">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
                Visual assets
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-ink-900 leading-tight tracking-tight mb-3">
                Banners, brochures,{" "}
                <span className="text-gradient-gold">brand kit.</span>
              </h2>
              <p className="text-base text-ink-500">
                Pick the asset, drop it into your blog, post, video, or ad. All assets follow the brand kit. Custom creative is welcome — these are starting points.
              </p>
            </div>

            {/* Quick downloads */}
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              <a
                href="/affiliate/brand-kit.zip"
                className="rounded-2xl bg-white border border-ink-100 hover:border-gold-300 p-6 transition-colors flex flex-col"
              >
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="font-bold text-ink-900 mb-2">Brand Kit ZIP</h3>
                <p className="text-sm text-ink-500 leading-relaxed flex-1 mb-3">
                  Logos (SVG + PNG, light/dark/mark-only), color palette, typography spec, brand voice guide.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700">
                  Download ZIP (454 KB)
                  {DownloadIcon}
                </span>
              </a>
              <a
                href="/brochures/insight-doc-translator-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white border border-ink-100 hover:border-gold-300 p-6 transition-colors flex flex-col"
              >
                <div className="text-3xl mb-3">📄</div>
                <h3 className="font-bold text-ink-900 mb-2">INST Brochure</h3>
                <p className="text-sm text-ink-500 leading-relaxed flex-1 mb-3">
                  One-page A4 brochure for Insight Doc Translator. Email-friendly, print-ready.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700">
                  Download PDF (279 KB)
                  {DownloadIcon}
                </span>
              </a>
              <a
                href="/brochures/insight-training-studio-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white border border-ink-100 hover:border-gold-300 p-6 transition-colors flex flex-col"
              >
                <div className="text-3xl mb-3">📄</div>
                <h3 className="font-bold text-ink-900 mb-2">INMV Brochure</h3>
                <p className="text-sm text-ink-500 leading-relaxed flex-1 mb-3">
                  One-page A4 brochure for Insight Training Studio. Same layout family as INST.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700">
                  Download PDF (175 KB)
                  {DownloadIcon}
                </span>
              </a>
            </div>

            {/* Banner ads gallery — 4 variants × 8 sizes × 2 products = 48 banners */}
            <div className="rounded-2xl bg-white border border-ink-100 overflow-hidden">
              <div className="px-6 py-5 border-b border-ink-100 bg-ink-50/50">
                <h3 className="font-bold text-ink-900 mb-1">Banner ads — 48 creatives, 4 marketing angles</h3>
                <p className="text-sm text-ink-500 mb-3">
                  Each size is available in up to four variants — pick the angle that matches your audience and channel. Click any banner to download the PNG.
                </p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(VARIANT_LABELS).map(([key, v]) => (
                    <span key={key} className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${v.color}`}>
                      <span className="font-bold">{v.label}</span>
                      <span className="text-[10px] opacity-80">— {v.angle}</span>
                    </span>
                  ))}
                </div>
              </div>

              {PRODUCTS.map((product) => (
                <div key={product.code} className="border-b border-ink-100 last:border-0">
                  <div className="px-6 py-4 flex items-center gap-3 bg-ink-50/30 sticky top-0 z-10">
                    <span className={`inline-block w-2 h-6 rounded bg-gradient-to-b ${product.accent}`} />
                    <span className="font-bold text-ink-900 text-sm">{product.name}</span>
                    <span className="text-xs text-ink-400 uppercase tracking-widest">
                      {product.code}
                    </span>
                  </div>
                  <div className="p-6 space-y-6">
                    {BANNER_SIZES.map((b) => (
                      <div key={b.slug}>
                        <div className="flex items-baseline justify-between mb-3 pb-2 border-b border-ink-100">
                          <div className="flex items-baseline gap-3">
                            <span className="font-bold text-ink-900 text-sm">{b.name}</span>
                            <span className="text-[10px] font-mono text-ink-400">
                              {b.w}×{b.h}
                            </span>
                          </div>
                          <span className="text-[11px] text-ink-500">{b.use}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {b.variants.map((variant) => {
                            const file = `${product.code}-${b.slug}-${variant}.png`;
                            const href = `/affiliate/banners/${file}`;
                            const v = VARIANT_LABELS[variant];
                            return (
                              <a
                                key={file}
                                href={href}
                                download
                                className="group rounded-lg border border-ink-100 hover:border-gold-300 bg-ink-50/20 hover:bg-gold-50/30 p-2.5 transition-colors"
                              >
                                <div className="rounded-md overflow-hidden bg-ink-900 mb-2 aspect-[4/3] flex items-center justify-center">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={href}
                                    alt={`${product.name} ${b.name} ${v.label} ad`}
                                    className="max-w-full max-h-full object-contain"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                  <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border ${v.color}`}>
                                    {v.label}
                                  </span>
                                  <span className="text-[10px] text-gold-700 group-hover:text-gold-900 inline-flex items-center gap-1 font-semibold">
                                    Download
                                    {DownloadIcon}
                                  </span>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video library */}
        <section className="py-16 md:py-20">
          <div className="container-narrow">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
                Video library
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-ink-900 leading-tight tracking-tight mb-3">
                Every format,{" "}
                <span className="text-gradient-gold">every platform.</span>
              </h2>
              <p className="text-base text-ink-500">
                The hero video, plus 30s and 15s cuts, plus vertical 9:16 and square 1:1 — every format you might need across YouTube, TikTok, Reels, Shorts, Instagram, LinkedIn.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {VIDEOS.map((v) => (
                <a
                  key={v.file}
                  href={`/video/${v.file}`}
                  download
                  className="group rounded-xl border border-ink-100 hover:border-gold-300 bg-white p-5 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
                      {v.ratio}
                    </span>
                    <span className="text-[10px] font-mono text-ink-400">{v.res}</span>
                  </div>
                  <h3 className="font-bold text-ink-900 mb-1">{v.title}</h3>
                  <div className="text-xs text-ink-500 mb-3">
                    {v.duration} · {v.size}
                  </div>
                  <p className="text-xs text-ink-500 leading-relaxed mb-3">{v.use}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 group-hover:text-gold-900">
                    Download MP4
                    {DownloadIcon}
                  </span>
                </a>
              ))}
              {GIFS.map((g) => (
                <a
                  key={g.file}
                  href={`/affiliate/teasers/${g.file}`}
                  download
                  className="group rounded-xl border border-ink-100 hover:border-gold-300 bg-white p-5 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold-700">
                      GIF
                    </span>
                    <span className="text-[10px] font-mono text-ink-400">looped</span>
                  </div>
                  <h3 className="font-bold text-ink-900 mb-1">{g.title}</h3>
                  <div className="text-xs text-ink-500 mb-3">
                    {g.duration} · {g.size}
                  </div>
                  <p className="text-xs text-ink-500 leading-relaxed mb-3">{g.use}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-700 group-hover:text-gold-900">
                    Download GIF
                    {DownloadIcon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Email templates */}
        <section className="py-16 md:py-20 bg-ink-50/40 border-y border-ink-100">
          <div className="container-narrow">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
                Email sequence
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-ink-900 leading-tight tracking-tight mb-3">
                A 5-email drip,{" "}
                <span className="text-gradient-gold">ready to send.</span>
              </h2>
              <p className="text-base text-ink-500">
                Awareness → Education → Conversion → INMV cross-sell → Re-engagement. Subject line variants, full body copy, FTC-compliant disclosure language. Drop into ConvertKit / Mailchimp / Beehiiv / Substack.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { n: "01", t: "Awareness", d: "Day 0 · ~150 words", g: "Reader nods: \"this is my problem\"" },
                { n: "02", t: "Education", d: "Day 1 · ~250 words", g: "Show the mechanism — they believe" },
                { n: "03", t: "Conversion", d: "Day 2 · ~200 words", g: "Move from interested to decided" },
                { n: "04", t: "INMV cross-sell", d: "Day 7 (engaged)", g: "Introduce second product" },
                { n: "05", t: "Re-engage", d: "Day 30 (non-buyers)", g: "Soft re-open with new angle" },
              ].map((e) => (
                <div key={e.n} className="rounded-xl bg-white border border-ink-100 p-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-gold-700 mb-1">
                    Email {e.n}
                  </div>
                  <h3 className="font-bold text-ink-900 mb-1">{e.t}</h3>
                  <div className="text-xs text-ink-500 mb-3">{e.d}</div>
                  <p className="text-xs text-ink-500 leading-relaxed">{e.g}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-ink-500 text-center">
              Full templates available on request — email{" "}
              <a href="mailto:affiliates@h-insight.jp" className="text-gold-700 underline">
                affiliates@h-insight.jp
              </a>{" "}
              and we&apos;ll send a Markdown bundle within a business day.
            </p>
          </div>
        </section>

        {/* Copy library */}
        <section className="py-16 md:py-20">
          <div className="container-narrow">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
                Pre-written copy
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-ink-900 leading-tight tracking-tight mb-3">
                Three lengths,{" "}
                <span className="text-gradient-gold">three channels.</span>
              </h2>
              <p className="text-base text-ink-500">
                Twitter/X, LinkedIn, blog. Customize, attach a banner, add your tracking link, post.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {COPY_SNIPPETS.map((s) => (
                <div key={s.file} className="rounded-2xl bg-white border border-ink-100 p-6 flex flex-col">
                  <div className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-3">
                    {s.label}
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed flex-1 mb-4 line-clamp-6">
                    {s.preview}
                  </p>
                  <p className="text-xs text-ink-400">
                    Full text on request — email{" "}
                    <a href="mailto:affiliates@h-insight.jp" className="text-gold-700 underline">
                      affiliates@h-insight.jp
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-ink-50/40 border-y border-ink-100">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3 text-center">
                FAQ
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-ink-900 leading-tight tracking-tight text-center mb-10">
                18 questions, answered{" "}
                <span className="text-gradient-gold">honestly.</span>
              </h2>
              <div className="space-y-8">
                {FAQ_GROUPS.map((group) => (
                  <div key={group.heading}>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700 mb-3">
                      {group.heading}
                    </h3>
                    <div className="space-y-3">
                      {group.items.map((f) => (
                        <details
                          key={f.q}
                          className="group rounded-xl bg-white border border-ink-100 hover:border-gold-200 p-5 [&[open]]:border-gold-300"
                        >
                          <summary className="flex items-center justify-between cursor-pointer list-none">
                            <span className="text-base font-semibold text-ink-900 pr-4">{f.q}</span>
                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ink-50 group-hover:bg-gold-100 flex items-center justify-center transition-colors">
                              <svg
                                className="w-4 h-4 text-ink-500 transition-transform group-open:rotate-180"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </summary>
                          <div className="mt-4 text-sm text-ink-500 leading-relaxed">{f.a}</div>
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20">
          <div className="container-narrow">
            <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Ready when you are.
              </h2>
              <p className="text-base md:text-lg text-ink-300 mb-8 max-w-2xl mx-auto">
                Apply on Lemon Squeezy. We&apos;ll review and reply within 48 hours. Once approved, your dashboard, tracking links, and stats are live immediately.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={lsApply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-ink-900 text-base font-bold shadow-glow-gold transition-all"
                >
                  Apply now
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="mailto:affiliates@h-insight.jp"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-ink-700 hover:border-gold-400 hover:bg-ink-800 text-white text-base font-semibold transition-all"
                >
                  Email us first
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

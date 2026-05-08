import type { Metadata } from "next";
import FamilyBar from "@/components/FamilyBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description:
    "Earn 20% recurring commission on every HARMONIC insight customer you bring. 60-day cookie window. Free marketing assets and ready-to-use banner ads.",
  alternates: { canonical: "https://insightoffice.io/affiliates" },
};

const PROGRAM_HIGHLIGHTS = [
  { stat: "20%", label: "commission on every sale", detail: "Recurring on renewals" },
  { stat: "60 days", label: "cookie window", detail: "Industry-leading" },
  { stat: "$5K", label: "minimum payout", detail: "PayPal or Wise" },
  { stat: "48 h", label: "approval turnaround", detail: "Manual review" },
];

const BANNER_SIZES = [
  { slug: "leaderboard-728x90",       name: "Leaderboard",         w: 728,  h: 90,   use: "Top of page" },
  { slug: "medium-rectangle-300x250", name: "Medium Rectangle",    w: 300,  h: 250,  use: "Sidebar / in-content" },
  { slug: "skyscraper-160x600",       name: "Wide Skyscraper",     w: 160,  h: 600,  use: "Sidebar tall" },
  { slug: "mobile-320x100",           name: "Mobile Banner",       w: 320,  h: 100,  use: "Mobile sites" },
  { slug: "billboard-970x250",        name: "Billboard",           w: 970,  h: 250,  use: "Premium top of page" },
  { slug: "social-og-1200x628",       name: "Social Open Graph",   w: 1200, h: 628,  use: "Twitter/X · LinkedIn share" },
  { slug: "instagram-1080x1080",      name: "Instagram Square",    w: 1080, h: 1080, use: "Instagram feed" },
  { slug: "story-vertical-1080x1920", name: "Story / Vertical",    w: 1080, h: 1920, use: "Stories · TikTok · Reels" },
] as const;

const PRODUCTS = [
  { code: "inst", name: "Insight Doc Translator", accent: "from-rose-500 to-fuchsia-500" },
  { code: "inmv", name: "Insight Training Studio", accent: "from-violet-500 to-indigo-500" },
] as const;

const COPY_SNIPPETS = [
  {
    label: "Twitter / X (≤280 chars)",
    file: "INST_short_280.txt",
    preview:
      "One Office file. Four AI operations. Translate, simplify, summarize, refine — across Word, Excel, PowerPoint, PDF — with layout intact. BYOK. From $199 lifetime. insightoffice.io",
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

const FAQS = [
  {
    q: "Who can join?",
    a: "Anyone with an audience that overlaps with knowledge workers handling multilingual Office documents — bloggers, YouTubers, newsletter writers, agency owners, course creators, consultants. We approve manually so we can keep the program quality high.",
  },
  {
    q: "How does tracking work?",
    a: "Lemon Squeezy handles affiliate tracking with first-party cookies and an explicit ?aff=YOUR_ID parameter. Cookie window is 60 days from first click. You'll get a dashboard with real-time stats and a tracking link generator.",
  },
  {
    q: "When do I get paid?",
    a: "Lemon Squeezy pays out monthly via PayPal or Wise once your balance crosses $5,000 worth of confirmed (non-refunded) sales. The 30-day money-back window means there's a brief delay between sale and confirmed commission.",
  },
  {
    q: "Can I run paid ads?",
    a: "Yes, with two restrictions: (1) no bidding on our brand terms (HARMONIC insight, Insight Doc Translator, Insight Training Studio, insightoffice.io); (2) no fake urgency or false claims. Beyond that, you're free to run Google Ads, Meta, X, LinkedIn — anywhere.",
  },
  {
    q: "Can I use my own creative?",
    a: "Yes. The banner ads here are starting points. Custom creative is welcome — we just ask that brand assets (logo, color, name) follow the brand kit.",
  },
  {
    q: "Do you offer co-marketing?",
    a: "Yes. If you have an audience of 5,000+ subscribers/followers in localization, SaaS-tools, or AI productivity, reach out — we can do guest posts, joint webinars, or exclusive discount codes for your audience.",
  },
];

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
                Recurring commission. 60-day cookie. Industry-leading payout terms. Free banner ads, brochures, copy, and brand assets — everything you need to start the moment you&apos;re approved.
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
                <a href="#assets" className="btn-secondary px-7 py-3.5 text-base">
                  Browse the kit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Program highlights */}
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

        {/* Why our program */}
        <section className="py-16 md:py-20">
          <div className="container-narrow">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
                Why this program is worth your time
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-ink-900 leading-tight tracking-tight">
                Real product, real demand,{" "}
                <span className="text-gradient-gold">real money on the table.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Convert-friendly product",
                  body:
                    "30-day money-back guarantee, no subscription, BYOK keeps customer AI bills predictable. The objections affiliates usually hit don't apply here.",
                },
                {
                  title: "Underserved category",
                  body:
                    "No competitor handles Word, Excel, PowerPoint, and PDF in one app with layout preservation. You're the first to tell your audience about it.",
                },
                {
                  title: "Recurring revenue",
                  body:
                    "Annual licenses + business renewals. Your 20% commission keeps coming for as long as the customer keeps the license active.",
                },
              ].map((b) => (
                <div key={b.title} className="p-6 rounded-2xl bg-white border border-ink-100">
                  <h3 className="font-bold text-ink-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing assets */}
        <section id="assets" className="py-16 md:py-20 bg-ink-50/40 border-y border-ink-100">
          <div className="container-narrow">
            <div className="max-w-3xl mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
                Ready-to-use assets
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-ink-900 leading-tight tracking-tight mb-3">
                Everything you need.{" "}
                <span className="text-gradient-gold">Free, today.</span>
              </h2>
              <p className="text-base text-ink-500">
                Pick the asset, drop it into your blog, post, video, or ad. All assets follow the brand kit (gold + ink palette, Inter typography). Custom creative is welcome — these are starting points.
              </p>
            </div>

            {/* Banner ads gallery */}
            <div className="rounded-2xl bg-white border border-ink-100 overflow-hidden">
              <div className="px-6 py-5 border-b border-ink-100 bg-ink-50/50">
                <h3 className="font-bold text-ink-900 mb-1">Banner ads — 8 sizes × 2 products</h3>
                <p className="text-sm text-ink-500">
                  Standard IAB sizes plus social formats. Click any banner to download the PNG (transparent backgrounds available on request).
                </p>
              </div>

              {PRODUCTS.map((product) => (
                <div key={product.code} className="border-b border-ink-100 last:border-0">
                  <div className="px-6 py-4 flex items-center gap-3 bg-ink-50/30">
                    <span
                      className={`inline-block w-2 h-6 rounded bg-gradient-to-b ${product.accent}`}
                    />
                    <span className="font-bold text-ink-900 text-sm">{product.name}</span>
                    <span className="text-xs text-ink-400 uppercase tracking-widest">
                      {product.code}
                    </span>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {BANNER_SIZES.map((b) => {
                      const file = `${product.code}-${b.slug}.png`;
                      const href = `/affiliate/banners/${file}`;
                      return (
                        <a
                          key={file}
                          href={href}
                          download
                          className="group rounded-xl border border-ink-100 hover:border-gold-300 bg-ink-50/30 hover:bg-gold-50/40 p-3 transition-colors"
                        >
                          <div className="rounded-md overflow-hidden bg-ink-900 mb-3 aspect-[4/3] flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={href}
                              alt={`${product.name} ${b.name} ad`}
                              className="max-w-full max-h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex items-baseline justify-between mb-1">
                            <span className="text-xs font-bold text-ink-900">{b.name}</span>
                            <span className="text-[10px] font-mono text-ink-400">
                              {b.w}×{b.h}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] text-ink-500">{b.use}</span>
                            <span className="text-[11px] text-gold-700 group-hover:text-gold-900 inline-flex items-center gap-1 font-semibold">
                              Download
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            </span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Other assets */}
            <div className="grid md:grid-cols-2 gap-5 mt-6">
              <div className="rounded-2xl bg-white border border-ink-100 p-6">
                <h3 className="font-bold text-ink-900 mb-3">Brochures (PDF)</h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-4">
                  One-page A4 brochures, ready to email, attach to a sales conversation, or hand out at events.
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/brochures/insight-doc-translator-brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gold-700 hover:text-gold-900 font-semibold"
                    >
                      Insight Doc Translator (INST)
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/brochures/insight-training-studio-brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gold-700 hover:text-gold-900 font-semibold"
                    >
                      Insight Training Studio (INMV)
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white border border-ink-100 p-6">
                <h3 className="font-bold text-ink-900 mb-3">Hero product video</h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-4">
                  A 60-second product overview with English narration. Embed in YouTube, blog posts, or share natively on LinkedIn / X.
                </p>
                <a
                  href="/video/insight-90s-1080p.mp4"
                  download
                  className="inline-flex items-center gap-2 text-sm text-gold-700 hover:text-gold-900 font-semibold"
                >
                  Download MP4 (1080p, 9.5 MB)
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
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
                Copy you can post in{" "}
                <span className="text-gradient-gold">under a minute.</span>
              </h2>
              <p className="text-base text-ink-500">
                Three lengths, ready for the channel you publish on. Customize, attach a banner, add your tracking link, post.
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
                Questions, answered{" "}
                <span className="text-gradient-gold">honestly.</span>
              </h2>
              <div className="space-y-3">
                {FAQS.map((f) => (
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

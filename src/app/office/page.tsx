import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CHECKOUT = {
  personal:
    "https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/3b9d92bc-0d1b-4e67-9f32-8295c4e9ecf6",
  business:
    "https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/01c19796-fc08-468d-a50a-c32868516fc6",
};
const DOWNLOAD = "https://license.h-insight.jp/download/IAOF";

export const metadata: Metadata = {
  title: "Insight Office — PDF editor, document compare & your-own-key AI",
  description:
    "A Windows app for real PDF editing (annotate, e-sign, OCR, merge/split), cross-file comparison across Word/Excel/PowerPoint/PDF down to the cell & character, Excel logic analysis, and an optional AI concierge that runs on your own API key. One flat yearly price. 30-day free trial.",
};

const tools = [
  {
    title: "PDF editor",
    img: "/office/pdf-editor.png",
    desc: "Annotate, edit text & images, fill forms, e-sign, OCR scanned PDFs, organize pages (extract / merge / delete / reorder) and password-protect. Save without a watermark and export to PDF — everything you actually do with a PDF, in one place.",
  },
  {
    title: "Compare documents — down to the cell & character",
    img: "/office/compare.png",
    desc: "Line up two versions of a Word, Excel, PowerPoint or PDF file and see exactly what changed, down to the cell and the character. Save, export and bulk-copy the results. Runs entirely on your device.",
  },
  {
    title: "Excel logic analysis",
    img: "/office/excel-analysis.png",
    desc: "Visualize formulas and dependencies so you can finally answer “where did this number come from?” — ideal for the complex spreadsheets you inherit.",
  },
  {
    title: "AI concierge — your own key (optional)",
    img: null,
    desc: "Summarize, proofread, translate and even edit Office files with AI, using your own API key (Claude / OpenAI / Gemini). Editing, comparison and analysis run locally; when you use AI, your data goes only to your own key — personal information is anonymized before sending and never passes through our servers.",
  },
];

export default function OfficePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="border-b border-ink-100 bg-gradient-to-b from-ink-50/40 to-white py-16 md:py-24">
          <div className="container-narrow">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-3">
                PDF · Compare · Analyze · AI
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-ink-900 leading-tight tracking-tight mb-5">
                Insight Office
              </h1>
              <p className="text-lg md:text-xl text-ink-600 leading-relaxed mb-8">
                Edit PDFs, compare documents, and put your own AI to work — in one
                Windows app, for one flat yearly price. No monthly PDF subscription.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href={DOWNLOAD} className="btn-gold px-6 py-3 text-base font-semibold rounded-lg">
                  Start 30-day free trial
                </a>
                <a
                  href="#pricing"
                  className="px-6 py-3 text-base font-semibold rounded-lg border border-ink-200 text-ink-700 hover:border-gold-400 transition-colors"
                >
                  See pricing
                </a>
              </div>
              <p className="text-sm text-ink-400 mt-4">
                Windows 10 / 11 · 64-bit · EV code-signed · works alongside MS Office
              </p>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 md:py-24">
          <div className="container-narrow">
            <div className="max-w-2xl mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">
                Four tools, one app
              </h2>
              <p className="text-lg text-ink-500 leading-relaxed">
                Insight Office bundles the document work you keep paying separate tools
                for — PDF editing, file comparison, spreadsheet analysis, and AI — into a
                single desktop app you own for the year.
              </p>
            </div>

            <div className="space-y-20">
              {tools.map((tool, i) => (
                <div
                  key={tool.title}
                  className={`flex flex-col gap-8 md:gap-12 items-center ${
                    i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-ink-900 mb-3">{tool.title}</h3>
                    <p className="text-ink-600 leading-relaxed">{tool.desc}</p>
                  </div>
                  {tool.img && (
                    <div className="flex-1 w-full">
                      <Image
                        src={tool.img}
                        alt={tool.title}
                        width={1400}
                        height={900}
                        className="w-full h-auto rounded-xl border border-ink-100 shadow-lg"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-ink-50/40 border-y border-ink-100">
          <div className="container-narrow">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight mb-4">
                One flat yearly price
              </h2>
              <p className="text-lg text-ink-500 leading-relaxed">
                Free to download with a 30-day full-feature trial. After the trial it
                continues as a free, view-centric tier; saving, exporting and advanced PDF
                features need a license. Annual, auto-renewing. Payments and global tax are
                handled by LemonSqueezy (Merchant of Record). Cancel anytime.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              {/* Personal */}
              <div className="rounded-2xl border border-ink-200 bg-white p-8 flex flex-col">
                <h3 className="text-xl font-bold text-ink-900 mb-1">Personal</h3>
                <p className="text-sm text-ink-500 mb-5">For individuals, freelancers & sole proprietors</p>
                <p className="text-4xl font-bold text-ink-900 mb-1">
                  $99<span className="text-lg font-normal text-ink-400">/year</span>
                </p>
                <p className="text-sm text-ink-400 mb-6">1 device · all features</p>
                <a
                  href={CHECKOUT.personal}
                  className="btn-gold mt-auto px-6 py-3 text-center font-semibold rounded-lg"
                >
                  Get Personal
                </a>
              </div>

              {/* Business */}
              <div className="rounded-2xl border-2 border-gold-400 bg-white p-8 flex flex-col shadow-glow-gold">
                <h3 className="text-xl font-bold text-ink-900 mb-1">Business</h3>
                <p className="text-sm text-ink-500 mb-5">For teams & companies</p>
                <p className="text-4xl font-bold text-ink-900 mb-1">
                  $199<span className="text-lg font-normal text-ink-400">/year per seat</span>
                </p>
                <p className="text-sm text-ink-400 mb-6">Per seat · all features · commercial use</p>
                <a
                  href={CHECKOUT.business}
                  className="btn-gold mt-auto px-6 py-3 text-center font-semibold rounded-lg"
                >
                  Get Business
                </a>
              </div>
            </div>

            <p className="text-sm text-ink-400 mt-8">
              Prefer to try first?{" "}
              <a href={DOWNLOAD} className="text-gold-700 hover:underline font-medium">
                Download the 30-day free trial →
              </a>
            </p>
          </div>
        </section>

        {/* Privacy */}
        <section className="py-14">
          <div className="container-narrow max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-ink-900 mb-3">Local by default. Your keys, your data.</h2>
            <p className="text-ink-600 leading-relaxed">
              Opening, editing, comparing and analyzing all happen on your PC — nothing is
              sent to our servers. AI is optional and runs on your own API key, with personal
              information anonymized before it is sent to the provider you choose.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

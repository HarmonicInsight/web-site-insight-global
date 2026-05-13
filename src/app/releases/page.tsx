import type { Metadata } from "next";
import Link from "next/link";
import {
  SUPPORTED_PRODUCTS,
  PRODUCT_DISPLAY,
  getAllVersions,
} from "@/data/releases";

export const metadata: Metadata = {
  title: "Release Notes",
  description:
    "Version history and what's new across Insight Training Studio and Insight Doc Translator. Newest releases first.",
};

export default function ReleasesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-ink-100 bg-gradient-to-b from-ink-50/40 to-white py-16 md:py-20">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-600 mb-3">
              What&apos;s new
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink-900 leading-tight tracking-tight mb-5">
              Release notes
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed">
              Version history across both products. Insight is built for organizations
              that ship multilingual content fast — we ship updates the same way.
              Install over your existing build; your settings (API keys, glossaries,
              translation memory) carry over.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 md:py-16">
        <div className="container-narrow space-y-20">
          {SUPPORTED_PRODUCTS.map((code) => {
            const disp = PRODUCT_DISPLAY[code];
            const versions = getAllVersions(code);
            return (
              <article key={code} aria-labelledby={`product-${code}`}>
                <header className="border-b border-ink-100 pb-6 mb-8 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h2
                      id={`product-${code}`}
                      className="text-2xl md:text-3xl font-bold text-ink-900 tracking-tight"
                    >
                      {disp.name}
                    </h2>
                    <p className="text-sm text-ink-500 mt-2 max-w-2xl leading-relaxed">
                      {disp.tagline}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={`https://license.h-insight.jp/download/${code}?lang=en`}
                      className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gold-600 text-white font-semibold text-sm shadow hover:bg-gold-700 transition-colors"
                    >
                      Download latest
                    </Link>
                  </div>
                </header>

                <ol className="space-y-6">
                  {versions.map((v, idx) => (
                    <li
                      key={v.version}
                      className="rounded-2xl border border-ink-100 bg-white p-6 md:p-8"
                    >
                      <header className="flex flex-wrap items-baseline gap-3 pb-3 mb-3 border-b border-dashed border-ink-100">
                        <h3 className="text-xl font-bold text-ink-900">v{v.version}</h3>
                        {idx === 0 && (
                          <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                            Current
                          </span>
                        )}
                        <span className="text-xs text-ink-500 ml-auto">
                          Released {v.releaseDate}
                        </span>
                      </header>
                      <p className="text-base text-ink-900 font-medium leading-relaxed mb-4">
                        {v.highlight}
                      </p>
                      <ul className="space-y-2.5">
                        {v.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-ink-600 leading-relaxed"
                          >
                            <span
                              aria-hidden="true"
                              className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500"
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-ink-100 bg-ink-50/40 py-12">
        <div className="container-narrow text-center">
          <p className="text-sm text-ink-500 mb-4">
            Ready to try the latest version?
          </p>
          <div className="inline-flex gap-3 flex-wrap justify-center">
            <Link
              href="/#products"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gold-600 text-white font-semibold text-sm shadow hover:bg-gold-700 transition-colors"
            >
              See products
            </Link>
            <Link
              href="https://license.h-insight.jp/trial?lang=en"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-ink-200 text-ink-900 font-semibold text-sm hover:bg-white transition-colors"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

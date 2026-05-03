import { products, getCheckoutUrl, getTrialUrl } from "@/data/products";

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-gradient-to-b from-white to-ink-50/50">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">Two flagship products</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink-900 leading-tight tracking-tight mb-5">
            Built for the work you{" "}
            <span className="text-gradient-gold">actually do.</span>
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            Pick the tool that solves your daily friction. Or grab both — they share licensing, glossary, and design conventions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.code}
              className="group relative rounded-2xl bg-white border border-ink-100 overflow-hidden card-lift"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${product.iconBg}`} />

              <div className="p-8 md:p-10">
                {/* Icon + Code */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.iconBg} flex items-center justify-center text-3xl shadow-lg`}>
                    {product.emoji}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink-300 mt-2">
                    {product.code}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-ink-900 mb-2 tracking-tight">{product.name}</h3>
                <p className="text-base text-ink-500 mb-6 leading-relaxed">{product.tagline}</p>

                {/* Description */}
                <p className="text-sm text-ink-600 leading-relaxed mb-8">{product.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.features.slice(0, 4).map((f) => (
                    <li key={f.title} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-ink-800">{f.title}</span>
                        <span className="text-ink-500"> — {f.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={getCheckoutUrl(product.code, "PERS")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold transition-colors"
                  >
                    Buy Personal — {product.prices.personal}/year
                  </a>
                  <a
                    href={getTrialUrl(product.code)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-ink-200 hover:border-gold-400 hover:bg-gold-50/50 text-ink-700 text-sm font-semibold transition-all"
                  >
                    30-day free trial
                  </a>
                </div>

                {/* Best for */}
                <div className="mt-6 pt-6 border-t border-ink-100">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-ink-400 mb-3">Best for</div>
                  <ul className="space-y-1.5 text-xs text-ink-500">
                    {product.bestFor.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-gold-500 flex-shrink-0">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

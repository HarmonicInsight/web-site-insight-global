import { products, getCheckoutUrl, getTrialUrl } from "@/data/products";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink-900 leading-tight tracking-tight mb-5">
            Buy once.{" "}
            <span className="text-gradient-gold">Keep it.</span>
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            One-time purchase. One year of free updates. Use it forever. AI usage is billed by DeepL or OpenAI directly to you — never to us.
          </p>
        </div>

        {products.map((product) => (
          <div key={product.code} className="max-w-5xl mx-auto mb-12 last:mb-0">
            {/* Product header */}
            <div className="flex items-baseline justify-between flex-wrap gap-3 mb-5 px-1">
              <div>
                <h3 className="text-2xl font-bold text-ink-900 inline-flex items-center gap-3">
                  <span className="text-2xl">{product.emoji}</span>
                  {product.name}
                </h3>
                <p className="text-sm text-ink-500 mt-1">{product.tagline}</p>
              </div>
              <a
                href={getTrialUrl(product.code)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold-700 hover:text-gold-800 font-semibold inline-flex items-center gap-1"
              >
                30-day free trial →
              </a>
            </div>

            {/* Two-column pricing */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* Personal */}
              <div className="rounded-2xl bg-white border-2 border-ink-100 p-7 hover:border-gold-300 transition-colors">
                <div className="flex items-baseline justify-between mb-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-ink-500">Personal</div>
                  <div className="text-sm text-ink-400">For individual creators</div>
                </div>
                <div className="flex items-baseline gap-2 mb-4 mt-2">
                  <span className="text-4xl font-bold text-ink-900">{product.prices.personal}</span>
                  <span className="text-sm text-ink-500">/year</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-ink-600">
                    <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    1 device, all features unlocked
                  </li>
                  <li className="flex items-start gap-2 text-sm text-ink-600">
                    <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Use your own DeepL / OpenAI keys
                  </li>
                  <li className="flex items-start gap-2 text-sm text-ink-600">
                    <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Glossary + Translation Memory
                  </li>
                  <li className="flex items-start gap-2 text-sm text-ink-600">
                    <svg className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Email support
                  </li>
                </ul>
                <a
                  href={getCheckoutUrl(product.code, "PERS")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-5 py-3 rounded-xl bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold transition-colors"
                >
                  Get Personal — {product.prices.personal}
                </a>
              </div>

              {/* Business — featured */}
              <div className="relative rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 text-white p-7 shadow-card overflow-hidden">
                {/* Badge */}
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold-500 text-ink-900 text-[10px] font-bold uppercase tracking-widest">
                    Most popular
                  </span>
                </div>
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold-500/20 blur-3xl" />
                <div className="relative">
                  <div className="flex items-baseline justify-between mb-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-gold-400">Business</div>
                  </div>
                  <div className="text-sm text-ink-300 mt-2 mb-1">For teams that ship multilingual content</div>
                  <div className="flex items-baseline gap-2 mb-4 mt-2">
                    <span className="text-4xl font-bold text-white">{product.prices.business}</span>
                    <span className="text-sm text-ink-300">/seat/year</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-sm text-ink-100">
                      <svg className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Multi-seat licensing for teams
                    </li>
                    <li className="flex items-start gap-2 text-sm text-ink-100">
                      <svg className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Shared corporate glossary + TM
                    </li>
                    <li className="flex items-start gap-2 text-sm text-ink-100">
                      <svg className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Batch processing across folders
                    </li>
                    <li className="flex items-start gap-2 text-sm text-ink-100">
                      <svg className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Priority email support
                    </li>
                  </ul>
                  <a
                    href={getCheckoutUrl(product.code, "BIZ")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-ink-900 text-sm font-bold transition-all shadow-glow-gold"
                  >
                    Get Business — {product.prices.business}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <p className="text-xs text-ink-400 text-center mt-10 max-w-2xl mx-auto">
          Prices are billed in USD. Lemon Squeezy converts to your local currency at checkout, and handles tax and invoices globally.
          30-day refund, no questions asked. Looking for an enterprise plan or invoice billing?{" "}
          <a href="mailto:contact@h-insight.jp" className="text-gold-700 hover:text-gold-800 underline">Contact us</a>.
        </p>
      </div>
    </section>
  );
}

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <div className="relative max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 overflow-hidden p-10 md:p-16 text-center">
          {/* Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold-500/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-rose-500/10 blur-3xl" />
          {/* Grid */}
          <div className="absolute inset-0 bg-grid opacity-[0.04]" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-4">
              Stop the juggling
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              One Office document.{" "}
              <span className="text-gradient-gold">Every operation.</span>
            </h2>
            <p className="text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto mb-10">
              30-day trial. No credit card. No setup. Download, drop a file, and see what happens.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://license.h-insight.jp/download/INST?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-ink-900 text-base font-bold shadow-glow-gold transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Start 30-day free trial
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-ink-700 hover:border-gold-400 hover:bg-ink-800 text-white text-base font-semibold transition-all"
              >
                See pricing
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-ink-400">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                30-day money-back guarantee
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Use your own AI keys
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Local processing, no cloud upload
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

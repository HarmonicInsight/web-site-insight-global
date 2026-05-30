export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-24 bg-hero-gradient">
      {/* Background blobs */}
      <div className="hero-blob bg-gold-300 -top-40 -right-40" />
      <div className="hero-blob bg-rose-200 top-1/2 -left-40 animate-subtle-pulse" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="container-narrow relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-gold-200 text-xs font-semibold text-gold-700 mb-8 shadow-sm opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-subtle-pulse" />
            Two flagship products · 47 languages · BYOK · Local processing
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink-900 leading-[1.05] tracking-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            Two desktop apps for{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold">multilingual work.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C50 4 100 4 150 6.5C200 9 250 9 298 5"
                  stroke="url(#underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c5a55a" />
                    <stop offset="100%" stopColor="#dcb150" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Sub */}
          <p
            className="text-lg md:text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "240ms" }}
          >
            <strong className="text-ink-800">Insight Training Studio</strong> turns
            slides into 47-language narrated training videos.
            <br className="hidden md:block" />
            <strong className="text-ink-800">Insight Doc Translator</strong>{" "}
            translates Office files in 47 languages with layout intact.
            <br className="hidden md:block" />
            <span className="text-ink-900 font-medium">
              Two separate apps. Sold and licensed independently. Bring your own AI keys.
            </span>
          </p>

          {/* CTAs — dual product, equal weight */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "360ms" }}
          >
            <a href="#product-inmv" className="btn-primary px-7 py-3.5 text-base">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              See Training Studio demo
            </a>
            <a href="#product-inst" className="btn-secondary px-7 py-3.5 text-base">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              See Doc Translator demo
            </a>
          </div>

          {/* Trust line */}
          <p
            className="text-xs text-ink-400 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "480ms" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Local processing
            </span>
            <span className="mx-3">·</span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              SCORM 1.2 export (Training Studio)
            </span>
            <span className="mx-3">·</span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              All features, every plan
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

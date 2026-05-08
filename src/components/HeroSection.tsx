import HeroVideo from "@/components/HeroVideo";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32 bg-hero-gradient">
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
            One file. Four kinds of work. Layout intact.
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink-900 leading-[1.05] tracking-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "120ms" }}
          >
            Stop juggling three apps for{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold">one Office file.</span>
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
            <strong className="text-ink-700">DeepL</strong> breaks the layout.{" "}
            <strong className="text-ink-700">ChatGPT</strong> loses the formatting.{" "}
            <strong className="text-ink-700">Acrobat</strong> misses your terminology.
            <br className="hidden md:block" />
            <span className="text-ink-900 font-medium">
              {" "}One desktop app does all three. Your layout comes through untouched.
            </span>
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="https://license.h-insight.jp/download/INST?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-7 py-3.5 text-base"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Try it free
            </a>
            <a href="#pricing" className="btn-secondary px-7 py-3.5 text-base">
              See pricing
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
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
              No credit card required
            </span>
            <span className="mx-3">·</span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              30-day refund
            </span>
            <span className="mx-3">·</span>
            <span className="inline-flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Local processing only
            </span>
          </p>
        </div>

        {/* Hero video */}
        <div
          className="relative mt-16 md:mt-20 max-w-5xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: "640ms" }}
        >
          <HeroVideo />
          {/* Stats bar — kept beneath the video for at-a-glance proof points */}
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-ink-500">
            <span><strong className="text-ink-800">47</strong> languages</span>
            <span><strong className="text-ink-800">6</strong> AI engines</span>
            <span><strong className="text-ink-800">4</strong> formats (PPTX, PDF, DOCX, XLSX)</span>
            <span><strong className="text-ink-800">100%</strong> layout preserved</span>
            <span><strong className="text-ink-800">0</strong> cloud upload</span>
          </div>
        </div>
      </div>
    </section>
  );
}

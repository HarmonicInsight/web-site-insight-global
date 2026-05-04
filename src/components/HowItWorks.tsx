export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Drop your file",
      description: "Drag a PowerPoint, PDF, Word, or Excel file onto the app window. Detection is automatic.",
      visual: (
        <div className="rounded-xl bg-gradient-to-br from-ink-50 to-white border border-ink-100 p-6 h-full">
          <div className="border-2 border-dashed border-ink-200 rounded-lg p-8 text-center">
            <svg className="w-10 h-10 mx-auto mb-3 text-ink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
            </svg>
            <div className="text-sm font-medium text-ink-700 mb-1">quarterly_report.pptx</div>
            <div className="text-xs text-ink-400">128 slides · 2.3 MB</div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
            <span className="text-[10px] px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-mono">.pptx</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-700 font-mono">.pdf</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-sky-100 text-sky-700 font-mono">.docx</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-mono">.xlsx</span>
          </div>
        </div>
      ),
    },
    {
      number: "02",
      title: "Choose your operation",
      description: "Translate, Simplify, Summarize, or Polish. Pick a language and engine — switch per row if needed.",
      visual: (
        <div className="rounded-xl bg-gradient-to-br from-gold-50 to-white border border-gold-100 p-6 h-full">
          <div className="space-y-2">
            {[
              { label: "Translate", icon: "🌐", active: true },
              { label: "Simplify (CEFR A1/A2)", icon: "🌱", active: false },
              { label: "Summarize (½ length)", icon: "✂", active: false },
              { label: "Polish (formal tone)", icon: "🎩", active: false },
            ].map((op) => (
              <div
                key={op.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm border ${op.active ? "border-gold-400 bg-gold-100/50 text-ink-900 font-semibold" : "border-ink-100 bg-white text-ink-500"}`}
              >
                <span className="text-base">{op.icon}</span>
                <span className="flex-1">{op.label}</span>
                {op.active && (
                  <svg className="w-4 h-4 text-gold-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="text-ink-500">Engine:</span>
            <span className="font-mono text-ink-700 px-2 py-0.5 rounded bg-ink-100">DeepL · ja → en</span>
          </div>
        </div>
      ),
    },
    {
      number: "03",
      title: "Get clean output",
      description: "Layout intact. Fonts intact. Tables intact. Save the file. Share it. Done.",
      visual: (
        <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-6 h-full">
          <div className="rounded-lg bg-white border border-ink-100 p-4 shadow-sm mb-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-800">quarterly_report_en.pptx</div>
                <div className="text-xs text-ink-400">128 slides translated · 2.4 MB</div>
              </div>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-ink-600">
                <svg className="w-3 h-3 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Fonts preserved
              </div>
              <div className="flex items-center gap-2 text-ink-600">
                <svg className="w-3 h-3 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Layout intact
              </div>
              <div className="flex items-center gap-2 text-ink-600">
                <svg className="w-3 h-3 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Tables, images, embedded objects: all kept
              </div>
            </div>
          </div>
          <div className="text-xs text-center text-ink-400 italic">
            Total time: ~3 minutes
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how" className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">How it works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink-900 leading-tight tracking-tight mb-5">
            Three steps. Zero{" "}
            <span className="text-gradient-gold">post-editing.</span>
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            We obsessed over the workflow so you don't have to. Drop, choose, ship.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-6 h-0.5 bg-gradient-to-r from-gold-300 to-transparent z-0" />
              )}

              <div className="relative">
                {/* Number + title */}
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-3xl font-bold text-gradient-gold leading-none">{step.number}</span>
                  <h3 className="text-lg font-bold text-ink-900">{step.title}</h3>
                </div>
                <p className="text-sm text-ink-500 leading-relaxed mb-5">{step.description}</p>

                {/* Visual */}
                {step.visual}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="https://license.h-insight.jp/download/INST?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-7 py-3 text-base"
          >
            See it in action — free trial
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

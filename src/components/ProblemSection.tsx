export default function ProblemSection() {
  const before = [
    { app: "DeepL", action: "Translate the slide", problem: "Layout breaks. Tables collapse. Fonts change." },
    { app: "ChatGPT", action: "Simplify the language", problem: "Format gone. Have to rebuild from text dump." },
    { app: "Acrobat", action: "Open the PDF", problem: "Terminology slips. Glossary not enforced." },
    { app: "PowerPoint", action: "Manually fix everything", problem: "Two hours per file. Every. Single. Time." },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-500 mb-3">The problem</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink-900 leading-tight tracking-tight mb-5">
            Your current workflow is{" "}
            <span className="text-rose-600">broken on purpose.</span>
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            Every tool solves one piece. None of them respect your layout. You become the integration layer — and you spend half your day cleaning up.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {before.map((step, i) => (
              <div
                key={step.app}
                className="relative rounded-xl border border-ink-100 bg-ink-50/50 p-6"
              >
                <div className="absolute top-4 right-4 text-xs font-mono text-ink-300 font-bold">
                  Step {i + 1}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-2">{step.app}</div>
                <div className="text-base font-semibold text-ink-800 mb-2">{step.action}</div>
                <div className="flex items-start gap-2 text-sm text-rose-600">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {step.problem}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-ink-900 text-white">
            <svg className="w-5 h-5 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm md:text-base font-medium">
              We built one app for all of it. Layout intact.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

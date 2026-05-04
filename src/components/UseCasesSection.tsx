export default function UseCasesSection() {
  const cases = [
    {
      industry: "Software & SaaS",
      icon: "💻",
      headline: "Ship product docs in 14 languages without a localization team",
      description:
        "Your release notes, API docs, and pitch decks — translated and reformatted in minutes. Engineers stay shipping. Marketing stays on schedule.",
      stat: "14×",
      statLabel: "faster docs localization",
      gradient: "from-violet-500/10 to-blue-500/10",
      border: "border-violet-200",
      accent: "text-violet-700",
    },
    {
      industry: "Sales & Consulting",
      icon: "📈",
      headline: "Send the same proposal to Tokyo, Singapore, and São Paulo",
      description:
        "Translate a 60-slide pitch deck before the prospect call. Layout intact, brand fonts preserved, charts editable in PowerPoint.",
      stat: "<5 min",
      statLabel: "for a 60-slide deck",
      gradient: "from-emerald-500/10 to-teal-500/10",
      border: "border-emerald-200",
      accent: "text-emerald-700",
    },
    {
      industry: "Legal & Compliance",
      icon: "⚖️",
      headline: "Review foreign-language contracts in your own language first",
      description:
        "Translate-then-summarize a 200-page agreement. Get a 2-page brief in your preferred tone — formal or plain language.",
      stat: "200 → 2",
      statLabel: "pages, in 8 minutes",
      gradient: "from-amber-500/10 to-orange-500/10",
      border: "border-amber-200",
      accent: "text-amber-700",
    },
    {
      industry: "Academic & Research",
      icon: "🎓",
      headline: "Read papers in any language. Cite them in yours.",
      description:
        "Drop a PDF preprint. Get a layout-preserving translation with formulas intact. Then summarize for your literature review.",
      stat: "PDF",
      statLabel: "with formulas preserved",
      gradient: "from-rose-500/10 to-pink-500/10",
      border: "border-rose-200",
      accent: "text-rose-700",
    },
    {
      industry: "HR & Internal Comms",
      icon: "🤝",
      headline: "One handbook. Every employee reads it in their native tongue.",
      description:
        "Translate company policies, training materials, and onboarding decks. Glossary keeps brand and legal terms consistent across runs.",
      stat: "1 source",
      statLabel: "→ all team languages",
      gradient: "from-cyan-500/10 to-sky-500/10",
      border: "border-cyan-200",
      accent: "text-cyan-700",
    },
    {
      industry: "Finance & Audit",
      icon: "📊",
      headline: "Translate Excel reports without breaking the formulas",
      description:
        "Cell-by-cell translation that preserves =SUM(), =VLOOKUP(), and conditional formatting. Send English reports to your overseas board, in minutes.",
      stat: "0",
      statLabel: "broken formulas",
      gradient: "from-indigo-500/10 to-purple-500/10",
      border: "border-indigo-200",
      accent: "text-indigo-700",
    },
  ];

  return (
    <section id="use-cases" className="py-20 md:py-28 bg-gradient-to-b from-ink-50/50 to-white">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
            Use cases
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink-900 leading-tight tracking-tight mb-5">
            Built for teams that ship{" "}
            <span className="text-gradient-gold">across borders.</span>
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            Whatever your industry — if your work crosses a language barrier, this is for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div
              key={c.industry}
              className={`relative rounded-2xl border ${c.border} bg-white p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden group`}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                {/* Industry tag + icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                    {c.industry}
                  </span>
                  <span className="text-2xl">{c.icon}</span>
                </div>

                {/* Headline */}
                <h3 className="text-base font-bold text-ink-900 leading-snug mb-3">
                  {c.headline}
                </h3>

                {/* Description */}
                <p className="text-sm text-ink-500 leading-relaxed mb-5">
                  {c.description}
                </p>

                {/* Stat */}
                <div className="pt-4 border-t border-ink-100">
                  <div className={`text-2xl font-bold ${c.accent} leading-none mb-1`}>
                    {c.stat}
                  </div>
                  <div className="text-xs text-ink-500">{c.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

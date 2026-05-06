const faqs = [
  {
    q: "What does “use your own AI key” (BYOK) mean?",
    a: "You bring your own API key from DeepL, Google, Azure, Claude, Gemini, or OpenAI. AI usage is billed by those providers directly to you, never to us — and most teams stay inside their providers’ free tiers (around 3M characters per month, combined). It keeps your AI costs transparent and under your control.",
  },
  {
    q: "Where do my documents go?",
    a: "Nowhere. The app runs on your PC, and only the text you choose to translate ever reaches an AI provider — using your own API key, billed directly to you. File structure, metadata, and unselected content never leave your machine.",
  },
  {
    q: "What currency will I be charged in?",
    a: "USD ($199 / $499). At checkout, Lemon Squeezy converts to your local currency at the current exchange rate, and acts as our merchant of record — so tax, invoicing, and conversion are handled in one step whether you’re in the US, EU, UK, India, or anywhere else. Customers in Japan should use insight-office.com, which carries a separate JPY-priced tier.",
  },
  {
    q: "What if it doesn’t work for me?",
    a: "30-day money back, no questions asked. If your typical workflow doesn’t feel meaningfully faster within 30 days, email us and we’ll refund in full.",
  },
  {
    q: "Does it work on macOS or Linux?",
    a: "Built first for Windows — that’s where most Office work happens in business. macOS is on the roadmap; sign up for the newsletter and we’ll email you when it lands.",
  },
  {
    q: "How is this different from DeepL?",
    a: "DeepL is excellent at the translation itself — we use it as one of our engines. The difference is what happens to the rest of your file. DeepL doesn’t preserve PowerPoint layouts well, can’t simplify or summarize, and locks you into one engine. We keep your layout intact, let you switch between six engines per row, and add simplify, summarize, and refine on top of translation.",
  },
  {
    q: "Can I share licenses with my team?",
    a: "Yes. Pick the Business plan ($499 per seat per year) and add as many seats as you need — one seat per device. Business also unlocks a shared glossary and translation memory across the team.",
  },
  {
    q: "What languages does Simplify support?",
    a: "Every target language can be rewritten to a lower proficiency level — CEFR for European languages, JLPT for Japanese, HSK for Chinese, TOPIK for Korean. The AI adjusts vocabulary and grammar to match the level you set (down to A1/A2).",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl bg-white border border-ink-100 hover:border-gold-200 transition-colors p-5 [&[open]]:border-gold-300 [&[open]]:shadow-soft">
      <summary className="flex items-center justify-between cursor-pointer list-none">
        <span className="text-base font-semibold text-ink-900 pr-4">{q}</span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ink-50 group-hover:bg-gold-100 flex items-center justify-center transition-colors">
          <svg
            className="w-4 h-4 text-ink-500 transition-transform group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="mt-4 text-sm text-ink-500 leading-relaxed">{a}</div>
    </details>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-ink-50/40">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink-900 leading-tight tracking-tight mb-5">
            Questions, answered{" "}
            <span className="text-gradient-gold">honestly.</span>
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            If yours isn't here, email us at{" "}
            <a href="mailto:contact@h-insight.jp" className="text-gold-700 underline hover:text-gold-800">
              contact@h-insight.jp
            </a>
            .
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

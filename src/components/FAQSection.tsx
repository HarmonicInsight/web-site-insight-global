const faqs = [
  {
    q: "What does BYOK (Bring Your Own Key) mean?",
    a: "You bring your own API keys for the AI engines (DeepL, Google, Azure, Claude, Gemini, OpenAI). Your AI usage is billed directly by those providers, not by us. This keeps your AI cost transparent and under your control. Most users stay within free tiers (~3M chars/month combined across DeepL, Google, Azure).",
  },
  {
    q: "Where do my documents go?",
    a: "Nowhere — they stay on your PC. Insight Doc Translator is a local Windows desktop app. Translation engines receive only the text content you choose to translate (via your own API keys). Your file structure, metadata, and unselected content never leave your machine.",
  },
  {
    q: "What currency will I be charged in?",
    a: "USD is the listed price ($199 / $499). At checkout, LemonSqueezy automatically converts to your local currency at the current exchange rate. LemonSqueezy acts as Merchant of Record, handling tax, invoicing, and currency conversion globally — your transaction is straightforward whether you're in the US, EU, UK, India, or anywhere else. Note: customers based in Japan should use our domestic site insight-office.com, which offers a separate JPY-priced tier.",
  },
  {
    q: "What if I'm not happy with the product?",
    a: "30-day money-back guarantee, no questions asked. If you don't see a 5x time savings on your typical workflow within 30 days, email us and we'll refund the full amount.",
  },
  {
    q: "Does it work on macOS or Linux?",
    a: "Currently Windows-only. PowerPoint, Excel, and Word are most heavily used on Windows in business contexts, so we focused there first. macOS support is on the roadmap — sign up for the trial to be notified.",
  },
  {
    q: "How is this different from DeepL?",
    a: "DeepL is excellent at translation, but: (1) it doesn't preserve PowerPoint layouts well, (2) it can't simplify or summarize content, (3) it locks you into one engine. We let you switch between 6 engines per file or per row, on top of layout-preserving format support and intralingual rewrite.",
  },
  {
    q: "Can I share licenses with my team?",
    a: "Yes — purchase Business plan ($499/seat/year) and add as many seats as you need. Each seat is one device. The Business plan includes shared glossary and translation memory across the team.",
  },
  {
    q: "What languages does the 'Simplify' feature support?",
    a: "All target languages can be simplified to lower CEFR levels (A1/A2). Proficiency standards are aware of your target: CEFR for European languages, JLPT for Japanese, HSK for Chinese, TOPIK for Korean. The AI adjusts vocabulary and grammar to match the intended reading level.",
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

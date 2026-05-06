export default function TrustBadgesSection() {
  const badges = [
    {
      title: "Local processing",
      caption: "Your file never leaves your machine",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <path
            d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Use your own AI keys",
      caption: "DeepL and OpenAI bill you directly (BYOK)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <circle cx="9" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M13 12h7M17 9v3M20 12v3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Built in Tokyo",
      caption: "Independent. No VC. No fake urgency.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3.2" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "30-day money back",
      caption: "Full refund, no questions asked",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <path
            d="M21 12a9 9 0 11-3-6.7M21 4v5h-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Tax + invoicing covered",
      caption: "Lemon Squeezy handles tax and invoices globally",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <path
            d="M4 7h16l-1.5 11a2 2 0 01-2 1.7H7.5a2 2 0 01-2-1.7L4 7z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 7V5a3 3 0 116 0v2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Buy once. Keep it.",
      caption: "Lifetime license, one year of updates",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 10h18M8 15h2M14 15h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-y border-ink-100">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-2">
            Why people trust us
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
            Built around <span className="text-gradient-gold">your data, your control.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-ink-50/40 border border-ink-100 hover:border-gold-200 hover:bg-gold-50/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-gold-200 flex items-center justify-center text-gold-700 mb-3">
                {b.icon}
              </div>
              <div className="text-sm font-semibold text-ink-900 mb-1">{b.title}</div>
              <div className="text-[11px] text-ink-500 leading-snug">{b.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

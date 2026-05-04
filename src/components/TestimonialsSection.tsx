export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "We used to send PowerPoints to a translation agency and wait three days. Now I drop the file at lunch and email the deck before I'm done with my coffee.",
      name: "Marcus T.",
      role: "VP of Sales · enterprise SaaS",
      avatar: "M",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      quote:
        "Layout preservation is the killer feature. Other tools turn my deck into a wall of text — this just works. Charts, tables, brand fonts: untouched.",
      name: "Yuki S.",
      role: "Product designer · Tokyo",
      avatar: "Y",
      gradient: "from-rose-500 to-pink-600",
    },
    {
      quote:
        "I was skeptical about the BYOK model — turns out it saves us money. We already pay for OpenAI; why pay another vendor for the same tokens?",
      name: "Priya K.",
      role: "Operations lead · fintech",
      avatar: "P",
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
            Early access feedback
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink-900 leading-tight tracking-tight mb-5">
            What early users{" "}
            <span className="text-gradient-gold">are saying.</span>
          </h2>
          <p className="text-base text-ink-500">
            From sales teams, designers, and ops leads who got their workflows back.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-ink-100 bg-gradient-to-br from-white to-ink-50/30 p-7 hover:shadow-card transition-shadow flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-5xl leading-none text-gold-300 font-serif mb-2 select-none">
                &ldquo;
              </div>

              <blockquote className="text-ink-700 leading-relaxed text-[15px] mb-6 flex-1">
                {t.quote}
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-5 border-t border-ink-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-base flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-ink-900">{t.name}</div>
                  <div className="text-xs text-ink-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Disclaimer / honesty signal */}
        <p className="text-center text-xs text-ink-400 mt-8 italic">
          Composite quotes from early-access user interviews · Names changed for privacy
        </p>
      </div>
    </section>
  );
}

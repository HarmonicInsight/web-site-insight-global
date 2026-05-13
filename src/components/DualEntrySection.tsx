export default function DualEntrySection() {
  const entries = [
    {
      label: "Entry A",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      title: "Drop a deck. Get a video.",
      sub: "PowerPoint or PDF in. 47-language training video out.",
      bullets: [
        "Speaker notes auto-become the AI narration script",
        "Three narration modes: AI voice (47 lang) · in-app recording · WAV/MP3 import — mix per scene",
        "Picture-in-picture overlay for presenter or sign language",
        "Subtitles, BGM, transitions, thumbnails — all built in",
      ],
      bestFor: "L&D · HR · global onboarding · accessibility",
      cta: "PowerPoint → multilingual MP4",
    },
    {
      label: "Entry B",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25M12 11.25l-3 3m0 0l3 3m-3-3h6" />
        </svg>
      ),
      title: "Record a screen. Get a manual.",
      sub: "Screen recording + step capture in. Captioned tutorial out.",
      bullets: [
        "Captures clicks and on-screen actions step by step",
        "AI generates subtitles and chapter markers automatically",
        "Same 47 languages — turn one recording into a global manual",
        "Narrate in your own voice (in-app recording) or AI — per scene",
        "Output as video tutorial or step-by-step PDF documentation",
      ],
      bestFor: "SaaS onboarding · IT manuals · DevRel · customer success",
      cta: "Screen recording → Captioned tutorial",
    },
  ];

  return (
    <section id="entries" className="py-20 md:py-28 bg-white relative">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
            Insight Training Studio · Two ways in
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-ink-900 mb-5">
            One tool, <span className="text-gradient-gold">two entry points.</span>
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            Whatever you have — a slide deck or a screen full of clicks — the same pipeline takes you to a
            multilingual, SCORM-ready video.
          </p>
        </div>

        {/* Two entry cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {entries.map((e) => (
            <div
              key={e.label}
              className="group relative rounded-2xl border border-ink-100 bg-white p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-gold-200 transition-all"
            >
              {/* Label chip */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50 border border-gold-200 text-[10px] font-bold uppercase tracking-wider text-gold-700 mb-5">
                {e.label}
              </div>

              {/* Icon + title */}
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white shadow-md">
                  {e.icon}
                </div>
                <div className="pt-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight tracking-tight">
                    {e.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-ink-600 leading-relaxed mb-6 ml-16">
                {e.sub}
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5 mb-7">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-ink-700">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Best-for + CTA badge */}
              <div className="pt-5 border-t border-ink-100">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-ink-400 mb-1.5">
                  Best for
                </div>
                <div className="text-sm text-ink-600 mb-4">{e.bestFor}</div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {e.cta}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote: shared pipeline */}
        <div className="mt-12 text-center">
          <p className="text-sm text-ink-500">
            <strong className="text-ink-700">Shared pipeline:</strong>{" "}
            both entries land in the same export — MP4, WAV, MP3, or{" "}
            <strong className="text-ink-700">SCORM 1.2 LMS package</strong>. Verified with Moodle and SCORM Cloud.
          </p>
        </div>
      </div>
    </section>
  );
}

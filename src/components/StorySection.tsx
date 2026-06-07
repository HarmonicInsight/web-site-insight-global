import Image from "next/image";

export default function StorySection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-ink-900 text-white relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gold accent blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/20 rounded-full blur-[120px]" />

      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: text */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400 mb-4">
              A two-person family company
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              A family company with one engineer.{" "}
              <span className="text-gradient-gold">The rest of the team is AI.</span>
            </h2>

            <div className="space-y-5 text-ink-200 leading-relaxed text-lg">
              <p>
                HARMONIC insight is our family company — my wife and me. She runs it;
                I write every line of code, the way I think the next decade gets made:
                one builder, augmented by AI, shipping products that used to take a whole team.
              </p>
              <p>
                I don&apos;t just sell these tools — I live on them. I produce
                multilingual training videos and translated documents myself, at a scale
                that normally needs a studio and a localization team. They&apos;re the
                proof of the whole idea: AI lets one builder deliver work that used to
                require many.
              </p>
              <p className="text-base text-ink-300 italic">
                Lean isn&apos;t fragile. Your files never leave your machine — the app
                runs on your own AI key — and support comes straight from the person who
                wrote the code.
              </p>
            </div>

            {/* Signature-style attribution */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-gold-400/40 flex-shrink-0">
                  <Image
                    src="/about/erik-arthur.png"
                    alt="Erik Arthur, founder of HARMONIC insight"
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">Erik Arthur — Founder, HARMONIC insight</div>
                  <div className="text-sm text-ink-400">Tokyo, Japan · est. August 2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: principles */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-7">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold-400 mb-5">
                Our principles
              </h3>

              <ul className="space-y-5">
                {[
                  {
                    title: "Your data stays yours",
                    body:
                      "We never see your files or text. The app talks directly to DeepL or OpenAI from your machine, with your own API key.",
                  },
                  {
                    title: "One price. All features.",
                    body:
                      "Annual per-device license. No upgrade tiers. No \"Plus\" or \"Pro\" upsells. The price is the price.",
                  },
                  {
                    title: "Layouts come through untouched",
                    body:
                      "Fonts, tables, formulas, embedded objects — preserved bit-for-bit. Your finished file looks like your source file.",
                  },
                  {
                    title: "Sound like a person",
                    body:
                      "Outputs adjust to register: friendly emails, formal contracts, plain-language briefings — never a translation artifact.",
                  },
                ].map((p) => (
                  <li key={p.title} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full border-2 border-gold-400 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm mb-1">{p.title}</div>
                      <div className="text-sm text-ink-300 leading-relaxed">{p.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

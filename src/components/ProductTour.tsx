import Image from "next/image";

type Tour = {
  product: "INST" | "INMV";
  productLabel: string;
  productAccent: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const tours: Tour[] = [
  {
    product: "INST",
    productLabel: "Insight Doc Translator",
    productAccent: "text-rose-700 bg-rose-50 border-rose-200",
    title: "Drop the file. We'll handle it.",
    caption:
      "Drag in PowerPoint, Excel, Word, or PDF. Recent files appear inline. Pick a target language. That's the entire onboarding.",
    src: "/screenshots/inst-top.png",
    alt: "Insight Doc Translator top screen — drag-and-drop area for PPTX, Excel, Word, and PDF files",
    width: 1483,
    height: 936,
  },
  {
    product: "INST",
    productLabel: "Insight Doc Translator",
    productAccent: "text-rose-700 bg-rose-50 border-rose-200",
    title: "Translate slide-by-slide with full context.",
    caption:
      "Source on the left, draft translation on the right, AI suggestions on the far right. Edit any segment, swap engines per row, accept or revise — all without leaving the Office layout.",
    src: "/screenshots/inst-pptx.png",
    alt: "PowerPoint translation workspace with side-by-side source, target, and AI suggestion panels",
    width: 1456,
    height: 985,
  },
  {
    product: "INST",
    productLabel: "Insight Doc Translator",
    productAccent: "text-rose-700 bg-rose-50 border-rose-200",
    title: "Review the translation against the original.",
    caption:
      "PDFs render fully on the left, with the translation broken into segments on the right. Edit any segment in place, and apply changes back into a clean output PDF when you're done.",
    src: "/screenshots/inst-compare.png",
    alt: "Insight Doc Translator reviewing a Standard Operating Procedure PDF with the translated segments alongside",
    width: 1748,
    height: 982,
  },
  {
    product: "INST",
    productLabel: "Insight Doc Translator",
    productAccent: "text-rose-700 bg-rose-50 border-rose-200",
    title: "Six engines. Configured once. Switch anytime.",
    caption:
      "DeepL, Google, Azure, Claude, Gemini, and OpenAI — each with its own strengths, all in one panel. Drop in your API keys (BYOK), pick a default, and switch engines per file or per row whenever the content calls for it.",
    src: "/screenshots/inst-multi-engine.png",
    alt: "Translation Engines settings page showing DeepL, Google, Azure, Claude, Gemini, and OpenAI configured side by side",
    width: 1806,
    height: 927,
  },
  {
    product: "INMV",
    productLabel: "Insight Training Studio",
    productAccent: "text-violet-700 bg-violet-50 border-violet-200",
    title: "Your speaker notes become AI narration.",
    caption:
      "Each slide becomes a scene. Notes become voice-over. Edit narration, switch voices, drop in BGM, set captions — everything in one editor, no video tool required.",
    src: "/screenshots/inmv-editor.png",
    alt: "Insight Training Studio editor with scene list, narration text, voice and subtitle controls",
    width: 1287,
    height: 938,
  },
  {
    product: "INMV",
    productLabel: "Insight Training Studio",
    productAccent: "text-violet-700 bg-violet-50 border-violet-200",
    title: "Pick your voice. Cloud, offline, or studio-grade.",
    caption:
      "Microsoft Neural TTS for everyday narration, VOICEVOX for studio-quality Japanese voices, Windows built-in for fully offline runs, or ElevenLabs for industry-best naturalness with voice cloning. Switch per scene.",
    src: "/screenshots/inmv-preview.png",
    alt: "Narrator Engine settings showing Microsoft Neural TTS, VOICEVOX, Windows built-in voice, and ElevenLabs as TTS options",
    width: 1288,
    height: 935,
  },
];

export default function ProductTour() {
  return (
    <section id="product-tour" className="py-20 md:py-28 bg-gradient-to-b from-white via-ink-50/40 to-white">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
            Product tour
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink-900 leading-tight tracking-tight mb-5">
            Real screens.{" "}
            <span className="text-gradient-gold">Real translations.</span>
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            Real screenshots of the actual app — captured while a Tokyo team translates Japanese decks into English. No mockups, no marketing illustrations. This is the real product.
          </p>
        </div>

        <div className="space-y-12">
          {tours.map((t, i) => {
            const isAlt = i % 2 === 1;
            return (
              <div
                key={t.src}
                className={`grid lg:grid-cols-12 gap-8 items-center ${
                  isAlt ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text */}
                <div className="lg:col-span-4">
                  <span
                    className={`inline-block text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border mb-4 ${t.productAccent}`}
                  >
                    {t.productLabel}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-ink-900 leading-tight tracking-tight mb-4">
                    {t.title}
                  </h3>
                  <p className="text-base text-ink-500 leading-relaxed">{t.caption}</p>
                </div>

                {/* Image */}
                <div className="lg:col-span-8">
                  <div className="rounded-2xl overflow-hidden border border-ink-200 shadow-card bg-white">
                    <Image
                      src={t.src}
                      alt={t.alt}
                      width={t.width}
                      height={t.height}
                      className="w-full h-auto"
                      sizes="(max-width: 1024px) 100vw, 720px"
                      priority={i === 0}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

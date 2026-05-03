export default function SocialProofBar() {
  const items = [
    { label: "47 languages", desc: "from English to Burmese" },
    { label: "6 AI engines", desc: "DeepL, Google, Azure, Claude, Gemini, OpenAI" },
    { label: "4 file formats", desc: "PPTX · PDF · DOCX · XLSX" },
    { label: "BYOK", desc: "your keys, your data" },
    { label: "Local-first", desc: "no cloud upload" },
  ];

  return (
    <section className="py-10 border-y border-ink-100 bg-white">
      <div className="container-narrow">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-ink-400 mb-6">
          Built for serious workflows
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-xl md:text-2xl font-bold text-ink-900 mb-1">{item.label}</div>
              <div className="text-xs text-ink-400 leading-tight">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

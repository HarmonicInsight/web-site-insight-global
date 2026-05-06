type Cell = { value: boolean | string; note?: string };

const rows: { feature: string; insight: Cell; deepl: Cell; chatgpt: Cell; copilot: Cell }[] = [
  // Where we lead
  {
    feature: "Office layout preserved (PPTX/DOCX/XLSX)",
    insight: { value: true },
    deepl: { value: false, note: "Often broken" },
    chatgpt: { value: false, note: "Text only" },
    copilot: { value: true, note: "Within MS only" },
  },
  {
    feature: "Multi-engine, switchable per row",
    insight: { value: "6 engines", note: "Claude/DeepL/Google/Azure/Gemini/OpenAI" },
    deepl: { value: false, note: "DeepL only" },
    chatgpt: { value: false, note: "OpenAI only" },
    copilot: { value: false, note: "Microsoft only" },
  },
  {
    feature: "Easy-language rewrite (CEFR/JLPT/HSK)",
    insight: { value: true },
    deepl: { value: false },
    chatgpt: { value: "Manual prompting" },
    copilot: { value: false },
  },
  {
    feature: "Summarize with layout intact",
    insight: { value: true },
    deepl: { value: false },
    chatgpt: { value: false, note: "Text only" },
    copilot: { value: "Within MS only" },
  },
  {
    feature: "Glossary + Translation Memory (TMX)",
    insight: { value: true, note: "TMX, DeepL Glossary sync" },
    deepl: { value: "Glossary only" },
    chatgpt: { value: false },
    copilot: { value: false },
  },
  {
    feature: "Local processing (file never uploaded)",
    insight: { value: true },
    deepl: { value: false },
    chatgpt: { value: false },
    copilot: { value: false },
  },
  {
    feature: "BYOK (use your own AI keys)",
    insight: { value: true },
    deepl: { value: false },
    chatgpt: { value: false },
    copilot: { value: false },
  },
  // Where competitors lead — be honest
  {
    feature: "Number of languages",
    insight: { value: "47" },
    deepl: { value: "33" },
    chatgpt: { value: "100+", note: "Lead" },
    copilot: { value: "100+", note: "Lead" },
  },
  {
    feature: "Raw translation quality (linguistic only)",
    insight: { value: "On par", note: "Uses DeepL etc." },
    deepl: { value: "Excellent", note: "Industry lead" },
    chatgpt: { value: "Very good" },
    copilot: { value: "Good" },
  },
  {
    feature: "Conversational AI / chat",
    insight: { value: false, note: "Not our focus" },
    deepl: { value: false },
    chatgpt: { value: true, note: "Lead" },
    copilot: { value: true },
  },
  {
    feature: "Native Office ribbon integration",
    insight: { value: false },
    deepl: { value: "Add-in" },
    chatgpt: { value: false },
    copilot: { value: true, note: "Lead" },
  },
  {
    feature: "Free tier available",
    insight: { value: "30-day trial" },
    deepl: { value: true, note: "500K chars/mo" },
    chatgpt: { value: "Limited GPT-4" },
    copilot: { value: false },
  },
  // Pricing — last
  {
    feature: "Annual price",
    insight: { value: "$199 / year", note: "Lifetime license + 1y updates" },
    deepl: { value: "$108 / year", note: "Subscription" },
    chatgpt: { value: "$240 / year", note: "Plus plan" },
    copilot: { value: "$360 / year", note: "Requires MS 365" },
  },
];

function CellContent({ cell }: { cell: Cell }) {
  if (typeof cell.value === "boolean") {
    return cell.value ? (
      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100">
        <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    ) : (
      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-ink-100">
        <svg className="w-4 h-4 text-ink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    );
  }
  return (
    <div className="text-center">
      <div className="text-sm font-semibold text-ink-800">{cell.value}</div>
      {cell.note && <div className="text-[10px] text-ink-400 mt-0.5">{cell.note}</div>}
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-20 md:py-28 bg-ink-50/40">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">vs Alternatives</p>
          <h2 className="text-3xl md:text-5xl font-bold text-ink-900 leading-tight tracking-tight mb-5">
            One tool replaces{" "}
            <span className="text-gradient-gold">three subscriptions.</span>
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            Honest comparison — we mark the rows where{" "}
            <strong className="text-ink-800">competitors lead</strong> too. We don't claim to be best at everything; we claim to be the only one that does <em>all of it</em> on the same Office file, with your layout intact.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl bg-white border border-ink-100 shadow-soft">
          <table className="w-full min-w-[720px]">
            <thead>
              <tr className="border-b border-ink-100">
                <th className="text-left text-xs font-bold uppercase tracking-widest text-ink-400 px-6 py-5 w-2/5">Feature</th>
                <th className="px-4 py-5 bg-gradient-to-b from-gold-50 to-white border-x border-gold-200">
                  <div className="text-xs font-bold uppercase tracking-widest text-gold-600 mb-1">HARMONIC insight</div>
                  <div className="text-[10px] text-ink-400 font-normal normal-case">Insight Doc Translator</div>
                </th>
                <th className="px-4 py-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-ink-400">DeepL Pro</div>
                </th>
                <th className="px-4 py-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-ink-400">ChatGPT Plus</div>
                </th>
                <th className="px-4 py-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-ink-400">MS Copilot</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-ink-50/30" : "bg-white"}>
                  <td className="text-sm font-medium text-ink-700 px-6 py-4">{row.feature}</td>
                  <td className="px-4 py-4 text-center bg-gold-50/60 border-x border-gold-100">
                    <CellContent cell={row.insight} />
                  </td>
                  <td className="px-4 py-4 text-center"><CellContent cell={row.deepl} /></td>
                  <td className="px-4 py-4 text-center"><CellContent cell={row.chatgpt} /></td>
                  <td className="px-4 py-4 text-center"><CellContent cell={row.copilot} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-ink-400 text-center mt-6 max-w-2xl mx-auto">
          Pricing reflects published rates as of 2026. DeepL/ChatGPT/Microsoft are trademarks of their respective companies. We respect the work they do — we just think one app for one file is a better workflow.
        </p>
      </div>
    </section>
  );
}

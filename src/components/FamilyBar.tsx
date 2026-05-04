export default function FamilyBar() {
  return (
    <div className="bg-ink-900 text-white text-xs">
      <div className="container-narrow flex items-center justify-between py-2 gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-gold-400 font-semibold tracking-wide">HARMONIC insight</span>
          <span className="text-ink-500 hidden sm:inline">|</span>
          <span className="text-ink-300 hidden sm:inline">Office productivity, the AI way</span>
        </div>
        <nav className="flex items-center gap-1 overflow-x-auto whitespace-nowrap">
          <a
            href="https://insightoffice.io"
            className="px-2 py-0.5 text-white border-b-2 border-gold-400"
            aria-current="page"
          >
            Global (EN)
          </a>
          <span className="text-ink-600">·</span>
          <a
            href="https://www.insight-office.com/ja"
            className="px-2 py-0.5 text-ink-300 hover:text-white transition-colors"
          >
            日本 (JP)
          </a>
          <span className="text-ink-600">·</span>
          <a
            href="https://h-insight.jp"
            className="px-2 py-0.5 text-ink-300 hover:text-white transition-colors"
          >
            Corporate
          </a>
        </nav>
      </div>
    </div>
  );
}

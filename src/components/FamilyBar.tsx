/**
 * SOURCE: harmonic-family-bar v1 (2026-05-14)
 * 4 サイト共通の極細ダークバー（ブランドファミリースイッチャー）。
 * insightoffice.io は海外向け製品サイト。current="global" 固定。
 */
export default function FamilyBar() {
  return (
    <div className="bg-[#0f0f1a] text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 py-1.5 flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-amber-400 font-semibold tracking-wide whitespace-nowrap">
            HARMONIC insight
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="text-gray-300 hidden sm:inline truncate">
            Office productivity, the AI way
          </span>
        </div>
        <nav aria-label="Site family" className="flex items-center gap-0.5 overflow-x-auto whitespace-nowrap">
          <span className="flex items-center">
            <span
              className="px-2 py-0.5 text-white font-medium border-b-2 border-amber-400"
              aria-current="page"
            >
              Global
            </span>
          </span>
          <span className="flex items-center">
            <span className="text-gray-600 px-1">·</span>
            <a
              href="https://www.insight-office.com/en"
              className="px-2 py-0.5 text-gray-300 hover:text-white transition-colors"
            >
              Japan market
            </a>
          </span>
          <span className="flex items-center">
            <span className="text-gray-600 px-1">·</span>
            <a
              href="https://h-insight.jp"
              className="px-2 py-0.5 text-gray-300 hover:text-white transition-colors"
            >
              Corporate
            </a>
          </span>
        </nav>
      </div>
    </div>
  );
}

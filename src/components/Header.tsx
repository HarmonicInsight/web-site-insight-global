import Link from "next/link";
import FamilyBar from "./FamilyBar";

/**
 * Header (insightoffice.io / global, 統一版 2026-05-14):
 *  - FamilyBar (極細ダーク) + Main (ライト) の 2 段構造
 *  - 4 サイト共通の visual tokens を使用
 *    - Hi モノグラム SVG（4 サイト同一）
 *    - ロゴ文字「HARMONIC insight」（insight 部分ゴールド）
 *    - ゴールド primary CTA / アウトライン secondary
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <FamilyBar />
      <div className="backdrop-blur-md bg-white/95 border-b border-ink-100">
        <div className="container-narrow flex items-center justify-between h-14 gap-6">
          {/* Logo (unified Hi monogram) */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="flex-shrink-0">
              <defs>
                <linearGradient id="brand-grad-header" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#d8bf7a" />
                  <stop offset="1" stopColor="#a88836" />
                </linearGradient>
              </defs>
              <rect width="28" height="28" rx="7" fill="url(#brand-grad-header)" />
              <path d="M9 8.5v11M19 8.5v11M9 14h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <span className="text-base font-bold text-ink-800 tracking-tight whitespace-nowrap">
              HARMONIC <span className="text-amber-600 font-normal">insight</span>
            </span>
          </Link>

          {/* Nav (4 fixed items) */}
          <nav className="hidden md:flex items-center gap-1 mr-auto text-sm">
            <a href="#products" className="px-3 py-2 text-ink-600 hover:text-ink-900 transition-colors">Products</a>
            <a href="#comparison" className="px-3 py-2 text-ink-600 hover:text-ink-900 transition-colors">vs Alternatives</a>
            <a href="#pricing" className="px-3 py-2 text-ink-600 hover:text-ink-900 transition-colors">Pricing</a>
            <Link href="/releases" className="px-3 py-2 text-ink-600 hover:text-ink-900 transition-colors">Releases</Link>
          </nav>

          {/* CTAs (unified style: outlined Trial + gold primary) */}
          <div className="flex items-center gap-2">
            <a
              href="https://license.h-insight.jp/trial?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 text-sm font-semibold text-ink-800 border border-ink-200 hover:border-ink-400 rounded-lg transition-colors"
            >
              Free trial
            </a>
            <a
              href="https://license.h-insight.jp/download?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold shadow-sm transition-colors"
            >
              Download
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-ink-100">
      <div className="container-narrow flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-white font-bold text-sm shadow-glow-gold">
            H
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-ink-800 tracking-tight">HARMONIC insight</span>
            <span className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold">Global</span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-600">
          <a href="#products" className="hover:text-ink-900 transition-colors">Products</a>
          <a href="#features" className="hover:text-ink-900 transition-colors">Features</a>
          <a href="#comparison" className="hover:text-ink-900 transition-colors">vs Alternatives</a>
          <a href="#pricing" className="hover:text-ink-900 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-ink-900 transition-colors">FAQ</a>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="https://license.h-insight.jp/download/INST?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
          >
            Free trial
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold transition-colors"
          >
            Get started
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

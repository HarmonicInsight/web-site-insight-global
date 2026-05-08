export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-100 bg-ink-50/40">
      <div className="container-narrow py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-white font-bold text-sm">
                H
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-ink-800 tracking-tight">HARMONIC insight</span>
                <span className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold">Global</span>
              </div>
            </div>
            <p className="text-sm text-ink-500 leading-relaxed mb-4 max-w-md">
              Desktop AI for your Office files. Translate, simplify, summarize, and turn slides into narrated videos — without breaking your layout.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://www.insight-office.com/ja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-ink-200 hover:border-gold-300 hover:bg-gold-50 text-xs text-ink-600 hover:text-ink-800 transition-colors"
              >
                <span className="text-base">🇯🇵</span>
                日本語サイト
              </a>
              <a
                href="https://h-insight.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-ink-200 hover:border-gold-300 hover:bg-gold-50 text-xs text-ink-600 hover:text-ink-800 transition-colors"
              >
                <span className="text-sm">🏢</span>
                Corporate
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-ink-600">
              <li><a href="#products" className="hover:text-gold-700 transition-colors">Insight Doc Translator</a></li>
              <li><a href="#products" className="hover:text-gold-700 transition-colors">Insight Training Studio</a></li>
              <li><a href="#features" className="hover:text-gold-700 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-gold-700 transition-colors">Pricing</a></li>
              <li><a href="#comparison" className="hover:text-gold-700 transition-colors">vs Alternatives</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-ink-600">
              <li>
                <a
                  href="https://license.h-insight.jp/download/INST?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-700 transition-colors"
                >
                  Free trial
                </a>
              </li>
              <li>
                <a
                  href="https://license.h-insight.jp/my?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-700 transition-colors"
                >
                  My License
                </a>
              </li>
              <li>
                <a
                  href="/brochures/insight-doc-translator-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-700 transition-colors inline-flex items-center gap-1.5"
                >
                  INST brochure (PDF)
                  <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="/brochures/insight-training-studio-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-700 transition-colors inline-flex items-center gap-1.5"
                >
                  INMV brochure (PDF)
                  <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="/affiliates"
                  className="hover:text-gold-700 transition-colors"
                >
                  Affiliate Program
                </a>
              </li>
              <li>
                <a
                  href="https://license.h-insight.jp/contact?site=insight-global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-700 transition-colors"
                >
                  Contact / Support
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-700 transition-colors">FAQ</a>
              </li>
              <li>
                <a
                  href="https://license.h-insight.jp/policy?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-700 transition-colors"
                >
                  Privacy & Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-ink-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <div>© {year} HARMONIC insight LLC · Tokyo, Japan</div>
          <div className="flex items-center gap-4">
            <a href="mailto:contact@h-insight.jp" className="hover:text-gold-700 transition-colors">
              contact@h-insight.jp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

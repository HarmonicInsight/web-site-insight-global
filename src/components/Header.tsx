"use client";

import { useState } from "react";
import Link from "next/link";
import FamilyBar from "./FamilyBar";

/**
 * Header (insightoffice.io / global, 統一版 v2 2026-05-14):
 *  - FamilyBar (極細ダーク) + Main (ライト) の 2 段構造
 *  - 4 サイト共通の visual tokens
 *    - Hi モノグラム SVG (gold グラデ)
 *    - 「HARMONIC insight」(insight 部分 #c5a55a)
 *    - h-14 (56px) main height
 *    - Primary CTA: bg-[#c5a55a] hover:bg-[#a88836] px-4 py-2
 *  - Mobile menu (hamburger drawer) 対応
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "#products", label: "Products" },
    { href: "#comparison", label: "vs Alternatives" },
    { href: "#pricing", label: "Pricing" },
    { href: "/releases", label: "Releases" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <FamilyBar />
      <div className="backdrop-blur-md bg-white/95 border-b border-ink-100">
        <div className="container-narrow flex items-center justify-between h-14 gap-6">
          {/* Logo (unified Hi monogram) */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
              className="flex-shrink-0"
            >
              <defs>
                <linearGradient
                  id="brand-grad-header"
                  x1="0"
                  y1="0"
                  x2="28"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#d8bf7a" />
                  <stop offset="1" stopColor="#a88836" />
                </linearGradient>
              </defs>
              <rect width="28" height="28" rx="7" fill="url(#brand-grad-header)" />
              <path
                d="M9 8.5v11M19 8.5v11M9 14h10"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-base font-bold text-ink-800 tracking-tight whitespace-nowrap">
              HARMONIC <span className="text-[#c5a55a] font-normal">insight</span>
            </span>
          </Link>

          {/* Desktop Nav (4 fixed items) */}
          <nav className="hidden md:flex items-center gap-1 mr-auto text-sm">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-ink-600 hover:text-ink-900 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-ink-600 hover:text-ink-900 transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Right side: outlined Trial + gold primary Download */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://license.h-insight.jp/trial?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3.5 py-1.5 text-sm font-semibold text-ink-800 border border-ink-200 hover:border-ink-400 rounded-lg transition-colors"
            >
              Free trial
            </a>
            <a
              href="https://license.h-insight.jp/download?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#c5a55a] hover:bg-[#a88836] text-white text-sm font-bold shadow-sm transition-colors"
            >
              Download
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            className="md:hidden p-2 text-ink-700 border border-ink-200 rounded-lg"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-ink-100 px-4 py-3 bg-white">
            <a
              href="https://license.h-insight.jp/download?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mb-2 px-4 py-3 rounded-lg bg-[#c5a55a] hover:bg-[#a88836] text-white text-sm font-bold text-center"
              onClick={() => setMobileOpen(false)}
            >
              Download
            </a>
            <a
              href="https://license.h-insight.jp/trial?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mb-3 px-4 py-3 rounded-lg border border-ink-200 text-ink-800 text-sm font-semibold text-center"
              onClick={() => setMobileOpen(false)}
            >
              Free trial
            </a>
            <div className="border-t border-ink-100 pt-2">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm text-ink-700 border-b border-ink-50 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm text-ink-700 border-b border-ink-50 last:border-b-0"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getCheckoutUrl, getTrialUrl, type ProductCode } from "@/data/products";

type Props = {
  code: ProductCode;
  eyebrow: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  videoSrc: string;        // e.g. "/video/inmv-product-demo.mp4"
  videoPoster?: string;    // e.g. "/video/inmv-product-demo-poster.jpg"
  ariaLabel: string;
  accentGradient: string;  // e.g. "from-violet-400 via-purple-500 to-indigo-600"
  primaryCta: string;
  trialCta?: string;
  brochureHref?: string;
  reverse?: boolean;       // mirror layout (video right vs left)
  latestVersion?: { version: string; releaseDate: string };
};

/**
 * Single-product showcase block — used twice on the home page (INMV + INST).
 * Each block has its own dedicated demo video, so LS / Stripe / reviewers
 * can verify each product independently without watching a merged montage.
 */
export default function ProductShowcase({
  code,
  eyebrow,
  name,
  tagline,
  description,
  bullets,
  videoSrc,
  videoPoster,
  ariaLabel,
  accentGradient,
  primaryCta,
  trialCta = "30-day free trial",
  brochureHref,
  reverse,
  latestVersion,
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function unmute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    if (v.paused) v.play().catch(() => {});
    setMuted(false);
  }

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onVolume = () => setMuted(v.muted);
    v.addEventListener("volumechange", onVolume);
    return () => v.removeEventListener("volumechange", onVolume);
  }, []);

  const checkoutPersUrl = getCheckoutUrl(code, "PERS");
  const trialUrl = getTrialUrl(code);

  return (
    <section
      id={`product-${code.toLowerCase()}`}
      className="py-20 md:py-28 bg-white scroll-mt-24"
    >
      <div className="container-narrow">
        {/* Section divider chip */}
        <div className="text-center mb-12">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${accentGradient} text-white text-[11px] font-bold uppercase tracking-[0.18em] shadow-md`}>
            <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
            Product {code === "INMV" ? "1 of 2" : "2 of 2"} · {eyebrow}
          </span>
        </div>

        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          {/* Left: text */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-ink-900 leading-tight tracking-tight mb-4">
              {name}
            </h2>
            <p className="text-lg text-ink-600 leading-relaxed mb-6">{tagline}</p>

            {latestVersion && (
              <Link
                href="/releases"
                className="inline-flex items-center gap-2 text-xs font-semibold text-ink-500 hover:text-gold-700 mb-6 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Latest release · v{latestVersion.version}{" "}
                <span className="text-ink-400">({latestVersion.releaseDate})</span>
                <span aria-hidden="true">→</span>
              </Link>
            )}

            <p className="text-sm text-ink-600 leading-relaxed mb-7">{description}</p>

            <ul className="space-y-3 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-ink-700">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={checkoutPersUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold transition-colors"
              >
                {primaryCta}
              </a>
              <a
                href={trialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-ink-200 hover:border-gold-400 hover:bg-gold-50/50 text-ink-700 text-sm font-semibold transition-all"
              >
                {trialCta}
              </a>
            </div>

            {brochureHref && (
              <div className="mt-4">
                <a
                  href={brochureHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-ink-400 hover:text-gold-700 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m-6-8h6m4 12H5a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v9a2 2 0 01-2 2z" />
                  </svg>
                  Download one-page brochure (PDF)
                </a>
              </div>
            )}
          </div>

          {/* Right: dedicated demo video */}
          <div className="relative">
            <div className={`absolute -inset-2 bg-gradient-to-br ${accentGradient} opacity-20 rounded-3xl blur-2xl`} />
            <div className="relative rounded-2xl overflow-hidden border border-ink-200 shadow-card bg-ink-900">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                poster={videoPoster}
                className="w-full h-auto block"
                aria-label={ariaLabel}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support video playback.
              </video>
              {muted && (
                <button
                  type="button"
                  onClick={unmute}
                  aria-label="Turn sound on"
                  className="absolute top-4 right-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-ink-900/80 hover:bg-ink-900 text-white text-xs font-semibold backdrop-blur-sm border border-white/10 shadow-soft transition-colors"
                >
                  <svg className="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v4a1 1 0 001 1h3l5 4V5L7 9H4a1 1 0 00-1 1z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a5 5 0 010 8M19 5a9 9 0 010 14" />
                  </svg>
                  Tap for sound
                </button>
              )}
            </div>
            <p className="mt-3 text-center text-xs text-ink-500">
              {name} — dedicated product demo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

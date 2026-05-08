"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function unmute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    if (v.paused) v.play().catch(() => {});
    setMuted(false);
  }

  // Keep React state in sync if the user toggles via the native controls.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onVolume = () => setMuted(v.muted);
    v.addEventListener("volumechange", onVolume);
    return () => v.removeEventListener("volumechange", onVolume);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-ink-200 shadow-card bg-ink-900">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="metadata"
        poster="/video/insight-90s-poster.jpg"
        className="w-full h-auto block"
        aria-label="HARMONIC insight 90-second product overview"
      >
        <source src="/video/insight-90s-720p.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/video/insight-90s-1080p.mp4" type="video/mp4" />
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10v4a1 1 0 001 1h3l5 4V5L7 9H4a1 1 0 00-1 1z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 8a5 5 0 010 8M19 5a9 9 0 010 14"
            />
          </svg>
          Tap for sound
        </button>
      )}
    </div>
  );
}

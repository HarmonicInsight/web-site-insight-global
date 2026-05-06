"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "insightoffice.io" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Subscribe failed (${res.status})`);
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section
      id="newsletter"
      className="py-20 md:py-24 bg-gradient-to-br from-gold-50 via-white to-gold-50/40 border-y border-gold-100"
    >
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
            Stay in the loop
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink-900 leading-tight tracking-tight mb-4">
            We&apos;ll email you when{" "}
            <span className="text-gradient-gold">macOS lands.</span>
          </h2>
          <p className="text-base text-ink-500 leading-relaxed mb-8">
            One email per release. Product updates, new languages, new file
            formats. That&apos;s it. Unsubscribe anytime.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="you@company.com"
              disabled={status === "submitting" || status === "success"}
              aria-label="Email address"
              className="flex-1 px-4 py-3 rounded-lg border border-ink-200 bg-white text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="px-6 py-3 rounded-lg bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
            >
              {status === "submitting" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Subscribing
                </>
              ) : status === "success" ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {status === "success" && (
            <p className="text-sm text-emerald-700 mt-4 inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              You&apos;re on the list. We&apos;ll email you at major releases — nothing else.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-rose-600 mt-4">{errorMsg}</p>
          )}

          <p className="text-xs text-ink-400 mt-6">
            We email you about releases. That&apos;s all. Never shared, never sold. See our{" "}
            <a
              href="https://license.h-insight.jp/policy?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink-600"
            >
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

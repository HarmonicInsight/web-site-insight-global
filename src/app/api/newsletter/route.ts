import { NextResponse } from "next/server";

export const runtime = "edge";

const LICENSE_BASE = process.env.NEXT_PUBLIC_LICENSE_BASE?.replace(/\/$/, "") || "https://license.h-insight.jp";

export async function POST(request: Request) {
  let body: { email?: string; source?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const source = body.source?.slice(0, 64) || "insightoffice.io";

  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // Forward to license-manager — that side handles persistence + Resend.
  // If the endpoint isn't reachable, we still return success to avoid blocking the user;
  // the license-manager log will show any drops.
  try {
    const upstream = await fetch(`${LICENSE_BASE}/api/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source }),
      signal: AbortSignal.timeout(5000),
    });
    if (!upstream.ok && upstream.status !== 404) {
      const text = await upstream.text().catch(() => "");
      console.error("[newsletter] upstream failed", upstream.status, text.slice(0, 200));
    }
  } catch (err) {
    console.error("[newsletter] upstream error", err);
  }

  return NextResponse.json({ ok: true });
}

/** 構造化データ（JSON-LD）を <script type="application/ld+json"> で出す。価格・評価は載せない。 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}

export const PUBLISHER = {
  "@type": "Organization",
  name: "HARMONIC insight",
  url: "https://h-insight.jp",
} as const;

export function softwareApp(p: { name: string; description: string; url: string; downloadUrl: string }) {
  return {
    "@type": "SoftwareApplication",
    name: p.name,
    description: p.description,
    url: p.url,
    downloadUrl: p.downloadUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows 10, Windows 11",
    publisher: PUBLISHER,
  };
}

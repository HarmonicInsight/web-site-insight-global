import ProductShowcase from "@/components/ProductShowcase";
import { products } from "@/data/products";
import { getLatestVersion } from "@/data/releases";

/**
 * Renders both flagship products as two FULLY SEPARATED showcase blocks,
 * each with its own dedicated demo video.
 *
 * Reviewer / LS-audit rationale: making the two products visually and
 * structurally distinct (own video, own CTAs, own "Product 1 of 2 / 2 of 2"
 * label) removes any ambiguity that this site sells a single bundle.
 */
export default function TwoProductsShowcase() {
  const inmv = products.find((p) => p.code === "INMV");
  const inst = products.find((p) => p.code === "INST");
  if (!inmv || !inst) return null;

  const inmvLatest = getLatestVersion("INMV") ?? undefined;
  const instLatest = getLatestVersion("INST") ?? undefined;

  return (
    <>
      {/* Divider banner: makes the "two products" framing explicit */}
      <section className="bg-gradient-to-b from-white to-ink-50/30 py-12 border-y border-ink-100">
        <div className="container-narrow text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">
            Two distinct products · sold and licensed independently
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-ink-900 leading-tight tracking-tight">
            Pick one, or use both.{" "}
            <span className="text-gradient-gold">Each ships standalone.</span>
          </h2>
          <p className="mt-4 text-base text-ink-500 max-w-2xl mx-auto">
            Insight Training Studio and Insight Doc Translator are two separate
            desktop apps with their own installers, licenses, and pricing. Each
            block below includes its own product demo video.
          </p>
        </div>
      </section>

      <ProductShowcase
        code="INMV"
        eyebrow="Insight Training Studio"
        name={inmv.name}
        tagline={inmv.tagline}
        description={inmv.description}
        bullets={inmv.features.slice(0, 5).map((f) => `${f.title} — ${f.desc}`)}
        videoSrc="/video/inmv-product-demo.mp4"
        videoPoster="/screenshots/inmv-editor.png"
        ariaLabel="Insight Training Studio product demo"
        accentGradient={inmv.iconBg}
        primaryCta={`Buy Personal — ${inmv.prices.personal}/year`}
        businessCta={`Buy Business — ${inmv.prices.business}/seat/year`}
        brochureHref="/brochures/insight-training-studio-brochure.pdf"
        latestVersion={inmvLatest}
        reverse={false}
      />

      <ProductShowcase
        code="INST"
        eyebrow="Insight Doc Translator"
        name={inst.name}
        tagline={inst.tagline}
        description={inst.description}
        bullets={inst.features.slice(0, 5).map((f) => `${f.title} — ${f.desc}`)}
        videoSrc="/video/inst-product-demo.mp4"
        videoPoster="/screenshots/inst-top.png"
        ariaLabel="Insight Doc Translator product demo"
        accentGradient={inst.iconBg}
        primaryCta={`Buy Personal — ${inst.prices.personal}/year`}
        businessCta={`Buy Business — ${inst.prices.business}/seat/year`}
        brochureHref="/brochures/insight-doc-translator-brochure.pdf"
        latestVersion={instLatest}
        reverse={true}
      />
    </>
  );
}

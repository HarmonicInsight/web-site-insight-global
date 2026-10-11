import type { MetadataRoute } from "next";

// Vercel は Next 16 のビルド完了時点で成果物を回収するため、postbuild で書いた sitemap は載らない。
// sitemap は Next の標準機能で作る。ページを足したら PAGES にも足す（api/ と IndexNow のキーファイルは載せない）。
export const dynamic = "force-static";

const SITE = "https://insightoffice.io";
const PAGES = ["", "/office", "/releases", "/affiliates"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({ url: `${SITE}${p}` }));
}

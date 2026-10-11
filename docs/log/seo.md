# SEO（技術面）

- 2026-10-12 sitemap.ts/robots.ts（force-static）・各ページ canonical/OG/Twitter・SoftwareApplication JSON-LD（/ と /office、価格・評価なし）・Search Console 確認メタ・IndexNow キー（public/257f27fa3963bc61097a8ca75312324f.txt）。keywords から競合名（DeepL/ChatGPT）を外した。hreflang は 1:1 の日英ページが無いので未設定。
- 2026-10-12 注意: main への push は Vercel で Preview にしかならない（Production は手動）。本番反映は `vercel promote <preview URL> --yes` か `vercel --prod`。
- 2026-10-12 brand-rules §3: Doc Translator の競合フレーミング（Problem の DeepL/ChatGPT/Acrobat、比較表の DeepL Pro/ChatGPT Plus/MS Copilot 列・競合価格行、FAQ「DeepLとの違い」、products.ts 説明文、affiliates の訴求文）をカテゴリ名に置換。対応エンジン一覧（DeepL/Claude/Gemini 等）は §2 の仕様として残置。affiliates の比較ブリーフ PDF（vs DeepL/ChatGPT/Synthesia）と Testimonials（実名風の声）は未対応＝Erik 判断待ち。
- 2026-10-12 brand-rules §3（Erik 決定）: 裏付けのない利用者の声を撤去。トップの TestimonialsSection（Marcus T./Yuki S./Priya K. の3件・"What early users are saying"）を部品ごと削除、/affiliates のバナー Testimonial 訴求（同じ引用入り PNG 8枚）も削除＝48枚・4訴求に。/affiliates の比較ブリーフ（Comparison）は Erik 承認の例外として残置。

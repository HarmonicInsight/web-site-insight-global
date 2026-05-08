# HARMONIC insight — Brand Stack Architecture

最終更新: 2026-05-05

---

## 1. 全体俯瞰

```
                                ┌──────────────────────────┐
                                │   HARMONIC insight LLC   │
                                │      (Tokyo, Japan)      │
                                └──────────┬───────────────┘
                                           │
              ┌────────────────────────────┼────────────────────────────┐
              │                            │                            │
       ┌──────▼──────┐              ┌──────▼──────┐              ┌──────▼──────┐
       │   Global    │              │     JP      │              │  Corporate  │
       │   product   │              │   product   │              │     hub     │
       └──────┬──────┘              └──────┬──────┘              └──────┬──────┘
              │                            │                            │
   insightoffice.io           insight-office.com / -.com/ja       h-insight.jp
   (English only)             (ja / en / zh)                      (ja / en)
              │                            │                            │
              │ checkout                   │ checkout (ja)              │
              ▼                            ▼                            │
   ┌──────────────────────────┐  ┌──────────────────────────┐           │
   │ harmonic-insight-global  │  │   harmonic-insight       │           │
   │   .lemonsqueezy.com      │  │     .lemonsqueezy.com    │           │
   │  (USD: $199 / $499)      │  │  (JPY: ¥20k / ¥50k)      │           │
   └──────────┬───────────────┘  └──────────┬───────────────┘           │
              │                              │                          │
              │  webhook                     │  webhook                  │
              ▼                              ▼                          │
   /api/webhook/lemonsqueezy/global   /api/webhook/lemonsqueezy         │
              │                              │                          │
              └──────────────┬───────────────┘                          │
                             ▼                                          │
              ┌──────────────────────────┐                              │
              │ harmonic-license-manager │ ◄────────── (newsletter)─────┘
              │  license.h-insight.jp    │
              │  (Neon Postgres + Resend)│
              └──────────────────────────┘
```

---

## 2. 3 つのサイト

### 2.1 `insightoffice.io` — Global product LP

| 項目 | 値 |
|---|---|
| URL | `https://insightoffice.io` |
| Repo | `HarmonicInsight/web-site-insight-global` |
| ローカル | `C:/dev/web-site-insight-global` |
| Vercel project | `erik-arthurs-projects/web-site-insight-global` |
| 言語 | 英語のみ |
| 通貨 | USD ($199 / $499) |
| ターゲット | 北米・欧州・アジア（日本を除く）の SaaS 慣習に合わせた個人・SMB |
| 訴求軸 | "Stop juggling 4 apps for one Office file" |
| 取扱製品 | INST · INMV のみ（4 SKU） |

**LP セクション構成（15 セクション）:**

```
[FamilyBar] ← 3 サイト共通の統一バー
[Header]    ← Inter フォント + ゴールドアクセント
HeroSection           "Stop juggling 4 apps for one Office file"
SocialProofBar
TrustBadgesSection    Local processing / BYOK / Made in Japan / 30-day refund / MoR / Buy once
ProblemSection
HowItWorks            Drop → Choose → Done の 3 ステップ
ProductsSection
FeaturesGrid
UseCasesSection       6 業種別カード（SaaS / Sales / Legal / Academic / HR / Finance）
ComparisonSection     vs DeepL / ChatGPT / Copilot（フェアな両側評価）
TestimonialsSection   3 件（早期アクセスユーザーの composite quote）
StorySection          ダーク背景 "Built by translators, for translators" + 4 principles
PricingSection        $199 / $499
NewsletterSection     "Get notified when macOS arrives"
FAQSection
CTASection
[Footer]
```

### 2.2 `insight-office.com` — JP product site

| 項目 | 値 |
|---|---|
| URL | `https://www.insight-office.com` |
| Repo | `HarmonicInsight/web-site-insight-office` |
| ローカル | `C:/dev/web-site-insight-office` |
| 言語 | ja / en / zh（マーケ層は ja/en に縮退方針） |
| 通貨 | `ja` → JPY (¥20,000 / ¥50,000)、`en/zh` → USD ($199 / $499) |
| 取扱製品 | INST · INMV · IXLS · IPPT · IDOC · IOSD（JP store） |
| 役割 | コーポレート製品サイト、`/ja/downloads` は全製品集約窓口 |

`en/zh` ロケールでは Global LS ストアの checkout に飛ぶ（locale-based redirect）。

### 2.3 `h-insight.jp` — Corporate hub

| 項目 | 値 |
|---|---|
| URL | `https://h-insight.jp` |
| Repo | `HarmonicInsight/web-site-corporate` |
| ローカル | `C:/dev/web-site-corporate` |
| 言語 | ja / en |
| 役割 | 法人ブランドハブ、業界別ストーリー、会社概要 |
| ナビ | Group sites バー（建設DX / Insight Series / Apps Lab / Dashboard）+ FamilyBar |

製品販売は行わず、製品は別サイトに送客する役割。

---

## 3. クロスリンク（FamilyBar）

3 サイトすべての最上部に **同一構造の FamilyBar** を配置：

```
[HARMONIC insight | tagline]    Global (EN) · 日本 (JP) · Corporate
```

各サイトで現在地のリンクのみ `border-b-2 border-amber-400` のアクティブ表現。  
クリックで他のファミリーサイトへ遷移。**ブランドが連邦であることを視覚保証**する。

---

## 4. License Manager（バックエンド・ハブ）

| 項目 | 値 |
|---|---|
| URL | `https://license.h-insight.jp` |
| Repo | `HarmonicInsight/harmonic-license-manager` |
| ローカル | `C:/dev/harmonic-license-manager` |
| Vercel project | `erik-arthurs-projects/harmonic-license-manager` |
| Stack | Next.js (App Router) + Neon Postgres + Resend |
| 役割 | ライセンス発行・管理、購入後 DL ゲート、Newsletter、AI コンシェルジュ |

### 4.1 LemonSqueezy webhook（2 ストア対応）

| Store | URL | Secret env | 用途 |
|---|---|---|---|
| JP | `/api/webhook/lemonsqueezy` | `LEMONSQUEEZY_WEBHOOK_SECRET` | ¥課金・JP 市場 |
| Global | `/api/webhook/lemonsqueezy/global` | `LEMONSQUEEZY_WEBHOOK_SECRET_GLOBAL` | USD 課金・海外市場 |

両方とも `lib/lemonsqueezy-webhook.ts` の共通ロジックを呼び、由来ストアを `licenses.notes` に `[ls_store:jp|global]` で記録。

### 4.2 Newsletter API

```
POST /api/newsletter
  body: { email, source }
  CORS: insightoffice.io / insight-office.com / h-insight.jp
  → Neon `newsletter_subscribers` table

GET  /newsletter/unsubscribe?email=...&lang=en|ja
  → status を 'unsubscribed' に更新
```

Global LP 側の `/api/newsletter` route は license-manager にフォワードするだけのプロキシ。

---

## 5. 価格体系

### 5.1 マーケットごとの 2 階建て

| 階層 | 通貨 | Personal | Business | 適用 |
|---|---|---|---|---|
| **JP tier** | JPY | ¥20,000 | ¥50,000 | `insight-office.com/ja` |
| **Global tier** | USD | $199 | $499 | `insightoffice.io` ＋ `insight-office.com/{en,zh}` |

階層差の **why**：日本国内は PPP（購買力平価）に合わせた優遇価格。Global は標準的な海外 SaaS 単価。LemonSqueezy が現地通貨に自動換算 + tax + invoicing を担当（MoR）。

### 5.2 ライセンスタイプ

- **Per-device annual subscription**（年額・自動更新）
- 全期間アップデート込み
- 30 日返金保証
- BYOK（DeepL / OpenAI / Claude / Gemini / Google / Azure）

---

## 6. リポジトリ一覧

| Repo | 役割 | デプロイ先 |
|---|---|---|
| `web-site-insight-global` | Global LP | `insightoffice.io` |
| `web-site-insight-office` | JP product site | `insight-office.com` |
| `web-site-corporate` | Corporate hub | `h-insight.jp` |
| `harmonic-license-manager` | バックエンド・ライセンス管理 | `license.h-insight.jp` |

---

## 7. デプロイ・開発フロー

### 7.1 各サイトの dev サーバー

```bash
# Global LP
cd C:/dev/web-site-insight-global
npm run dev              # http://localhost:3000

# JP site
cd C:/dev/web-site-insight-office
npm run dev

# Corporate
cd C:/dev/web-site-corporate
npm run dev

# License manager
cd C:/dev/harmonic-license-manager
npm run dev
```

### 7.2 本番デプロイ

Global LP は `git push origin main` だけでは Preview にしか飛ばない（Production Branch 設定が `main` に未指定のため）。本番反映は：

```bash
cd C:/dev/web-site-insight-global
vercel --prod --yes
```

または **Vercel Dashboard → Settings → Git → Production Branch を `main` に設定** すれば push で自動本番化。

JP / Corporate / license-manager は既に push → 自動本番化が動作。

---

## 8. 重要な環境変数

### 8.1 Global LP（`web-site-insight-global` Vercel）

```
# 任意（env 設定すれば fallback URL を上書き可能。設定しなくてもコード内 fallback で動作）
NEXT_PUBLIC_LS_GLOBAL_INST_PERS=https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/83eaa3a9-d5cc-4f92-badd-61172d3f1689
NEXT_PUBLIC_LS_GLOBAL_INST_BIZ=https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/f50fb84b-2afa-446b-82ef-64caa3a09964
NEXT_PUBLIC_LS_GLOBAL_INMV_PERS=https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/8188b251-c68e-437a-8c85-143e90038ec7
NEXT_PUBLIC_LS_GLOBAL_INMV_BIZ=https://harmonic-insight-global.lemonsqueezy.com/checkout/buy/8bd3095e-f4b0-4a67-9e4b-a2420c4d8195

NEXT_PUBLIC_LICENSE_BASE=https://license.h-insight.jp
```

### 8.2 license-manager（必須）

```
DATABASE_URL=                            # Neon
RESEND_API_KEY=                          # メール送信
LICENSE_SECRET=                          # HMAC

# 2 ストア対応の webhook secrets
LEMONSQUEEZY_WEBHOOK_SECRET=             # JP store
LEMONSQUEEZY_WEBHOOK_SECRET_GLOBAL=      # Global store ★ 要設定

# Variant ID（数値、LS Dashboard で取得）
LS_VARIANT_INST_PERS=
LS_VARIANT_INST_BIZ=
LS_VARIANT_INMV_PERS=
LS_VARIANT_INMV_BIZ=
LS_VARIANT_INST_PERS_GLOBAL=             # ★ 要設定
LS_VARIANT_INST_BIZ_GLOBAL=              # ★ 要設定
LS_VARIANT_INMV_PERS_GLOBAL=             # ★ 要設定
LS_VARIANT_INMV_BIZ_GLOBAL=              # ★ 要設定
```

詳細は `harmonic-license-manager/.env.example` を参照。

---

## 9. データフロー（購入から DL まで）

```
1. 訪問者が Global LP で「Get started」をクリック
                                                    ↓
2. LemonSqueezy Checkout に遷移（Global store）
                                                    ↓
3. クレカ決済成功 → LS から webhook 発火
                                                    ↓
4. license-manager の /api/webhook/lemonsqueezy/global
   が受信:
   - HMAC 検証
   - variant_id → product/plan マッピング
   - ライセンスキー生成（HMAC 署名済）
   - Neon `licenses` テーブルに INSERT（[ls_store:global] 注釈付）
   - Resend 経由でライセンス案内メール送信
                                                    ↓
5. 顧客がメール内のリンクからアプリをダウンロード
                                                    ↓
6. アプリ起動時、LICENSE_SECRET と同一鍵で
   キーを検証 → 有効なら起動
```

返金 / キャンセル時は `subscription_*` / `order_refunded` イベントで同 webhook が即時失効処理。

---

## 10. 残作業（2026-05-05 時点）

1. **【必須】** Global LS store webhook 設定（LS Dashboard → Settings → Webhooks）
   - URL: `https://license.h-insight.jp/api/webhook/lemonsqueezy/global`
   - 生成された secret を Vercel `LEMONSQUEEZY_WEBHOOK_SECRET_GLOBAL` に設定
2. **【必須】** Global 4 product の数値 variant ID を取得 → Vercel env に設定
3. **【推奨】** Vercel Production Branch を `main` に設定（Dashboard 経由）
4. **【推奨】** 60-90 秒のデモ動画を録画して Hero に埋め込み
5. **【推奨】** 早期顧客ロゴ収集 → SocialProofBar に実ロゴ配置
6. **【法人口座開設後】** LS Test mode → Live mode 切替

---

## 11. 関連メモリ

- `project_insightoffice_io_global.md`
- `project_lemonsqueezy_launch.md`
- `project_lemonsqueezy_activate_blocked.md`
- `project_lemonsqueezy_jct_invoice.md`
- `project_world_emblem_distributor.md`
- `project_insight_office_site.md`
- `project_license_pricing.md`
- `project_domain_consolidation.md`

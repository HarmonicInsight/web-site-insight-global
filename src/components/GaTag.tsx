"use client";
import Script from "next/script";

/**
 * GA4 タグ（2026-10-03 全公開サイトに展開）。
 *
 * 測定IDは HARMONIC insight の自社マーケ用プロパティ 544852133（G-7ECY821PPZ）で全サイト共通。
 * insight-office.com / python / license / kensetsu と同じプロパティに入れ、サイトごとの差は
 * GA4 の「ホスト名」で分ける。1つにまとめることで、サイトをまたいだ回遊を1ユーザーとして追える。
 * 顧客テナント（IDHOME 等）と創作名義（insight-novels.com）はここに入れない。
 *
 * download_click: 無料DL(license.h-insight.jp/download/{code})へ送り出したクリック。insight-office と同じ定義。
 */
export const GA_MEASUREMENT_ID = "G-7ECY821PPZ";

export default function GaTag() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
          document.addEventListener('click', function(e){
            var a = e.target && e.target.closest ? e.target.closest('a[href*="/download/"]') : null;
            if(!a) return;
            var href = a.getAttribute('href') || '';
            var code = (href.split('/download/')[1] || '').split(/[/?#]/)[0];
            gtag('event','download_click',{ link_url: href, product: code });
          }, true);
        `}
      </Script>
    </>
  );
}

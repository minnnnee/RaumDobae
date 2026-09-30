import type { Metadata, Viewport } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif",
  weight: ["500", "700", "900"],
  preload: false,
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.slogan}`,
  description:
    "광교·수원·용인 아파트, 오피스텔, 상가 도배 전문 라움도배. 무료 현장 방문 견적, 친환경 자재, 깔끔한 마감으로 보답합니다.",
  keywords: ["도배", "광교도배", "수원도배", "용인도배", "아파트도배", "실크벽지", "합지벽지", "라움도배"],
  openGraph: {
    title: `${site.name} | ${site.slogan}`,
    description: "무료 현장 방문 견적 · 친환경 자재 · 꼼꼼한 마감",
    images: ["/images/hero-card.png"],
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1733",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSerif.variable} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

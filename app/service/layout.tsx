import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Service",
  description:
    "Lat91のAIエージェント導入サービス。セールス・マーケティング・バックオフィスを一気通貫で自動化。リサーチからCRM更新、自律改善まで実行できる仕組みを提供します。",
  alternates: { canonical: "https://www.lat91.co.jp/service" },
  openGraph: {
    title: "Service | Lat91",
    description:
      "Lat91のAIエージェント導入サービス。セールス・マーケティング・バックオフィスを一気通貫で自動化します。",
    url: "https://www.lat91.co.jp/service",
    type: "website",
  },
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}

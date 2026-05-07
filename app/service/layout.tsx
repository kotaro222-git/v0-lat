import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "AIエージェント導入・DXソリューション",
  description:
    "株式会社Lat91のAIエージェント導入サービス。セールス、マーケティング、カスタマーサポート、バックオフィスを一気通貫で自動化し、業務改善と事業成長を支援します。",
  path: "/service",
})

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "お問い合わせ・無料相談",
  description:
    "株式会社Lat91へのお問い合わせページです。AIエージェント導入、DX推進、業務自動化、サービス資料請求、提携・取材のご相談はこちらからご連絡ください。",
  path: "/contact",
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

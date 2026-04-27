import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Lat91へのお問い合わせ。AIエージェント導入・DX推進のご相談、サービス資料請求、提携・取材の依頼はこちらから。",
  alternates: { canonical: "https://www.lat91.co.jp/contact" },
  openGraph: {
    title: "Contact | Lat91",
    description: "Lat91へのお問い合わせ。AIエージェント導入のご相談はこちらから。",
    url: "https://www.lat91.co.jp/contact",
    type: "website",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd, createPageMetadata, webPageJsonLd } from "@/lib/seo"

const description =
  "株式会社Lat91のプライバシーポリシー。お問い合わせ等で取得する個人情報の利用目的、第三者提供、安全管理、開示・訂正・削除等についてご案内します。"

export const metadata: Metadata = createPageMetadata({
  title: "プライバシーポリシー",
  description,
  path: "/privacy",
})

const sections = [
  {
    title: "1. 個人情報の利用目的",
    body: "株式会社Lat91は、お問い合わせへの回答、サービスに関するご案内、商談・契約・業務上の連絡、サービス品質向上のために、必要な範囲で個人情報を利用します。",
  },
  {
    title: "2. 個人情報の第三者提供",
    body: "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。",
  },
  {
    title: "3. 個人情報の管理",
    body: "取得した個人情報について、不正アクセス、紛失、改ざん、漏えい等を防止するため、適切な安全管理措置を講じます。",
  },
  {
    title: "4. 外部サービスの利用",
    body: "お問い合わせフォームの送信処理やサイト分析等に外部サービスを利用する場合があります。その場合も、利用目的の達成に必要な範囲で適切に取り扱います。",
  },
  {
    title: "5. 開示・訂正・削除等の請求",
    body: "保有する個人情報について、開示、訂正、利用停止、削除等のご希望がある場合は、お問い合わせフォームよりご連絡ください。本人確認のうえ、法令に従って対応します。",
  },
  {
    title: "6. 改定",
    body: "本ポリシーの内容は、法令の変更やサービス内容の変更に応じて改定することがあります。改定後の内容は本ページに掲載した時点で効力を生じます。",
  },
]

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header variant="light" />
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/privacy",
            name: "プライバシーポリシー",
            description,
          }),
          breadcrumbJsonLd([
            { name: "トップ", path: "/" },
            { name: "プライバシーポリシー", path: "/privacy" },
          ]),
        ]}
      />

      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
              Privacy Policy
            </span>
          </span>
          <h1 className="text-[clamp(36px,6vw,64px)] font-bold text-neutral-900 leading-[1.1] tracking-tight">
            プライバシーポリシー
          </h1>
          <p className="mt-6 text-sm text-neutral-400">制定日: 2026年5月8日</p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-3xl mx-auto space-y-10 text-neutral-600 leading-[1.9]">
          <p>
            株式会社Lat91（以下「当社」といいます）は、当社が取得する個人情報を以下の方針に基づき適切に取り扱います。
          </p>

          {sections.map((section) => (
            <section key={section.title} className="border-t border-neutral-200 pt-8">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <section className="border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">7. お問い合わせ窓口</h2>
            <p>
              本ポリシーに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}

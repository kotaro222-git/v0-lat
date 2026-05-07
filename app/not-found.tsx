import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen">
      <Header variant="light" />

      <section className="min-h-[70vh] px-6 md:px-12 pt-36 pb-24 flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6">
            404 Not Found
          </p>
          <h1 className="text-[clamp(36px,6vw,64px)] font-bold text-neutral-900 leading-[1.1] tracking-tight">
            ページが見つかりません
          </h1>
          <p className="mt-6 text-base md:text-lg text-neutral-500 leading-relaxed">
            URLが変更されたか、ページが削除された可能性があります。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
            >
              トップへ戻る
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-200 text-neutral-900 rounded-full font-medium hover:bg-neutral-50 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

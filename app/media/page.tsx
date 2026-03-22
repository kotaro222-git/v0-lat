import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "Media | Lat91",
  description: "Lat91のメディア・ブログ記事一覧",
}

const categories = [
  { id: "all", label: "All" },
  { id: "case-study", label: "Case Study" },
  { id: "insight", label: "Insight" },
  { id: "column", label: "Column" },
  { id: "news", label: "News" },
]

const articles = [
  {
    id: "1",
    title: "AIエージェント導入で営業効率が3倍に - 製造業A社の事例",
    excerpt:
      "製造業A社では、AIエージェントを活用した営業支援システムを導入し、リード獲得から商談化までのプロセスを大幅に効率化。導入3ヶ月で営業効率が3倍に向上した事例をご紹介します。",
    category: "Case Study",
    date: "2026.03.15",
    readTime: "5 min",
    featured: true,
  },
  {
    id: "2",
    title: "2026年のAIトレンド：エージェント型AIが変える企業の働き方",
    excerpt:
      "2026年、AIは単なるツールから「エージェント」へと進化を遂げています。企業の働き方を根本から変えるエージェント型AIの最新トレンドと、今後の展望について解説します。",
    category: "Insight",
    date: "2026.03.10",
    readTime: "8 min",
    featured: true,
  },
  {
    id: "3",
    title: "DX推進における経営課題起点のアプローチとは",
    excerpt:
      "多くの企業がDXに失敗する理由は「技術起点」のアプローチにあります。本記事では、経営課題を起点としたDX推進の方法論と成功のポイントを解説します。",
    category: "Column",
    date: "2026.03.05",
    readTime: "6 min",
    featured: false,
  },
  {
    id: "4",
    title: "カスタマーサポートのAI自動化：導入前に知っておくべき5つのポイント",
    excerpt:
      "カスタマーサポートへのAI導入を検討している企業向けに、導入前に検討すべき5つの重要なポイントと、失敗しないための準備について解説します。",
    category: "Column",
    date: "2026.02.28",
    readTime: "7 min",
    featured: false,
  },
  {
    id: "5",
    title: "バックオフィス業務のAI化で実現した月間100時間の工数削減",
    excerpt:
      "IT企業B社では、経理・人事・総務のバックオフィス業務にAIエージェントを導入。月間100時間以上の工数削減を実現した具体的な取り組みをご紹介します。",
    category: "Case Study",
    date: "2026.02.20",
    readTime: "6 min",
    featured: false,
  },
  {
    id: "6",
    title: "Lat91、シリーズAラウンドで資金調達を完了",
    excerpt:
      "株式会社Lat.91は、シリーズAラウンドにおいて資金調達を完了したことをお知らせします。調達資金は、AIエージェント開発の加速とチーム拡大に投資します。",
    category: "News",
    date: "2026.02.15",
    readTime: "2 min",
    featured: false,
  },
]

export default function MediaPage() {
  const featuredArticles = articles.filter((a) => a.featured)
  const regularArticles = articles.filter((a) => !a.featured)

  return (
    <main className="bg-white min-h-screen">
      <Header variant="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
              Media
            </span>
          </span>
          <h1 className="text-[clamp(36px,6vw,64px)] font-bold text-neutral-900 leading-[1.1] tracking-tight">
            Insights & Updates
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-xl">
            AI時代のビジネス変革に関する知見と、Lat91の最新情報をお届けします。
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  cat.id === "all"
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 mb-8">
            Featured
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, idx) => (
              <Link key={article.id} href={`/media/${article.id}`}>
                <article className="group h-full bg-neutral-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500">
                  {/* Image Placeholder */}
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-neutral-200 to-neutral-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-8xl font-bold text-neutral-300/50">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white rounded-full text-xs font-medium text-neutral-600">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 text-white">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-xs text-neutral-400">
                        {article.date}
                      </span>
                      <span className="font-mono text-xs text-neutral-400">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 leading-relaxed group-hover:text-neutral-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-sm text-neutral-500 leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="px-6 md:px-12 pb-32 bg-neutral-50 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 mb-8">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, idx) => (
              <Link key={article.id} href={`/media/${article.id}`}>
                <article className="group h-full bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-neutral-100 to-neutral-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-5xl font-bold text-neutral-200">
                        {String(idx + 3).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-neutral-600">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="font-mono text-xs text-neutral-400">
                      {article.date}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-neutral-900 leading-relaxed group-hover:text-neutral-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

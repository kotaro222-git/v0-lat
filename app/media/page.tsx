import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

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
  {
    id: "7",
    title: "マーケティング自動化の新潮流：AIエージェントによるコンテンツ制作",
    excerpt:
      "AIエージェントを活用したコンテンツマーケティングの自動化について、最新の事例と今後のトレンドを解説します。",
    category: "Insight",
    date: "2026.02.10",
    readTime: "5 min",
    featured: false,
  },
  {
    id: "8",
    title: "セールスDXの本質：人とAIの最適な役割分担とは",
    excerpt:
      "営業活動におけるAI活用の本質は、人とAIの役割分担にあります。どの業務をAIに任せ、どの業務に人が集中すべきか、具体的な指針を提示します。",
    category: "Column",
    date: "2026.02.05",
    readTime: "7 min",
    featured: false,
  },
]

export default function MediaPage() {
  const featuredArticles = articles.filter((a) => a.featured)
  const regularArticles = articles.filter((a) => !a.featured)

  return (
    <main className="bg-[var(--background)] min-h-screen">
      <Header variant="solid" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--mid-teal)]">
            Media
          </span>
          <h1 className="mt-4 text-[clamp(32px,5vw,56px)] font-bold text-[var(--off-white)] leading-tight">
            Insights & Updates
          </h1>
          <p className="mt-6 text-[16px] text-[var(--off-white)]/60 max-w-xl">
            AI時代のビジネス変革に関する知見と、Lat91の最新情報をお届けします。
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-[5vw] pb-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-5 py-2.5 rounded-full font-mono text-[11px] tracking-wider transition-all ${
                  cat.id === "all"
                    ? "bg-[var(--off-white)] text-[var(--background)]"
                    : "bg-[var(--dark-teal)]/50 text-[var(--off-white)]/70 hover:bg-[var(--dark-teal)] hover:text-[var(--off-white)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="px-[5vw] pb-16">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--light-sage)]/60 mb-8">
            Featured
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <Link key={article.id} href={`/media/${article.id}`}>
                <article className="group h-full bg-gradient-to-br from-[var(--dark-teal)]/50 to-[var(--dark-teal)]/20 rounded-xl overflow-hidden border border-[var(--off-white)]/5 hover:border-[var(--light-sage)]/30 transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="relative aspect-[16/9] bg-[var(--dark-teal)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--mid-teal)]/30 to-[var(--dark-teal)]/60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-[13px] tracking-widest text-[var(--off-white)]/20 uppercase">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[var(--light-sage)]/10 rounded text-[10px] font-mono tracking-wider text-[var(--light-sage)]">
                        {article.category}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--off-white)]/40">
                        {article.date}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--off-white)]/40">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-[20px] font-bold text-[var(--off-white)] leading-relaxed mb-4 group-hover:text-[var(--light-sage)] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[14px] leading-[1.8] text-[var(--off-white)]/60 line-clamp-3">
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
      <section className="px-[5vw] pb-32">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--light-sage)]/60 mb-8">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Link key={article.id} href={`/media/${article.id}`}>
                <article className="group h-full bg-[var(--dark-teal)]/20 rounded-lg overflow-hidden border border-[var(--off-white)]/5 hover:border-[var(--light-sage)]/20 transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="relative aspect-[16/10] bg-[var(--dark-teal)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--mid-teal)]/20 to-[var(--dark-teal)]/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-[11px] tracking-widest text-[var(--off-white)]/15 uppercase">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[10px] tracking-wider text-[var(--light-sage)]">
                        {article.category}
                      </span>
                      <span className="font-mono text-[10px] text-[var(--off-white)]/40">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-[15px] font-bold text-[var(--off-white)] leading-relaxed group-hover:text-[var(--light-sage)] transition-colors line-clamp-2">
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

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin } from "lucide-react"

const articles: Record<
  string,
  {
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    content: string[]
  }
> = {
  "1": {
    title: "AIエージェント導入で営業効率が3倍に - 製造業A社の事例",
    excerpt:
      "製造業A社では、AIエージェントを活用した営業支援システムを導入し、リード獲得から商談化までのプロセスを大幅に効率化。",
    category: "Case Study",
    date: "2026.03.15",
    readTime: "5 min",
    content: [
      "製造業A社は、従来の営業プロセスにおいて多くの課題を抱えていました。リード獲得に時間がかかり、商談化率も低迷。営業チームは日々の業務に追われ、本質的な顧客対応に時間を割けない状況でした。",
      "そこでLat91と協力し、AIエージェントを活用した営業支援システムの導入に踏み切りました。導入にあたっては、まず現状の営業プロセスを詳細に分析。ボトルネックを特定し、AI化すべき業務と人が担うべき業務を明確に切り分けました。",
      "導入したAIエージェントは、リサーチ・リスト作成、アウトバウンド対応、パイプライン管理を自動化。営業担当者は商談と顧客関係構築に集中できるようになりました。",
      "結果として、導入後3ヶ月で営業効率が3倍に向上。リード獲得数は2倍に増加し、商談化率も40%改善しました。A社の営業部長は「AIエージェントのおかげで、本当にやるべき仕事に集中できるようになった」と語っています。",
    ],
  },
  "2": {
    title: "2026年のAIトレンド：エージェント型AIが変える企業の働き方",
    excerpt:
      "2026年、AIは単なるツールから「エージェント」へと進化を遂げています。",
    category: "Insight",
    date: "2026.03.10",
    readTime: "8 min",
    content: [
      "2026年、AIの世界は大きな転換点を迎えています。これまでのAIは、人間の指示に従って特定のタスクをこなす「ツール」でした。しかし今、AIは自律的に判断し、行動する「エージェント」へと進化しています。",
      "エージェント型AIの最大の特徴は、目標を与えられると、その達成に必要なステップを自ら考え、実行できることです。たとえば「売上を20%向上させる」という目標を与えると、市場分析、ターゲット選定、アプローチ方法の立案、実行、効果測定までを一貫して行います。",
      "企業にとって、これは働き方の根本的な変革を意味します。従来は人間が細かく指示を出し、管理する必要がありましたが、エージェント型AIは最小限の指示で最大限の成果を出すことができます。",
      "この変化は、企業の組織構造にも影響を与えています。中間管理職の役割が変化し、より戦略的・創造的な業務にフォーカスする傾向が強まっています。人とAIの協働が、新しい企業の競争力の源泉となっているのです。",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(articles).map((id) => ({ id }))
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = articles[id] || articles["1"]

  return (
    <main className="bg-[var(--background)] min-h-screen">
      <Header variant="solid" />

      {/* Article Header */}
      <section className="pt-32 pb-12 px-[5vw]">
        <div className="max-w-[800px] mx-auto">
          {/* Back Link */}
          <Link
            href="/media"
            className="inline-flex items-center gap-2 text-[13px] text-[var(--off-white)]/60 hover:text-[var(--off-white)] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Media
          </Link>

          {/* Category */}
          <span className="inline-block px-4 py-1.5 bg-[var(--light-sage)]/10 rounded text-[11px] font-mono tracking-wider text-[var(--light-sage)] mb-6">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-[clamp(28px,4vw,44px)] font-bold text-[var(--off-white)] leading-tight mb-6">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-[13px] text-[var(--off-white)]/50">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-[5vw] pb-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="relative aspect-[16/8] bg-[var(--dark-teal)] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--mid-teal)]/30 to-[var(--dark-teal)]/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[14px] tracking-widest text-[var(--off-white)]/20 uppercase">
                {article.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-[5vw] pb-24">
        <div className="max-w-[800px] mx-auto">
          <div className="prose prose-invert max-w-none">
            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-[16px] leading-[2.2] text-[var(--off-white)]/80 mb-8"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share */}
          <div className="mt-16 pt-8 border-t border-[var(--off-white)]/10">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-[13px] text-[var(--off-white)]/50">
                <Share2 size={14} />
                Share
              </span>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-[var(--dark-teal)]/50 flex items-center justify-center text-[var(--off-white)]/60 hover:bg-[var(--dark-teal)] hover:text-[var(--off-white)] transition-colors">
                  <Twitter size={16} />
                </button>
                <button className="w-10 h-10 rounded-full bg-[var(--dark-teal)]/50 flex items-center justify-center text-[var(--off-white)]/60 hover:bg-[var(--dark-teal)] hover:text-[var(--off-white)] transition-colors">
                  <Linkedin size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="px-[5vw] pb-32 bg-[var(--dark-teal)]/20">
        <div className="max-w-[1200px] mx-auto pt-24">
          <h2 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--light-sage)]/60 mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(articles)
              .filter(([key]) => key !== id)
              .slice(0, 2)
              .map(([key, related]) => (
                <Link key={key} href={`/media/${key}`}>
                  <article className="group h-full bg-[var(--background)]/60 rounded-lg p-6 border border-[var(--off-white)]/5 hover:border-[var(--light-sage)]/20 transition-all duration-300">
                    <span className="font-mono text-[10px] tracking-wider text-[var(--light-sage)]">
                      {related.category}
                    </span>
                    <h3 className="mt-3 text-[16px] font-bold text-[var(--off-white)] leading-relaxed group-hover:text-[var(--light-sage)] transition-colors">
                      {related.title}
                    </h3>
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

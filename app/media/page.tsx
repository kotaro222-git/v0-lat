import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { client, type Article } from "@/lib/microcms/client"

export const metadata = {
  title: "Media | Lat91",
  description: "Lat91のメディア・ブログ記事一覧",
}

const categories = [
  { id: "all", label: "All" },
  { id: "AIエージェント", label: "AIエージェント" },
  { id: "AI活用", label: "AI活用" },
  { id: "コラム", label: "コラム" },
  { id: "ニュース", label: "ニュース" },
]

async function getArticles(): Promise<Article[]> {
  try {
    const data = await client.getList<Article>({
      endpoint: "media",
      queries: {
        orders: "-publishedAt",
        limit: 50,
      },
    })
    return data.contents
  } catch (e) {
    console.error("Failed to fetch articles from microCMS:", e)
    return []
  }
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}.${m}.${day}`
}

export default async function MediaPage() {
  const articles = await getArticles()

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
      {featuredArticles.length > 0 && (
        <section className="px-6 md:px-12 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 mb-8">
              Featured
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article, idx) => (
                <Link key={article.id} href={`/media/${article.id}`}>
                  <article className="group h-full bg-neutral-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-[16/9] bg-gradient-to-br from-neutral-200 to-neutral-100">
                      {article.thumbnail ? (
                        <img
                          src={article.thumbnail.url}
                          alt={article.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-mono text-8xl font-bold text-neutral-300/50">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      )}
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
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono text-xs text-neutral-400">
                          {formatDate(article.publishedAt)}
                        </span>
                        {article.readingTime && (
                          <span className="font-mono text-xs text-neutral-400">
                            {article.readingTime} min
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 leading-relaxed group-hover:text-neutral-600 transition-colors">
                        {article.title}
                      </h3>
                      {article.summary && (
                        <p className="mt-4 text-sm text-neutral-500 leading-relaxed line-clamp-2">
                          {article.summary}
                        </p>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="px-6 md:px-12 pb-32 bg-neutral-50 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 mb-8">
            All Articles
          </h2>
          {regularArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article, idx) => (
                <Link key={article.id} href={`/media/${article.id}`}>
                  <article className="group h-full bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-neutral-100 to-neutral-50">
                      {article.thumbnail ? (
                        <img
                          src={article.thumbnail.url}
                          alt={article.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-mono text-5xl font-bold text-neutral-200">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-neutral-600">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="font-mono text-xs text-neutral-400">
                        {formatDate(article.publishedAt)}
                      </span>
                      <h3 className="mt-3 text-base font-bold text-neutral-900 leading-relaxed group-hover:text-neutral-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-neutral-400 text-center py-16">
              記事がまだありません
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

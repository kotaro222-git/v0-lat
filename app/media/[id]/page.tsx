import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin } from "lucide-react"
import { client, type Article } from "@/lib/microcms/client"
import { notFound } from "next/navigation"

async function getArticle(id: string): Promise<Article | null> {
  if (!client) return null
  try {
    const article = await client.get<Article>({
      endpoint: "media",
      contentId: id,
    })
    return article
  } catch {
    return null
  }
}

async function getRelatedArticles(currentId: string, category: string): Promise<Article[]> {
  if (!client) return []
  try {
    const data = await client.getList<Article>({
      endpoint: "media",
      queries: {
        filters: `category[contains]${category}`,
        limit: 3,
        orders: "-publishedAt",
      },
    })
    return data.contents.filter((a) => a.id !== currentId).slice(0, 2)
  } catch {
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

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = await getArticle(id)

  if (!article) {
    notFound()
  }

  const relatedArticles = await getRelatedArticles(id, article.category?.[0] || "")

  return (
    <main className="bg-white min-h-screen">
      <Header variant="light" />

      {/* Article Header */}
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-900 transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to Media
          </Link>

          <span className="inline-block px-4 py-2 bg-neutral-100 rounded-full text-xs font-medium text-neutral-600 mb-6">
            {article.category}
          </span>

          <h1 className="text-[clamp(32px,5vw,48px)] font-bold text-neutral-900 leading-[1.2] mb-8">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              {formatDate(article.publishedAt)}
            </span>
            {article.readingTime && (
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {article.readingTime} min
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/8] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl overflow-hidden">
            {article.thumbnail ? (
              <img
                src={article.thumbnail.url}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-sm tracking-widest text-neutral-300 uppercase">
                  {article.category}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content (Rich Editor HTML) */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-p:leading-[2] prose-a:text-neutral-900 prose-a:underline prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: article.htmlBody || article.body || "" }}
          />

          {/* Share */}
          <div className="mt-16 pt-8 border-t border-neutral-100">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm text-neutral-400">
                <Share2 size={14} />
                Share
              </span>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-neutral-900 hover:text-white transition-colors">
                  <Twitter size={16} />
                </button>
                <button className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-neutral-900 hover:text-white transition-colors">
                  <Linkedin size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="px-6 md:px-12 pb-32 bg-neutral-50">
          <div className="max-w-6xl mx-auto pt-24">
            <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 mb-10">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((related) => (
                <Link key={related.id} href={`/media/${related.id}`}>
                  <article className="group h-full bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                    <span className="text-xs font-medium text-neutral-400">
                      {related.category}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-neutral-900 leading-relaxed group-hover:text-neutral-600 transition-colors">
                      {related.title}
                    </h3>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

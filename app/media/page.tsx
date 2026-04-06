import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MediaArticles } from "@/components/media-articles"
import { client, type Article } from "@/lib/microcms/client"

export const revalidate = 60

export const metadata = {
  title: "Media | Lat91",
  description: "Lat91のメディア・ブログ記事一覧",
}

async function getArticles(): Promise<Article[]> {
  if (!client) {
    console.warn("microCMS client not configured")
    return []
  }
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

export default async function MediaPage() {
  const articles = await getArticles()

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

      <MediaArticles articles={articles} />

      <Footer />
    </main>
  )
}

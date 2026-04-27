import type { MetadataRoute } from "next"
import { client, type Article } from "@/lib/microcms/client"

const BASE_URL = "https://www.lat91.co.jp"

async function getAllArticles(): Promise<Pick<Article, "id" | "publishedAt" | "updatedAt">[]> {
  if (!client) return []
  try {
    const data = await client.getList<Article>({
      endpoint: "media",
      queries: {
        fields: "id,publishedAt,updatedAt",
        limit: 100,
        orders: "-publishedAt",
      },
    })
    return data.contents
  } catch (e) {
    console.error("sitemap: failed to fetch articles from microCMS:", e)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles()
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/media`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/service`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/philosophy`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/company`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ]

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/media/${a.id}`,
    lastModified: new Date(a.updatedAt || a.publishedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...articleRoutes]
}

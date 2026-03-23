import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
})

export type Article = {
  id: string
  title: string
  category: string[]
  thumbnail?: {
    url: string
    height: number
    width: number
  }
  summary?: string
  body: string
  readingTime?: number
  featured?: boolean
  publishedAt: string
  createdAt: string
  updatedAt: string
}

export type ArticleResponse = {
  contents: Article[]
  totalCount: number
  offset: number
  limit: number
}

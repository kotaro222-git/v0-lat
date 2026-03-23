import { createClient } from "microcms-js-sdk"

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || ""
const apiKey = process.env.MICROCMS_API_KEY || ""

// Only create client if environment variables are set
export const client = serviceDomain && apiKey
  ? createClient({ serviceDomain, apiKey })
  : null

export const isConfigured = () => Boolean(serviceDomain && apiKey)

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

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
  htmlBody?: string
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

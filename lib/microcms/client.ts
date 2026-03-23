import { createClient } from "microcms-js-sdk"

// Re-export types
export type { Article, ArticleResponse } from "./types"

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || ""
const apiKey = process.env.MICROCMS_API_KEY || ""

// Only create client if environment variables are set
export const client = serviceDomain && apiKey
  ? createClient({ serviceDomain, apiKey })
  : null

export const isConfigured = () => Boolean(serviceDomain && apiKey)

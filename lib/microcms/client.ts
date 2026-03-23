// Re-export types
export type { Article, ArticleResponse } from "./types"

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || ""
const apiKey = process.env.MICROCMS_API_KEY || ""

export const isConfigured = () => Boolean(serviceDomain && apiKey)

// Lazy initialization of client - only import SDK when actually needed
let _client: ReturnType<typeof import("microcms-js-sdk").createClient> | null = null

export const getClient = async () => {
  if (!isConfigured()) return null
  if (_client) return _client
  
  const { createClient } = await import("microcms-js-sdk")
  _client = createClient({ serviceDomain, apiKey })
  return _client
}

// For backward compatibility - but prefer getClient()
export const client = null

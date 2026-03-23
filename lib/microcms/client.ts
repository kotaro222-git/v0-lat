import "server-only"
import { createClient } from "microcms-js-sdk"

export type { Article, ArticleResponse } from "./types"

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || ""
const apiKey = process.env.MICROCMS_API_KEY || ""

export const isConfigured = () => Boolean(serviceDomain && apiKey)

// Only create client if environment variables are set
export const client = serviceDomain && apiKey
  ? createClient({ serviceDomain, apiKey })
  : null

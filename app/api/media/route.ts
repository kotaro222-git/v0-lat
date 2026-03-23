import { client, isConfigured, ArticleResponse } from "@/lib/microcms/client"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get("limit") || "3")
  
  // Debug: Check environment variables
  console.log("[v0] MICROCMS_SERVICE_DOMAIN:", process.env.MICROCMS_SERVICE_DOMAIN)
  console.log("[v0] MICROCMS_API_KEY:", process.env.MICROCMS_API_KEY ? "SET (hidden)" : "undefined")
  console.log("[v0] isConfigured():", isConfigured())
  console.log("[v0] client:", client ? "initialized" : "null")
  
  // Return empty array if microCMS is not configured
  if (!isConfigured() || !client) {
    console.log("[v0] Returning empty array - microCMS not configured")
    return NextResponse.json({ contents: [], totalCount: 0, offset: 0, limit })
  }
  
  try {
    const data = await client.get<ArticleResponse>({
      endpoint: "articles",
      queries: {
        limit,
        orders: "-publishedAt",
      },
    })
    
    return NextResponse.json(data)
  } catch (error) {
    console.error("Failed to fetch articles:", error)
    return NextResponse.json({ contents: [], totalCount: 0, offset: 0, limit }, { status: 500 })
  }
}

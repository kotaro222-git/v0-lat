import { NextResponse } from "next/server"

export async function GET() {
  const domain = process.env.MICROCMS_SERVICE_DOMAIN
  const apiKey = process.env.MICROCMS_API_KEY

  if (!domain || !apiKey) {
    return NextResponse.json({ contents: [] })
  }

  try {
    const res = await fetch(
      `https://${domain}.microcms.io/api/v1/articles?orders=-publishedAt&limit=3`,
      {
        headers: { "X-MICROCMS-API-KEY": apiKey },
        next: { revalidate: 60 },
      }
    )

    if (!res.ok) {
      return NextResponse.json({ contents: [] })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ contents: [] })
  }
}

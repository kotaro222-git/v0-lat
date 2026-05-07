import type { MetadataRoute } from "next"
import { COMPANY_NAME, DEFAULT_DESCRIPTION, SITE_BRAND } from "@/lib/seo"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY_NAME} - AIエージェント・DX推進パートナー`,
    short_name: SITE_BRAND,
    description: DEFAULT_DESCRIPTION,
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#050e10",
    lang: "ja",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}

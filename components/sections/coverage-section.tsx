"use client"

import { TrendingUp, Megaphone, HeadphonesIcon, Building2 } from "lucide-react"

const domains = [
  {
    icon: TrendingUp,
    titleEn: "Sales",
    titleJa: "セールス",
    items: [
      "リサーチ・リスト作成",
      "アウトバウンド対応",
      "商談支援",
      "パイプライン管理",
      "ナーチャリング",
    ],
  },
  {
    icon: Megaphone,
    titleEn: "Marketing",
    titleJa: "マーケティング",
    items: [
      "コンテンツ制作",
      "SEO・AIO",
      "広告運用",
      "SNS運用",
      "レポーティング",
    ],
  },
  {
    icon: HeadphonesIcon,
    titleEn: "CS",
    titleJa: "カスタマーサポート",
    items: [
      "問い合わせ自動対応",
      "FAQ自動対応",
      "VoC分析",
      "カスタマーサクセス",
      "オンボーディング支援",
    ],
  },
  {
    icon: Building2,
    titleEn: "Back Office",
    titleJa: "バックオフィス",
    items: [
      "経理・財務",
      "人事・労務",
      "総務",
      "ナレッジ管理",
      "コンプライアンス",
    ],
  },
]

export function CoverageSection() {
  return (
    <section className="relative bg-white py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <span className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
              Coverage
            </span>
          </span>
          <div className="grid lg:grid-cols-2 gap-8">
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-neutral-900 tracking-tight">
              対応領域
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed lg:pt-3">
              ビジネスの成長ドライバーとして重点領域を横断的に網羅。
              <br className="hidden md:block" />
              各社ごとのカスタマイズに対応し、AIエージェントを活用した
              <br className="hidden md:block" />
              自動化・効率化・高品質化を実現します。
            </p>
          </div>
        </div>

        {/* Domains Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.titleEn}
              className="group relative bg-neutral-50 rounded-2xl p-8 hover:bg-neutral-900 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-8 group-hover:bg-neutral-800 transition-colors">
                <domain.icon
                  size={24}
                  className="text-neutral-900 group-hover:text-white transition-colors"
                />
              </div>

              {/* Title */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-white transition-colors mb-1">
                  {domain.titleEn}
                </h3>
                <p className="text-xs text-neutral-400 group-hover:text-neutral-500 transition-colors">
                  {domain.titleJa}
                </p>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-neutral-600 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

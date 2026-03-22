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
    <section className="relative bg-[var(--background)] py-32 px-[5vw]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--mid-teal)]">
            Coverage
          </span>
          <div className="mt-4">
            <p className="font-mono text-[13px] tracking-[0.1em] text-[var(--off-white)]/50 mb-2">
              Domains
            </p>
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-bold text-[var(--off-white)]">
              対応領域
            </h2>
          </div>
          <p className="mt-6 text-[15px] leading-[1.8] text-[var(--off-white)]/60 max-w-3xl">
            ビジネスの成長ドライバーとして重点領域を横断的に網羅。各社ごとのカスタマイズに対応。
            <br />
            AIエージェントを活用し、自動化・効率化・高品質化を実現します。
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.titleEn}
              className="group relative bg-gradient-to-b from-[var(--dark-teal)]/50 to-[var(--dark-teal)]/20 rounded-lg p-6 border border-[var(--off-white)]/5 hover:border-[var(--light-sage)]/20 transition-all duration-300"
            >
              {/* Icon */}
              <domain.icon
                size={28}
                className="text-[var(--light-sage)] mb-4"
              />

              {/* Title */}
              <div className="mb-4">
                <h3 className="font-mono text-[14px] font-bold text-[var(--off-white)] tracking-wide">
                  {domain.titleEn}
                </h3>
                <p className="text-[12px] text-[var(--off-white)]/50 mt-1">
                  {domain.titleJa}
                </p>
              </div>

              {/* Items */}
              <ul className="space-y-2">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] text-[var(--off-white)]/60 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--light-sage)]/40" />
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

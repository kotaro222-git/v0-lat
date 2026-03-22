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
        <div className="mb-16 text-left">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#999]">
            Coverage
          </span>
          <h2 className="text-[32px] font-bold text-neutral-900 tracking-tight mt-2">
            対応領域
          </h2>
          <p className="text-[16px] text-[#666] leading-relaxed mt-4 max-w-[560px]">
            重点4領域を横断的にカバー。
            <br />
            各社の課題に合わせ、AIエージェントで自動化・効率化を実現します。
          </p>
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

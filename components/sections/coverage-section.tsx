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
    <section className="relative bg-[#f5f5f5] py-32 md:py-40 px-6 md:px-12">
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
              className="group relative bg-white rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1 border-t-[3px] border-t-[#3a6b6b]"
              style={{
                boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
              }}
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-[#f5f5f5] flex items-center justify-center mb-6">
                <domain.icon
                  size={32}
                  className="text-[#3a6b6b]"
                />
              </div>

              {/* Title */}
              <div className="mb-5">
                <h3 className="text-lg font-bold text-neutral-900 mb-1">
                  {domain.titleEn}
                </h3>
                <p className="text-xs text-neutral-400">
                  {domain.titleJa}
                </p>
              </div>

              {/* Items as Pill Tags */}
              <div className="flex flex-col items-start gap-2">
                {domain.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center bg-[#f0f0f0] rounded-full px-3.5 py-1.5 text-[13px] text-neutral-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

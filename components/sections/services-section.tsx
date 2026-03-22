"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "DXソリューション",
    titleEn: "DX Solution",
    description:
      "業務プロセスの分析から再設計、デジタル化推進まで、企業のDXを包括的にサポートします。",
  },
  {
    number: "02",
    title: "AIエージェント構築・運用",
    titleEn: "AI Agent Development",
    description:
      "経営課題を起点に、最適なAIエージェントを設計・構築・運用まで一気通貫で支援します。",
  },
  {
    number: "03",
    title: "AI社員派遣",
    titleEn: "AI Staff Dispatch",
    description:
      "最適化された弊社のAIエージェントが「AI社員」として稼働し続ける派遣モデルです。",
  },
  {
    number: "04",
    title: "プロダクト開発",
    titleEn: "Product Development",
    description:
      "自社プロダクトの企画・設計・開発・マーケティングまで、プロダクトライフサイクル全体を支援します。",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-neutral-50 py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-neutral-900" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
                Service
              </span>
            </span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-neutral-900 tracking-tight">
              事業概要
            </h2>
          </div>
          <p className="text-neutral-500 text-base max-w-md">
            経営課題を起点に、AIエージェントで解決する
          </p>
        </div>

        {/* Services List */}
        <div className="border-t border-neutral-200">
          {services.map((service) => (
            <Link
              key={service.number}
              href="/service"
              className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-10 border-b border-neutral-200 hover:bg-white transition-colors px-0 md:px-8 -mx-0 md:-mx-8"
            >
              {/* Number */}
              <span className="font-mono text-sm text-neutral-300 w-12">
                {service.number}
              </span>

              {/* Title */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">
                  {service.title}
                </h3>
                <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
                  {service.titleEn}
                </span>
              </div>

              {/* Description */}
              <p className="flex-1 text-sm text-neutral-500 leading-relaxed max-w-sm">
                {service.description}
              </p>

              {/* Arrow */}
              <span className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200 group-hover:border-neutral-900 group-hover:bg-neutral-900 transition-all">
                <ArrowUpRight
                  size={18}
                  className="text-neutral-400 group-hover:text-white transition-colors"
                />
              </span>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <Link
            href="/service"
            className="inline-flex items-center gap-4 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors group"
          >
            <span className="tracking-wide">サービス詳細を見る</span>
            <span className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

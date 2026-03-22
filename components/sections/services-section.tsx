"use client"

import Link from "next/link"
import { ArrowRight, Cpu, Users, Bot, Rocket } from "lucide-react"

const services = [
  {
    number: "01",
    title: "DXソリューション",
    description:
      "業務プロセスの分析から再設計、デジタル化の推進まで、企業のDXを包括的にサポートします。",
    icon: Cpu,
  },
  {
    number: "02",
    title: "AIエージェント構築・運用",
    description:
      "経営課題を起点に、最適なAIエージェントを設計・構築・運用まで一気通貫で支援します。",
    icon: Bot,
  },
  {
    number: "03",
    title: "AI社員派遣",
    description:
      "最適化された弊社のAIエージェントが「AI社員」として稼働し続ける派遣モデルです。",
    icon: Users,
  },
  {
    number: "04",
    title: "プロダクト開発",
    description:
      "自社プロダクトの企画・設計・開発・マーケティングまで、プロダクトライフサイクル全体を支援します。",
    icon: Rocket,
  },
]

export function ServicesSection() {
  return (
    <section className="relative bg-[var(--dark-teal)] py-32 px-[5vw]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--light-sage)]/60">
            Our Service
          </span>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-mono text-[13px] tracking-[0.1em] text-[var(--off-white)]/50 mb-2">
                Business
              </p>
              <h2 className="text-[clamp(24px,3.5vw,36px)] font-bold text-[var(--off-white)]">
                事業概要
              </h2>
            </div>
            <p className="text-[15px] text-[var(--off-white)]/60">
              経営課題を、AIエージェントで解決する
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-[var(--background)]/40 backdrop-blur-sm rounded-lg p-8 border border-[var(--off-white)]/5 hover:border-[var(--light-sage)]/20 transition-all duration-300"
            >
              {/* Service Number */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[40px] font-bold text-[var(--light-sage)]/20 leading-none">
                  {service.number}
                </span>
                <service.icon
                  size={24}
                  className="text-[var(--light-sage)]/40 group-hover:text-[var(--light-sage)] transition-colors"
                />
              </div>

              {/* Content */}
              <h3 className="text-[18px] font-bold text-[var(--off-white)] mb-3">
                {service.title}
              </h3>
              <p className="text-[14px] leading-[1.8] text-[var(--off-white)]/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/service"
            className="inline-flex items-center gap-3 font-mono text-[13px] tracking-[0.1em] text-[var(--light-sage)] hover:text-[var(--off-white)] transition-colors group"
          >
            View all services
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

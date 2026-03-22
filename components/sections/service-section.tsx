import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const serviceItems = [
  {
    id: "dx-solution",
    number: "01",
    title: "DXソリューション",
    titleEn: "DX Solution",
    description: "事業成長に必要な課題を特定し、戦略策定、要件定義から現場でのAX・DXまでを一気通貫で支援します。",
  },
  {
    id: "ai-agent",
    number: "02",
    title: "AIエージェント構築・運用",
    titleEn: "AI Agent Development",
    description: "企業様ごとの業務要件に特化した、自律型AIエージェントの要件定義・設計・導入・保守運用までを実施します。",
  },
  {
    id: "ai-staff",
    number: "03",
    title: "AI社員派遣",
    titleEn: "AI Staff Dispatch",
    description: "AI agents deployed as continuous digital workforce",
  },
  {
    id: "product-dev",
    number: "04",
    title: "プロダクト開発",
    titleEn: "Product Development",
    description: "End-to-end product lifecycle from planning to launch",
  },
] as const

export function ServicesSection(): JSX.Element {
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
              Service
            </h2>
          </div>
          <p className="text-neutral-500 text-base max-w-md">
            経営課題を起点に、AIエージェントで解決する
          </p>
        </div>

        {/* Services List */}
        <div className="border-t border-neutral-200">
          {serviceItems.map((item) => (
            <Link
              key={item.id}
              href="/service"
              className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-10 border-b border-neutral-200 hover:bg-white transition-colors px-0 md:px-8 -mx-0 md:-mx-8"
            >
              {/* Number */}
              <span className="font-mono text-sm text-neutral-300 w-12">
                {item.number}
              </span>

              {/* Title */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-1 group-hover:text-neutral-600 transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
                  {item.titleEn}
                </span>
              </div>

              {/* Description */}
              <p className="flex-1 text-sm text-neutral-500 leading-relaxed max-w-sm">
                {item.description}
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

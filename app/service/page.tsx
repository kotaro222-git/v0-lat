import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  TrendingUp,
  Megaphone,
  HeadphonesIcon,
  Building2,
  X,
  Check,
  ArrowRight,
} from "lucide-react"

export const metadata = {
  title: "Service | Lat91",
  description: "経営課題を、AIエージェントで解決する",
}

const services = [
  {
    icon: TrendingUp,
    titleEn: "Sales",
    titleJa: "セールス",
    description:
      "見込み客の発見から商談化まで、営業プロセスを一気通貫で自動化",
    capabilities: [
      "リサーチ・リスト作成",
      "アウトバウンド",
      "インバウンド対応",
      "商談支援",
      "パイプライン管理",
      "ナーチャリング",
    ],
    workflow: [
      "ターゲット条件設定",
      "AIが自動リサーチ",
      "リスト生成",
      "パーソナライズメール作成",
      "自動送信",
      "返信検知",
      "アポ調整",
      "CRM自動更新",
    ],
  },
  {
    icon: Megaphone,
    titleEn: "Marketing",
    titleJa: "マーケティング",
    description:
      "リサーチからレポーティングまで、マーケティング業務をAIが遂行",
    capabilities: [
      "コンテンツ制作",
      "SEO・AIO",
      "広告運用",
      "SNS運用",
      "レポーティング",
    ],
    workflow: [
      "市場・競合分析",
      "キーワード選定",
      "コンテンツ企画",
      "記事自動生成",
      "SEO最適化",
      "公開・配信",
      "効果測定",
      "改善提案",
    ],
  },
  {
    icon: HeadphonesIcon,
    titleEn: "Customer Support",
    titleJa: "カスタマーサポート",
    description: "対応の80%を自動化し、人は本当に必要な対応だけに集中",
    capabilities: [
      "問い合わせ自動対応",
      "FAQ自動対応",
      "VoC分析",
      "カスタマーサクセス",
    ],
    workflow: [
      "問い合わせ受信",
      "AI意図分析",
      "回答候補生成",
      "自動返信",
      "エスカレーション判定",
      "担当者通知",
      "対応履歴記録",
      "満足度分析",
    ],
  },
  {
    icon: Building2,
    titleEn: "Back Office",
    titleJa: "バックオフィス",
    description: "経理・人事・総務の定型業務をAIが代行し、管理部門を最小化",
    capabilities: [
      "経理・財務",
      "人事・労務",
      "総務",
      "ナレッジ管理",
      "コンプライアンス",
    ],
    workflow: [
      "書類データ抽出",
      "自動仕訳",
      "承認フロー起動",
      "システム連携",
      "レポート生成",
      "異常検知",
      "アラート通知",
      "監査ログ保存",
    ],
  },
]

const processSteps = [
  {
    number: "01",
    title: "ヒアリング",
    description: "経営課題・現場課題の整理",
    duration: "1 week",
  },
  {
    number: "02",
    title: "設計・構築",
    description: "業務プロセス再設計 AIエージェント構築",
    duration: "2 weeks",
  },
  {
    number: "03",
    title: "テスト運用",
    description: "試験稼働・調整",
    duration: "1-2 weeks",
  },
  {
    number: "04",
    title: "本格稼働・継続改善",
    description: "保守運用 リテラシー支援",
    duration: "ongoing",
  },
]

export default function ServicePage() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      <Header variant="solid" />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--mid-teal)]">
            Service
          </span>
          <h1 className="mt-4 text-[clamp(32px,5vw,56px)] font-bold text-[var(--off-white)] leading-tight">
            DXソリューション事業
          </h1>
          <p className="mt-6 text-[18px] text-[var(--off-white)]/70">
            経営課題を、AIエージェントで解決する
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 px-[5vw]">
        <div className="max-w-[1200px] mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={service.titleEn}
              className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start"
            >
              {/* Left - Service Info */}
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--light-sage)]/10 flex items-center justify-center">
                    <service.icon
                      size={24}
                      className="text-[var(--light-sage)]"
                    />
                  </div>
                  <div>
                    <h2 className="text-[24px] font-bold text-[var(--off-white)]">
                      {service.titleEn}
                    </h2>
                    <p className="text-[13px] text-[var(--off-white)]/50">
                      {service.titleJa}
                    </p>
                  </div>
                </div>

                <p className="text-[15px] leading-[1.8] text-[var(--off-white)]/70 mb-6">
                  {service.description}
                </p>

                {/* Capabilities */}
                <div className="mb-6">
                  <p className="font-mono text-[10px] tracking-wider text-[var(--light-sage)]/60 uppercase mb-3">
                    Capabilities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-3 py-1.5 bg-[var(--dark-teal)]/50 rounded text-[12px] text-[var(--off-white)]/70"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Workflow */}
              <div className="bg-[var(--dark-teal)]/30 rounded-xl p-8 border border-[var(--off-white)]/5">
                <p className="font-mono text-[10px] tracking-wider text-[var(--light-sage)] uppercase mb-6">
                  Workflow Example
                </p>

                <div className="relative">
                  {/* Connection Line */}
                  <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-[var(--light-sage)]/30 via-[var(--light-sage)]/10 to-transparent hidden md:block" />

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {service.workflow.map((step, stepIndex) => (
                      <div key={step} className="relative">
                        {/* Step number */}
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 rounded-full bg-[var(--light-sage)]/20 flex items-center justify-center text-[11px] font-mono text-[var(--light-sage)]">
                            {stepIndex + 1}
                          </span>
                          {stepIndex < service.workflow.length - 1 && (
                            <ArrowRight
                              size={12}
                              className="text-[var(--light-sage)]/30 hidden md:block absolute -right-2 top-2"
                            />
                          )}
                        </div>
                        <p className="text-[13px] text-[var(--off-white)]/80 pl-11 md:pl-0">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 px-[5vw] bg-[var(--dark-teal)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--light-sage)]/60">
              Our Approach
            </span>
            <h2 className="mt-4 text-[clamp(22px,3vw,32px)] font-bold text-[var(--off-white)] leading-tight">
              DX・AI導入の失敗パターン
            </h2>
            <p className="mt-4 text-[16px] text-[var(--off-white)]/60">
              「とりあえずAI」が、失敗を招く
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Wrong Approach */}
            <div className="relative bg-[var(--background)]/60 rounded-xl p-8 border border-red-500/20">
              <div className="absolute -top-3 left-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full">
                  <X size={14} className="text-red-400" />
                  <span className="font-mono text-[11px] tracking-wider text-red-400">
                    失敗パターン（AI起点）
                  </span>
                </span>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-[14px] text-red-400 font-mono font-bold">
                    1
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-[var(--off-white)]">
                      AIで何ができるか考える
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-[14px] text-red-400 font-mono font-bold">
                    2
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-[var(--off-white)]">
                      業務プロセスに無理やり載せる
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-[14px] text-red-400 font-mono font-bold">
                    3
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-[var(--off-white)]">
                      なんとか運用する
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-red-500/10">
                  <p className="text-[14px] text-red-400/80">
                    現場に合わない。使われない。成果が出ない。
                  </p>
                </div>
              </div>
            </div>

            {/* Right Approach */}
            <div className="relative bg-gradient-to-br from-[var(--light-sage)]/10 to-[var(--mid-teal)]/10 rounded-xl p-8 border border-[var(--light-sage)]/30">
              <div className="absolute -top-3 left-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--light-sage)]/10 border border-[var(--light-sage)]/30 rounded-full">
                  <Check size={14} className="text-[var(--light-sage)]" />
                  <span className="font-mono text-[11px] tracking-wider text-[var(--light-sage)]">
                    Lat91のアプローチ（課題起点）
                  </span>
                </span>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--light-sage)]/20 flex items-center justify-center text-[14px] text-[var(--light-sage)] font-mono font-bold">
                    1
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-[var(--off-white)]">
                      経営課題・現場課題をヒアリング
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--light-sage)]/20 flex items-center justify-center text-[14px] text-[var(--light-sage)] font-mono font-bold">
                    2
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-[var(--off-white)]">
                      業務プロセスを分析・再設計
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--light-sage)]/20 flex items-center justify-center text-[14px] text-[var(--light-sage)] font-mono font-bold">
                    3
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-[var(--off-white)]">
                      最適なAIエージェントを構築・導入・運用
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--light-sage)]/20">
                  <p className="text-[14px] text-[var(--light-sage)]">
                    現場に浸透する。解決される。成果につながる。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-[5vw] bg-[var(--background)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--mid-teal)]">
              Process
            </span>
            <h2 className="mt-4 text-[clamp(24px,3.5vw,36px)] font-bold text-[var(--off-white)]">
              支援実行プロセス
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 z-10">
                    <ArrowRight
                      size={20}
                      className="text-[var(--light-sage)]/30"
                    />
                  </div>
                )}

                <div className="h-full bg-[var(--dark-teal)]/30 rounded-xl p-8 border border-[var(--off-white)]/5 hover:border-[var(--light-sage)]/20 transition-colors">
                  <span className="font-mono text-[48px] font-bold text-[var(--light-sage)]/20 leading-none">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-[18px] font-bold text-[var(--off-white)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-[var(--off-white)]/60">
                    {step.description}
                  </p>
                  <p className="mt-4 font-mono text-[11px] tracking-wider text-[var(--light-sage)]">
                    {step.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Message */}
          <div className="mt-20 text-center">
            <p className="text-[16px] leading-[2] text-[var(--off-white)]/70 max-w-2xl mx-auto">
              私たちの役割は、AIを使っていただくことではなく、
              <br />
              <span className="text-[var(--off-white)] font-medium">
                本当の課題を特定し、解決し、事業を成長させること
              </span>
              です。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-[5vw] bg-gradient-to-b from-[var(--dark-teal)]/30 to-[var(--background)]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[clamp(24px,4vw,36px)] font-bold text-[var(--off-white)] mb-6">
            まずはご相談ください
          </h2>
          <p className="text-[15px] text-[var(--off-white)]/60 mb-10">
            貴社の課題に合わせた最適なソリューションをご提案します
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-10 py-5 bg-[var(--off-white)] text-[var(--background)] rounded-full font-bold text-[15px] tracking-wide hover:bg-[var(--light-sage)] transition-all duration-300 group"
          >
            お問い合わせ
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

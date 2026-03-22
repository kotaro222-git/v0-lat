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
  ArrowUpRight,
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
    title: "本格稼働",
    description: "保守運用・継続改善",
    duration: "ongoing",
  },
]

export default function ServicePage() {
  return (
    <main className="bg-white min-h-screen">
      <Header variant="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
              Service
            </span>
          </span>
          <h1 className="text-[clamp(36px,6vw,64px)] font-bold text-neutral-900 leading-[1.1] tracking-tight">
            DXソリューション事業
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-500">
            経営課題を、AIエージェントで解決する
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto space-y-32">
          {services.map((service, index) => (
            <div
              key={service.titleEn}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              {/* Left - Service Info */}
              <div className="lg:sticky lg:top-32">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <service.icon size={28} className="text-neutral-900" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-900">
                      {service.titleEn}
                    </h2>
                    <p className="text-sm text-neutral-400">
                      {service.titleJa}
                    </p>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-neutral-600 mb-8">
                  {service.description}
                </p>

                {/* Capabilities */}
                <div>
                  <p className="font-mono text-xs tracking-wider text-neutral-400 uppercase mb-4">
                    Capabilities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-4 py-2 bg-white rounded-full text-sm text-neutral-600 border border-neutral-100"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Workflow */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
                <p className="font-mono text-xs tracking-wider text-neutral-400 uppercase mb-8">
                  Workflow Example
                </p>

                <div className="space-y-4">
                  {service.workflow.map((step, stepIndex) => (
                    <div
                      key={step}
                      className="flex items-center gap-5 p-4 rounded-xl hover:bg-neutral-50 transition-colors"
                    >
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-sm font-mono text-white">
                        {stepIndex + 1}
                      </span>
                      <p className="text-base text-neutral-700">{step}</p>
                      {stepIndex < service.workflow.length - 1 && (
                        <ArrowRight
                          size={14}
                          className="text-neutral-300 ml-auto hidden sm:block"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 px-6 md:px-12 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-3 mb-6 mx-auto">
              <span className="w-12 h-px bg-white/20" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-500">
                Approach
              </span>
              <span className="w-12 h-px bg-white/20" />
            </span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight">
              DX・AI導入の失敗パターン
            </h2>
            <p className="mt-4 text-lg text-neutral-400">
              「とりあえずAI」が、失敗を招く
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Wrong Approach */}
            <div className="relative bg-neutral-800/50 rounded-3xl p-10 border border-neutral-700/50">
              <div className="flex items-center gap-3 mb-10">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20">
                  <X size={16} className="text-red-400" />
                </span>
                <span className="text-base font-medium text-neutral-300">
                  失敗パターン
                </span>
                <span className="text-xs font-mono text-neutral-600 ml-auto">
                  AI起点
                </span>
              </div>

              <div className="space-y-6">
                {[
                  "AIで何ができるか考える",
                  "業務プロセスに無理やり載せる",
                  "なんとか運用する",
                ].map((step, idx) => (
                  <div key={step} className="flex items-start gap-5">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-base text-red-400 font-mono">
                      {idx + 1}
                    </span>
                    <p className="text-neutral-300 pt-2">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-neutral-700/50">
                <p className="text-red-400/80">
                  → 現場に合わない。使われない。成果が出ない。
                </p>
              </div>
            </div>

            {/* Right Approach */}
            <div className="relative bg-white rounded-3xl p-10">
              <div className="flex items-center gap-3 mb-10">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900">
                  <Check size={16} className="text-white" />
                </span>
                <span className="text-base font-medium text-neutral-900">
                  Lat91のアプローチ
                </span>
                <span className="text-xs font-mono text-neutral-400 ml-auto">
                  課題起点
                </span>
              </div>

              <div className="space-y-6">
                {[
                  "経営課題・現場課題をヒアリング",
                  "業務プロセスを分析・再設計",
                  "最適なAIエージェントを構築・導入・運用",
                ].map((step, idx) => (
                  <div key={step} className="flex items-start gap-5">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-base text-neutral-900 font-mono">
                      {idx + 1}
                    </span>
                    <p className="text-neutral-700 pt-2">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-neutral-100">
                <p className="text-neutral-500">
                  → 現場に浸透する。解決される。成果につながる。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-3 mb-6 mx-auto">
              <span className="w-12 h-px bg-neutral-900" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-neutral-400">
                Process
              </span>
              <span className="w-12 h-px bg-neutral-900" />
            </span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-bold text-neutral-900">
              支援実行プロセス
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Connection Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 -right-3 z-10">
                    <ArrowRight size={20} className="text-neutral-300" />
                  </div>
                )}

                <div className="h-full bg-neutral-50 rounded-2xl p-8 hover:bg-neutral-100 transition-colors">
                  <span className="font-mono text-5xl font-bold text-neutral-200 leading-none">
                    {step.number}
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="mt-6 font-mono text-xs tracking-wider text-neutral-400">
                    {step.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto">
              私たちの役割は、AIを使っていただくことではなく、
              <span className="text-neutral-900 font-medium">
                本当の課題を特定し、解決し、事業を成長させること
              </span>
              です。
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-neutral-900 mb-6">
            まずはご相談ください
          </h2>
          <p className="text-neutral-500 text-lg mb-10">
            貴社の課題に合わせた最適なソリューションをご提案します
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-10 py-5 bg-neutral-900 text-white rounded-full font-medium text-base hover:bg-neutral-800 transition-all group"
          >
            お問い合わせ
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

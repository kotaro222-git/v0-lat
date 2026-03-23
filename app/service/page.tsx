"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Service data
const services = [
  {
    number: "01",
    titleEn: "Sales Automation",
    titleJa: "セールス",
    description: "見込み客の発見から商談化まで、営業プロセスを一気通貫で自動化。貴社の営業担当者が、価値提案と関係構築に集中できる仕組みを提供します。",
    capabilities: ["リサーチ・リスト作成", "アプローチ", "商談", "パイプライン管理", "ナーチャリング"],
    leftHeadline: "営業担当者の時間を、\n本当に価値ある活動へ。",
    leftText: "リスト作成やメール送信に費やしていた時間をゼロに。AIがリサーチから商談設定までを完走し、営業は価値提案やリレーション構築に集中できます。",
    stats: [
      { value: "90%", label: "作業時間削減" },
      { value: "3.2x", label: "商談化率向上" },
    ],
    workflowBadge: "Fully automated",
    workflow: [
      { step: "01", title: "条件設定", sub: "ターゲット定義" },
      { step: "02", title: "自動リサーチ", sub: "Web・DB・SNS" },
      { step: "03", title: "リスト生成", sub: "スコアリング付" },
      { step: "04", title: "メール作成", sub: "パーソナライズ" },
      { step: "05", title: "自動送信 → 返信検知", sub: "反応を即時検知" },
      { step: "06", title: "アポ調整", sub: "日程を自動確定" },
      { step: "07", title: "報告", sub: "結果をレポート" },
      { step: "08", title: "CRM自動更新", sub: "商談ステータス記録" },
      { step: "09", title: "自律改善", sub: "自動チューニング" },
    ],
  },
  {
    number: "02",
    titleEn: "Marketing Automation",
    titleJa: "マーケティング",
    description: "リサーチからレポーティングまで、マーケティング業務をAIが遂行。データに基づく施策立案と実行を、人の判断を待たずに回し続ける。",
    capabilities: ["市場・競合リサーチ", "コンテンツ生成", "広告運用最適化", "SNS運用", "レポーティング", "リード育成"],
    leftHeadline: "施策のPDCAを、\nAIが24時間回し続ける。",
    leftText: "市場の変化を即座にキャッチし、コンテンツ生成から広告最適化、効果測定まで自動で実行。マーケターは戦略と創造に集中できます。",
    stats: [
      { value: "5x", label: "コンテンツ生産量" },
      { value: "40%", label: "CPA削減" },
    ],
    workflowBadge: "Cycle automated",
    workflow: [
      { step: "01", title: "市場リサーチ", sub: "競合・トレンド分析" },
      { step: "02", title: "インサイト抽出", sub: "打ち手を導出" },
      { step: "03", title: "コンテンツ生成", sub: "記事・LP・メルマガ" },
      { step: "04", title: "配信実行", sub: "チャネル最適化" },
      { step: "05", title: "広告ABテスト", sub: "CTR・CVR改善" },
      { step: "06", title: "効果測定", sub: "KPI自動集計" },
      { step: "07", title: "レポート自動生成", sub: "次の施策サイクルへ" },
      { step: "08", title: "自律改善", sub: "自動チューニング" },
    ],
  },
  {
    number: "03",
    titleEn: "Customer Support",
    titleJa: "カスタマーサポート",
    description: "対応の80%を自動化し、人は本当に必要な対応だけに集中。顧客満足度を落とさず、サポートコストを大幅に圧縮する。",
    capabilities: ["問い合わせ自動対応", "FAQ自動生成", "エスカレーション判定", "VOC分析", "多言語対応"],
    leftHeadline: "対応品質を上げながら、\nコストを下げる。",
    leftText: "AIが問い合わせを分類・回答し、確信度が低い案件だけ人にエスカレ。全件の対応結果がナレッジに還元され、精度は使うほど向上します。",
    stats: [
      { value: "80%", label: "自動対応率" },
      { value: "< 30s", label: "平均初回応答" },
    ],
    workflowBadge: "80% automated",
    workflow: [
      { step: "01", title: "問い合わせ受信", sub: "全チャネル統合" },
      { step: "02", title: "内容分類", sub: "カテゴリ・緊急度" },
      { step: "03", title: "回答ドラフト", sub: "KB・履歴から生成" },
      { step: "04", title: "確信度判定", sub: "閾値で分岐" },
      { step: "05", title: "自動送信 / エスカレ", sub: "80%を自動処理" },
      { step: "06", title: "KB自動更新", sub: "新パターン学習" },
      { step: "07", title: "VOC分析", sub: "改善点を自動検出" },
    ],
  },
  {
    number: "04",
    titleEn: "Back Office Automation",
    titleJa: "バックオフィス",
    description: "経理・人事・総務の定型業務をAIが代行し、管理部門を最小化。人は判断と例外対応に集中する体制をつくる。",
    capabilities: ["経費精算・請求処理", "入退社手続き", "契約書レビュー", "勤怠管理", "備品・設備管理"],
    leftHeadline: "管理部門の「作業」を\n限りなくゼロへ。",
    leftText: "請求書の読み取りから仕訳、承認フロー、会計ソフト連携まで、一連の経理プロセスを人の手を介さずに完走。月次決算のスピードが劇的に変わります。",
    stats: [
      { value: "95%", label: "入力作業削減" },
      { value: "1/3", label: "月次決算日数" },
    ],
    workflowBadge: "Zero-ops",
    workflow: [
      { step: "01", title: "書類読取", sub: "請求書・領収書" },
      { step: "02", title: "データ抽出", sub: "金額・取引先・日付" },
      { step: "03", title: "仕訳分類", sub: "勘定科目を自動判定" },
      { step: "04", title: "承認フロー", sub: "金額別ルーティング" },
      { step: "05", title: "会計ソフト連携", sub: "freee・MF等" },
      { step: "06", title: "支払処理", sub: "振込データ生成" },
      { step: "07", title: "月次レポート", sub: "経営層へ自動配信" },
      { step: "08", title: "自律改善", sub: "イレギュラー対応へ適応" },
    ],
  },
]

const processSteps = [
  { number: "01", title: "ヒアリング", description: "経営課題・現場課題の整理", duration: "1 week" },
  { number: "02", title: "設計・構築", description: "業務プロセス再設計\nAIエージェント構築", duration: "2 weeks" },
  { number: "03", title: "テスト運用", description: "試験稼働・調整", duration: "1-2 weeks" },
  { number: "04", title: "本格稼働", description: "保守運用・継続改善", duration: "ongoing" },
]

export default function ServicePage() {
  return (
    <main className="bg-white min-h-screen">
      <Header variant="light" />

      {/* Hero Section */}
      <section className="pt-36 pb-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-neutral-900" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-neutral-400">
              Service
            </span>
          </div>
          <h1 className="text-[clamp(36px,5vw,56px)] font-bold text-neutral-900 leading-[1.2] tracking-[-0.03em] mb-7">
            AX・DXソリューション事業
          </h1>
          <p className="text-[15px] text-neutral-500 leading-[2] max-w-[520px]">
            経営・事業課題を、AIエージェントで解決する。<br />
            業務プロセスの自動化から意思決定の高速化まで、<br />
            あらゆる領域でAIが実務を遂行します。
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.number}
          className={`border-t border-neutral-200 ${index % 2 === 1 ? "bg-neutral-50" : "bg-white"}`}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-24">
            {/* Section Header */}
            <div className="grid lg:grid-cols-2 gap-12 items-end mb-10">
              <div>
                <div className="font-mono text-[11px] tracking-[0.15em] text-neutral-400 mb-5">
                  {service.number}
                </div>
                <div className="font-mono text-[11px] tracking-[0.18em] text-neutral-400 uppercase mb-3">
                  {service.titleEn}
                </div>
                <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.25]">
                  {service.titleJa}
                </h2>
              </div>
              <p className="text-[14px] text-neutral-500 leading-[2] max-w-[440px] pb-1">
                {service.description}
              </p>
            </div>

            {/* Capabilities Tags */}
            <div className="flex flex-wrap gap-2 mb-14">
              {service.capabilities.map((cap) => (
                <span
                  key={cap}
                  className={`text-[12px] font-medium text-neutral-600 px-4 py-[7px] rounded-full border border-neutral-200 tracking-[0.02em] transition-all hover:border-neutral-900 hover:text-neutral-900 ${
                    index % 2 === 1 ? "bg-neutral-100" : "bg-white"
                  }`}
                >
                  {cap}
                </span>
              ))}
            </div>

            {/* Service Body */}
            <div className="grid lg:grid-cols-[35%_1fr] gap-14 items-start">
              {/* Left - Text Content */}
              <div>
                <p className="text-[20px] font-semibold text-neutral-900 tracking-[-0.01em] leading-[1.6] mb-4 whitespace-pre-line">
                  {service.leftHeadline}
                </p>
                <p className="text-[13px] text-neutral-500 leading-[2] mb-9">
                  {service.leftText}
                </p>
                <div className="flex gap-8">
                  {service.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-[32px] font-bold text-neutral-900 tracking-[-0.03em] leading-[1.2]">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-1 tracking-[0.02em]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Workflow Card */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
                    <span className="font-mono text-[11px] tracking-[0.15em] text-neutral-400 uppercase">
                      Workflow example
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-neutral-500 bg-neutral-100 px-3.5 py-1.5 rounded-full uppercase">
                    {service.workflowBadge}
                  </span>
                </div>

                {/* Workflow Steps Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {service.workflow.map((item, idx) => (
                    <div
                      key={item.step}
                      className="relative bg-neutral-50 border border-neutral-200 rounded-lg p-4 group hover:border-neutral-300 transition-colors"
                    >
                      <span className="font-mono text-[9px] text-neutral-300 tracking-[0.08em] absolute top-2 left-3">
                        {item.step}
                      </span>
                      <div className="pt-4">
                        <div className="text-[12px] font-semibold text-neutral-900 mb-1">
                          {item.title}
                        </div>
                        <div className="text-[10px] text-neutral-500">
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Failure Pattern Section */}
      <section className="bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-28">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="w-8 h-px bg-neutral-300" />
              <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">
                Common failures
              </span>
              <span className="w-8 h-px bg-neutral-300" />
            </div>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.3]">
              DX・AI導入の失敗パターン
            </h2>
          </div>

          <div className="grid lg:grid-cols-[1fr_40px_1fr] gap-0 items-start max-w-[960px] mx-auto">
            {/* Left - Typical Approach */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-9">
              <div className="font-mono text-[10px] tracking-[0.12em] text-neutral-400 uppercase mb-2">
                Typical approach
              </div>
              <div className="text-[18px] font-semibold text-neutral-900 mb-6">
                上手くいかないアプローチ
              </div>

              <div className="space-y-4">
                {[
                  { title: "とりあえずAI導入から考える", desc: "目的が曖昧なままエージェントを導入" },
                  { title: "業務プロセスはそのまま", desc: "既存の業務にAIを載せるだけ" },
                  { title: "成果が出ない・現場にのらない", desc: "現場に定着せず、投資が無駄になる" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-neutral-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-[11px] text-neutral-400">{idx + 1}</span>
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-neutral-900 mb-0.5">{item.title}</div>
                      <div className="text-[12px] text-neutral-500 leading-[1.7]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VS Divider */}
            <div className="hidden lg:flex items-center justify-center h-full">
              <span className="font-mono text-[10px] tracking-[0.1em] text-neutral-400 [writing-mode:vertical-lr]">
                VS
              </span>
            </div>

            {/* Right - Lat91 Approach */}
            <div className="bg-neutral-900 rounded-2xl p-9 text-white">
              <div className="font-mono text-[10px] tracking-[0.12em] text-neutral-500 uppercase mb-2">
                Lat91 approach
              </div>
              <div className="text-[18px] font-semibold mb-6">
                Lat91のアプローチ
              </div>

              <div className="space-y-4">
                {[
                  { title: "現場を理解し、解くべき課題を特定する", desc: "経営・事業・組織の観点から設計する" },
                  { title: "解決されるオペレーションを実装する", desc: "成果を完遂する労働力として稼働させる" },
                  { title: "自律的に改善可能な状態まで伴走する", desc: "結果を学び、精度と効率を自動でチューニング" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-neutral-700 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-[11px] text-neutral-400">{idx + 1}</span>
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold mb-0.5">{item.title}</div>
                      <div className="text-[12px] text-neutral-400 leading-[1.7]">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-[15px] text-neutral-500 leading-[2] max-w-[640px] mx-auto mt-14">
            私たちの役割は、AIを使っていただくことではなく、<br />
            <strong className="text-neutral-900 font-semibold">本当の課題を特定し、解決し、事業を成長させること</strong>です。
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-28">
          <div className="text-center mb-18">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="w-8 h-px bg-neutral-300" />
              <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">
                Process
              </span>
              <span className="w-8 h-px bg-neutral-300" />
            </div>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.3]">
              支援実行プロセス
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 relative"
              >
                <div className="text-[56px] font-bold text-neutral-100 leading-none tracking-[-0.04em] mb-6">
                  {step.number}
                </div>
                <div className="text-[20px] font-bold text-neutral-900 mb-2.5">
                  {step.title}
                </div>
                <div className="text-[13px] text-neutral-500 leading-[1.8] mb-5 whitespace-pre-line">
                  {step.description}
                </div>
                <div className="font-mono text-[11px] text-neutral-400 tracking-[0.05em]">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 md:px-12 bg-neutral-50 border-t border-neutral-200">
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

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PhilosophyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-28">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-neutral-300" />
            <span className="font-mono text-[11px] tracking-[0.15em] text-neutral-400 uppercase">Philosophy</span>
          </div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.15] max-w-[700px]">
            企業理念
          </h1>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-neutral-300" />
                <span className="font-mono text-[11px] tracking-[0.15em] text-neutral-400 uppercase">CEO Message</span>
              </div>
              <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.3] mb-8">
                AIで、経営と現場を<br />ひとつにする。
              </h2>
              <div className="space-y-6 text-[14px] text-neutral-600 leading-[2] max-w-[540px]">
                <p>
                  私たちは、AIを単なる効率化ツールではなく、企業の意思決定と実行を根本から変革するパートナーとして位置づけています。
                </p>
                <p>
                  経営層の戦略的判断と現場の実行力。この二つをシームレスにつなぐことで、企業は真の競争力を手にすることができます。私たちのAIソリューションは、そのブリッジとなることを目指しています。
                </p>
                <p>
                  DXの成功には、テクノロジーだけでなく、組織全体の変革への意志が必要です。私たちは、その変革を支援するパートナーとして、お客様と共に歩んでいきます。
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-neutral-200">
                <div className="text-[13px] text-neutral-500 mb-1">代表取締役CEO</div>
                <div className="text-[18px] font-bold text-neutral-900">田中 太郎</div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-neutral-100 rounded-2xl overflow-hidden aspect-[4/5]">
                <div className="w-full h-full flex items-center justify-center text-neutral-300">
                  <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-neutral-300" />
              <span className="font-mono text-[11px] tracking-[0.15em] text-neutral-400 uppercase">Our Mission</span>
              <div className="w-8 h-[1px] bg-neutral-300" />
            </div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.3]">
              AIの力で、<br />企業と個人の可能性を拡張する
            </h2>
          </div>
          <div className="max-w-[640px] mx-auto text-center">
            <p className="text-[14px] text-neutral-600 leading-[2]">
              私たちのミッションは、AIテクノロジーを通じて、企業の成長と個人の能力拡張を同時に実現すること。単なる自動化ではなく、人間の創造性と判断力を増幅させるAIの開発に取り組んでいます。
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-neutral-300" />
              <span className="font-mono text-[11px] tracking-[0.15em] text-neutral-400 uppercase">Our Values</span>
              <div className="w-8 h-[1px] bg-neutral-300" />
            </div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.3]">
              私たちが大切にしていること
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
              <div className="text-[11px] font-mono tracking-[0.1em] text-neutral-400 mb-4">01</div>
              <h3 className="text-[18px] font-bold text-neutral-900 mb-4">
                技術への徹底的なこだわり
              </h3>
              <p className="text-[13px] text-neutral-500 leading-[1.9]">
                最先端のAI技術を常に追求し、実用的かつ革新的なソリューションを開発します。
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
              <div className="text-[11px] font-mono tracking-[0.1em] text-neutral-400 mb-4">02</div>
              <h3 className="text-[18px] font-bold text-neutral-900 mb-4">
                本質的な課題解決
              </h3>
              <p className="text-[13px] text-neutral-500 leading-[1.9]">
                表面的な効率化ではなく、ビジネスの根本的な課題を見極め、真の価値を提供します。
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
              <div className="text-[11px] font-mono tracking-[0.1em] text-neutral-400 mb-4">03</div>
              <h3 className="text-[18px] font-bold text-neutral-900 mb-4">
                継続的な進化
              </h3>
              <p className="text-[13px] text-neutral-500 leading-[1.9]">
                市場の変化とお客様のニーズに応じて、常に学習し、進化し続けます。
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
              <div className="text-[11px] font-mono tracking-[0.1em] text-neutral-400 mb-4">04</div>
              <h3 className="text-[18px] font-bold text-neutral-900 mb-4">
                透明性と信頼
              </h3>
              <p className="text-[13px] text-neutral-500 leading-[1.9]">
                AIの判断プロセスを可視化し、お客様との信頼関係を構築します。
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
              <div className="text-[11px] font-mono tracking-[0.1em] text-neutral-400 mb-4">05</div>
              <h3 className="text-[18px] font-bold text-neutral-900 mb-4">
                人間中心のAI
              </h3>
              <p className="text-[13px] text-neutral-500 leading-[1.9]">
                テクノロジーは人間を補完するもの。人の創造性を最大化するAIを目指します。
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
              <div className="text-[11px] font-mono tracking-[0.1em] text-neutral-400 mb-4">06</div>
              <h3 className="text-[18px] font-bold text-neutral-900 mb-4">
                社会への貢献
              </h3>
              <p className="text-[13px] text-neutral-500 leading-[1.9]">
                AIの力で、より良い社会の実現に貢献することを使命としています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

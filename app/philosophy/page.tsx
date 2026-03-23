// Philosophy page - direct content, no dynamic imports
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PhilosophyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      
      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[11px] tracking-[0.15em] text-neutral-400 uppercase mb-4">
                CEO Message
              </div>
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.3] mb-8">
                経営層の決定から<br />現場の実行まで、<br />AIが業務全体を<br />最適化します。
              </h2>
              <p className="text-[14px] text-neutral-500 leading-[2] max-w-[440px]">
                DXの成功には、経営層の適切な判断と現場の実行力が不可欠。AIはその双方を支援し、企業全体の競争力向上を実現します。
              </p>
            </div>
            <div className="relative">
              <div className="bg-neutral-100 rounded-xl overflow-hidden aspect-square" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-[0.15em] text-neutral-400 uppercase mb-4">
              Our Values
            </div>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.3] mb-8">
              企業と社会の成長を<br />同時に実現する
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-[16px] font-bold text-neutral-900 mb-3">
                技術への徹底的なこだわり
              </h3>
              <p className="text-[13px] text-neutral-500 leading-[1.8]">
                最先端のAI技術を駆使し、真に実用的なソリューションを開発。
              </p>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-[16px] font-bold text-neutral-900 mb-3">
                顧客の本質的課題へのフォーカス
              </h3>
              <p className="text-[13px] text-neutral-500 leading-[1.8]">
                表面的な効率化ではなく、根本的な課題解決を目指します。
              </p>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-8">
              <h3 className="text-[16px] font-bold text-neutral-900 mb-3">
                継続的な成長と学習
              </h3>
              <p className="text-[13px] text-neutral-500 leading-[1.8]">
                市場とユーザーからの学習を常に続け、進化し続けます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-[0.15em] text-neutral-400 uppercase mb-4">
              Our Mission
            </div>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.3]">
              AIの力で、<br />企業と個人の無限の可能性を開く
            </h2>
          </div>

          <div className="max-w-[600px] mx-auto text-center">
            <p className="text-[14px] text-neutral-500 leading-[2] mb-8">
              単なるツールではなく、パートナーとしてのAI。企業の成長段階に応じた支援を行い、個々の従業員のポテンシャルを最大限に引き出します。
            </p>
            <p className="text-[14px] text-neutral-500 leading-[2]">
              私たちは、AIと人間が協働し、より良い未来を創造する社会の実現を目指しています。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

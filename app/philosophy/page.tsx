import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PhilosophyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header variant="light" />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 lg:px-20 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4 mb-9">
          <div className="w-12 h-px bg-neutral-900" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">Philosophy</span>
        </div>
        <h1 className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.25] tracking-[-0.03em] text-neutral-900">
          AI時代に、<br />人間の意志と創造が輝く世界を創る
        </h1>
        <p className="text-[15px] text-neutral-500 leading-[2] max-w-[540px] mt-8">
          テクノロジーが人の可能性を拡張する時代。私たちは、AIに任せられることを正しく任せ、<br />
          人間が持っている「意志」と「創造」に集中できる世界を目指しています。
        </p>
      </section>

      {/* CEO Message */}
      <section className="border-t border-neutral-200 px-6 lg:px-20 py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-neutral-300" />
              <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">Message</span>
            </div>
            <h2 className="text-[clamp(24px,3vw,32px)] font-bold tracking-[-0.02em] leading-[1.4] text-neutral-900">代表メッセージ</h2>
          </div>
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <div className="relative w-full max-w-[280px] aspect-[3/4] bg-neutral-100 rounded-lg overflow-hidden">
                <img src="/images/ceo.jpg" alt="CEO" className="w-full h-full object-cover" />
              </div>
              <div className="mt-5">
                <p className="text-[11px] text-neutral-400 tracking-[0.05em] uppercase mb-1">CEO &amp; Founder</p>
                <p className="text-[18px] font-bold text-neutral-900 tracking-[0.02em]">稲葉 幸太郎</p>
              </div>
            </div>
            <div className="space-y-[18px] text-[14px] text-neutral-600 leading-[1.85]">
              <p>人類にとって、かつてない時代がやってきました。誰もが創れる。届けられる。届かなかった知識に手が届く。</p>
              <p>そして、従来のチャットボットではなく、一度セットアップすれば、24時間自律的に業務と改善を繰り返すAIエージェントが誕生しました。</p>
              <p>これから築くべき未来は、AIファーストの時代ではなく、<span className="font-bold text-neutral-900">ヒューマンファーストの時代</span>だと、僕たちは信じています。</p>
              <p>生産のために自分らしさを消耗させる必要がなくなり、何かを生み出すこと、自分らしくいることが、両立する。</p>
              <p>AIが実務の99%を担っていく時代。人間は、最も尊い1%の意志と創造だけに向き合える。何を美しいと感じ、何に怒り、何を選ぶか。</p>
              <p>もし今の仕事のほとんどがなくなったとして、僕たちは何に集中するだろう。誰の代わりでもない、自分にしか生み出せない価値はなんだろうか。</p>
              <p>僕たちはその瞬間を創り、純度の高い創造で溢れる世界を目指してます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin of Name */}
      <section className="border-t border-neutral-200 px-6 lg:px-20 py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-neutral-300" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">Origin of Name</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold tracking-[-0.02em] leading-[1.3] mb-8 text-neutral-900">
                社名に込めた思い
              </h2>
              <div className="space-y-6 text-[14px] text-neutral-600 leading-[1.9]">
                <p><span className="font-bold text-neutral-900">Lat91</span>という社名は、地球の緯度が90度で終わることに由来しています。91度目は、地図上に存在しない。まだ誰も見たことのない景色。</p>
                <p>90度までをAIに正しく担わせ、みんなで91度目に立つ。私は、その景色を見たいしつくりたい。だからこの会社を創りました。</p>
              </div>
            </div>
            <div className="flex items-start justify-center">
              <div className="w-full max-w-[280px]">
                <svg viewBox="0 0 200 220" className="w-full h-auto">
                  <circle cx="100" cy="110" r="80" fill="none" stroke="#e5e5e5" strokeWidth="1" />
                  <ellipse cx="100" cy="110" rx="80" ry="20" fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
                  <ellipse cx="100" cy="110" rx="80" ry="40" fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
                  <ellipse cx="100" cy="110" rx="80" ry="60" fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
                  <line x1="100" y1="30" x2="100" y2="190" stroke="#e5e5e5" strokeWidth="0.5" />
                  <ellipse cx="100" cy="110" rx="20" ry="80" fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
                  <ellipse cx="100" cy="110" rx="50" ry="80" fill="none" stroke="#e5e5e5" strokeWidth="0.5" />
                  <line x1="100" y1="30" x2="160" y2="30" stroke="#d4d4d4" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="100" cy="30" r="3" fill="none" stroke="#d4d4d4" strokeWidth="1" />
                  <circle cx="160" cy="30" r="3" fill="none" stroke="#d4d4d4" strokeWidth="1" />
                  <text x="165" y="33" fontSize="10" fill="#a3a3a3" fontFamily="monospace">91</text>
                  <line x1="100" y1="50" x2="140" y2="50" stroke="#d4d4d4" strokeWidth="0.5" strokeDasharray="2 2" />
                  <text x="145" y="53" fontSize="8" fill="#d4d4d4" fontFamily="monospace">90 N</text>
                  <text x="100" y="210" fontSize="8" fill="#a3a3a3" textAnchor="middle" fontFamily="system-ui">The 91st degree does not exist on any map.</text>
                  <text x="100" y="220" fontSize="8" fill="#a3a3a3" textAnchor="middle" fontFamily="system-ui">That is exactly why we go there.</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-neutral-200 px-6 lg:px-20 py-24 lg:py-32 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-10 h-px bg-neutral-300" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">Mission</span>
          <span className="w-10 h-px bg-neutral-300" />
        </div>
        <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.5] tracking-[-0.02em] max-w-[600px] mx-auto text-neutral-900">
          人間の意志と創造が<br />
          輝く世界を創る
        </h2>
      </section>

      {/* Values */}
      <section className="bg-neutral-900 text-white px-6 lg:px-20 py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-10 h-px bg-neutral-600" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-500 uppercase">Value</span>
            <span className="w-10 h-px bg-neutral-600" />
          </div>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-center mb-16 tracking-[-0.02em]">私たちの価値観</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Be True", subtitle: "純度を大切に", desc: "純粋な意志でコトに向き合い、自らの内なる声に真っ直ぐに従うこと。" },
              { num: "02", title: "Stay Kind", subtitle: "優しくあること", desc: "相手を深く尊重し、共に歩むこと。巧拙は抜脱に励かす。" },
              { num: "03", title: "Build, Don't Decorate", subtitle: "中身を大切に", desc: "本当に価値のある本質を泥臭く積み上げること。見せかけの完成度より、実を伴う力強さを。" },
            ].map((value) => (
              <div key={value.num} className="bg-neutral-800/50 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-6 right-6 text-[64px] font-bold text-neutral-700/30 leading-none">{value.num}</div>
                <div className="relative">
                  <h3 className="text-[20px] font-bold mb-1">{value.title}</h3>
                  <p className="text-[12px] text-neutral-400 mb-4">{value.subtitle}</p>
                  <p className="text-[13px] text-neutral-400 leading-[1.8]">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

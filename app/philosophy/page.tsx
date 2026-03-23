import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PhilosophyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header variant="light" />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-neutral-300" />
            <span className="text-[11px] tracking-[0.2em] text-neutral-400 uppercase">Philosophy</span>
          </div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-bold leading-[1.3] tracking-[-0.02em] text-neutral-900">
            AI時代に、<br />
            人間の意志と創造が輝く世界を創る
          </h1>
          <p className="text-[15px] text-neutral-500 leading-[2] mt-8">
            テクノロジーが人の可能性を拡張する時代。私たちは、AIに任せられることを正しく任せ、<br />人間が持っている「意志」と「創造」に集中できる世界を目指しています。
          </p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-neutral-300" />
            <span className="text-[11px] tracking-[0.2em] text-neutral-400 uppercase">Message</span>
          </div>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold tracking-[-0.02em] leading-[1.4] text-neutral-900 mb-12">
            代表メッセージ
          </h2>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            <div>
              <div className="aspect-[3/4] bg-neutral-100 rounded-sm overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop"
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] text-neutral-400 tracking-[0.05em] uppercase">CEO & Founder</p>
              <p className="text-[15px] font-bold text-neutral-900 mt-1">稲葉 幸太郎</p>
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
      <section className="border-t border-neutral-200 py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-neutral-300" />
            <span className="text-[11px] tracking-[0.2em] text-neutral-400 uppercase">Origin of Name</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold tracking-[-0.02em] leading-[1.3] mb-8 text-neutral-900">
                社名に込めた思い
              </h2>
              <div className="space-y-6 text-[14px] text-neutral-600 leading-[1.85]">
                <p><span className="font-bold text-neutral-900">Lat91</span>という社名は、地球の緯度が90度で終わることに由来しています。91度目は、地図上に存在しない。まだ誰も見たことのない景色。</p>
                <p>90度までをAIに正しく担わせ、みんなで91度目に立つ。私は、その景色を見たいしつくりたい。だからこの会社を創りました。</p>
              </div>
            </div>
            <div className="flex items-start justify-center -mt-8">
              <svg width="384" height="456" viewBox="0 0 680 520">
                <defs><clipPath id="globe-clip"><circle cx="340" cy="240" r="180"/></clipPath></defs>
                <circle cx="340" cy="240" r="184" fill="none" stroke="#73726c" strokeWidth="0.3" opacity="0.15"/>
                <circle cx="340" cy="240" r="180" fill="#f5f4ed" stroke="#73726c" strokeWidth="1" opacity="0.9"/>
                <g clipPath="url(#globe-clip)" fill="none" stroke="#73726c" strokeWidth="0.4" opacity="0.2">
                  <ellipse cx="340" cy="240" rx="180" ry="180"/>
                  <ellipse cx="340" cy="240" rx="180" ry="173.9"/>
                  <ellipse cx="340" cy="193" rx="180" ry="50"/>
                  <ellipse cx="340" cy="287" rx="180" ry="50"/>
                  <ellipse cx="340" cy="167" rx="150" ry="36"/>
                  <ellipse cx="340" cy="313" rx="150" ry="36"/>
                  <ellipse cx="340" cy="144" rx="108" ry="22"/>
                  <ellipse cx="340" cy="336" rx="108" ry="22"/>
                  <ellipse cx="340" cy="108" rx="56" ry="10"/>
                  <ellipse cx="340" cy="372" rx="56" ry="10"/>
                </g>
                <g clipPath="url(#globe-clip)" fill="none" stroke="#73726c" strokeWidth="0.4" opacity="0.15">
                  <ellipse cx="340" cy="240" rx="45" ry="180"/>
                  <ellipse cx="340" cy="240" rx="90" ry="180"/>
                  <ellipse cx="340" cy="240" rx="135" ry="180"/>
                  <line x1="340" y1="60" x2="340" y2="420"/>
                </g>
                <ellipse cx="340" cy="84" rx="28" ry="5" fill="none" stroke="#73726c" strokeWidth="1.5" opacity="0.6"/>
                <circle cx="340" cy="60" r="3.5" fill="#73726c" opacity="0.7"/>
                <text x="370" y="68" fill="#3d3d3a" fontFamily="sans-serif" fontSize="14" fontWeight="500" opacity="0.6">{"90\u00B0N"}</text>
                <g opacity="0.9">
                  <path d="M 295 38 Q 318 20, 340 18 Q 362 20, 385 38" fill="none" stroke="#73726c" strokeWidth="1.8" strokeDasharray="4 3"/>
                  <circle cx="340" cy="16" r="5" fill="none" stroke="#73726c" strokeWidth="1.5"/>
                  <circle cx="340" cy="16" r="1.5" fill="#73726c"/>
                </g>
                <text x="398" y="22" fill="#141413" fontFamily="sans-serif" fontSize="16" fontWeight="600" opacity="0.9">{"91\u00B0"}</text>
                <line x1="340" y1="56" x2="340" y2="24" stroke="#73726c" strokeWidth="0.8" opacity="0.35" strokeDasharray="2 2"/>
                <text x="340" y="470" textAnchor="middle" fill="#3d3d3a" fontFamily="sans-serif" fontSize="12" opacity="0.4">The 91st degree does not exist on any map.</text>
                <text x="340" y="488" textAnchor="middle" fill="#3d3d3a" fontFamily="sans-serif" fontSize="12" opacity="0.4">That is exactly why we go there.</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-neutral-200 py-24 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-neutral-300" />
            <span className="text-[11px] tracking-[0.2em] text-neutral-400 uppercase">Mission</span>
            <div className="w-8 h-[1px] bg-neutral-300" />
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.5] tracking-[-0.02em] max-w-[600px] mx-auto text-neutral-900">
            人間の意志と創造が<br />
            輝く世界を創る
          </h2>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-900 py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-neutral-600" />
            <span className="text-[11px] tracking-[0.2em] text-neutral-500 uppercase">Value</span>
            <div className="w-8 h-[1px] bg-neutral-600" />
          </div>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-white text-center mb-16">
            私たちの価値観
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Be True", subtitle: "純度を大切に", desc: "純粋な意志でコトに向き合い、自らの内なる声に真っ直ぐに従うこと。" },
              { num: "02", title: "Stay Kind", subtitle: "優くあること", desc: "相手を深く尊重し、共に歩むこと。巧拙は抜誠に勝かず。" },
              { num: "03", title: "Build, Don't Decorate", subtitle: "中身を大切に", desc: "本当に価値のある本質を泥臭く積み上げること。見せかけの完成度より、実を伴う力強さを。" },
            ].map((value) => (
              <div key={value.num} className="bg-white rounded-sm p-8 relative">
                <span className="absolute top-6 right-6 text-[64px] font-bold text-neutral-100 leading-none">{value.num}</span>
                <h3 className="text-[20px] font-bold text-neutral-900 mb-1">{value.title}</h3>
                <p className="text-[12px] text-neutral-400 mb-4">{value.subtitle}</p>
                <p className="text-[13px] text-neutral-600 leading-[1.8]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

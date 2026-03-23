import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function PhilosophyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-neutral-300" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">Philosophy</span>
          </div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.3]">
            AI時代に、<br />
            人間の意志と創造が輝く世界を創る
          </h1>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
            {/* CEO Photo */}
            <div>
              <div className="aspect-[3/4] bg-neutral-100 rounded-sm overflow-hidden mb-4">
                <Image
                  src="/ceo-photo.jpg"
                  alt="稲葉 幸太郎"
                  width={280}
                  height={373}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-mono text-[10px] tracking-[0.1em] text-neutral-400 uppercase mb-1">
                CEO & Founder
              </div>
              <div className="text-[18px] font-bold text-neutral-900 tracking-[0.02em]">
                稲葉 幸太郎
              </div>
            </div>

            {/* CEO Message */}
            <div className="text-[14px] text-neutral-600 leading-[2.2] space-y-6">
              <p>
                人類にとって、かつてない時代がやってきました。<br />
                誰もが創れる。届けられる。届かなかった知識に手が届く。
              </p>
              <p>
                そして、従来のチャットボットではなく、一度セットアップすれば、<br />
                24時間自律的に業務と改善を繰り返すAIエージェントが誕生しました。
              </p>
              <p>
                これから築くべき未来は、AIファーストの時代ではなく、<br />
                <span className="font-bold text-neutral-900">ヒューマンファーストの時代</span>だと、僕たちは信じています。
              </p>
              <p>
                生産のために自分らしさを消耗させる必要がなくなり、<br />
                何かを生み出すことこと、自分らしくいることが、両立する。
              </p>
              <p>
                AIが実務の99%を担っていく時代、<br />
                人間は、最も尊い1%の意志と創造だけに向き合える。
              </p>
              <p>
                何を美しいと感じ、何に怒り、何を選ぶか。
              </p>
              <p>
                もし今の仕事のほとんどがなくなったとして、僕たちは何に集中するだろう。<br />
                誰の代わりでもない、自分にしか生み出せない価値はなんだろうか。
              </p>
              <p>
                僕たちはその瞬間を創り、純度の高い創造で溢れる世界を目指してます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin of Name Section */}
      <section className="py-20 px-6 border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-neutral-300" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">Origin of Name</span>
          </div>
          
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-center">
            <div>
              <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.4] mb-8">
                社名に込めた想い。
              </h2>
              <div className="text-[14px] text-neutral-600 leading-[2.2] space-y-4">
                <p>
                  Lat91という社名は、地球の緯度が90度で終わることに由来しています。<br />
                  91度目は、地図上に存在しない、まだ誰も見たことのない景色。
                </p>
                <p>
                  90度までをAIに正しく担わせ、みんなで91度目に立つ。<br />
                  私は、その景色を見たいしつくりたい。だからこの会社を創りました。
                </p>
              </div>
            </div>
            
            {/* Circular Diagram */}
            <div className="flex justify-center">
              <div className="w-[200px] h-[200px] rounded-full border-2 border-neutral-200 flex items-center justify-center relative">
                <div className="text-center px-6">
                  <div className="text-[10px] text-neutral-400 leading-[1.6]">It is okay to stand at 91 degrees.</div>
                  <div className="text-[10px] text-neutral-400 leading-[1.6]">That is where we create the future.</div>
                </div>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-px bg-neutral-300" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-400 uppercase">Mission</span>
            <div className="w-12 h-px bg-neutral-300" />
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-neutral-900 tracking-[-0.02em] leading-[1.4]">
            人間の意志と創造が<br />
            輝く世界を創る
          </h2>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-neutral-600" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-500 uppercase">Value</span>
            <div className="w-12 h-px bg-neutral-600" />
          </div>
          <h2 className="text-[clamp(24px,3vw,32px)] font-bold text-white tracking-[-0.02em] text-center mb-16">
            私たちの価値観
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Value 1 */}
            <div className="bg-neutral-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-6 right-6 text-[72px] font-bold text-neutral-700/50 leading-none">
                01
              </div>
              <div className="relative">
                <h3 className="text-[20px] font-bold text-white mb-2">Be True</h3>
                <p className="text-[13px] text-neutral-400 mb-6">純粋を大切に</p>
                <p className="text-[13px] text-neutral-400 leading-[1.9]">
                  純粋な意志でコトに向き合い、自らの内なる声に真っ直ぐに従うこと。
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-neutral-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-6 right-6 text-[72px] font-bold text-neutral-700/50 leading-none">
                02
              </div>
              <div className="relative">
                <h3 className="text-[20px] font-bold text-white mb-2">Stay Kind</h3>
                <p className="text-[13px] text-neutral-400 mb-6">優くあること</p>
                <p className="text-[13px] text-neutral-400 leading-[1.9]">
                  相手を深く尊重し、共に歩むこと。巧拙は抜誠に励かす。
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="bg-neutral-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-6 right-6 text-[72px] font-bold text-neutral-700/50 leading-none">
                03
              </div>
              <div className="relative">
                <h3 className="text-[20px] font-bold text-white mb-2">Build, Don&apos;t Decorate</h3>
                <p className="text-[13px] text-neutral-400 mb-6">中身を大切に</p>
                <p className="text-[13px] text-neutral-400 leading-[1.9]">
                  本当に価値のある本質を追求し積み上げること。見せかけの完成度より、実を伴う力強さを。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

"use client"

export function StrengthSection() {
  return (
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
  )
}

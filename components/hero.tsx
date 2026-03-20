"use client"

import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/hero-ai-human.png"
          alt="Human and AI walking together"
          fill
          className="object-cover animate-fade-in-image"
          priority
        />
      </div>

      {/* Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[rgba(5,14,16,0.7)] via-[rgba(5,14,16,0.3)] to-transparent z-[1]" />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[rgba(5,14,16,0.5)] via-[rgba(5,14,16,0.15)] to-transparent z-[1]" />
      <div className="absolute left-0 right-0 bottom-0 h-[40%] bg-gradient-to-t from-[rgba(5,14,16,0.85)] via-[rgba(5,14,16,0.4)] to-transparent z-[1]" />
      <div className="absolute left-0 right-0 top-0 h-[15%] bg-gradient-to-b from-[rgba(5,14,16,0.6)] to-transparent z-[1]" />
      
      {/* Scanlines */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
        }}
      />

      {/* Center Divider */}
      <div className="absolute left-1/2 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-[rgba(232,237,233,0.15)] to-transparent z-[2] opacity-0 animate-fade-in animation-delay-800" />

      {/* Split Text */}
      <div className="absolute z-[2] w-full h-full flex pointer-events-none">
        {/* Left Side - Human 1% */}
        <div className="flex-1 flex flex-col justify-center items-start px-[5vw]">
          <div className="font-mono text-[clamp(10px,1.2vw,14px)] tracking-[0.3em] uppercase text-[rgba(232,237,233,0.5)] mb-3 opacity-0 animate-slide-up animation-delay-1000">
            The will to create
          </div>
          <div className="font-sans font-bold text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-[-0.03em] text-[var(--off-white)] opacity-0 animate-slide-up animation-delay-1200">
            <span className="text-[clamp(60px,10vw,160px)]">1</span>
            <span className="text-[clamp(28px,4vw,60px)] opacity-60 align-super -ml-[0.05em]">%</span>
            <span className="block text-[clamp(16px,2.5vw,36px)] font-normal tracking-[0.15em] mt-1 opacity-70">
              Human
            </span>
          </div>
        </div>

        {/* Right Side - AI 99% */}
        <div className="flex-1 flex flex-col justify-center items-end px-[5vw]">
          <div className="font-mono text-[clamp(10px,1.2vw,14px)] tracking-[0.3em] uppercase text-[rgba(232,237,233,0.5)] mb-3 opacity-0 animate-slide-up animation-delay-1000">
            Infinite capability
          </div>
          <div className="font-sans font-bold text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-[-0.03em] text-[rgba(232,237,233,0.7)] opacity-0 animate-slide-up animation-delay-1400">
            <span className="text-[clamp(60px,10vw,160px)]">99</span>
            <span className="text-[clamp(28px,4vw,60px)] opacity-60 align-super -ml-[0.05em]">%</span>
            <span className="block text-[clamp(16px,2.5vw,36px)] font-normal tracking-[0.15em] mt-1 opacity-70">
              AI
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-[3] py-[3vh] px-[5vw] flex justify-between items-center">
        <div className="font-mono text-[clamp(16px,2vw,22px)] font-bold tracking-[0.1em] opacity-0 animate-fade-in animation-delay-500">
          lat91
        </div>
        <ul className="flex gap-[3vw] list-none opacity-0 animate-fade-in animation-delay-700">
          {['About', 'Services', 'Work', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="font-mono text-[clamp(10px,1vw,13px)] tracking-[0.15em] uppercase text-[rgba(232,237,233,0.5)] hover:text-[var(--off-white)] transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Content - Tagline */}
      <div className="absolute bottom-0 left-0 right-0 z-[3] px-[5vw] pb-[5vh] text-center">
        <p className="font-[var(--font-noto-sans-jp)] font-light text-[clamp(14px,2vw,24px)] tracking-[0.15em] text-[rgba(232,237,233,0.8)] opacity-0 animate-slide-up animation-delay-1800">
          <em className="not-italic text-[var(--off-white)] font-medium">人間の意志</em>
          と
          <em className="not-italic text-[var(--off-white)] font-medium">創造性</em>
          が輝く時代を創る
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-[2vh] left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 opacity-0 animate-fade-in animation-delay-2500">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[rgba(232,237,233,0.3)]">
          Scroll
        </span>
        <div className="w-px h-[30px] bg-[rgba(232,237,233,0.2)] relative overflow-hidden">
          <div className="absolute w-full h-1/2 bg-[var(--off-white)] animate-scroll-pulse" />
        </div>
      </div>
    </section>
  )
}

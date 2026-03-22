"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "AIエージェント導入で営業効率が3倍に - 製造業A社の事例",
    category: "Case Study",
    date: "2026.03.15",
    image: "/images/article-1.jpg",
  },
  {
    id: 2,
    title: "2026年のAIトレンド：エージェント型AIが変える企業の働き方",
    category: "Insight",
    date: "2026.03.10",
    image: "/images/article-2.jpg",
  },
  {
    id: 3,
    title: "DX推進における経営課題起点のアプローチとは",
    category: "Column",
    date: "2026.03.05",
    image: "/images/article-3.jpg",
  },
]

export function MediaSection() {
  return (
    <section className="relative bg-[var(--dark-teal)]/30 py-32 px-[5vw]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--light-sage)]/60">
              Media
            </span>
            <h2 className="mt-4 text-[clamp(24px,3.5vw,36px)] font-bold text-[var(--off-white)]">
              最新記事
            </h2>
          </div>
          <Link
            href="/media"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.1em] text-[var(--light-sage)] hover:text-[var(--off-white)] transition-colors group"
          >
            View all
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/media/${article.id}`}
              className="group block"
            >
              <article className="bg-[var(--background)]/60 rounded-lg overflow-hidden border border-[var(--off-white)]/5 hover:border-[var(--light-sage)]/20 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[16/10] bg-[var(--dark-teal)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--mid-teal)]/30 to-[var(--dark-teal)]/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-[11px] tracking-widest text-[var(--off-white)]/30 uppercase">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-[10px] tracking-wider text-[var(--light-sage)]">
                      {article.category}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--off-white)]/40">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-bold text-[var(--off-white)] leading-relaxed group-hover:text-[var(--light-sage)] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 font-mono text-[13px] tracking-[0.1em] text-[var(--light-sage)] hover:text-[var(--off-white)] transition-colors group"
          >
            View all
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

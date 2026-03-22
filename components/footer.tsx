import Link from "next/link"

const navItems = [
  { label: "Philosophy", href: "/philosophy" },
  { label: "Service", href: "/service" },
  { label: "Media", href: "/media" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--off-white)]/10">
      <div className="max-w-[1400px] mx-auto px-[5vw] py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand & Tagline */}
          <div>
            <Link
              href="/"
              className="font-mono text-2xl font-bold tracking-[0.1em] text-[var(--off-white)] hover:opacity-80 transition-opacity"
            >
              Lat91
            </Link>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--off-white)]/60 max-w-md">
              人間の意志と、純度の高い創造が溢れる世界を創る。
            </p>
          </div>

          {/* Navigation & Company Info */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Navigation */}
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--off-white)]/40 mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-[var(--off-white)]/60 hover:text-[var(--off-white)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--off-white)]/40 mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-[14px] text-[var(--off-white)]/60">
                <li>株式会社Lat.91</li>
                <li>東京都港区赤坂3-13-3</li>
                <li>赤坂セントラルビル6F</li>
                <li className="pt-2">代表取締役 稲葉幸太郎</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--off-white)]/10">
          <p className="font-mono text-[11px] tracking-[0.1em] text-[var(--off-white)]/30">
            &copy; 2026 Lat.91 Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

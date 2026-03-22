"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Philosophy", href: "/philosophy" },
  { label: "Service", href: "/service" },
  { label: "Media", href: "/media" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
]

interface HeaderProps {
  variant?: "transparent" | "solid"
}

export function Header({ variant = "transparent" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        variant === "solid"
          ? "bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--off-white)]/10"
          : ""
      }`}
    >
      <nav className="flex justify-between items-center py-6 px-[5vw] max-w-[1800px] mx-auto">
        <Link
          href="/"
          className="font-mono text-[clamp(18px,2vw,24px)] font-bold tracking-[0.1em] text-[var(--off-white)] hover:opacity-80 transition-opacity"
        >
          Lat91
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-mono text-[12px] tracking-[0.15em] uppercase text-[rgba(232,237,233,0.6)] hover:text-[var(--off-white)] transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--off-white)] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--background)]/98 backdrop-blur-md border-b border-[var(--off-white)]/10">
          <ul className="flex flex-col py-6 px-[5vw]">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-4 font-mono text-[14px] tracking-[0.15em] uppercase text-[rgba(232,237,233,0.6)] hover:text-[var(--off-white)] transition-colors duration-300 border-b border-[var(--off-white)]/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

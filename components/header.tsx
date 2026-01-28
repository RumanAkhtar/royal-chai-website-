'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full">
              <Image
                src="/logo.png"
                alt="Royal Chai"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-semibold text-primary hidden sm:inline">
              Royal Chai
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <button
            onClick={() => document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:bg-secondary transition-colors duration-300 hidden sm:block"
          >
            Notify Me
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="#about"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false)
                document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium w-full"
            >
              Notify Me
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

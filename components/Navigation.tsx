'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-sand-50/95 backdrop-blur-sm z-50 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="EcoFairy Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-serif font-light tracking-wide text-sand-900">
              EcoFairy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            <Link href="/" className="text-sm tracking-wider uppercase text-sand-700 hover:text-sand-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm tracking-wider uppercase text-sand-700 hover:text-sand-900 transition-colors">
              About
            </Link>
            <Link href="/pricelist" className="text-sm tracking-wider uppercase text-sand-700 hover:text-sand-900 transition-colors">
              Services
            </Link>
            <Link href="/team" className="text-sm tracking-wider uppercase text-sand-700 hover:text-sand-900 transition-colors">
              Team
            </Link>
          </div>

          <div className="hidden md:block">
            <a
              href="tel:+34607079332"
              className="text-sm tracking-wider uppercase text-sand-900 border-b-2 border-sand-900 hover:border-sand-600 transition-colors pb-1"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-sand-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-sand-50 border-t border-sand-200">
          <div className="px-6 py-6 space-y-4">
            <Link href="/" className="block text-sm tracking-wider uppercase text-sand-700 hover:text-sand-900">
              Home
            </Link>
            <Link href="/about" className="block text-sm tracking-wider uppercase text-sand-700 hover:text-sand-900">
              About
            </Link>
            <Link href="/pricelist" className="block text-sm tracking-wider uppercase text-sand-700 hover:text-sand-900">
              Services
            </Link>
            <Link href="/team" className="block text-sm tracking-wider uppercase text-sand-700 hover:text-sand-900">
              Team
            </Link>
            <a
              href="tel:+34607079332"
              className="block text-sm tracking-wider uppercase text-sand-900 border-b-2 border-sand-900 inline-block pb-1"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

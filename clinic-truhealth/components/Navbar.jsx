'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Team', href: '#doctors' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#F8F6F1]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-tight">
          <span className="font-playfair text-xl font-bold text-[#2D6A4F]">TruHealth Clinic</span>
          <span className="text-[10px] font-semibold tracking-widest text-[#B7935A] uppercase">Kondhwa, Pune</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map(link => (
            <a key={link.href} href={link.href}
              className="text-sm font-medium text-[#1A1A1A] hover:text-[#2D6A4F] transition-colors">
              {link.label}
            </a>
          ))}
          <a href="tel:+918830893118"
            className="ml-2 px-5 py-2 bg-[#2D6A4F] text-white text-sm font-semibold rounded-full hover:bg-[#245c43] transition-colors">
            Call Now
          </a>
        </div>

        <button className="md:hidden text-[#2D6A4F]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#F8F6F1] border-t border-[#B7935A]/20 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {links.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#1A1A1A] hover:text-[#2D6A4F] py-1">
              {link.label}
            </a>
          ))}
          <a href="tel:+918830893118"
            className="mt-1 px-5 py-2 bg-[#2D6A4F] text-white text-sm font-semibold rounded-full text-center">
            Call Now
          </a>
        </div>
      )}
    </header>
  )
}

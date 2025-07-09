'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/overview', label: 'Overview' },
  { href: '/solution', label: 'Solution' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/mentors', label: 'Mentors' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); 

  return (
    <header className="sticky top-0 z-50 w-full bg-black/20 backdrop-blur-lg border-b border-white/20">

      <div className="container grid grid-cols-3 h-20 max-w-screen-2xl items-center">
        
        {/* --- Cột 1: Logo (Căn trái) --- */}
        <div className="justify-self-start">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo to hơn */}
            <img src="/logo.jpeg" alt="Project Logo" className="h-10 w-10 rounded-lg transition-transform group-hover:scale-110" />
            {/* Chữ to và rõ hơn */}
            <span className="hidden font-bold sm:inline-block text-white text-xl">
              GigaScore
            </span>
          </Link>
        </div>

        {/* --- Cột 2: Nav Links (Căn giữa) --- */}
        <nav className="hidden md:flex justify-self-center">
          <ul className="flex items-center gap-8"> 
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm transition-colors duration-300 ${
                    pathname === link.href
                      ? 'font-semibold text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-vpbank-green rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- Cột 3: Button & Menu mobile (Căn phải) --- */}
        <div className="justify-self-end flex items-center gap-4">
          <button className="hidden sm:inline-flex h-10 items-center justify-center rounded-md bg-vpbank-green px-4 py-2 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105">
            Submit Prototype
          </button>
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* --- Menu Mobile (cũng có Active Link) --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-xl pb-4">
          <nav className="flex flex-col items-center gap-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg transition-colors ${
                  pathname === link.href ? 'font-semibold text-vpbank-green' : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full max-w-[200px] mt-4 h-10 rounded-md bg-vpbank-green text-sm font-medium text-white shadow hover:bg-vpbank-green/90">
              Submit Prototype
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
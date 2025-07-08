'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/overview', label: 'Overview' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/solution', label: 'Solution' },
  { href: '/mentors', label: 'Mentors' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full 
                     bg-black/20 backdrop-blur-lg 
                     border-b border-white/20">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.jpeg" alt="Project Logo" className="h-8 w-8 rounded-md" />
          <span className="hidden font-bold sm:inline-block text-white">
            GigaScore
          </span>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-flex h-10 items-center justify-center rounded-md bg-vpbank-green px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-vpbank-green/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
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

      {isMenuOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-xl pb-4">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full max-w-[200px] h-10 rounded-md bg-vpbank-green text-sm font-medium text-white shadow hover:bg-vpbank-green/90">
              Submit Prototype
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
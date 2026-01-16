"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--border)] px-4 md:px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Eralp Çolak</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-[var(--link)] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[var(--link)] transition-colors">About</Link>
          <Link href="/projects" className="hover:text-[var(--link)] transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-[var(--link)] transition-colors">Contact</Link>
          <Link href="/cv" className="hover:text-[var(--link)] transition-colors">View CV</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[var(--text)] hover:text-[var(--link)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 text-sm border-t border-[var(--border)] pt-4">
          <Link href="/" className="hover:text-[var(--link)] transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-[var(--link)] transition-colors" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" className="hover:text-[var(--link)] transition-colors" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="hover:text-[var(--link)] transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/cv" className="hover:text-[var(--link)] transition-colors" onClick={() => setIsOpen(false)}>View CV</Link>
        </div>
      )}
    </nav>
  );
}



"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--border)] px-8 py-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Eralp Çolak</div>
        <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-[var(--link)] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[var(--link)] transition-colors">About</Link>
            <Link href="/projects" className="hover:text-[var(--link)] transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-[var(--link)] transition-colors">Contact</Link>
            <Link href="/cv" className="hover:text-[var(--link)] transition-colors">View CV</Link>
        </div>
    </nav>

  );
}



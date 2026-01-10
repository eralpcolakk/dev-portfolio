"use client";

import { profile } from "../data/profile";

export default function HomePage() {
  return (
    <main className="px-8 py-20 min-h-screen">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[var(--text)]">
          Hi, I'm Excalibur
        </h1>

        <p className="text-[var(--text-muted)] text-lg max-w-2xl leading-relaxed mb-6">
          I build modern web applications using Next.js, TypeScript, Tailwind CSS and more.
        </p>

        <p className="text-[var(--text-muted)] text-lg max-w-2xl leading-relaxed">
          Check out my projects or get in touch if you want to collaborate.
        </p>
      </section>
    </main>
  );
}

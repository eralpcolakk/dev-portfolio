"use client";

export default function AboutPage() {
  return (
    <main className="px-8 py-20 min-h-screen">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-[var(--text)]">
          About Me
        </h1>

        <p className="text-[var(--text-muted)] leading-relaxed max-w-3xl mb-4">
          I'm a developer who enjoys building clean, scalable and modern web applications.
        </p>

        <p className="text-[var(--text-muted)] leading-relaxed max-w-3xl">
          My interests include frontend engineering, backend APIs and UI/UX design.
        </p>
      </section>
    </main>
  );
}

"use client";

import { projects } from "../../data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="px-8 py-20 min-h-screen">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-10">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-[var(--border)] rounded-xl p-6 bg-[var(--card)] hover:bg-[var(--card-hover)] transition-colors shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-2 text-[var(--text)]">
                {project.title}
              </h2>

              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md border border-[var(--tag-border)] bg-[var(--tag-bg)] text-[var(--text-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-sm text-[var(--link)] hover:underline"
                >
                  Visit project →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

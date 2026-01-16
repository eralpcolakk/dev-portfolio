"use client";
/* eslint-disable @next/next/no-img-element */

export default function Contributions() {
  return (
    <section className="px-4 py-20 md:py-32 overflow-hidden flex flex-col items-center">
      <h2 className="text-2xl font-bold text-[var(--text)] mb-10 text-center">
        GitHub Contributions
      </h2>

      <div className="w-full max-w-screen-lg overflow-x-auto flex justify-center custom-scrollbar">
        <div className="min-w-[800px] md:min-w-0">
          <img
            src="https://ghchart.rshah.org/eralpcolakk"
            alt="GitHub contribution chart"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}

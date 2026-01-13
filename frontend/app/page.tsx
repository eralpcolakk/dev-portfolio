"use client";
import Image from "next/image";
import Contributions from "@/components/Contributions";

export default function Home() {
  return (
    <main className="relative px-8 py-20">

      {/* Profil Fotoğrafı */}
      <div className="absolute top-10 right-10">
        <Image
          src="/profile.jpeg"
          alt="Profile photo"
          width={480}
          height={480}
          className="rounded-xl border border-gray-300 dark:border-gray-600 shadow-md"
        />
      </div>

      {/* İçerik */}
      <section>
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600">Eralp</span>
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
          Software Developer — building modern solutions with Next.js & FastAPI.
        </p>
      </section>

      <a
        href="/CV.pdf"
        download
        className="inline-block mt-6 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
      >
        Download CV
      </a>

      <Contributions />

    </main>
  );
}

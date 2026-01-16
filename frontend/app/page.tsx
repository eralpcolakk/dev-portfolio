"use client";
import Image from "next/image";
import Contributions from "@/components/Contributions";

export default function Home() {
  return (
    <main className="relative px-4 md:px-8 py-10 md:py-20 max-w-7xl mx-auto">
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10">

        {/* Fotoğraf */}
        <div className="w-full md:w-[35vw] max-w-[450px] aspect-square relative rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Yazı alanı */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">Eralp</span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Integer id tincidunt sapien, ac accumsan ipsum. Nulla non turpis eget purus efficitur sagittis.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Integer ullamcorper dignissim diam ac laoreet. Maecenas a odio ac dui iaculis hendrerit quis non metus.
            Nunc congue semper metus, nec faucibus purus. Proin turpis orci, finibus et turpis vel, dignissim elementum neque.
            Sed pretium libero sed mauris iaculis, ac vestibulum eros convallis.
            Nulla porta augue tellus, in sollicitudin velit placerat cursus. Fusce molestie risus eu efficitur pulvinar.
            Phasellus ac imperdiet ipsum. Nullam placerat dolor lectus, eu posuere sapien pulvinar feugiat.
            Proin id pellentesque justo. Duis sit amet ex et augue tristique finibus sit amet eu sapien.
            Donec tempus est ac tortor efficitur molestie. Donec sed varius nisl.
          </p>

          <a
            href="/CV.pdf"
            download
            className="inline-block mt-8 px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Download CV
          </a>
        </div>
      </section>

      <Contributions />

    </main>
  );
}

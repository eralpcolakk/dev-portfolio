"use client";
import Image from "next/image";
import Contributions from "@/components/Contributions";

export default function Home() {
  return (
    <main className="relative px-8 py-20">
      <section className="flex flex-col md:flex-row items-start gap-10">

        {/* Fotoğraf */}
        <div className="w-[35vw] max-w-[450px] aspect-square relative rounded-xl overflow-hidden">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        {/* Yazı alanı */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600">Eralp</span>
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300">
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
            className="inline-block mt-6 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Download CV
          </a>
        </div>
      </section>

      <Contributions />

    </main>
  );
}

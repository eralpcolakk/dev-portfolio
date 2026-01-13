"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

export default function Contributions() {
  const [scale, setScale] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(1); // mobil
      } else {
        setScale(2); // masaüstü
      }
    };

    handleResize(); // sayfa açıldığında çalıştır
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="px-4 py-64 overflow-hidden">
      <h2 className="text-2xl font-bold text-[var(--text)] mb-10">
        GitHub Contributions
      </h2>

      <div
        className="origin-top-left"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <img
          src="https://ghchart.rshah.org/eralpcolakk"
          alt="GitHub contribution chart"
        />
      </div>
    </section>
  );
}

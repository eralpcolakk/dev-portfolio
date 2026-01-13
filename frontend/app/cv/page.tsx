"use client";

export default function CVPage() {
  return (
    <div className="w-full h-screen pt-16">
      <iframe
        src="/CV.pdf"
        className="w-full h-full border-none"
      />
    </div>
  );
}

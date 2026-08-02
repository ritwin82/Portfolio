"use client";

import { useEffect, useState } from "react";

const links = [
  ["About", "about"],
  ["Education", "education"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
] as const;

export function SiteHeader() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { threshold: 0.3 }
    );

    links.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navigate = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="fixed inset-x-0 top-4 z-40">
      <div className="mx-auto flex h-14 w-[min(1560px,calc(100%-clamp(1.5rem,3vw,4rem)))] items-center justify-between rounded-2xl border border-white/12 bg-black/80 px-5 backdrop-blur-2xl">
        <button
          onClick={() => navigate("about")}
          className="text-sm font-semibold tracking-[.18em] text-white transition hover:text-neutral-300"
        >
          RA<span className="text-neutral-400">.</span>
        </button>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => navigate(id)}
              className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                active === id
                  ? "font-semibold text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {label}
              {active === id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-px bg-white" />
              )}
            </button>
          ))}
        </nav>

        <button
          onClick={() => navigate("contact")}
          className="rounded-full border border-white/20 bg-white px-4 py-2 text-sm font-semibold text-black transition-colors duration-300 hover:bg-neutral-200"
        >
          Let&apos;s talk
        </button>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function ProgressNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex"
    >
      {sections.map(({ id, label }) => (
        <div key={id} className="group relative flex items-center justify-end">
          {/* Tooltip */}
          <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md bg-slate-800/90 px-2.5 py-1 text-xs font-medium text-slate-200 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
            {label}
          </span>
          <button
            aria-label={`Go to ${label}`}
            onClick={() =>
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
            }
            className={`transition-all duration-300 ${
              active === id
                ? "size-3 rounded-full bg-white"
                : "size-2 rounded-full bg-white/20 hover:bg-white/50 hover:scale-125"
            }`}
          />
        </div>
      ))}
    </nav>
  );
}

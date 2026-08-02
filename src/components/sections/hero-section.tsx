"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, BrainCircuit, Braces, Database, Layers3 } from "lucide-react";
import KineticGrid from "@/components/ui/kinetic-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
const nameLetters = [...profile.name];
const focusAreas = [
  [BrainCircuit, "Applied AI", "LLMs · RAG · Agents"],
  [Database, "Data Systems", "Retrieval · Analytics"],
  [Braces, "Product Engineering", "APIs · Interfaces"],
] as const;

export function HeroSection() {
  return (
    <KineticGrid>
      <section
        id="about"
        className="relative flex min-h-svh items-center lg:h-svh lg:overflow-hidden"
      >
        <div className="content-wrap grid w-full items-center gap-10 py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,.65fr)] lg:gap-[clamp(3rem,6vw,7rem)] lg:py-0">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <Badge>Portfolio · 2026</Badge>

            <p className="mt-5 text-[clamp(0.75rem,0.85vw,0.95rem)] font-semibold uppercase tracking-[.22em] text-neutral-400">
              {profile.title}
            </p>

            <h1
              aria-label={profile.name}
              className="name-display shimmer-text mt-4 text-[clamp(3.5rem,6.5vw,7.5rem)] font-bold leading-[.88]"
            >
              {nameLetters.map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 30, rotateX: -60 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.06,
                    type: "spring",
                    stiffness: 140,
                    damping: 14,
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 max-w-2xl text-[clamp(1.05rem,1.25vw,1.3rem)] leading-[1.75] text-slate-300/90"
            >
              {profile.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button className="px-6 py-3 text-base" onClick={() => goTo("projects")}>
                View Projects <ArrowUpRight className="size-4" />
              </Button>
              <Button variant="outline" className="px-6 py-3 text-base" onClick={() => goTo("contact")}>
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column — focus console */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.4, ease: "easeOut" }}
            className="hero-console hidden lg:block"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-[11px] font-semibold uppercase tracking-[.22em] text-neutral-400">
                Selected focus
              </span>
              <span className="flex items-center gap-2 text-[11px] font-medium text-neutral-300">
                <i className="size-1.5 rounded-full bg-white" />
                Available
              </span>
            </div>

            <div className="space-y-5 py-6">
              {focusAreas.map(([Icon, title, detail], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group flex gap-4"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/[.045] transition-colors duration-300 group-hover:border-white/30 group-hover:bg-white/[.08]">
                    <Icon className="size-5 text-neutral-200" />
                  </span>
                  <span>
                    <b className="block text-sm font-semibold text-white">{title}</b>
                    <span className="mt-0.5 block text-sm text-slate-400">{detail}</span>
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4">
              <Layers3 className="size-4 text-neutral-300" />
              <p className="text-sm leading-6 text-slate-400">
                Designing practical AI systems with production-ready foundations.
              </p>
            </div>
          </motion.aside>
        </div>

        {/* Scroll indicator */}
        <button
          aria-label="Scroll to academics"
          onClick={() => goTo("education")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 transition-colors hover:text-white"
        >
          <ArrowDown className="float-slow size-5" />
        </button>
      </section>
    </KineticGrid>
  );
}

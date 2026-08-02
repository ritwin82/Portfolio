"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="content-wrap">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="A collection of systems I've built — from LLM architectures to full-stack AI platforms."
        />

        <div
          aria-label="Projects"
          className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-4"
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.06 }}
              className="glass-card group flex min-h-[330px] w-[min(86vw,440px)] shrink-0 snap-start flex-col p-6 sm:w-[420px]"
            >
              {/* Project number */}
              <span className="inline-flex size-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.05] text-xs font-bold text-neutral-200">
                0{i + 1}
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-neutral-300">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-base leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge
                    key={tech}
                    className="border-white/8 bg-white/[.05] text-slate-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-5 flex gap-4 border-t border-white/6 pt-4 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  <Github className="size-4" />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

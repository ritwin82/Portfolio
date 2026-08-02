"use client";

import { motion } from "framer-motion";
import { Braces } from "lucide-react";
import { techMatrix } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export function TechMatrixSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="content-wrap">
        <SectionHeading
          eyebrow="Technical toolkit"
          title="Tech matrix"
          description="The languages, frameworks, and systems I use to turn ideas into reliable AI products."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {techMatrix.map((group, index) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card group p-5"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl border border-white/12 bg-white/[.04] transition-colors duration-300 group-hover:border-white/30 group-hover:bg-white/[.08]">
                  <Braces className="size-4 text-neutral-200" />
                </span>
                <h3 className="text-[0.95rem] font-semibold tracking-tight text-white">
                  {group.category}
                </h3>
              </div>

              <motion.div
                className="mt-4 flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.skills.map((skill) => (
                  <motion.div key={skill} variants={badgeVariants}>
                    <Badge className="border-white/10 bg-white/[.04] px-2.5 py-1.5 text-slate-300 transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/[.07]">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

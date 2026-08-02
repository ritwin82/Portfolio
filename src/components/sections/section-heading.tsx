"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-neutral-400">
        {eyebrow}
      </p>
      <h2 className="gradient-text text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-[3.15rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-3xl text-[1.05rem] leading-8 text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, BriefcaseBusiness } from "lucide-react";
import { certifications, experience } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <div className="content-wrap">
        <SectionHeading
          eyebrow="Experience & recognition"
          title="Turning curiosity into real systems."
        />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          {/* Timeline */}
          <div className="relative space-y-6 border-l border-white/10 pl-7">
            {experience.map((item, i) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                <span className="absolute -left-[35px] top-1 grid size-4 place-items-center rounded-full border border-white/40 bg-[#0a0a0a]">
                  <span className="size-1.5 rounded-full bg-white" />
                </span>
                <p className="text-sm font-medium text-neutral-300">{item.duration}</p>
                <h3 className="mt-1.5 text-lg font-semibold">{item.role}</h3>
                <p className="mt-1 text-slate-400">{item.company}</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <BriefcaseBusiness className="mt-1 size-3.5 shrink-0 text-neutral-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {certifications.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="group">
                  <CardContent className="flex gap-4 p-5">
                    <div className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.04] transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/[.08]">
                      {item.type === "Certification" ? (
                        <BadgeCheck className="size-4 text-neutral-200" />
                      ) : (
                        <Award className="size-4 text-neutral-200" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-300">
                        {item.type} · {item.date}
                      </p>
                      <h3 className="mt-1 text-sm font-semibold leading-5">{item.name}</h3>
                      <p className="mt-1.5 text-xs text-slate-500">{item.issuer}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";

export function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <div className="content-wrap">
        <SectionHeading
          eyebrow="Academic performance"
          title="Built on curiosity and consistency."
          description="A record of strong academic foundations, paired with a growing specialization in AI engineering."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Card className="group h-full">
                <CardContent>
                  <GraduationCap className="mb-5 size-5 text-neutral-300 transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-sm text-slate-500">{item.duration}</p>
                  <h3 className="mt-2 text-lg font-semibold">{item.institution}</h3>
                  <p className="mt-1.5 text-sm text-slate-300">{item.degree}</p>

                  {/* Animated score bar */}
                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-white">{item.score}</span>
                    </div>
                    <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/8">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: item.score.includes("CGPA")
                            ? `${(parseFloat(item.score.replace("CGPA ", "")) / 10) * 100}%`
                            : `${parseFloat(item.score)}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full bg-white"
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-400">{item.highlight}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

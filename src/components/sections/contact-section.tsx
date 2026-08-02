"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", value: "Connect with me", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "Explore my work", href: profile.github, Icon: Github },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-shell flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="content-wrap text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
          Contact
        </p>
        <h2 className="gradient-text mt-3 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
          Let&apos;s connect.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-7 text-slate-400">
          Open to opportunities, interesting research, and ambitious ideas worth building.
        </p>

        <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
          {links.map(({ label, value, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.3 }}
              className="glass-card group flex items-center gap-4 p-5 text-left"
            >
              <div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[.04] transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/[.08]">
                <Icon className="size-4 text-slate-400 transition-colors duration-300 group-hover:text-white" />
              </div>
              <span>
                <span className="block text-xs text-slate-500">{label}</span>
                <span className="text-sm font-medium">{value}</span>
              </span>
              <ArrowUpRight className="ml-auto size-4 text-slate-600 transition-all duration-300 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
          ))}
        </div>

        <footer className="mt-12 text-sm text-slate-600">
          © {new Date().getFullYear()} {profile.name}. Built with curiosity.
        </footer>
      </motion.div>
    </section>
  );
}

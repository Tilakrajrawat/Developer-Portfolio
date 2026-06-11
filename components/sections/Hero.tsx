"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const skills = [
  "Spring Boot",
  "Node.js",
  "Azure",
  "WebSockets",
  "Distributed Systems",
  "AI Systems",
];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
    {/* Background Glow */}
<div className="absolute inset-0 pointer-events-none">
  <div
    className="
      absolute inset-0
      bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,rgba(59,130,246,0.08)_25%,transparent_70%)]
    "
  />
</div>
      <div className="content-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl md:text-5xl font-bold text-white"
          >
            Tilak Raj Rawat
          </motion.h2>

          {/* Role */}
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md px-4 py-2 text-sm text-blue-300 mb-8">
            Backend-Focused Full-Stack Engineer
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[0.95]">
            Building scalable systems
            <span className="block text-blue-400">
              for real-world problems.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-4xl leading-relaxed">
  Backend-focused engineer specializing in scalable distributed
  systems, real-time architectures, and AI-powered applications
  using Spring Boot, Node.js, Azure, and modern cloud technologies.
</p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="/resume/Tilak-Raj-Rawat-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3 font-medium text-white transition hover:border-blue-500/40"
            >
              View Resume
            </a>
          </div>

          {/* Skills */}
          <div className="mt-12 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  border border-blue-500/15
                  bg-blue-500/5
                  backdrop-blur-md
                  px-4 py-2
                  text-sm
                  text-slate-300
                "
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/Tilakrajrawat"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 transition hover:border-blue-500/40"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/tilakrajrawat142"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 transition hover:border-blue-500/40"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:tilakrajrawat1234@gmail.com"
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-3 transition hover:border-blue-500/40"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
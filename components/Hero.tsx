"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Mail, Code2 } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 md:py-36 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* background glow */}
      <div className="dark:block hidden absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[420px] sm:w-[600px] h-[300px] sm:h-[380px] bg-blue-500/18 rounded-full blur-[120px]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6"
      >
        {/* pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 dark:bg-white/5 text-xs sm:text-sm font-medium text-black dark:text-white tracking-wide"
        >
          Full-Stack · MERN · Salesforce · DSA
        </motion.div>

        {/* role */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mb-2"
        >
          Full-Stack Software Engineer
        </motion.div>

        {/* name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]"
        >
          Tilak Raj Rawat
        </motion.h1>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 max-w-xl mx-auto text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
        >
          I build fast, clean, and intentional experiences using MERN, modern
          frontend tooling, and solid DSA fundamentals.
        </motion.p>

        {/* social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 flex justify-center gap-4 sm:gap-5"
        >
          {/* GitHub */}
          <a
            href="https://github.com/Tilakrajrawat"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-neutral-800 dark:text-neutral-100 group-hover:scale-110 transition-transform" />
          </a>

        
          <a
            href="https://leetcode.com/u/tilakrajrawat1234/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
            aria-label="LeetCode"
          >
            <Code2 className="w-5 h-5 text-neutral-800 dark:text-neutral-100 group-hover:scale-110 transition-transform" />
          </a>

          {/* Gmail */}
          <a
            href="mailto:tilakrajrawat1234@gmail.com"
            className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-neutral-800 dark:text-neutral-100 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-8 flex justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("featured-projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold shadow-lg"
          >
            View Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 text-neutral-900 dark:text-neutral-100 font-semibold"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const blurIntensity = useTransform(scrollY, [0, 100], ["blur(6px)", "blur(14px)"]);

  return (
    <motion.nav
      style={{
        backdropFilter: blurIntensity,
      }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 shadow-lg bg-[#081a30]/60"
    >
      {/* Línea luminosa superior */}
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="relative font-extrabold text-xl md:text-2xl tracking-wide text-white select-none"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 animate-gradient-x">
            CISCCOM
          </span>
          <span className="text-white/40 mx-1 hidden sm:inline">—</span>
          <motion.span
            animate={{ color: ["#e0f7ff", "#a5e4ff", "#e0f7ff"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            2025
          </motion.span>

          {/* Glow del logo */}
          <motion.div
            className="absolute inset-0 -z-10 blur-2xl bg-cyan-400/25 rounded-full"
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Links con más presencia */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {["Inicio", "Acerca", "Ponentes", "Agenda"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative group"
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="relative px-2 py-1 text-gray-300 group-hover:text-white transition-colors duration-300 text-lg tracking-wide"
              >
                {/* Texto con resplandor */}
                <motion.span
                  className="relative z-10"
                  whileHover={{ textShadow: "0 0 8px rgba(56, 189, 248, 0.7)" }}
                >
                  {item}
                </motion.span>

                {/* Subrayado animado */}
                <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_12px_#22d3eeaa]" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

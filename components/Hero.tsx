"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

// --- Motion Variants ---
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  },
});

import { useEffect, useState } from "react";

const calculateTimeLeft = (eventDate: number) => {
  const now = Date.now();
  const diff = Math.max(eventDate - now, 0);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return { days, hours, minutes };
};

export default function Hero() {
  const eventDate = new Date("2025-11-24T09:00:00-05:00").getTime();
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(eventDate));

  useEffect(() => {
    // Actualizar inmediatamente
    setTimeLeft(calculateTimeLeft(eventDate));
    
    // Actualizar cada 30 segundos
    const id = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventDate));
    }, 1000 * 30);
    
    return () => clearInterval(id);
  }, [eventDate]);
  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden hero-gradient"
      style={{ height: "100vh", minHeight: "100vh" }}
      aria-label="Sección principal de la conferencia"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Scene3D />
      </div>

      {/* Gradient + right mesh image overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06182a]/70 via-transparent to-[#06182a]/90 z-10" />
      <div
        className="absolute right-[-10%] top-0 bottom-0 w-[60%] z-10 opacity-70"
        style={{
          backgroundImage: 'url(/globe.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right',
          backgroundSize: 'contain',
          filter: 'drop-shadow(0 0 30px rgba(59,130,246,0.25))',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.2)}
        >
          {/* Header logos / handle */}
          <motion.div variants={fadeUp(0.25)} className="mb-6 text-left md:text-center">
            <span className="text-sm text-gray-300 tracking-widest">@cisccom.pe</span>
          </motion.div>

          <motion.h1
            variants={fadeUp(0.4)}
            className="text-6xl md:text-8xl font-extrabold leading-tight mb-4 text-white"
          >
            <span className="block">CISCCOM</span>
          </motion.h1>
          <motion.div variants={fadeUp(0.5)} className="mb-8">
            <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto">
              Conferencia de Ingeniería de Software y Ciencia de la Computación
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp(0.6)}
            className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Universidad Nacional de Moquegua • Ingeniería de Sistemas e Informática
          </motion.p>

          {/* Info glass field */}
          <motion.div
            variants={fadeUp(0.75)}
            className="mx-auto w-full max-w-2xl rounded-xl border border-white/15 bg-white/5 backdrop-blur-md shadow-lg px-4 py-3 text-sm text-gray-200"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <div className="font-semibold">Noviembre 24, 2025</div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="text-center">
                <span className="font-semibold">Auditorio EPSI UNAM</span>
                <span className="block text-xs text-gray-300">Urb. Ciudad Jardín, Ilo, Moquegua</span>
              </div>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            variants={fadeUp(0.85)}
            className="mt-4 flex justify-center"
          >
            <div className="grid grid-cols-3 gap-3">
              {[{label:"Días",value:timeLeft.days},{label:"Horas",value:timeLeft.hours},{label:"Min",value:timeLeft.minutes}].map((b) => (
                <div key={b.label} className="min-w-[90px] rounded-lg border border-white/15 bg-white/5 backdrop-blur-md px-4 py-3">
                  <div className="text-2xl md:text-3xl font-extrabold text-white">{b.value}</div>
                  <div className="text-xs text-gray-300">{b.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp(0.95)}
          initial="hidden"
          animate="visible"
          className="mt-14 flex justify-center"
        >
          <a href="https://unam.edu.pe/cisccom" className="url-pill text-gray-200 hover:text-white transition-colors">
            <span className="text-sm">unam.edu.pe/cisccom</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}

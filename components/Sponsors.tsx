"use client";

import { motion } from "framer-motion";

export default function Sponsors() {
  const sponsors = [
    { name: "UNAM", logo: "/sponsors/unam.png" },
    { name: "EPISI", logo: "/sponsors/episi.png" },
    { name: "Aimara Lab", logo: "/sponsors/aimara.png" },
  ];

  return (
    <section
      id="sponsors"
      className="py-24 md:py-32 bg-gradient-to-b from-blue-950/20 to-black overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Sponsors
          </span>
        </h2>
        <p className="text-lg text-gray-300">
          Gracias a quienes hacen posible esta experiencia.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-16">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-56 h-56 bg-white/5 rounded-2xl flex items-center justify-center border border-cyan-400/30 hover:border-cyan-400/60 transition-all">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-40 h-40 object-contain"
              />
            </div>
            <p className="text-gray-300 mt-4 text-lg">{sponsor.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

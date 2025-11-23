"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Alumni() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
const alumni = [
  {
    name: "Mariela M. Nina Capujra",
    role: "Estudiante de Maestría en Ciencia de la Computación — UNIFESP, Brasil",
    description:
      "Ingeniera de Sistemas por la UNAM (Perú), apasionada por la IA, el Machine Learning y el PLN. Especializada en traducción automática y desarrollo de chatbots. Becaria CAPES y activa en investigación de IA.",
    image: "/speakers/mariela.jpg",
  },
  {
    name: "Allison I. Reynoso Serra",
    role: "CDO de AiMara Lab",
  
    description:
      "Ganadora del Nasa Space Apps Challenge y becaria de Oracle Next Education y Aspire Leaders Program de Harvard University. Investigadora en Procesamiento del Lenguaje Natural y Visión por Computador.",
    image: "/speakers/allison.jpg",
  },
  {
    name: "Feliciano Coila Yucra",
    role: "Ingeniero Junior de Tecnología e Innovación Minera en Cerro Verde",
  
    description:
      "Maestría en Redes y Telecomunicaciones en la UNSA. Ha trabajado como informático en el área de Tecnologías de la Información en Austral y la SUNAT entre otros, ha desarrollado experiencia en integración OT/IT en empresas como Southern Perú y Quellaveco.",
    image: "/speakers/feliciano.jpeg",
  },
  {
    name: "Elmer Collanqui Casapia",
    role: "CTO de AiMara Lab",
    description:
      "Becario en programas nacionales e internacionales, desarrollador de software e inteligencia artificial, e investigador en NLP e IA generativa. Enfocado en proyectos de innovación tecnológica y estudio avanzado de técnicas de IA.",
    image: "/speakers/elmer.jpg",
  },
];


  return (
    <section
      id="egresados"
      ref={ref}
      className="py-24 md:py-32 px-4 md:px-6 bg-gradient-to-b from-black to-blue-950/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Coloquio de Egresados
            </span>
          </h2>
          <p className="text-xl text-gray-300" style={{ textAlign: 'center' }}>
            Inspírate con las historias de nuestros egresados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {alumni.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all"
            >
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/40 overflow-hidden flex items-center justify-center">
                  {person.image && person.image !== "/placeholder-speaker.jpg" ? (
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl">👤</span>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {person.name}
                </h3>
                <p className="text-cyan-300 font-semibold mb-4 text-sm">
                  {person.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {person.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

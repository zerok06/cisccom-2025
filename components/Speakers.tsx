"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Speakers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const speakers = [
    {
      name: "Dr. Saúl Huaquipaco Encinas",
      role: "Docente Investigador y Miembro Senior del IEEE",
      description: "Con máster y doctorado en ingeniería. Experto en IA para resolución de desafíos en energía, medio ambiente, inspección y monitorización. Calificado como investigador por CONCYTEC, se dedica a la docencia e investigación universitaria.",
      image: "/speakers/saul.jpeg",
    },
    {
      name: "Dr. Américo Rubín de Celis Vidal",
      role: "Docente Investigador",
      description: "Doctor (PhD) en Ingeniería Eléctrica (Sistemas de Comunicaciones) por la PUC-Rio, Brasil. Ingeniero Electrónico (UPT) con amplia experiencia en comunicaciones satelitales, procesamiento digital de señales y circuitos electrónicos. Actualmente en la Universidad Privada de Tacna.",
      image: "/speakers/americo.jpeg",
    },
    
    {
      name: "PdD. Rómulo Walter Condori Bustincio",
      role: "Universidad Estatal de Campinas (UNICAMP), Brazil",
      description: "Candidato a doctorado en el Instituto de Computación de la Universidad Estatal de Campinas (UNICAMP), en Brasil. Integra el Hub de Inteligencia Artificial y Arquitecturas Cognitivas (HIAAC) y el Laboratório de Redes de Computadores (LRC). Además, está reconocido como investigador RENACYT por el CONCYTEC del Perú.",
      image: "/speakers/Romulo.jpg",
    },
    {
      name: "Dr. Aníbal Flores García",
      role: "Docente Principal y Coordinador del Grupo de Investigación de IA",
      description: "Doctor en Ciencias de la Computación (UNSA) e Ingeniero de Sistemas con más de 20 años de experiencia. Investigador experto en Inteligencia Artificial, Regresión y PLN. Actualmente en la Universidad Nacional de Moquegua.",
      image: "/speakers/anibal.jpeg",
    },
  ];

  return (
    <section
      id="ponentes"
      ref={ref}
      className="py-24 md:py-32 px-4 md:px-6 bg-gradient-to-b from-blue-950/20 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent ">
              Ponentes Destacados
            </span>
          </h2>
          <p className="text-xl text-gray-300" style={{ textAlign: 'center' }}>
            Aprende de los líderes más influyentes de la industria tecnológica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-blue-900/40 to-cyan-900/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all"
            >
              <div className="text-center">
                {/* Foto del speaker */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border-2 border-cyan-400/40 overflow-hidden flex items-center justify-center">
                  {speaker.image && speaker.image !== "/placeholder-speaker.jpg" ? (
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl">👤</span>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {speaker.name}
                </h3>
                <p className="text-cyan-300 font-semibold mb-4 text-sm">
                  {speaker.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {speaker.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

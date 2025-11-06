"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, UserCheck, Layers, Users } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: GraduationCap,
      title: "Conocimiento Experto",
      description: "Aprende de profesionales con años de experiencia en la industria",
    },
    {
      icon: UserCheck,
      title: "Experiencia de Egresados",
      description: "Conoce el camino de exalumnos exitosos en distintos campos",
    },
    {
      icon: Layers,
      title: "Diversidad de Temas",
      description: "Explora distintos campos del área de sistemas e informática",
    },
    {
      icon: Users,
      title: "Comunidad Académica",
      description: "Conecta con estudiantes, docentes y profesionales del sector",
    },
  ];

  return (
    <section
      id="acerca"
      ref={ref}
      className="py-24 md:py-32 px-4 md:px-6 bg-gradient-to-b from-black to-blue-950/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 w-full px-4"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Acerca del Evento
            </h2>
          
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg shadow-cyan-500/10">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed text-center">
                El <strong className="text-cyan-300">Coloquio de Egresados: Avances y Tendencias en Ingeniería de Software y Ciencia de la Computación </strong> 
                reúne a <strong className="text-cyan-300">profesionales destacados</strong> de la 
                <strong> Escuela Profesional de Ingeniería de Sistemas e Informática</strong> de la 
                <strong> Universidad Nacional de Moquegua (UNAM)</strong>.  
                Un espacio para conocer las últimas innovaciones en 
                <strong className="text-cyan-300"> inteligencia artificial</strong>, 
                <strong className="text-cyan-300"> big data</strong>, 
                <strong className="text-cyan-300"> ciberseguridad</strong> y 
                <strong className="text-cyan-300"> desarrollo de software</strong>.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-10 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="group flex flex-col justify-between bg-gradient-to-br from-blue-900/30 to-cyan-900/20 backdrop-blur-md border border-cyan-400/20 rounded-2xl p-5 sm:p-6 md:p-8 text-center hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 w-full h-full min-h-[280px] sm:min-h-[320px]"
            >
              <div>
                <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-cyan-400 group-hover:text-cyan-300 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
</div>

    </section>
  );

}
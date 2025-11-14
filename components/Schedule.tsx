"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type Event = {
  time: string;
  title: string;
  speaker: string;
};

type Schedule = {
  title: string;
  events: Event[];
};

const scheduleData: Record<"24" | "25", Schedule> = {
  "24": {
    title: "Conferencia de Ingeniería de Software y Ciencia de la Computación",
    events: [
      { time: "9:00 am - 9:30 am", title: "Registro de asistencias", speaker: "" },
      { time: "9:30 am - 10:00 am", title: "Apertura de actividades por aniversario de EPISI", speaker: "" },
      { time: "10:00 am - 10:40 am", title: "Ponencia 1", speaker: "Dr. Americo de Celis Vidal" },
      { time: "10:40 am - 11:20 am", title: "Ponencia 2", speaker: "Dr. Anibal Flores Garcia" },
      { time: "11:20 am - 11:40 am", title: "Coffee Break", speaker: "" },
      { time: "11:40 am - 12:20 pm", title: "Ponencia 3", speaker: "Dr. Saul Huaquipaco Encinas" },
      { time: "12:20 pm - 1:00 pm", title: "Ponencia 4", speaker: "MSc. Yessica Rosas Cuevas" },
      { time: "1:00 pm", title: "ALMUERZO", speaker: "" },
    ],
  },
  "25": {
    title: "Coloquio de egresados de la Escuela Profesional de Ingeniería de Sistemas e Informática",
    events: [
      { time: "3:00 pm - 3:40 pm", title: "Ponencia 1", speaker: "Mariela M. Nina Capujra" },
      { time: "3:40 pm - 4:10 pm", title: "Ponencia 2", speaker: "Allison I. Reynoso Serra" },
      { time: "4:10 pm - 4:30 pm", title: "Coffee Break", speaker: "" },
      { time: "4:30 pm - 5:10 pm", title: "Ponencia 3", speaker: "Luis Torres Carpio" },
      { time: "5:10 pm - 5:50 pm", title: "Ponencia 4", speaker: "Giordhano Valdez Linares" },
    ],
  },
};

export default function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeDay, setActiveDay] = useState<"24" | "25">("24");

  return (
    <section
      id="agenda"
      ref={ref}
      className="py-24 md:py-32 px-4 md:px-6 bg-gradient-to-b from-black to-blue-950/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 w-full"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Agenda del Evento
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
            {scheduleData[activeDay].title}
          </p>
        </motion.div>

        {/* Botones de días */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 px-4"
        >
          {(["24", "25"] as const).map((day) => (
            <motion.button
              key={day}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDay(day)}
              className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all text-sm sm:text-base ${
                activeDay === day
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-white/10 text-gray-400 hover:bg-white/20"
              }`}
            >
              {day} de Noviembre
            </motion.button>
          ))}
        </motion.div>

        {/* Línea temporal */}
        <div className="max-w-3xl mx-auto relative px-4">
          {/* Línea vertical - oculta en mobile, visible en md+ */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-white/10"
            aria-hidden="true"
          />
          {/* Línea vertical - visible solo en mobile */}
          <div
            className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-white/10"
            aria-hidden="true"
          />

          {/* Eventos */}
          {scheduleData[activeDay].events.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="relative flex flex-col md:flex-row items-start md:items-center mb-8 md:mb-10"
            >
              {/* Punto en la línea - ajustado para mobile */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.2)] md:shadow-[0_0_0_6px_rgba(34,211,238,0.2)]" />

              {/* Hora - a la derecha del punto en mobile */}
              <div className="md:w-1/2 md:pr-12 md:text-right pl-10 md:pl-0 mb-2 md:mb-0">
                <p className="text-cyan-300 font-bold text-sm md:text-lg">{item.time}</p>
              </div>

              {/* Contenido del evento */}
              <div className="md:w-1/2 md:pl-12 pl-10 md:pl-12 w-full">
                <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.title}</h3>
                  {item.speaker && <p className="text-sm md:text-base text-gray-400">{item.speaker}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Service, services } from "../../data/data";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="flex flex-col items-center gap-6 rounded-3xl bg-white p-10 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#f0fdfa]">
        <Icon className="h-12 w-12 text-cyan-400" />
      </div>

      <div>
        <h3 className="mb-3 text-2xl font-bold text-slate-800">{service.title}</h3>
        <p className="text-base leading-8 text-slate-500">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function ServicesPage(){
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#FFF8E7] px-12 py-24 md:px-12 lg:px-24">

      {/* Watermark — "Services" sits behind */}
      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/2 select-none text-[5rem] font-extrabold uppercase tracking-widest text-slate-200/80 md:text-[9rem] lg:text-[12rem]">
        Services
      </span>

      <div className="relative z-10 mx-auto w-full max-w-5xl">

        {/* Heading — "What I Do?" overlays on top */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-extrabold text-slate-900 md:text-6xl lg:text-7xl">
            What I Do?
          </h2>
          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-cyan-400" />
        </div>

        {/* Cards grid — centered */}
        <div className="grid place-items-center gap-8 sm:grid-cols-2">
          {services.map((service: Service, index: number) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


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

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-[#FFF8E7] px-6 py-16 md:px-12 lg:ml-[280px] lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section header — matches AboutPage pattern */}
        <div className="relative mb-20 text-center">
          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold uppercase tracking-wider text-gray-200 md:text-8xl lg:text-9xl">
            Services
          </h2>

          <div className="relative z-10 inline-block">
            <h3 className="text-3xl font-bold text-slate-800 md:text-5xl">
              What I Do?
            </h3>
            <div className="mx-auto mt-3 h-1 w-20 bg-cyan-400" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service: Service, index: number) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
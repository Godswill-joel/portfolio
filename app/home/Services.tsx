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
            className="flex items-start gap-8 rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
            <div className="flex min-h-[84px] min-w-[84px] items-center justify-center rounded-xl bg-[#f0fdf4]">
                <Icon className="h-8 w-8 text-cyan-400" />
            </div>

            <div>
                <h3 className="mb-2 text-2xl font-bold text-slate-800">{service.title}</h3>
                <p className="text-xl leading-7 text-slate-500">{service.description}</p>
            </div>
        </motion.div>
    );
}

export default function ServicesPage() {
    return (
        <section className="relative flex min-h-screen items-center justify-center bg-[#FFF8E7] px-6 py-24 md:px-12 lg:px-24">
            {/* Watermark */}
            <span className="pointer-events-none  absolute left-1/2 top-10 -translate-x-1/2 select-none text-[4rem] font-extrabold uppercase tracking-widest text-slate-200 md:text-[7rem] lg:text-[9rem]">
                Services
            </span>

            <div className="relative z-10 mx-auto w-full max-w-5xl">
                {/* Heading */}
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
                        What I Do?
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-cyan-400" />
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
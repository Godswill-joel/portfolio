"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 7, suffix: "+", label: "Years Experiance" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 25, suffix: "+", label: "Projects Done" },
];

const infoItems = [
  { label: "Name", value: "Godswill Emmanuel" },
  { label: "Email", value: "asuquogodswill0@gmail.com", highlight: true },
  { label: "From", value: "Bayelsea, Nigeria" },
];

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

function SectionHeader() {
  return (
    <div className="relative mb-30 text-center">
      <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold uppercase tracking-wider text-gray-200 md:text-8xl lg:text-9xl">
        About Me
      </h2>

      <div className="relative z-10 inline-block">
        <h3 className="text-3xl font-bold text-slate-800 md:text-5xl">
          Know Me More
        </h3>
        <div className="mx-auto mt-3 h-1 w-20 bg-cyan-400" />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#f6f6f6] px-6 py-16 md:px-12 lg:ml-[280px] lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader />

        <div className="grid gap-14 lg:grid-cols-[1.6fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-slate-800 md:text-4xl">
              I&apos;m <span className="text-cyan-400">Godswill Emmanuel,</span> a Developer
            </h2>

            <p className="mb-6 text-lg leading-9 text-slate-600">
              I help you build brand for your business at an affordable price.
              Clients have procured exceptional results while working
              with our dedicated team. 
            </p>

            <p className="text-lg leading-9 text-slate-600">
              Delivering work within time and budget which meets client&apos;s
              requirements is our moto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-5"
          >
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-wrap items-center gap-2 border-b border-slate-300 pb-4 text-lg"
              >
                <span className="font-semibold text-slate-800">{item.label}:</span>
                <span className={item.highlight ? "text-emerald-400" : "text-slate-600"}>
                  {item.value}
                </span>
              </div>
            ))}

            <button className="mt-6 rounded-full bg-cyan-400 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105">
              Download CV
            </button>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-y-10 border-t border-slate-300 pt-12 md:grid-cols-4 md:divide-x md:divide-slate-300">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h4 className="text-5xl font-bold text-slate-500 md:text-6xl">
                <Counter target={stat.value} suffix={stat.suffix} />
              </h4>
              <p className="mt-4 text-lg text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

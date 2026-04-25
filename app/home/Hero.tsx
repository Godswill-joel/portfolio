"use client";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles: string[] = ["Fullstack Developer", "Video Editor",];

function HeroSection() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden lg:ml-[280px]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
          alt="Hero background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07111d]/70 backdrop-brightness-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center text-white sm:px-8 md:px-12 lg:px-16">
        <p className="mb-4 text-xl font-semibold sm:text-2xl md:text-4xl lg:text-5xl">
          Welcome
        </p>

        {/* Animated role line */}
        <div className="mb-6 flex w-full flex-col items-center justify-center gap-2 text-3xl font-extrabold sm:text-4xl md:text-5xl lg:flex-row lg:gap-4 lg:text-6xl xl:text-7xl">
          <span className="shrink-0">I&apos;m a</span>

          {/* Animation container — wider */}
          <div
            className="relative h-[1.2em] overflow-hidden text-cyan-400"
            style={{ width: "min(100%, 900px)" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -50, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center whitespace-nowrap lg:justify-start"
              >
                {roles[index]}.
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <p className="mb-10 text-sm text-white/85 sm:text-base md:text-xl lg:text-2xl">
          based in Port-Harcourt, Nigeria.
        </p>

        <button className="rounded-full border-2 border-cyan-400 px-7 py-3 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#07111d] sm:px-10 sm:py-4 sm:text-base md:text-lg">
          Hire Me
        </button>
      </div>
    </section>
  );
}

export default function PortfolioLandingPage() {
  return (
    <main className="bg-black">
      <Sidebar />
      <HeroSection />
    </main>
  );
}
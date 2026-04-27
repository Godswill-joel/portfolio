"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { AnimatePresence, motion } from "framer-motion";

const roles: string[] = ["Godswill Emmanuel", "a Fullstack Developer", "a Video Editor", "a Mobile Developer"];

function HeroSection() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % roles.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden lg:ml-[280px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
          alt="Hero background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#07111d]/70 backdrop-brightness-50" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center text-white sm:px-8 md:px-12 lg:px-16">
        <p className="mb-4 text-xl font-semibold sm:text-2xl md:text-4xl lg:text-5xl">
          Welcome
        </p>

        <div className="mb-6 flex w-full flex-col items-center justify-center gap-2 text-3xl font-extrabold sm:text-4xl md:text-5xl lg:flex-row lg:gap-4 lg:text-6xl xl:text-7xl">
          <span className="shrink-0">I&apos;m </span>

          <div
            className="relative h-[1.5em] overflow-hidden text-cyan-400"
            style={{ width: "min(100%, 900px)" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
                transition={{ 
                  duration: 1.2,  
                  ease: [0.25, 0.1, 0.25, 1],  
                  times: [0, 2] 
                }}
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
       <Link href={"/About"}>
       <button
        className="rounded-full border-2 border-cyan-400 px-7 py-3 text-sm font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-[#07111d] sm:px-10 sm:py-4 sm:text-base md:text-lg">
          Hire Me
        </button>
       </Link>
       
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
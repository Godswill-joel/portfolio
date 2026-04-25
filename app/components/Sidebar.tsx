"use client";

import { useState, useEffect, useRef } from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";

interface NavItem {
    label: string;
    id: string;
}

const navItems: NavItem[] = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "What I Do", id: "what-i-do" },
    { label: "Resume", id: "resume" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Testimonial", id: "testimonial" },
    { label: "Contact", id: "contact" },
];

const socialIcons: IconType[] = [FaXTwitter, FaGithub];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Scroll spy — watches each section and updates activeIndex
    useEffect((): (() => void) => {
        const handleIntersection = (entries: IntersectionObserverEntry[]): void => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    const index = navItems.findIndex(
                        (item: NavItem) => item.id === entry.target.id
                    );
                    if (index !== -1) setActiveIndex(index);
                }
            });
        };

        observerRef.current = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "-40% 0px -55% 0px",
            threshold: 0,
        });

        navItems.forEach(({ id }: NavItem) => {
            const el: HTMLElement | null = document.getElementById(id);
            if (el && observerRef.current) observerRef.current.observe(el);
        });

        return (): void => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    const scrollToSection = (id: string, index: number): void => {
        const el: HTMLElement | null = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setActiveIndex(index);
        setIsOpen(false);
    };

    return (
        <>
            {/* ─── MOBILE TOP NAVBAR ─── */}
            <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-[#07111d]/95 px-5 py-3 shadow-lg backdrop-blur-md lg:hidden">
                <div className="flex items-center gap-3">
                    {socialIcons.map((Icon: IconType, i: number) => (
                        <button
                            key={i}
                            aria-label={`Social link ${i + 1}`}
                            className="rounded-full border border-white/10 p-2 text-white/70 transition hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <Icon size={16} />
                        </button>
                    ))}
                </div>

                <span className="text-sm font-bold tracking-widest text-white/90">
                    GODSWILL
                </span>

                <button
                    onClick={(): void => setIsOpen(true)}
                    className="flex flex-col items-end gap-[5px] p-1"
                    aria-label="Open menu"
                >
                    <span className="h-[2px] w-6 rounded-full bg-cyan-400 transition-all" />
                    <span className="h-[2px] w-4 rounded-full bg-white/70 transition-all" />
                    <span className="h-[2px] w-5 rounded-full bg-white/70 transition-all" />
                </button>
            </header>

            {/* ─── MOBILE DRAWER ─── */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(): void => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                        />

                        <motion.aside
                            key="drawer"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col justify-between bg-[#07111d] px-7 py-10 text-white shadow-2xl lg:hidden"
                        >
                            {/* Close button */}
                            <button
                                onClick={(): void => setIsOpen(false)}
                                aria-label="Close menu"
                                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>

                            {/* Profile */}
                            <div>
                                <div className="mb-10 flex flex-col items-center text-center">
                                    <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white/10 shadow-xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
                                            alt="Profile"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <h2 className="text-xl font-bold tracking-tight">
                                        Godswill Emmanuel
                                    </h2>
                                </div>

                                <nav className="space-y-4">
                                    {navItems.map((item: NavItem, i: number) => (
                                        <motion.button
                                            key={item.id}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.05 * i, duration: 0.3 }}
                                            onClick={(): void => scrollToSection(item.id, i)}
                                            className={`block w-full text-left text-base transition-all duration-300 hover:translate-x-1 hover:text-cyan-400 ${activeIndex === i ? "text-cyan-400" : "text-white/80"
                                                }`}
                                        >
                                            {item.label}
                                        </motion.button>
                                    ))}
                                </nav>
                            </div>

                            <div className="flex items-center gap-3 text-white/70">
                                {socialIcons.map((Icon: IconType, i: number) => (
                                    <button
                                        key={i}
                                        aria-label={`Social link ${i + 1}`}
                                        className="rounded-full border border-white/10 p-2 transition hover:border-cyan-400 hover:text-cyan-400"
                                    >
                                        <Icon size={16} />
                                    </button>
                                ))}
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* ─── DESKTOP SIDEBAR ─── */}
            <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[280px] flex-col justify-between bg-[#07111d] px-8 py-10 text-white shadow-2xl lg:flex">
                <div>
                    <div className="mb-12 flex flex-col items-center text-center">
                        <div className="mb-5 h-36 w-36 overflow-hidden rounded-full border-[6px] border-white/10 shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight">
                            Godswill Emmanuel
                        </h2>
                    </div>

                    <nav className="space-y-5 text-lg">
                        {navItems.map((item: NavItem, i: number) => (
                            <button
                                key={item.id}
                                onClick={(): void => scrollToSection(item.id, i)}
                                className={`block w-full text-left transition-all duration-300 hover:translate-x-1 hover:text-cyan-400 ${activeIndex === i ? "text-cyan-400" : "text-white/90"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4 text-white/70">
                    {socialIcons.map((Icon: IconType, i: number) => (
                        <button
                            key={i}
                            aria-label={`Social link ${i + 1}`}
                            className="rounded-full border border-white/10 p-2 transition hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <Icon size={18} />
                        </button>
                    ))}
                </div>
            </aside>
        </>
    );
}
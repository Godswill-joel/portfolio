"use client";

import { FaGithub, FaXTwitter } from "react-icons/fa6";

const roles = ["Photographer", "Videographer", "Designer", "Creator"];

export default function Sidebar() {
  const navItems = [
    "Home",
    "About Me",
    "What I Do",
    "Resume",
    "Portfolio",
    "Testimonial",
    "Contact",
  ];

  return (
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
          <h2 className="text-3xl font-bold tracking-tight">Simone Olivia</h2>
        </div>

        <nav className="space-y-5 text-lg">
          {navItems.map((item, i) => (
            <a
              key={item}
              href="#"
              className={`block transition-all duration-300 hover:translate-x-1 hover:text-cyan-400 ${
                i === 0 ? "text-cyan-400" : "text-white/90"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4 text-white/70">
        {[FaXTwitter, FaGithub].map((Icon, i) => (
          <button
            key={i}
            className="rounded-full border border-white/10 p-2 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
    </aside>
  );
}

// 
// }

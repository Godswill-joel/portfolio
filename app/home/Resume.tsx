'use client';

import { ResumeItem, educationData, experienceData, Skill, skillsLeft, skillsRight } from "../../data/data";
import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";

function useCountUp(target: number, duration = 1400): number {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    let frame: number;
    const start = performance.now();

    const update = (now: number): void => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return (): void => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

function YearBadge({ startYear, endYear }: { startYear: number; endYear: number }){
  const animatedStart = useCountUp(startYear);
  const animatedEnd = useCountUp(endYear);

  return (
    <div className="inline-flex rounded-lg bg-cyan-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm sm:px-4 sm:py-2 sm:text-sm">
      {animatedStart} – {animatedEnd}
    </div>
  );
}

function ResumeCard({ item }: { item: ResumeItem }){
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:shadow-md sm:p-6 md:p-8">
      <YearBadge startYear={item.startYear} endYear={item.endYear} />

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-800 sm:text-xl md:text-2xl">
        {item.title}
      </h3>

      <p className="mt-1 text-sm font-medium text-rose-500 sm:text-base">
        {item.subtitle}
      </p>

      <p className="mt-3 text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
        {item.description}
      </p>
    </div>
  );
}

function SkillBar({ skill, trigger }: { skill: Skill; trigger: boolean }) {
  const count = useCountUp(trigger ? skill.value : 0, 1800);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-zinc-800 sm:text-xl">
          {skill.name}
        </h4>
        <span className="text-lg font-semibold text-zinc-800 sm:text-xl">
          {count}%
        </span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
        <div
          className="h-full rounded-full bg-cyan-500 transition-all duration-[1800ms] ease-out"
          style={{ width: trigger ? `${skill.value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) setStartAnimation(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);
    return (): void => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f5f5] px-6 py-16 md:px-12 lg:ml-[280px] lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-16 text-center">
          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold uppercase tracking-wider text-gray-200 md:text-8xl lg:text-9xl">
            Skills
          </h2>
          <div className="relative z-10 inline-block">
            <h3 className="text-3xl font-bold text-zinc-800 md:text-5xl">
              My Skills
            </h3>
            <div className="mx-auto mt-3 h-1 w-20 bg-cyan-400" />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            {skillsLeft.map((skill: Skill) => (
              <SkillBar key={skill.name} skill={skill} trigger={startAnimation} />
            ))}
          </div>

          <div className="space-y-8">
            {skillsRight.map((skill: Skill) => (
              <SkillBar key={skill.name} skill={skill} trigger={startAnimation} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button className="group flex items-center gap-3 rounded-full border-2 border-zinc-500 px-8 py-4 text-base font-semibold text-zinc-600 transition-all duration-300 hover:bg-zinc-600 hover:text-white sm:px-10 sm:text-lg">
            Download CV
            <Download
              size={20}
              className="transition-transform duration-300 group-hover:translate-y-[2px]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <>
      {/* ── Resume Section ── */}
      <section className="relative min-h-screen bg-[#f5f5f5] px-6 py-16 md:px-12 lg:ml-[280px] lg:px-16 lg:py-24">

        {/* Watermark — matches AboutPage pattern */}
        <div className="relative mb-20 text-center">
          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold uppercase tracking-wider text-gray-200 md:text-8xl lg:text-9xl">
            Summary
          </h2>
          <div className="relative z-10 inline-block">
            <h3 className="text-3xl font-bold text-zinc-800 md:text-5xl">
              Resume
            </h3>
            <div className="mx-auto mt-3 h-1 w-20 bg-cyan-400" />
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

            {/* Education */}
            <div>
              <h3 className="mb-5 text-xl font-bold text-zinc-800 sm:mb-6 sm:text-2xl md:mb-8 md:text-3xl">
                My Education
              </h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {educationData.map((item: ResumeItem) => (
                  <ResumeCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="mb-5 mt-8 text-xl font-bold text-zinc-800 sm:mb-6 sm:text-2xl md:mb-8 md:text-3xl lg:mt-0">
                My Experience
              </h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {experienceData.map((item: ResumeItem) => (
                  <ResumeCard key={item.id} item={item} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Skills Section ── */}
      <SkillsSection />
    </>
  );
}
'use client';

import { ResumeItem, educationData, experienceData, Skill, skillsLeft, skillsRight   } from "../../data/data";
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


function YearBadge({
  startYear,
  endYear,
}: {
  startYear: number;
  endYear: number;
}) {
  const animatedStart = useCountUp(startYear);
  const animatedEnd = useCountUp(endYear);

  return (
    <div className="inline-flex rounded-lg bg-cyan-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm sm:px-4 sm:py-2 sm:text-sm">
      {animatedStart} – {animatedEnd}
    </div>
  );
}

function ResumeCard({ item }: { item: ResumeItem }) {
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


function SkillBar({
  skill,
  trigger,
}: {
  skill: Skill;
  trigger: boolean;
}) {
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
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f5f5] px-4 py-20 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold text-zinc-800 sm:text-4xl md:text-5xl">
          My Skills
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            {skillsLeft.map((skill) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                trigger={startAnimation}
              />
            ))}
          </div>

          <div className="space-y-8">
            {skillsRight.map((skill) => (
              <SkillBar
                key={skill.name}
                skill={skill}
                trigger={startAnimation}
              />
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
      <section className="relative flex min-h-screen items-start justify-center overflow-hidden bg-[#f5f5f5] px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
        <span className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none text-[3.5rem] font-extrabold uppercase tracking-widest text-zinc-200 sm:text-[5rem] md:text-[7rem] lg:top-12 lg:text-[9rem] xl:text-[11rem]">
          Summary
        </span>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="mb-10 text-center sm:mb-12 md:mb-16">
            <h2 className="text-3xl font-extrabold text-zinc-800 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Resume
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-400 sm:w-24 md:w-28" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
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

      <SkillsSection />
    </>
  );
}
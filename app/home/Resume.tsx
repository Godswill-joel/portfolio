'use client';

import { ResumeItem, educationData, experienceData } from "../../data/data";
import { useEffect, useState } from 'react';

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

function YearBadge({ startYear, endYear }: { startYear: number; endYear: number }) {
  const animatedStart = useCountUp(startYear);
  const animatedEnd = useCountUp(endYear);

  return (
    <div className="inline-flex rounded-lg bg-cyan-500 px-4 py-2 text-sm font-bold text-white shadow-sm">
      {animatedStart} – {animatedEnd}
    </div>
  );
}

function ResumeCard({ item }: { item: ResumeItem }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:shadow-md">
      <YearBadge startYear={item.startYear} endYear={item.endYear} />

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-800">
        {item.title}
      </h3>

      <p className="mt-1 text-base font-medium text-rose-500">{item.subtitle}</p>

      <p className="mt-4 text-base leading-8 text-zinc-500">
        {item.description}
      </p>
    </div>
  );
}

export default function ResumePage(){
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#f5f5f5] px-8 py-24 md:px-16 lg:px-28">

      {/* Watermark */}
      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[5rem] font-extrabold uppercase tracking-widest text-zinc-200 md:text-[9rem] lg:text-[12rem]">
        Summary
      </span>

      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-extrabold text-zinc-800 md:text-6xl lg:text-7xl">
            Resume
          </h2>
          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-cyan-400" />
        </div>

        {/* Two columns */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Education */}
          <div>
            <h3 className="mb-8 text-3xl font-bold text-zinc-800">
              My Education
            </h3>
            <div className="space-y-6">
              {educationData.map((item: ResumeItem) => (
                <ResumeCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="mb-8 text-3xl font-bold text-zinc-800">
              My Experience
            </h3>
            <div className="space-y-6">
              {experienceData.map((item: ResumeItem) => (
                <ResumeCard key={item.id} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
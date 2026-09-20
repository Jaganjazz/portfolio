"use client";

import { currentlyExploring } from "@/data/skills";

export default function ExploringSection() {
  const items = [...currentlyExploring, ...currentlyExploring, ...currentlyExploring];

  return (
    <section className="py-20 overflow-hidden border-t border-b border-white/[0.06] bg-[#07070c]/70 relative">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-8 flex items-center justify-between">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
          // CONTINUOUS HORIZONS
        </span>
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          ACTIVE RESEARCH &amp; BUILDS
        </span>
      </div>

      {/* Kinetic Typography Marquee Track */}
      <div className="flex select-none overflow-hidden whitespace-nowrap">
        <div className="flex animate-[marquee_28s_linear_infinite] gap-10 items-center">
          {items.map((text, idx) => (
            <div key={idx} className="flex items-center gap-10">
              <span className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-white to-neutral-500 hover:text-indigo-400 transition-colors cursor-default tracking-tight">
                {text}
              </span>
              <span className="h-2 w-2 rounded-full bg-indigo-500/60" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

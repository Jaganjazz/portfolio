"use client";

import { educationList } from "@/data/education";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // ACADEMIC FOUNDATIONS
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mt-3">
              EDUCATION
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md">
            Formal technical grounding in Artificial Intelligence, Data Science, Discrete Mathematics, and Computing Systems.
          </p>
        </div>

        {/* Minimal Editorial Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <div
              key={edu.degree}
              className="p-8 md:p-10 rounded-2xl bg-[#09090f]/60 border border-white/[0.06] flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-[#0c0c16]"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                    <GraduationCap className="h-4 w-4" />
                    <span>RECORD 0{idx + 1}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    {edu.period}
                  </span>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-indigo-300/90 font-medium mt-1">
                      {edu.field}
                    </p>
                    <p className="text-sm text-neutral-400 mt-2 font-mono">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Score Pill */}
                  <div className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-right shrink-0">
                    <p className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest">
                      {edu.scoreLabel}
                    </p>
                    <p className="text-lg md:text-xl font-heading font-bold text-white">
                      {edu.scoreValue}
                    </p>
                  </div>
                </div>

                {edu.highlights && (
                  <div className="mt-6 pt-6 border-t border-white/[0.04] space-y-2">
                    {edu.highlights.map((h, hIdx) => (
                      <p key={hIdx} className="text-xs text-neutral-400 leading-relaxed">
                        • {h}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.04] text-[10px] font-mono text-neutral-600 uppercase tracking-widest flex items-center justify-between">
                <span>INSTITUTION CONFIRMED</span>
                <span>AUTHENTIC RESUME RECORD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

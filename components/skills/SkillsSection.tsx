"use client";

import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // VERIFIED CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mt-3">
              AI ENGINEERING STACK
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md">
            Authoritative technical proficiencies verified through coursework, professional internships, and production projects.
          </p>
        </div>

        {/* Editorial Layout (Clean Columns / Divider Matrix) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.number}
              className="relative p-8 rounded-2xl bg-[#09090f]/60 border border-white/[0.06] flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-[#0e0e18]"
            >
              <div>
                {/* Category Number & Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                  <span className="font-mono text-sm font-bold text-indigo-400">
                    {cat.number}
                  </span>
                  <span className="text-xs font-mono tracking-widest uppercase text-neutral-500">
                    CATEGORY
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white tracking-tight mt-6">
                  {cat.category}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mt-2 mb-8">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-col gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm font-mono text-neutral-200 flex items-center justify-between transition-colors hover:bg-white/[0.07] hover:border-indigo-500/30"
                    >
                      <span>{skill}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Micro Footer */}
              <div className="mt-8 pt-4 border-t border-white/[0.04] text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                VERIFIED // RESUME CONFIRMED
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

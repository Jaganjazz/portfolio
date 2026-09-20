"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";
import { ChevronDown, Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const [expandedIds, setExpandedIds] = useState<string[]>(["edunet-ibm"]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // CAREER PATHWAY
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mt-3">
              EXPERIENCE
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md">
            Applied industry internships focusing on machine learning modeling, generative AI defense, and automated data engineering.
          </p>
        </div>

        {/* Elegant Expandable Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-6 md:pl-10 space-y-8">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIds.includes(exp.id);
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] md:-left-[47px] top-6 flex items-center justify-center h-5 w-5 rounded-full bg-[#050508] border-2 border-indigo-500 group-hover:scale-125 transition-transform duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? "bg-[#0c0c16] border-indigo-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                      : "bg-[#08080e]/60 border-white/[0.06] hover:border-white/20 hover:bg-[#0c0c14]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          INTERNSHIP 0{idx + 1}
                        </span>
                        {exp.affiliation && (
                          <span className="text-xs font-mono text-neutral-500">
                            • {exp.affiliation}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl md:text-2xl font-heading font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>

                      <p className="text-sm md:text-base font-medium text-neutral-400 mt-1">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline-block text-xs font-mono text-neutral-500">
                        {isExpanded ? "Collapse" : "Details"}
                      </span>
                      <div
                        className={`p-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-400 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-white bg-indigo-500/20" : ""
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-white/[0.06]"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden space-y-4">
                      <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-400"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Verified Skills */}
                      <div className="flex flex-wrap gap-2 pt-3">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-neutral-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

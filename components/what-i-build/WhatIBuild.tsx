"use client";

import { useState } from "react";
import { whatIBuild } from "@/data/skills";
import { Cpu, Network, Sparkles, Eye, Database, Terminal, ArrowUpRight } from "lucide-react";

export default function WhatIBuild() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "ai-systems":
        return <Cpu className="h-6 w-6" />;
      case "machine-learning":
        return <Network className="h-6 w-6" />;
      case "generative-ai":
        return <Sparkles className="h-6 w-6" />;
      case "computer-vision":
        return <Eye className="h-6 w-6" />;
      case "data-products":
        return <Database className="h-6 w-6" />;
      case "intelligent-apps":
        return <Terminal className="h-6 w-6" />;
      default:
        return <Cpu className="h-6 w-6" />;
    }
  };

  return (
    <section id="what-i-build" className="py-24 md:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // DISCIPLINE & FOCUS
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mt-3">
              WHAT I BUILD
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md">
            Architecting intelligent computational pipelines from statistical foundations to deployed user-facing software.
          </p>
        </div>

        {/* Interactive Discipline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatIBuild.map((item, idx) => {
            const isHovered = activeId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
                className={`group relative p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[260px] cursor-default ${
                  isHovered
                    ? "bg-[#10101c] border-indigo-500/40 shadow-[0_10px_30px_rgba(99,102,241,0.15)] -translate-y-1"
                    : "bg-[#09090f]/60 border-white/[0.07] hover:border-white/20"
                }`}
              >
                {/* Accent glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Icon and Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl transition-colors duration-300 ${
                        isHovered
                          ? "bg-indigo-500/20 text-indigo-400"
                          : "bg-white/[0.04] text-neutral-400 group-hover:text-white"
                      }`}
                    >
                      {getIcon(item.id)}
                    </div>
                    <span className="font-mono text-xs text-neutral-600 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div className="relative z-10 pt-6 mt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-[11px] font-mono text-neutral-400 tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

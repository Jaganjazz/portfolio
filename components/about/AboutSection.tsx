"use client";

import { siteConfig } from "@/data/siteConfig";
import { Sparkles, Terminal, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Super Tag */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // PHILOSOPHY & IDENTITY
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mt-3 leading-[1.05]">
              BUILDING WITH INTELLIGENCE. <br />
              <span className="text-neutral-500">DESIGNING WITH PURPOSE.</span>
            </h2>

            <div className="mt-8 flex flex-col gap-4 text-xs font-mono text-neutral-400 border-l border-indigo-500/30 pl-4">
              <div>
                <span className="text-neutral-500">LOCATION:</span> {siteConfig.location}
              </div>
              <div>
                <span className="text-neutral-500">SPECIALIZATION:</span> AI Engineering &amp; Data Science
              </div>
              <div>
                <span className="text-neutral-500">COMMUNICATION:</span> English • Tamil
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Body & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-lg md:text-xl text-neutral-200 leading-relaxed font-normal">
              {siteConfig.longBio}
            </p>

            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              My engineering approach unites statistical rigor with high-performance modern software engineering. Rather than treating artificial intelligence as a disconnected experimentation sandbox, I build production-ready pipelines that ingest unstructured telemetry, automate mission-critical workflows, and produce tangible computational value.
            </p>

            {/* Core Competency Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h3 className="font-heading font-bold text-white text-base flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-indigo-400" />
                  Real-World Machine Learning
                </h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Developing robust models trained on real-world datasets with rigorous evaluation metrics, clean feature pipelines, and zero tolerance for spurious correlations.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h3 className="font-heading font-bold text-white text-base flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-indigo-400" />
                  Generative AI &amp; Agents
                </h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Directing large foundation models with structured prompt engineering and guardrails to create dependable synthesis and automated travel or document parsing agents.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors uppercase"
              >
                <span>Read Full Background</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

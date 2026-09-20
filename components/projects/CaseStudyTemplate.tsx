"use client";

import Image from "next/image";
import Link from "next/link";
import { Project, projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, ExternalLink, ShieldAlert, Cpu, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function CaseStudyTemplate({ project }: { project: Project }) {
  // Find next project in sequence for pagination
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-28 md:pt-36 pb-24 md:pb-32 tech-grid-bg relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="ambient-glow top-20 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ backgroundColor: `${project.accentColor}15` }}
      />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>BACK TO WORK</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="border-b border-white/[0.08] pb-12 md:pb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm font-bold text-indigo-400">
              PROJECT {project.number}
            </span>
            <span className="h-px w-6 bg-indigo-500/30" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-white tracking-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl font-heading font-medium text-neutral-400 mt-2">
            {project.subtitle}
          </p>

          <p className="mt-8 text-lg sm:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            {project.overview}
          </p>

          {/* Quick Technical Specs Rail */}
          <div className="mt-12 pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <p className="text-neutral-500 uppercase tracking-wider mb-1">ENGINEER</p>
              <p className="text-white font-medium">Jagan S</p>
            </div>
            <div>
              <p className="text-neutral-500 uppercase tracking-wider mb-1">DOMAIN</p>
              <p className="text-white font-medium">{project.category}</p>
            </div>
            <div>
              <p className="text-neutral-500 uppercase tracking-wider mb-1">STATUS</p>
              <p className="text-emerald-400 font-medium">Active Research</p>
            </div>
            <div>
              <p className="text-neutral-500 uppercase tracking-wider mb-1">ARTIFACT</p>
              <p className="text-indigo-400 font-medium">Production Prototype</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={project.githubUrl || "https://github.com/Jaganjazz"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono font-medium text-white hover:bg-white/[0.1] hover:border-white/20 transition-all"
            >
              <GithubIcon className="h-4 w-4 text-indigo-400" />
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3 text-neutral-500" />
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-mono font-bold hover:bg-neutral-200 transition-all"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Big Visual Area */}
        <div className="my-16 md:my-20">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#090912] shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
            <Image
              src={`/projects/${project.slug}.svg`}
              alt={`${project.title} Architecture Schematic`}
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-neutral-500 px-2">
            <span>FIGURE 1.0 — SYSTEM ARCHITECTURE &amp; INFERENCE PIPELINE</span>
            <span>VERIFIED AI SCHEMATIC</span>
          </div>
        </div>

        {/* Case Study Content Grid: Problem vs Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 py-12 border-b border-white/[0.08]">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // THE CHALLENGE
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
              The Problem
            </h2>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // ENGINEERING SOLUTION
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
              The Approach
            </h2>
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="py-16 border-b border-white/[0.08]">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
            // CORE CAPABILITIES
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white tracking-tight mt-2 mb-10">
            Key Features &amp; Modules
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#09090f]/60 border border-white/[0.06] flex items-start gap-4"
              >
                <div className="h-7 w-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-xs shrink-0 font-bold">
                  0{idx + 1}
                </div>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                  {feat}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Pipeline Breakdown */}
        <div className="py-16 border-b border-white/[0.08]">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
            // DATAFLOW TELEMETRY
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white tracking-tight mt-2 mb-6">
            Architecture Workflow
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-3xl mb-12">
            {project.architecture.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.architecture.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#08080e] border border-white/[0.06] relative"
              >
                <span className="text-xs font-mono text-indigo-400 font-bold block mb-2">
                  STAGE 0{idx + 1}
                </span>
                <h3 className="font-heading font-bold text-white text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack */}
        <div className="py-16 border-b border-white/[0.08]">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
            // TECHNOLOGIES DEPLOYED
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white tracking-tight mt-2 mb-8">
            Technical Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm font-mono text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Current Status (Strict Accuracy) */}
        <div className="py-16 border-b border-white/[0.08]">
          <div className="p-8 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-widest mb-1">
                <Sparkles className="h-4 w-4" />
                <span>STATUS &amp; CONTINUATION</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Current Project Status
              </h3>
              <p className="text-neutral-300 text-sm mt-1">
                {project.status}
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-400 px-3 py-1.5 rounded bg-black/40 border border-white/10 shrink-0">
              ACCURACY VERIFIED
            </div>
          </div>
        </div>

        {/* Next Project Pagination Link */}
        <div className="pt-20">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block p-8 md:p-12 rounded-2xl bg-[#090912] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  NEXT CASE STUDY // 0{nextProject.number}
                </span>
                <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight mt-2 group-hover:text-indigo-300 transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-sm font-mono text-neutral-400 mt-1">
                  {nextProject.subtitle}
                </p>
              </div>

              <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all">
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}

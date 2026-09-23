"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="work" className="py-24 md:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // SELECTED CASE STUDIES
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mt-3">
              ENGINEERED WORK
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md">
            Verified machine learning models, document parsing architectures, computer vision pipelines, and intelligent applications.
          </p>
        </div>

        {/* Editorial Project Rows */}
        <div className="flex flex-col divide-y divide-white/[0.08]">
          {projects.map((project) => {
            const isTriviva = project.id === "triviva";
            const tags = isTriviva
              ? ["Google Gemini", "FastAPI", "Python", "Gradio", "Pydantic", "Vercel"]
              : project.technologies.slice(0, 4);

            return (
              <div
                key={project.id}
                className={`group py-12 md:py-16 block transition-colors duration-300 hover:bg-white/[0.01] ${isTriviva ? "relative" : ""}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Number & Description */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      {/* Project Number & Category with Featured Badge for Triviva */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-sm font-semibold text-indigo-400 tracking-widest transition-transform duration-300 group-hover:translate-x-2">
                          {project.number}
                        </span>
                        <span className="h-px w-8 bg-indigo-500/30" />
                        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                          {project.category}
                        </span>
                        {isTriviva && (
                          <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border border-violet-500/30 text-[10px] font-mono font-semibold text-violet-300 tracking-widest uppercase">
                            FEATURED AI PROJECT
                          </span>
                        )}
                      </div>

                      {/* Project Title with micro-shift */}
                      <Link href={`/work/${project.slug}`} className="block group/title">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white tracking-tight mt-4 transition-transform duration-300 group-hover:translate-x-2 group-hover/title:text-indigo-300">
                          {project.title}
                        </h3>
                        <p className="text-lg font-heading font-medium text-neutral-400 mt-1">
                          {project.subtitle}
                        </p>
                      </Link>

                      {/* Tagline / Description */}
                      {isTriviva ? (
                        <div className="mt-4 space-y-3">
                          <p className="text-xs font-mono uppercase tracking-wider text-indigo-300 font-semibold">
                            From Dream to Itinerary in Seconds
                          </p>
                          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg">
                            An AI-powered travel planner that transforms traveler preferences, budgets, and travel styles into personalized, structured day-by-day itineraries using Google Gemini and FastAPI services.
                          </p>

                          {/* Key Feature Highlights */}
                          <div className="pt-1 flex flex-wrap gap-2">
                            {[
                              "Smart Budget Engine",
                              "Day-by-Day Itineraries",
                              "Structured JSON Responses",
                              "FastAPI Backend",
                            ].map((highlight) => (
                              <span
                                key={highlight}
                                className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-neutral-300 flex items-center gap-1.5"
                              >
                                <span className="h-1 w-1 rounded-full bg-indigo-400" />
                                <span>{highlight}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="mt-5 text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg">
                          {project.shortDescription}
                        </p>
                      )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/[0.06]">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-neutral-300 tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      {isTriviva ? (
                        <div className="flex flex-wrap items-center gap-3">
                          <Link
                            href="/work/triviva"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono font-semibold text-white hover:bg-white/[0.12] hover:border-indigo-400/40 hover:text-indigo-300 transition-all"
                          >
                            <span>VIEW CASE STUDY</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-xs font-mono font-bold text-white shadow-lg shadow-indigo-600/25 transition-all"
                            >
                              <span>LIVE DEMO</span>
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-white group-hover:text-indigo-400 transition-colors"
                        >
                          <span>EXPLORE PROJECT</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:text-indigo-400" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Large Visual Area with Parallax/Hover shift */}
                  <div className="lg:col-span-7">
                    <Link
                      href={`/work/${project.slug}`}
                      className="block relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-[#090912] shadow-2xl transition-all duration-500 group-hover:border-indigo-500/40 group-hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]"
                    >
                      {/* Schematic Image with subtle scale */}
                      <div className="relative w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                        <Image
                          src={`/projects/${project.slug}.svg`}
                          alt={`${project.title} Architecture Schematic`}
                          fill
                          className="object-cover object-center"
                        />
                      </div>

                      {/* Subtle Gradient Veil */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-transparent pointer-events-none" />

                      {/* Overlay Badges */}
                      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-mono text-neutral-400 pointer-events-none">
                        <span className="px-2.5 py-1 rounded bg-[#050508]/80 border border-white/10 text-neutral-300 backdrop-blur-sm">
                          {isTriviva ? "SCHEMATIC: GEMINI + FASTAPI" : "SCHEMATIC: ACTIVE"}
                        </span>
                        <span className="text-[11px] text-indigo-400 font-semibold tracking-wider">
                          TAP TO VIEW CASE STUDY →
                        </span>
                      </div>
                    </Link>
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

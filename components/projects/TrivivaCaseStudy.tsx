"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  ChevronDown,
  Compass,
  DollarSign,
  Users,
  Sliders,
  Navigation,
  Calendar,
  Layers,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Server,
  Zap,
  CheckCircle2,
  Clock,
  MapPin,
  Utensils,
  Lightbulb,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";

export default function TrivivaCaseStudy() {
  const triviva = projects.find((p) => p.id === "triviva")!;
  const nextProject = projects.find((p) => p.id === "aibnids") || projects[0];

  const liveUrl = "https://triviva-jet.vercel.app/";
  const githubUrl = "https://github.com/Jaganjazz/Trip-planner";

  // Architecture Flow Pipeline
  const architectureFlow = [
    { label: "USER", desc: "Inputs destination, budget, style, duration, interests", icon: Users },
    { label: "TRIVIVA UI", desc: "Gradio dynamic interface with reactive parameter intake", icon: Sliders },
    { label: "GRADIO / FASTAPI", desc: "Asynchronous backend API router & request sanitization", icon: Server },
    { label: "PYTHON SERVICES", desc: "Trip Validation, Budget Engine & Itinerary Engine", icon: Cpu },
    { label: "GOOGLE GEMINI", desc: "Server-side Gemini API with structured JSON output", icon: BrainCircuit },
    { label: "STRUCTURED OUTPUT", desc: "Personalized day-by-day itinerary & budget breakdown", icon: CheckCircle2 },
  ];

  // 6 Core Project Highlights
  const projectHighlights = [
    {
      num: "01",
      title: "Generative AI",
      desc: "Harnesses Google Gemini for multi-step contextual travel synthesis and creative schedule formulation.",
      icon: Sparkles,
    },
    {
      num: "02",
      title: "Smart Budget Engine",
      desc: "Intelligent dynamic cost estimation allocating funds across transport, accommodation, food, and activities.",
      icon: DollarSign,
    },
    {
      num: "03",
      title: "Personalized Itinerary",
      desc: "Tailors day-by-day journeys segmented into morning, afternoon, and evening slots based on user interests.",
      icon: Calendar,
    },
    {
      num: "04",
      title: "Structured AI Responses",
      desc: "Pydantic-enforced JSON output guarantees predictable schemas, zero hallucinated formats, and direct UI rendering.",
      icon: CheckCircle2,
    },
    {
      num: "05",
      title: "Secure API Architecture",
      desc: "Server-side Gemini API token brokering prevents key leaks and enables granular rate-limiting and payload validation.",
      icon: ShieldCheck,
    },
    {
      num: "06",
      title: "Vercel Serverless Architecture",
      desc: "Engineered with FastAPI lightweight ASGI packaging, optimized for instant cold starts and edge-ready deployment.",
      icon: Zap,
    },
  ];

  // Core Features
  const features = [
    {
      title: "AI-Generated Personalized Travel Itineraries",
      desc: "Transforms high-level user parameters into complete, cohesive day-by-day travel schedules.",
    },
    {
      title: "Smart Budget Estimation",
      desc: "Calculates cost allocations across transport, accommodation, meals, and excursions.",
    },
    {
      title: "Day-by-Day Time-Blocked Planning",
      desc: "Segments daily plans into morning, afternoon, and evening phases to balance pacing and transit.",
    },
    {
      title: "Personalized Curated Recommendations",
      desc: "Selects must-see attractions, local cuisine spots, and tailored cultural or adventure activities.",
    },
    {
      title: "Travel Tips & Local Insights",
      desc: "Provides safety advice, cultural etiquette, transit hacks, and optimal visitation hours.",
    },
    {
      title: "Structured JSON-Based AI Responses",
      desc: "Utilizes schema-guided generation to output verified JSON payloads ready for frontend consumption.",
    },
    {
      title: "Secure Server-Side Gemini API Integration",
      desc: "Isolates AI inference behind backend services with zero client credential exposure.",
    },
    {
      title: "FastAPI Backend with Vercel Readiness",
      desc: "High-throughput asynchronous endpoints architected for rapid response times and serverless hosting.",
    },
  ];

  // Tech Stack Matrix
  const techStack = [
    { name: "Python", category: "Core Language", role: "Primary business logic, validation routines, and algorithmic budget processing." },
    { name: "FastAPI", category: "Backend Framework", role: "High-performance asynchronous REST API routing and request orchestration." },
    { name: "Google Gemini", category: "Generative AI", role: "Reasoning engine producing structured JSON itineraries and personalized recommendations." },
    { name: "Gradio", category: "UI & Interactive Client", role: "Reactive, stateful interface designed for dynamic parameter tuning." },
    { name: "Pydantic", category: "Data Validation", role: "Schema definition, type validation, and deterministic output parsing." },
    { name: "Vercel", category: "Deployment Platform", role: "Serverless cloud infrastructure ensuring rapid global distribution." },
  ];

  // Inputs
  const projectInputs = [
    { label: "Destination", desc: "Target city, region, or multiple coordinates", icon: MapPin },
    { label: "Duration", desc: "Total trip days and target pace", icon: Clock },
    { label: "Travelers", desc: "Solo, couple, family, or group dynamics", icon: Users },
    { label: "Budget", desc: "Total financial ceiling & spending tier", icon: DollarSign },
    { label: "Travel Style", desc: "Luxury, backpacking, relaxed, or fast-paced", icon: Sliders },
    { label: "Transport", desc: "Public transit, rental car, walking, or flights", icon: Navigation },
    { label: "Interests", desc: "Culture, culinary, outdoor adventure, nightlife", icon: Compass },
  ];

  // Outputs
  const projectOutputs = [
    { title: "Trip Overview", desc: "Executive summary with theme and pacing" },
    { title: "Day-by-Day Itinerary", desc: "Sequential chronological trip timetable" },
    { title: "Morning / Afternoon / Evening", desc: "Time-blocked curated daily agenda" },
    { title: "Food Recommendations", desc: "Local eateries, street food, and fine dining" },
    { title: "Estimated Daily Costs", desc: "Itemized breakdown of projected spending" },
    { title: "Budget Breakdown", desc: "Transport, stay, dining, and activity split" },
    { title: "Places to Visit", desc: "Geo-clustered points of interest" },
    { title: "Activities", desc: "Experiential adventures and excursions" },
    { title: "Travel Tips", desc: "Localized safety, transit, and cultural hacks" },
  ];

  return (
    <article className="pt-28 md:pt-36 pb-24 md:pb-32 tech-grid-bg relative overflow-x-hidden min-h-screen">
      {/* Ambient background glows */}
      <div className="ambient-glow top-20 right-0 w-[550px] h-[550px] pointer-events-none bg-purple-600/10 blur-[130px]" />
      <div className="ambient-glow top-[35%] -left-32 w-[550px] h-[550px] pointer-events-none bg-indigo-600/10 blur-[130px]" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Navigation Bar / Back Link */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>BACK TO WORK</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-mono font-semibold text-violet-300">
              FLAGSHIP AI PROJECT
            </span>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>DEPLOYED</span>
            </div>
          </div>
        </div>

        {/* ================================================================
            HERO SECTION
           ================================================================ */}
        <section className="border-b border-white/[0.08] pb-14 md:pb-20">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-sm font-bold text-indigo-400">
              PROJECT {triviva.number}
            </span>
            <span className="h-px w-6 bg-indigo-500/30" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Generative AI · Backend Architecture · Travel Tech
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-extrabold text-white tracking-tight">
            TRIVIVA
          </h1>
          <p className="text-xl md:text-3xl font-heading font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-indigo-200 to-indigo-400 mt-2 tracking-wide uppercase">
            AI Travel Planner
          </p>

          <p className="mt-4 text-sm sm:text-base font-mono tracking-widest text-neutral-300 uppercase">
            From Dream to Itinerary in Seconds
          </p>

          {/* Core Philosophy Banner */}
          <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span>AI Engineering + Generative AI + Backend Architecture</span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-mono font-bold shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>LIVE DEMO</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/10 text-xs sm:text-sm font-mono font-medium text-white hover:bg-white/[0.1] hover:border-white/20 transition-all"
            >
              <GithubIcon className="h-4 w-4 text-indigo-400" />
              <span>VIEW ON GITHUB</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400" />
            </a>
          </div>
        </section>

        {/* ================================================================
            PROJECT OVERVIEW & CORE HIGHLIGHTS
           ================================================================ */}
        <section className="py-16 md:py-20 border-b border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                // PROJECT SHOWCASE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
                AI Travel Planning Concierge
              </h2>
              
              <div className="p-6 rounded-2xl bg-[#090914] border border-indigo-500/20 shadow-xl">
                <p className="text-white text-base md:text-lg font-heading font-medium leading-relaxed">
                  &ldquo;An AI-powered travel planner that turns destination, budget, travel style, duration, interests, and traveler preferences into personalized day-by-day journeys. TRIVIVA combines Google Gemini with a Python/FastAPI service layer and a smart budget engine to generate structured itineraries, recommendations, estimated costs, and travel tips.&rdquo;
                </p>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                TRIVIVA is an AI-powered travel planning concierge that transforms traveler preferences, budgets, and travel styles into personalized, structured day-by-day itineraries using Google Gemini.
              </p>
            </div>

            {/* Quick Metadata Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[#090912] border border-white/[0.08] shadow-2xl relative">
                <div className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-6 flex items-center justify-between">
                  <span>// TECHNICAL METRICS</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">PRODUCTION</span>
                </div>

                <div className="space-y-5 text-xs font-mono">
                  <div>
                    <span className="text-neutral-500 uppercase block mb-1">AI ENGINE</span>
                    <p className="text-white font-bold text-base">Google Gemini (JSON Mode)</p>
                  </div>
                  <div className="h-px bg-white/[0.06]" />
                  <div>
                    <span className="text-neutral-500 uppercase block mb-1">BACKEND ARCHITECTURE</span>
                    <p className="text-white font-medium text-sm">Python · FastAPI · Pydantic</p>
                  </div>
                  <div className="h-px bg-white/[0.06]" />
                  <div>
                    <span className="text-neutral-500 uppercase block mb-1">INTERACTION LAYER</span>
                    <p className="text-white font-medium text-sm">Gradio Web UI</p>
                  </div>
                  <div className="h-px bg-white/[0.06]" />
                  <div>
                    <span className="text-neutral-500 uppercase block mb-1">INFRASTRUCTURE</span>
                    <p className="text-emerald-400 font-medium text-sm">Vercel Serverless Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Key Project Highlights Grid */}
          <div className="mt-16">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-6">
              // ARCHITECTURAL HIGHLIGHTS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectHighlights.map((hl) => {
                const IconComp = hl.icon;
                return (
                  <div
                    key={hl.num}
                    className="p-6 rounded-2xl bg-[#080810] border border-white/[0.06] hover:border-indigo-500/30 hover:bg-[#0c0c16] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-indigo-400">
                          {hl.num}
                        </span>
                        <div className="h-8 w-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-indigo-300">
                          <IconComp className="h-4 w-4" />
                        </div>
                      </div>
                      <h3 className="text-base font-heading font-bold text-white mb-2">
                        {hl.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {hl.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================
            INPUTS & OUTPUTS MATRIX
           ================================================================ */}
        <section className="py-16 md:py-20 border-b border-white/[0.08]">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // DATA CONTRACT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mt-2">
              INPUTS &amp; SYNTHESIS OUTPUT
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
              TRIVIVA accepts rich multidimensional traveler constraints and generates structured, time-blocked itineraries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Inputs Column */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#090912] border border-white/[0.07]">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">
                  PROJECT INPUTS
                </h3>
              </div>

              <div className="space-y-3">
                {projectInputs.map((inp, idx) => {
                  const IconC = inp.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-300">
                          <IconC className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-heading font-bold text-white text-sm">
                          {inp.label}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 truncate max-w-[180px]">
                        {inp.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Outputs Column */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0b0a17] border border-indigo-500/20 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider">
                  PROJECT OUTPUT
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectOutputs.map((out, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.03] border border-indigo-500/15"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-indigo-400 font-bold">0{idx + 1}</span>
                      <h4 className="font-heading font-bold text-white text-sm">
                        {out.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {out.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            FEATURES GRID
           ================================================================ */}
        <section className="py-16 md:py-20 border-b border-white/[0.08]">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // VERIFIED CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mt-2">
              FEATURES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#080810] border border-white/[0.06] hover:border-indigo-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-indigo-400 font-bold block mb-3">
                    FEATURE 0{idx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-white text-base mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.04] text-[10px] font-mono text-neutral-500">
                  VERIFIED IMPLEMENTATION
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================
            TECHNOLOGY STACK
           ================================================================ */}
        <section className="py-16 md:py-20 border-b border-white/[0.08]">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // ARCHITECTURAL STACK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mt-2">
              TECH STACK
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl font-mono">
              Python · Gradio · FastAPI · Google Gemini · Pydantic · Vercel
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="p-6 rounded-2xl bg-[#090912] border border-white/[0.07] hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="text-xs font-mono text-indigo-400 font-bold uppercase mb-1">
                  {tech.category}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {tech.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================
            ARCHITECTURE SCHEMATIC & FLOW VISUALIZATION
           ================================================================ */}
        <section className="py-16 md:py-20 border-b border-white/[0.08]">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-medium mb-3">
              <Layers className="h-3.5 w-3.5" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
              ARCHITECTURE &amp; DATAFLOW
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-3xl">
              User ➔ TRIVIVA UI ➔ Gradio / FastAPI ➔ Python Services (Trip Validation, Budget Engine, Itinerary Engine) ➔ Google Gemini ➔ Structured Itinerary + Budget Breakdown.
            </p>
          </div>

          {/* Interactive Flow Sequence */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {architectureFlow.map((node, idx) => {
              const IconN = node.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#090912] border border-white/[0.06] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-indigo-400 font-bold">0{idx + 1}</span>
                      <IconN className="h-3.5 w-3.5 text-neutral-400" />
                    </div>
                    <h4 className="font-heading font-bold text-white text-xs mb-1">
                      {node.label}
                    </h4>
                    <p className="text-[11px] text-neutral-400 leading-tight">
                      {node.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Architecture Schematic Image Container (Responsive with Mobile Horizontal Scroll) */}
          <div className="rounded-2xl border border-white/10 bg-[#07070d] shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
            <div className="px-6 py-3.5 border-b border-white/[0.08] bg-[#0c0c16] flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-neutral-300">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                <span className="font-semibold text-white">FIGURE 1.0 — SYSTEM ARCHITECTURE DIAGRAM</span>
              </div>
              <span className="text-neutral-400 hidden sm:inline">FORMAT: VECTOR SVG // SCALABLE</span>
            </div>

            <div className="w-full overflow-x-auto p-4 sm:p-6 md:p-8 scrollbar-thin">
              <div className="min-w-[760px] lg:min-w-full relative aspect-[1320/660] w-full">
                <Image
                  src="/projects/triviva/architecture.svg"
                  alt="TRIVIVA System Architecture Diagram"
                  fill
                  priority
                  className="object-contain object-center"
                />
              </div>
            </div>

            <div className="px-6 py-3 border-t border-white/[0.06] bg-[#090912] flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-neutral-500 gap-2">
              <span>PIPELINE: USER ➔ TRIVIVA UI ➔ GRADIO/FASTAPI ➔ PYTHON SERVICES ➔ GOOGLE GEMINI ➔ STRUCTURED ITINERARY</span>
              <span className="text-indigo-400 font-medium sm:hidden">↔ Swipe horizontally to inspect schematic nodes</span>
              <span className="text-indigo-400 font-medium hidden sm:inline">STATELESS EXECUTION // SECURE GEMINI INTEGRATION</span>
            </div>
          </div>
        </section>

        {/* ================================================================
            PROJECT PREVIEW / MOCKUP
           ================================================================ */}
        <section className="py-16 md:py-20 border-b border-white/[0.08]">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // INTERFACE TELEMETRY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mt-2">
              PROJECT PREVIEW &amp; INTERFACE
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Interactive preview of the deployed TRIVIVA application.
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-2xl bg-[#080810] border border-white/10 shadow-2xl flex flex-col items-center text-center">
            <div className="h-14 w-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
              <Sparkles className="h-7 w-7 animate-pulse" />
            </div>

            <h3 className="text-2xl font-heading font-bold text-white tracking-tight uppercase mb-2">
              TRIVIVA LIVE CONCIERGE INTERFACE
            </h3>
            <p className="text-neutral-400 text-sm max-w-lg leading-relaxed mb-6">
              Access the deployed Gradio/FastAPI application on Vercel to generate custom travel schedules in real time.
            </p>

            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold hover:bg-neutral-200 transition-all shadow-xl"
            >
              <span>LAUNCH LIVE APP DEMO</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* ================================================================
            BOTTOM CTA & NEXT CASE STUDY
           ================================================================ */}
        <section className="pt-16 md:pt-20">
          <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-b from-[#0e0d1f] to-[#07070e] border border-indigo-500/30 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
            <div className="ambient-glow top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 blur-[100px] pointer-events-none" />

            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-3">
              // EXPLORE CODEBASE &amp; DEPLOYMENT
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight uppercase mb-4">
              EXPERIENCE TRIVIVA
            </h2>
            <p className="text-neutral-300 text-base md:text-lg max-w-xl leading-relaxed mb-8">
              Explore the live AI travel planner or inspect the open-source repository on GitHub.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-mono text-sm font-bold shadow-xl hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95"
              >
                <span>LIVE DEMO</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.06] border border-white/15 text-white font-mono text-sm font-medium hover:bg-white/[0.12] hover:border-white/30 transition-all hover:scale-105 active:scale-95"
              >
                <GithubIcon className="h-4 w-4 text-indigo-400" />
                <span>VIEW ON GITHUB</span>
                <ArrowUpRight className="h-4 w-4 text-neutral-400" />
              </a>
            </div>
          </div>

          {/* Next Project Pagination */}
          <div className="mt-16 pt-12 border-t border-white/[0.08]">
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block p-8 md:p-12 rounded-2xl bg-[#090912] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block mb-2">
                    NEXT CASE STUDY // 04
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mt-1">
                    {nextProject.subtitle}
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all shrink-0">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </div>
        </section>

      </div>
    </article>
  );
}

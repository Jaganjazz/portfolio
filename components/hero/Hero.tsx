"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { ArrowDownRight, Download, Sparkles } from "lucide-react";

export default function Hero() {
  const textTopRef = useRef<HTMLDivElement | null>(null);
  const textBottomRef = useRef<HTMLDivElement | null>(null);
  const profileImgRef = useRef<HTMLDivElement | null>(null);
  const fixedHeroBgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleHeroParallax = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (!prefersReducedMotion && scrollY <= viewportHeight * 1.6) {
        const progress = Math.min(1, scrollY / viewportHeight);

        // Split text outwardly with smooth easing
        const moveX = progress * Math.min(320, window.innerWidth * 0.38);
        const scaleText = 1 + progress * 0.25;
        const opacityText = Math.max(0, 1 - progress * 0.75);

        if (textTopRef.current) {
          textTopRef.current.style.transform = `translate3d(${-moveX}px, 0, 0) scale(${scaleText})`;
          textTopRef.current.style.opacity = `${opacityText}`;
        }
        if (textBottomRef.current) {
          textBottomRef.current.style.transform = `translate3d(${moveX}px, 0, 0) scale(${scaleText})`;
          textBottomRef.current.style.opacity = `${opacityText}`;
        }

        // Keep real portrait naturally positioned while content sheet rises over it
        if (profileImgRef.current) {
          profileImgRef.current.style.transform = `translate3d(0, ${16 + scrollY * 0.3}px, 0) scale(${
            1 - progress * 0.04
          })`;
        }

        if (fixedHeroBgRef.current) {
          fixedHeroBgRef.current.style.visibility = "visible";
        }
      } else if (scrollY > viewportHeight * 1.6 && fixedHeroBgRef.current) {
        // Hide fixed layer once scrolled past to save GPU drawing cycles
        fixedHeroBgRef.current.style.visibility = "hidden";
      }
    };

    window.addEventListener("scroll", handleHeroParallax, { passive: true });
    window.addEventListener("resize", handleHeroParallax, { passive: true });
    handleHeroParallax();

    return () => {
      window.removeEventListener("scroll", handleHeroParallax);
      window.removeEventListener("resize", handleHeroParallax);
    };
  }, []);

  return (
    <>
      {/* ============================================================
          1. FIXED PARALLAX HERO BACKGROUND (GIANT TYPOGRAPHY + REAL PORTRAIT OVERLAY)
          ============================================================ */}
      <div
        ref={fixedHeroBgRef}
        className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden bg-[#050507] pointer-events-none select-none tech-grid-bg"
        aria-hidden="true"
      >
        {/* Subtle Ambient Violet Glows */}
        <div className="absolute -top-24 left-1/4 w-[550px] h-[550px] rounded-full bg-[#8B5CF6]/12 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#7C3AED]/10 blur-[130px] pointer-events-none" />

        {/* Giant Typography Container (Behind Portrait) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[1] pointer-events-none">
          {/* Top Line: JAGAN in Galan font / Violet */}
          <div
            ref={textTopRef}
            className="font-galan font-black text-[#8B5CF6] tracking-tight leading-[0.85] text-center will-change-transform transition-colors duration-300"
            style={{
              fontSize: "clamp(64px, 22vw, 290px)",
              textShadow: "0 0 50px rgba(139, 92, 246, 0.35)",
            }}
          >
            JAGAN
          </div>

          {/* Bottom Line: AI ENGINEER */}
          <div
            ref={textBottomRef}
            className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500 uppercase tracking-widest text-center will-change-transform leading-[0.9] mt-2"
            style={{
              fontSize: "clamp(26px, 9vw, 120px)",
              letterSpacing: "clamp(4px, 1.5vw, 16px)",
            }}
          >
            AI ENGINEER
          </div>
        </div>

        {/* Profile Stage: Real Portrait Photograph (In Front of Giant Text) */}
        <div className="relative z-[2] flex items-end justify-center h-screen w-full pointer-events-none">
          <div
            ref={profileImgRef}
            className="relative flex items-end justify-center"
            style={{
              height: "clamp(440px, 92vh, 1020px)",
              maxHeight: "100vh",
              width: "auto",
              maxWidth: "95vw",
              transform: "translateZ(0)",
            }}
          >
            {/* Ambient Silhouette Glow behind portrait (isolated so it does not blur the photograph) */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-[70%] h-[75%] rounded-full bg-[#8B5CF6]/20 blur-[70px]" />
              <div className="w-[50%] h-[60%] rounded-full bg-black/60 blur-[40px]" />
            </div>

            <Image
              src="/assets/jagan-profile.png"
              alt="Jagan S — AI Engineer"
              width={2048}
              height={2048}
              priority
              unoptimized
              className="h-full w-auto max-h-[100vh] max-w-[95vw] object-contain select-none relative z-10"
              style={{
                imageRendering: "-webkit-optimize-contrast",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            />
          </div>
        </div>
      </div>

      {/* ============================================================
          2. SCROLLING CONTENT WRAPPER: 100vh SPACER + CONTENT SHEET
          ============================================================ */}
      <div className="relative z-10">
        {/* 100vh Viewport Spacer (Allows full viewing of the Hero poster) */}
        <div className="h-screen w-full pointer-events-none bg-transparent" aria-hidden="true" />

        {/* Main Content Sheet: Rises and Slides Over the Parallax Photo */}
        <div className="relative z-20 bg-[#050507] border-t border-white/[0.08] shadow-[0_-30px_70px_rgba(0,0,0,0.95)]">
          {/* INTRO BIO SECTION (The opening section on the rising content sheet) */}
          <section id="home" className="pt-20 pb-20 md:pt-28 md:pb-28 relative overflow-hidden">
            {/* Ambient Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50" aria-hidden="true">
              <div className="absolute top-10 -left-20 w-96 h-96 rounded-full bg-[#8B5CF6]/10 blur-[100px]" />
              <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#7C3AED]/10 blur-[100px]" />
            </div>

            <div className="max-w-[920px] mx-auto px-6 md:px-12 text-center relative z-10">
              {/* Eyebrow */}
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#A78BFA] text-xs font-mono font-semibold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                <Sparkles className="h-3.5 w-3.5 text-[#A78BFA]" />
                <span>AI &amp; DATA SCIENCE UNDERGRADUATE</span>
              </span>

              {/* Main Name Heading */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black text-white tracking-tight leading-[1.05]">
                Jagan S
              </h1>

              {/* Primary Subtitle */}
              <p className="mt-3 text-lg sm:text-2xl font-heading font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] via-white to-[#8B5CF6]">
                AI Engineer | Machine Learning
              </p>

              {/* Concept & Description */}
              <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto font-normal">
                {siteConfig.longBio}
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-[#8B5CF6] hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:scale-[1.02]"
                >
                  <span>VIEW WORK</span>
                  <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-[-45deg]" />
                </a>

                <a
                  href={siteConfig.links.resumeDownload}
                  download="Jagan-Resume.pdf"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-white font-medium text-sm transition-all duration-300 hover:bg-white/[0.12] hover:border-[#8B5CF6]/50 hover:scale-[1.02]"
                >
                  <Download className="h-4 w-4 text-[#A78BFA]" />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </div>

              {/* Pursuing Note */}
              <p className="mt-8 text-xs font-mono text-neutral-500 tracking-wider">
                Currently pursuing B.Tech at PSV College of Engineering Technology (2023–2027) • CGPA: 8.5*
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

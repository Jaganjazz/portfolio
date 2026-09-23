"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";

const LOADING_STEPS = [
  { threshold: 25, text: "INITIALIZING ENVIRONMENT..." },
  { threshold: 55, text: "LOADING AI & ML ARTIFACTS..." },
  { threshold: 85, text: "PREPARING INTERFACES..." },
  { threshold: 100, text: "SYSTEM READY" },
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if the preloader was already completed in this session
    const hasSeen = sessionStorage.getItem("portfolio_preloader_seen");
    if (hasSeen) {
      setShouldRender(false);
      return;
    }

    // Lock scrolling while preloader is active
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const duration = 1400; // 1.4s smooth intro

    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(1, elapsed / duration);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
      const currentVal = Math.round(easedProgress * 100);

      setProgress(currentVal);

      if (rawProgress < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Finished
        setIsDone(true);
        sessionStorage.setItem("portfolio_preloader_seen", "true");

        // Allow smooth curtain exit before removing from DOM
        setTimeout(() => {
          document.body.style.overflow = "";
          setShouldRender(false);
        }, 700);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) return null;

  const currentStatus =
    LOADING_STEPS.find((step) => progress <= step.threshold)?.text || "SYSTEM READY";

  return (
    <aside
      aria-label="Loading portfolio"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-[#050507] text-[#f4f4f7] px-6 py-8 select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isDone ? "opacity-0 -translate-y-6 pointer-events-none" : "opacity-100 translate-y-0"
      }`}
    >
      {/* Top subtle HUD telemetry */}
      <div className="w-full max-w-5xl flex items-center justify-between text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          <span>JAGAN S // PORTFOLIO</span>
        </div>
        <div className="hidden sm:block text-zinc-600">AI ENGINEER & RESEARCHER</div>
        <div className="font-semibold text-violet-400">{progress}%</div>
      </div>

      {/* Center Loader with Rotating Geometry and Live Progress */}
      <div className="flex flex-col items-center justify-center my-auto w-full max-w-sm">
        {/* Ambient radial glow */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute w-44 h-44 rounded-full bg-violet-600/15 blur-2xl pointer-events-none" />
          <Loader size={54} variant="accent" />
        </div>

        {/* Dynamic percentage readout */}
        <div className="text-center mb-5">
          <div className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2 font-mono">
            {progress}
            <span className="text-violet-400 text-2xl ml-1 font-sans font-light">%</span>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400 h-4 transition-all">
            {currentStatus}
          </p>
        </div>

        {/* Sleek Progress Bar */}
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-400 transition-all duration-100 ease-out rounded-full shadow-[0_0_12px_rgba(139,92,246,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom status note */}
      <div className="w-full max-w-5xl flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
        <span>SYS.STATUS: INITIALIZING</span>
        <span>LOCATION: TIRUPATTUR, TN</span>
      </div>
    </aside>
  );
}

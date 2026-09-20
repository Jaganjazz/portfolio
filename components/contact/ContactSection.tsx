"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Mail, Copy, Check, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative border-t border-white/[0.06] overflow-hidden">
      {/* Subtle Glow */}
      <div className="ambient-glow bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>// INITIATE CONTACT</span>
          </div>

          {/* Grand CTA Heading */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white tracking-tight leading-[0.95]">
            LET&apos;S BUILD <br />
            SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-white">
              INTELLIGENT.
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-neutral-400 max-w-xl leading-relaxed">
            Open to opportunities, collaborations and interesting AI projects.
          </p>

          {/* Contact Direct Actions */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4 text-black" />
              <span>EMAIL ME</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white/[0.05] border border-white/10 text-white font-mono text-xs transition-all duration-300 hover:bg-white/[0.1] hover:border-white/20"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-neutral-400" />
                  <span>{siteConfig.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links Matrix */}
          <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-6">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              PROFILES //
            </span>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-neutral-300 hover:text-white hover:border-indigo-500/40 transition-colors"
            >
              <LinkedinIcon className="h-3.5 w-3.5 text-indigo-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3 w-3 text-neutral-500" />
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-neutral-300 hover:text-white hover:border-indigo-500/40 transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5 text-indigo-400" />
              <span>GitHub</span>
              <ArrowUpRight className="h-3 w-3 text-neutral-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

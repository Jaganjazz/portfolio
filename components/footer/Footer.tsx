"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 md:py-24 border-t border-white/[0.08] bg-[#040407] text-neutral-400">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Left Col: Brand Identity */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-heading font-extrabold text-2xl text-white tracking-tight">
              {siteConfig.shortName}
            </h3>
            <p className="font-mono text-xs text-indigo-400 font-semibold tracking-widest uppercase">
              {siteConfig.title}
            </p>
            <p className="text-xs font-mono text-neutral-500">
              Artificial Intelligence • Machine Learning • Data Science
            </p>
            <p className="text-xs font-mono text-neutral-400 pt-2">
              Building intelligent systems that turn data into useful products.
            </p>
          </div>

          {/* Center Col: Navigation */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              INDEX //
            </p>
            <div className="flex flex-col space-y-2 text-sm font-mono">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className="text-neutral-400 hover:text-white transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/resume"
                className="text-neutral-400 hover:text-white transition-colors w-fit"
              >
                RESUME PREVIEW
              </Link>
            </div>
          </div>

          {/* Right Col: Location & Meta */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              BASE &amp; DISPATCH //
            </p>
            <p className="text-xs font-mono text-neutral-400">
              Location: <span className="text-neutral-300">{siteConfig.location}</span>
            </p>
            <p className="text-xs font-mono text-neutral-400">
              Email: <a href={`mailto:${siteConfig.email}`} className="text-indigo-400 hover:underline">{siteConfig.email}</a>
            </p>
            <div className="pt-2 flex flex-col space-y-1 text-sm font-mono">
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <span className="text-neutral-600">•</span>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                <ArrowUp className="h-3.5 w-3.5" />
                <span>BACK TO TOP</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-600">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>ENGINEERED FOR PRODUCTION</span>
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            <span className="text-neutral-400">SYSTEM OPERATIONAL</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

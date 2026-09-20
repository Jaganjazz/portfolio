"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const getLinkHref = (item: { href: string; path: string }) => {
    return isHome ? item.href : item.path;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-6 transition-all duration-300 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-[1360px] px-5 py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#0c0c14]/85 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              : "bg-[#09090f]/50 border border-white/[0.06] backdrop-blur-md"
          }`}
        >
          {/* Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold transition-transform duration-300 group-hover:scale-105">
              JS
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm md:text-base tracking-wider text-white">
                {siteConfig.shortName}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase">
                {siteConfig.title}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 rounded-full bg-white/[0.03] border border-white/[0.05] p-1">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={getLinkHref(item)}
                className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wider text-neutral-300 transition-all duration-200 hover:text-white hover:bg-white/[0.08]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Availability Status & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-[11px] font-mono font-medium text-emerald-400 tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{siteConfig.status}</span>
            </div>

            <a
              href={siteConfig.links.resumeDownload}
              download
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-medium bg-white text-black transition-all duration-200 hover:bg-neutral-200 hover:scale-[1.02]"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-white"
            aria-label="Toggle menu"
          >
            <span>{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
            {mobileMenuOpen ? (
              <X className="h-4 w-4 text-neutral-300" />
            ) : (
              <Menu className="h-4 w-4 text-neutral-300" />
            )}
          </button>
        </nav>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 flex flex-col bg-[#050508]/98 backdrop-blur-2xl ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full px-8 pt-28 pb-12">
          {/* Main Links */}
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">
              // NAVIGATION
            </span>
            {siteConfig.navItems.map((item, idx) => (
              <Link
                key={item.label}
                href={getLinkHref(item)}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between text-3xl font-heading font-bold text-neutral-200 hover:text-white transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono text-neutral-600">0{idx + 1}</span>
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight className="h-5 w-5 text-neutral-600 transition-transform group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}

            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-between text-3xl font-heading font-bold text-neutral-200 hover:text-white transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono text-neutral-600">06</span>
                <span>RESUME PREVIEW</span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-neutral-600 transition-transform group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* Drawer Footer Status */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              {siteConfig.status}
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>{siteConfig.location}</span>
              <a
                href={siteConfig.links.resumeDownload}
                download
                className="text-indigo-400 underline underline-offset-4"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

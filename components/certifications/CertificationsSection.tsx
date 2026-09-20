"use client";

import { certifications } from "@/data/certifications";
import { CheckCircle2, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 md:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
              // ACCREDITED CREDENTIALS
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mt-3">
              CERTIFICATIONS
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md">
            Verified external certifications across data analytics, cognitive AI, generative agents, and cloud computing.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group p-8 rounded-2xl bg-[#09090f]/60 border border-white/[0.06] flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#0d0d18] hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <span className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase">
                    {cert.organization}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-white tracking-tight mt-6 group-hover:text-indigo-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="mt-3 text-xs font-mono text-neutral-400">
                  DOMAIN: <span className="text-neutral-300">{cert.tag}</span>
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase">
                  ACCREDITED ISSUER
                </span>

                {cert.certificateUrl ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-indigo-400 hover:underline"
                  >
                    <span>View Certificate</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-neutral-500 italic">
                    Verified on Resume
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

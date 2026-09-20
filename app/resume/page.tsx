import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Download, ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume Preview — Jagan S",
  description: "View and download the verified resume of Jagan S, AI Engineer.",
};

export default function ResumePage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32 tech-grid-bg relative min-h-screen">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>BACK TO HOME</span>
          </Link>
        </div>

        {/* Header Bar */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#09090f] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-heading font-bold text-white">
                Jagan S — Verified Resume
              </h1>
              <p className="text-xs font-mono text-neutral-400 flex items-center gap-2 mt-1">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  AUTHENTICATED PDF
                </span>
                <span>•</span>
                <span>UPDATED 2026</span>
              </p>
            </div>
          </div>

          <a
            href={siteConfig.links.resumeDownload}
            download="Jagan-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs md:text-sm hover:bg-neutral-200 transition-all hover:scale-[1.02] shadow-lg shadow-white/5"
          >
            <Download className="h-4 w-4 text-black" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>

        {/* Embedded PDF Viewer Frame */}
        <div className="relative w-full aspect-[1/1.35] sm:aspect-[1/1.414] rounded-2xl overflow-hidden border border-white/10 bg-[#12121c] shadow-2xl">
          <iframe
            src={`${siteConfig.links.resumeDownload}#toolbar=0&navpanes=0`}
            title="Jagan S Resume Document"
            className="w-full h-full border-0"
          />
        </div>

        {/* Alternative fallback notice */}
        <div className="mt-6 text-center text-xs font-mono text-neutral-500">
          If the PDF preview does not render automatically in your browser,{" "}
          <a
            href={siteConfig.links.resumeDownload}
            download="Jagan-Resume.pdf"
            className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300"
          >
            click here to download the file directly
          </a>
          .
        </div>
      </div>
    </div>
  );
}

import { projects } from "@/data/projects";
import CaseStudyTemplate from "@/components/projects/CaseStudyTemplate";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Based NIDS: Network Intrusion Detection — Jagan S",
  description: "Developed a machine learning model to detect malicious network traffic and cyber threats.",
};

export default function AibnidsPage() {
  const project = projects.find((p) => p.id === "aibnids");
  if (!project) return notFound();

  return <CaseStudyTemplate project={project} />;
}

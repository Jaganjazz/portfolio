import { projects } from "@/data/projects";
import CaseStudyTemplate from "@/components/projects/CaseStudyTemplate";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fin Tech: NLP Document Parsing — Jagan S",
  description: "Developed an NLP system to extract structured information from financial documents.",
};

export default function FinTechPage() {
  const project = projects.find((p) => p.id === "fin-tech");
  if (!project) return notFound();

  return <CaseStudyTemplate project={project} />;
}

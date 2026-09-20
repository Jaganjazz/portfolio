import { projects } from "@/data/projects";
import CaseStudyTemplate from "@/components/projects/CaseStudyTemplate";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision Spec: Visual Quality Control — Jagan S",
  description: "Built a computer vision model for automated defect detection in manufacturing.",
};

export default function VisionSpecPage() {
  const project = projects.find((p) => p.id === "vision-spec");
  if (!project) return notFound();

  return <CaseStudyTemplate project={project} />;
}

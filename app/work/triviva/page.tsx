import { projects } from "@/data/projects";
import CaseStudyTemplate from "@/components/projects/CaseStudyTemplate";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Triviva: AI Travel Planner — Jagan S",
  description: "Built an AI-powered travel planning application that creates personalized itineraries using user preferences, budget and duration.",
};

export default function TrivivaPage() {
  const project = projects.find((p) => p.id === "triviva");
  if (!project) return notFound();

  return <CaseStudyTemplate project={project} />;
}

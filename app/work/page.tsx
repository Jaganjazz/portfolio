import { Metadata } from "next";
import ProjectsSection from "@/components/projects/ProjectsSection";

export const metadata: Metadata = {
  title: "Work & Case Studies — Jagan S",
  description: "Explore AI engineering case studies by Jagan S: NLP document parsing, computer vision quality control, generative AI travel planning, and network intrusion detection.",
};

export default function WorkIndexPage() {
  return (
    <div className="pt-16">
      <ProjectsSection />
    </div>
  );
}

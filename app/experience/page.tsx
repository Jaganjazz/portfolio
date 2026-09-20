import { Metadata } from "next";
import ExperienceSection from "@/components/experience/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience & Timeline — Jagan S",
  description: "Explore the internship experience of Jagan S across AI & ML, Cybersecurity, and Python Automation.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-16">
      <ExperienceSection />
    </div>
  );
}

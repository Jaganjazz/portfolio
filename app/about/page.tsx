import { Metadata } from "next";
import AboutSection from "@/components/about/AboutSection";
import EducationSection from "@/components/education/EducationSection";
import SkillsSection from "@/components/skills/SkillsSection";

export const metadata: Metadata = {
  title: "About & Engineering Philosophy — Jagan S",
  description: "Learn about Jagan S, an AI Engineer with a strong foundation in Python, SQL, Machine Learning, and Data Analytics.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutSection />
      <EducationSection />
      <SkillsSection />
    </div>
  );
}

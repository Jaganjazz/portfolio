import Hero from "@/components/hero/Hero";
import WhatIBuild from "@/components/what-i-build/WhatIBuild";
import ProjectsSection from "@/components/projects/ProjectsSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import EducationSection from "@/components/education/EducationSection";
import CertificationsSection from "@/components/certifications/CertificationsSection";
import ExploringSection from "@/components/exploring/ExploringSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-20 bg-[#050507]">
        <WhatIBuild />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ExploringSection />
        <ContactSection />
      </div>
    </>
  );
}

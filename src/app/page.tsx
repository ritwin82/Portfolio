import { ProgressNav } from "@/components/progress-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { TechMatrixSection } from "@/components/sections/tech-matrix-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#0a0a0a] text-white">
      <SiteHeader />
      <ProgressNav />
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <TechMatrixSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

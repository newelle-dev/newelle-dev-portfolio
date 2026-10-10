"use client";
import Hero from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Projects from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import GitHubSection from "@/components/GitHubSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <ExperienceSection />
        <TechStackSection />
        <GitHubSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;

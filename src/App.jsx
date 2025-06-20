import React, { useState, useEffect } from "react";
import ParticlesBackground from "./Effects/ParticlesBackground";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const [activeProjectSection, setActiveProjectSection] = useState("");

  const handleProjectSectionChange = (section) => {
    // Temporarily disable smooth scrolling
    document.documentElement.style.scrollBehavior = "auto";

    const currentScrollY = window.scrollY;
    const newSection = activeProjectSection === section ? "" : section;
    setActiveProjectSection(newSection);

    // Restore scroll position and re-enable smooth scrolling
    setTimeout(() => {
      window.scrollTo(0, currentScrollY);
      document.documentElement.style.scrollBehavior = "smooth";
    }, 50);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isResumeDropdownOpen && !event.target.closest(".resume-dropdown")) {
        setIsResumeDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isResumeDropdownOpen]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ParticlesBackground />
      <div className="relative z-10"></div>

      <Navigation
        scrollY={scrollY}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <Hero
        isResumeDropdownOpen={isResumeDropdownOpen}
        setIsResumeDropdownOpen={setIsResumeDropdownOpen}
      />
      <About />
      <Projects
        activeProjectSection={activeProjectSection}
        handleProjectSectionChange={handleProjectSectionChange}
      />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;

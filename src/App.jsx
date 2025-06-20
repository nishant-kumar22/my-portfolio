import React, { useState, useEffect, useRef } from "react";
import ParticlesBackground from "./Effects/ParticlesBackground";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import useScrollPosition from "./hooks/useScrollPosition";
import useLoadingState from "./hooks/useLoadingState";
import useOutsideClick from "./hooks/useOutsideClick";

function App() {
  // State management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const [activeProjectSection, setActiveProjectSection] = useState("");

  // Custom hooks
  const scrollY = useScrollPosition();
  const isLoading = useLoadingState(2500);

  // Refs
  const resumeDropdownRef = useRef(null);

  // Handle project section changes
  const handleProjectSectionChange = (section) => {
    document.documentElement.style.scrollBehavior = "auto";
    const currentScrollY = window.scrollY;
    const newSection = activeProjectSection === section ? "" : section;
    setActiveProjectSection(newSection);

    requestAnimationFrame(() => {
      window.scrollTo(0, currentScrollY);
      document.documentElement.style.scrollBehavior = "smooth";
    });
  };

  // Handle outside click for resume dropdown
  useOutsideClick(
    resumeDropdownRef,
    () => setIsResumeDropdownOpen(false),
    isResumeDropdownOpen
  );

  // Initialize smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.body.style.cursor = "auto";
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation
          scrollY={scrollY}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <Hero
          isResumeDropdownOpen={isResumeDropdownOpen}
          setIsResumeDropdownOpen={setIsResumeDropdownOpen}
          resumeDropdownRef={resumeDropdownRef}
        />

        <About />
        <Projects
          activeProjectSection={activeProjectSection}
          handleProjectSectionChange={handleProjectSectionChange}
        />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;

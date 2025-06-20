import React from "react";
import ProjectsSection from './sections/ProjectsSection';

function Projects({ activeProjectSection, handleProjectSectionChange }) {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ProjectsSection 
          activeProjectSection={activeProjectSection}
          handleProjectSectionChange={handleProjectSectionChange}
        />
      </div>
    </section>
  );
}

export default Projects;
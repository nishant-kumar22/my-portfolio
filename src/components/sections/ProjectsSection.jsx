import React from 'react';
import ProjectCategory from './ProjectCategory';
import { projectCategories, projectsData } from '../../data/projectsData';

function ProjectsSection({ activeProjectSection, handleProjectSectionChange }) {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="space-y-6">
        {projectCategories.map((category) => (
          <ProjectCategory
            key={category.id}
            category={category}
            projects={projectsData[category.id]}
            isActive={activeProjectSection === category.id}
            onToggle={() => handleProjectSectionChange(category.id)}
            showViewAllButton={category.id === 'ml'}
            viewAllLink="https://github.com/nishant-kumar22/machine_learning"
            viewAllText="View All ML Projects"
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
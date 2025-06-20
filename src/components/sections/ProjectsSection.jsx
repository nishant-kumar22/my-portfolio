// import React from 'react';
// import ProjectCategory from './ProjectCategory';
// import { projectCategories, projectsData } from '../../data/projectsData';

// function ProjectsSection({ activeProjectSection, handleProjectSectionChange }) {
//   return (
//     <div>
//       <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
//       <div className="space-y-6">
//         {projectCategories.map((category) => (
//           <ProjectCategory
//             key={category.id}
//             category={category}
//             projects={projectsData[category.id]}
//             isActive={activeProjectSection === category.id}
//             onToggle={() => handleProjectSectionChange(category.id)}
//             showViewAllButton={category.id === 'ml'}
//             viewAllLink="https://github.com/nishant-kumar22/machine_learning"
//             viewAllText="View All ML Projects"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectsSection;

import React from 'react';
import ProjectCategory from './ProjectCategory';
import { projectCategories, projectsData } from '../../data/projectsData';

function ProjectsSection({ activeProjectSection, handleProjectSectionChange }) {
  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Showcasing my expertise across full-stack development, machine learning, and game development
        </p>
      </div>

      {/* Project Categories */}
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
import React from 'react';
import ProjectIcon from './ProjectIcon';

function ProjectCategoryHeader({ 
  category, 
  isActive, 
  onClick, 
  title, 
  description, 
  projectCount, 
  color 
}) {
  return (
    <button
      onClick={onClick}
      className="w-full p-6 text-left hover:bg-gray-800 transition-all duration-300 flex items-center justify-between group"
    >
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 bg-${color}-600/20 rounded-lg flex items-center justify-center group-hover:bg-${color}-600/30 transition-colors`}>
          <ProjectIcon type={category} className={`text-${color}-400`} />
        </div>
        <div>
          <h3 className={`text-xl font-bold text-white group-hover:text-${color}-400 transition-colors`}>
            {title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <span className={`px-3 py-1 bg-${color}-600/20 text-${color}-300 rounded-full text-xs font-medium`}>
          {projectCount} Projects
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </button>
  );
}

export default ProjectCategoryHeader;
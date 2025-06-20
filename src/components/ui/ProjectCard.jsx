import React from 'react';
import TechTag from './TechTag';
import GitHubIcon from './GitHubIcon';
import PlayIcon from './PlayIcon';
import HighlightedText from './HighlightedText';

function ProjectCard({ project, layout = 'horizontal' }) {
  const { title, description, technologies, emoji, period, color, links } = project;
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'github':
        return <GitHubIcon />;
      case 'play':
        return <PlayIcon />;
      case 'notebook':
        return <span className="mr-1">📓</span>;
      default:
        return null;
    }
  };

  const renderDescription = () => {
    if (typeof description === 'string' && highlights) {
      return <HighlightedText text={description} highlights={highlights} />;
    }
    return description;
  };

  if (layout === 'grid') {
  return (
    <div className={`bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-${color}-500/50 hover:shadow-lg hover:shadow-${color}-500/10 transition-all duration-300 group flex flex-col h-full`}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
          {emoji}
        </div>
        {project.badge && (
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
            {project.badge}
          </span>
        )}
      </div>
      <h3 className={`text-lg font-bold text-${color}-400 mb-2`}>
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
        {description}
      </p>
      <div className="flex flex-wrap gap-1 mb-4">
        {technologies.map((tech) => (
          <TechTag key={tech} tech={tech} variant="small" />
        ))}
      </div>
      <div className="flex justify-center mt-auto">
        {links.map((link) => (
          <a
            key={link.type}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full text-center py-2 bg-${color}-600/20 border border-${color}-500/30 hover:bg-${color}-600 text-${color}-300 hover:text-white rounded transition-all text-sm font-medium flex items-center justify-center`}
          >
            {renderIcon(link.icon)}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

  return (
    <div className={`bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-${color}-500/10 transition-all duration-300 group`}>
      <div className="grid md:grid-cols-2 gap-0">
        <div className={`${project.imageOrder === 'right' ? 'md:order-2' : ''} h-56 md:h-auto bg-gray-800 border border-gray-700 flex items-center justify-center relative overflow-hidden group-hover:border-${color}-500/30 transition-all duration-300`}>
          <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/5 to-${color === 'green' ? 'emerald' : color === 'blue' ? 'cyan' : color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          <div className="text-center p-4 md:p-8 relative z-10 pt-12 md:pt-8">
            <div className="text-4xl md:text-6xl mb-2 md:mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
              {emoji}
            </div>
            <h4 className={`text-lg md:text-xl font-bold text-gray-300 group-hover:text-${color}-400 transition-colors duration-300`}>
              {project.shortTitle || title}
            </h4>
            <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">
              {project.subtitle}
            </p>
          </div>
          <div className="absolute top-3 left-3 md:bottom-3 md:top-auto">
            <span className={`px-2 py-1 bg-${color}-600/20 border border-${color}-500/30 text-${color}-300 text-xs rounded-full`}>
              {period}
            </span>
          </div>
        </div>
        <div className={`${project.imageOrder === 'right' ? 'md:order-1' : ''} p-6`}>
          <h3 className={`text-xl font-bold text-${color}-400 mb-2`}>
            {title}
          </h3>
          <div className="flex flex-wrap gap-1 mb-3">
            {technologies.map((tech) => (
              <TechTag 
                key={tech} 
                tech={tech} 
                hoverColor={color}
              />
            ))}
          </div>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {typeof description === 'string' ? description : description}
          </p>
          <div className="flex space-x-3">
            {links.map((link) => (
          <a
            key={link.type}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full text-center py-2 bg-${color}-600/20 border border-${color}-500/30 hover:bg-${color}-600 text-${color}-300 hover:text-white rounded transition-all text-sm font-medium flex items-center justify-center`}
          >
            {renderIcon(link.icon)}
            {link.label}
          </a>
        ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
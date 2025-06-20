import React from 'react';
import TechTag from './TechTag';
import GitHubIcon from './GitHubIcon';
import PlayIcon from './PlayIcon';
import HighlightedText from './HighlightedText';

function ProjectCard({ project, layout = 'horizontal' }) {
  const { title, description, technologies, emoji, period, color, links, highlights } = project;

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

  // Define explicit color classes for each color
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        border: 'hover:border-blue-500/50',
        shadow: 'hover:shadow-blue-500/10',
        gradient: 'from-blue-500/5 to-cyan-500/5',
        text: 'text-blue-400',
        bg: 'bg-blue-600/20',
        borderColor: 'border-blue-500/30',
        hoverBg: 'hover:bg-blue-600',
        textColor: 'text-blue-300'
      },
      green: {
        border: 'hover:border-green-500/50',
        shadow: 'hover:shadow-green-500/10',
        gradient: 'from-green-500/5 to-emerald-500/5',
        text: 'text-green-400',
        bg: 'bg-green-600/20',
        borderColor: 'border-green-500/30',
        hoverBg: 'hover:bg-green-600',
        textColor: 'text-green-300'
      },
      red: {
        border: 'hover:border-red-500/50',
        shadow: 'hover:shadow-red-500/10',
        gradient: 'from-red-500/5 to-red-500/5',
        text: 'text-red-400',
        bg: 'bg-red-600/20',
        borderColor: 'border-red-500/30',
        hoverBg: 'hover:bg-red-600',
        textColor: 'text-red-300'
      },
      purple: {
        border: 'hover:border-purple-500/50',
        shadow: 'hover:shadow-purple-500/10',
        gradient: 'from-purple-500/5 to-purple-500/5',
        text: 'text-purple-400',
        bg: 'bg-purple-600/20',
        borderColor: 'border-purple-500/30',
        hoverBg: 'hover:bg-purple-600',
        textColor: 'text-purple-300'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  const colors = getColorClasses(color);

  if (layout === 'grid') {
    return (
      <div className={`bg-gray-900 border border-gray-700 rounded-lg p-6 ${colors.border} hover:shadow-lg ${colors.shadow} transition-all duration-300 group flex flex-col h-full`}>
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
        <h3 className={`text-lg font-bold ${colors.text} mb-2`}>
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
              className={`w-full text-center py-2 ${colors.bg} border ${colors.borderColor} ${colors.hoverBg} ${colors.textColor} hover:text-white rounded transition-all text-sm font-medium flex items-center justify-center`}
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
    <div className={`bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl ${colors.shadow} transition-all duration-300 group`}>
      <div className="grid md:grid-cols-2 gap-0">
        <div className={`${project.imageOrder === 'right' ? 'md:order-2' : ''} h-56 md:h-auto bg-gray-800 border border-gray-700 flex items-center justify-center relative overflow-hidden group-hover:border-${color}-500/30 transition-all duration-300`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          <div className="text-center p-4 md:p-8 relative z-10 pt-12 md:pt-8">
            <div className="text-4xl md:text-6xl mb-2 md:mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
              {emoji}
            </div>
            <h4 className={`text-lg md:text-xl font-bold text-gray-300 group-hover:${colors.text} transition-colors duration-300`}>
              {project.shortTitle || title}
            </h4>
            <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">
              {project.subtitle}
            </p>
          </div>
          <div className="absolute top-3 left-3 md:bottom-3 md:top-auto">
            <span className={`px-2 py-1 ${colors.bg} border ${colors.borderColor} ${colors.textColor} text-xs rounded-full`}>
              {period}
            </span>
          </div>
        </div>
        <div className={`${project.imageOrder === 'right' ? 'md:order-1' : ''} p-6`}>
          <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
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
                className={`inline-flex items-center ${colors.bg} border ${colors.borderColor} ${colors.hoverBg} hover:border-${color}-500 px-3 py-2 rounded font-medium transition-all duration-300 text-sm ${colors.textColor} hover:text-white`}
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
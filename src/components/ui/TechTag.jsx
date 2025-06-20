import React from 'react';

function TechTag({ tech, variant = 'default', hoverColor = '' }) {
  const variants = {
    default: 'px-2 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs',
    small: 'px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs',
  };

  const hoverClass = hoverColor ? `hover:border-${hoverColor}-500/50` : '';

  return (
    <span className={`${variants[variant]} ${hoverClass} transition-colors`}>
      {tech}
    </span>
  );
}

export default TechTag;
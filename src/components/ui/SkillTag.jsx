import React from 'react';

function SkillTag({ skill, variant = 'default' }) {
  const variants = {
    default: 'px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm',
    badge: 'px-3 py-1 rounded-full text-sm',
    blue: 'px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm',
    purple: 'px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm',
    green: 'px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm',
    orange: 'px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm',
    red: 'px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-sm',
    yellow: 'px-3 py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-sm',
  };

  return (
    <span className={variants[variant] || variants.default}>
      {skill}
    </span>
  );
}

export default SkillTag;
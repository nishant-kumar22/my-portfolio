import React from 'react';

function SocialLink({ href, label, icon, hoverColor = 'blue' }) {
  const hoverColorClasses = {
    blue: 'hover:bg-blue-600',
    black: 'hover:bg-black',
    sky: 'hover:bg-sky-500',
    purple: 'hover:bg-purple-600',
    green: 'hover:bg-green-600',
    red: 'hover:bg-red-600',
    orange: 'hover:bg-orange-600',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-center w-14 h-14 bg-gray-800 ${hoverColorClasses[hoverColor]} rounded-full transition-all duration-300 hover:scale-110`}
      aria-label={label}
    >
      <svg
        className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors"
        fill="currentColor"
        viewBox={icon.viewBox}
      >
        <path d={icon.path} />
      </svg>
    </a>
  );
}

export default SocialLink;
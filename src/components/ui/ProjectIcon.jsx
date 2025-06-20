import React from 'react';

function ProjectIcon({ type, className = "" }) {
  const icons = {
    fullstack: (
      <path
        fillRule="evenodd"
        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    ),
    ml: (
      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
    ),
    roblox: (
      <path
        fillRule="evenodd"
        d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H3zm2 3a1 1 0 000 2h.01a1 1 0 100-2H5zm0 3a1 1 0 000 2h3a1 1 0 100-2H5zm10-1a1 1 0 10-2 0v3a1 1 0 102 0v-3z"
        clipRule="evenodd"
      />
    ),
  };

  return (
    <svg
      className={`w-6 h-6 ${className}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      {icons[type]}
    </svg>
  );
}

export default ProjectIcon;
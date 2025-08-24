import React from "react";

function ResumeButton() {
  const resumeUrl = "https://drive.google.com/file/d/179aZ5Kx_3NzuT0hTbBI37jDn9qjWWfOF/view";

  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800"
    >
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      Resume
    </a>
  );
}

export default ResumeButton;
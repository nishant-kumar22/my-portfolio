import React from "react";

function ResumeDropdown({ isOpen, setIsOpen }) {
  const resumeOptions = [
    {
      title: "Software Engineering",
      description: "Full-stack development & backend systems",
      url: "https://drive.google.com/file/d/1KMq-ew508PqDPhmDqk8zG3c_Y5TEr-Hx/view?usp=sharing",
      color: "blue",
    },
    {
      title: "Machine Learning",
      description: "Data science & ML model development",
      url: "https://drive.google.com/file/d/1E1htDNTRrtzWkrjl83QtQ6rpiraq9bUw/view?usp=sharing",
      color: "purple",
    },
    {
      title: "Game Development",
      description: "Roblox games & interactive experiences",
      url: "https://drive.google.com/file/d/1DnbYjUK6SJERb1JsH0UqpeZjrcJ65eaC/view?usp=sharing",
      color: "red",
    },
  ];

  return (
    <div className="relative resume-dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 group"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        Resume
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
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
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-80 left-1/2 transform -translate-x-1/2 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="py-2">
            {resumeOptions.map((option, index) => (
              <a
                key={index}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors group"
              >
                <div
                  className={`w-10 h-10 bg-${option.color}-600/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-${option.color}-600/30 transition-colors`}
                >
                  <svg
                    className={`w-5 h-5 text-${option.color}-400`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {option.color === "blue" && (
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    )}
                    {option.color === "purple" && (
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    )}
                    {option.color === "red" && (
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H3zm2 3a1 1 0 000 2h.01a1 1 0 100-2H5zm0 3a1 1 0 000 2h3a1 1 0 100-2H5zm10-1a1 1 0 10-2 0v3a1 1 0 102 0v-3z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate">
                    {option.title}
                  </h3>
                  <p className="text-gray-400 text-sm truncate">
                    {option.description}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeDropdown;

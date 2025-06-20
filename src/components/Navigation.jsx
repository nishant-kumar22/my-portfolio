import React from "react";

function Navigation({ scrollY, isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-6 border-b border-gray-800 transition-all duration-300 ${
        scrollY > 50
          ? "bg-gray-900/95 backdrop-blur-md py-4"
          : "bg-gray-900/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Nishant Kumar
          </h1>
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-lg hover:text-blue-400 transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-lg hover:text-blue-400 transition-colors font-medium"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-lg hover:text-blue-400 transition-colors font-medium"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-lg hover:text-blue-400 transition-colors font-medium"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-lg hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-lg hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-lg hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-lg hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;

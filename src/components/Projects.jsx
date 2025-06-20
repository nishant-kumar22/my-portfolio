import React from "react";

function Projects({ activeProjectSection, handleProjectSectionChange }) {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        {/* Project Categories */}
        <div className="space-y-6">
          {/* Full-Stack Development Projects - MOVED TO FIRST */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => handleProjectSectionChange("fullstack")}
              className="w-full p-6 text-left hover:bg-gray-800 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Full-Stack Development
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    React, Node.js, FastAPI, and database solutions
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs font-medium">
                  2 Projects
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    activeProjectSection === "fullstack" ? "rotate-180" : ""
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

            {activeProjectSection === "fullstack" && (
              <div className="border-t border-gray-700 bg-gray-800/50">
                <div className="p-6 space-y-8">
                  {/* Real-time Quiz Platform */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="h-56 md:h-auto bg-gray-800 border border-gray-700 flex items-center justify-center relative overflow-hidden group-hover:border-green-500/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="text-center p-4 md:p-8 relative z-10 pt-12 md:pt-8">
                          <div className="text-4xl md:text-6xl mb-2 md:mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                            ⚡
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-green-400 transition-colors duration-300">
                            QuizDuel
                          </h4>
                          <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">
                            Real-time 1v1 Quiz Platform
                          </p>
                        </div>
                        <div className="absolute top-3 left-3 md:bottom-3 md:top-auto">
                          <span className="px-2 py-1 bg-green-600/20 border border-green-500/30 text-green-300 text-xs rounded-full">
                            Feb 2025 – Mar 2025
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-green-400 mb-2">
                          Real-time Quiz Platform
                        </h3>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {[
                            "FastAPI",
                            "WebSockets",
                            "React",
                            "Python",
                            "Real-time",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs hover:border-green-500/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          Built a{" "}
                          <span className="text-green-400">
                            real-time multiplayer quiz platform
                          </span>{" "}
                          where users can compete in 1v1 matches. Features live
                          question delivery, instant scoring, and real-time
                          opponent tracking using WebSocket connections for
                          seamless gameplay experience.
                        </p>
                        <div className="flex space-x-3">
                          <a
                            href="https://github.com/nishant-kumar22/quiz-game"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-600/20 border border-green-500/30 hover:bg-green-600 hover:border-green-500 px-3 py-2 rounded font-medium transition-all duration-300 text-sm text-green-300 hover:text-white"
                          >
                            <svg
                              className="w-3 h-3 mr-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Automation Tool */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="md:order-2 h-56 md:h-auto bg-gray-800 border border-gray-700 flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="text-center p-4 md:p-8 relative z-10 pt-12 md:pt-8">
                          <div className="text-4xl md:text-6xl mb-2 md:mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                            📧
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                            AutoMailer
                          </h4>
                          <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">
                            AI-Powered Email Automation
                          </p>
                        </div>
                        <div className="absolute top-3 left-3 md:bottom-3 md:top-auto">
                          <span className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs rounded-full">
                            Nov 2024 – Dec 2024
                          </span>
                        </div>
                      </div>
                      <div className="md:order-1 p-6">
                        <h3 className="text-xl font-bold text-blue-400 mb-2">
                          Email Automation Tool
                        </h3>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {[
                            "Node.js",
                            "Gemini API",
                            "Gmail API",
                            "JavaScript",
                            "AI",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs hover:border-blue-500/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          Developed an{" "}
                          <span className="text-blue-400">
                            intelligent email automation system
                          </span>{" "}
                          that uses Google's Gemini AI to generate personalized
                          email responses. Integrates with Gmail API for
                          seamless email management and automated workflow
                          processing with smart content generation.
                        </p>
                        <div className="flex space-x-3">
                          <a
                            href="https://github.com/nishant-kumar22/email-automation-tool"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600 hover:border-blue-500 px-3 py-2 rounded font-medium transition-all duration-300 text-sm text-blue-300 hover:text-white"
                          >
                            <svg
                              className="w-3 h-3 mr-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Machine Learning Projects - MOVED TO SECOND */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => handleProjectSectionChange("ml")}
              className="w-full p-6 text-left hover:bg-gray-800 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    Machine Learning & Data Science
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Classification, clustering, and data analysis projects
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium">
                  3 Projects
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    activeProjectSection === "ml" ? "rotate-180" : ""
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

            {activeProjectSection === "ml" && (
              <div className="border-t border-gray-700 bg-gray-800/50">
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* Customer Purchase Prediction */}
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                          💳
                        </div>
                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                          KNN
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-purple-400 mb-2">
                        Customer Purchase Prediction
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                        Developed a K-Nearest Neighbors (KNN) classification
                        model to predict whether a customer will purchase a
                        specific product based on their age and salary.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {[
                          "Python",
                          "KNN",
                          "scikit-learn",
                          "pandas",
                          "Matplotlib",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-center mt-auto">
                        <a
                          href="https://github.com/nishant-kumar22/machine_learning/blob/main/Classification/KNN_Classification.ipynb"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center py-2 bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600 text-purple-300 hover:text-white rounded transition-all text-sm font-medium"
                        >
                          📓 View Project
                        </a>
                      </div>
                    </div>

                    {/* Customer Segmentation */}
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                          👥
                        </div>
                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                          K-Means
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-green-400 mb-2">
                        Customer Segmentation
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                        Segmented customers using K-Means clustering,
                        identifying key customer personas based on spending
                        habits and income.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {[
                          "Python",
                          "K-Means",
                          "Clustering",
                          "pandas",
                          "NumPy",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-center mt-auto">
                        <a
                          href="https://github.com/nishant-kumar22/machine_learning/blob/main/Clustering/KMeansClustering.ipynb"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center py-2 bg-green-600/20 border border-green-500/30 hover:bg-green-600 text-green-300 hover:text-white rounded transition-all text-sm font-medium"
                        >
                          📓 View Project
                        </a>
                      </div>
                    </div>

                    {/* Market Basket Analysis */}
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                          🛒
                        </div>
                        <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                          Association Rules
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-blue-400 mb-2">
                        Market Basket Analysis
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                        Performed market basket analysis to discover frequently
                        purchased item combinations, providing insights for
                        targeted promotions using Apriori and Eclat algorithms.
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {[
                          "Python",
                          "Apriori",
                          "Eclat",
                          "Association Rules",
                          "mlxtend",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-center mt-auto">
                        <a
                          href="https://github.com/nishant-kumar22/machine_learning/blob/main/AssociationRuleMining/Apriori.ipynb"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center py-2 bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600 text-blue-300 hover:text-white rounded transition-all text-sm font-medium"
                        >
                          📓 View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* View All ML Projects Button */}
                  <div className="flex justify-center">
                    <a
                      href="https://github.com/nishant-kumar22/machine_learning"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View All ML Projects
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Roblox Game Development Projects - MOVED TO THIRD */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => handleProjectSectionChange("roblox")}
              className="w-full p-6 text-left hover:bg-gray-800 transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
                  <svg
                    className="w-6 h-6 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H3zm2 3a1 1 0 000 2h.01a1 1 0 100-2H5zm0 3a1 1 0 000 2h3a1 1 0 100-2H5zm10-1a1 1 0 10-2 0v3a1 1 0 102 0v-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    Roblox Game Development
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Multiplayer games, tower defense, FPS, and racing simulators
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-xs font-medium">
                  3 Projects
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    activeProjectSection === "roblox" ? "rotate-180" : ""
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

            {activeProjectSection === "roblox" && (
              <div className="border-t border-gray-700 bg-gray-800/50">
                <div className="p-6 space-y-8">
                  {/* Horse Horizon */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="h-56 md:h-auto bg-gray-800 border border-gray-700 flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="text-center p-4 md:p-8 relative z-10 pt-12 md:pt-8">
                          <div className="text-4xl md:text-6xl mb-2 md:mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                            🏇
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                            Horse Horizon
                          </h4>
                          <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">
                            Multiplayer horse racing game
                          </p>
                        </div>
                        <div className="absolute top-3 left-3 md:bottom-3 md:top-auto">
                          <span className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs rounded-full">
                            Mar 2025 – Apr 2025
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-blue-400 mb-2">
                          Horse Horizon
                        </h3>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {[
                            "Roblox",
                            "Roblox Studio",
                            "Luau",
                            "Metatables",
                            "Components",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs hover:border-blue-500/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          Built an immersive 3D horse racing simulator on Roblox
                          with four unique locations including Private Island
                          and Central Hub, offering both single-player and
                          multiplayer experiences.
                        </p>
                        <div className="flex space-x-3">
                          <a
                            href="https://www.roblox.com/games/107896324788699/Horse-Horizon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600 hover:border-blue-500 px-3 py-2 rounded font-medium transition-all duration-300 text-sm text-blue-300 hover:text-white"
                          >
                            <svg
                              className="w-3 h-3 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Play Game
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Wars */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="md:order-2 h-56 md:h-auto bg-gray-800 border border-gray-700 flex items-center justify-center relative overflow-hidden group-hover:border-green-500/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="text-center p-4 md:p-8 relative z-10 pt-12 md:pt-8">
                          <div className="text-4xl md:text-6xl mb-2 md:mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                            🚀
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-green-400 transition-colors duration-300">
                            Tech Wars
                          </h4>
                          <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">
                            Tower Defense Strategy
                          </p>
                        </div>
                        <div className="absolute top-3 left-3 md:bottom-3 md:top-auto">
                          <span className="px-2 py-1 bg-green-600/20 border border-green-500/30 text-green-300 text-xs rounded-full">
                            May 2025 – Present
                          </span>
                        </div>
                      </div>
                      <div className="md:order-1 p-6">
                        <h3 className="text-xl font-bold text-green-400 mb-2">
                          Tech Wars – Tower Defense
                        </h3>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {[
                            "Roblox Studio",
                            "Lua",
                            "Game Design",
                            "Tower Defense",
                            "Strategy",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs hover:border-green-500/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          Developed a{" "}
                          <span className="text-green-400">
                            sci-fi themed tower defense game
                          </span>{" "}
                          on Roblox where players strategically place defensive
                          towers to protect their base from waves of enemies.
                          Features multiple tower types, upgrade systems, and
                          challenging gameplay mechanics.
                        </p>
                        <div className="flex space-x-3">
                          <a
                            href="https://www.roblox.com/games/109605270004732/Tech-Wars-Tower-Defense"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-600/20 border border-green-500/30 hover:bg-green-600 hover:border-green-500 px-3 py-2 rounded font-medium transition-all duration-300 text-sm text-green-300 hover:text-white"
                          >
                            <svg
                              className="w-3 h-3 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Play Game
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Killzone Strike */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 group">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="h-56 md:h-auto bg-gray-800 border border-gray-700 flex items-center justify-center relative overflow-hidden group-hover:border-red-500/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="text-center p-4 md:p-8 relative z-10 pt-12 md:pt-8">
                          <div className="text-4xl md:text-6xl mb-2 md:mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">
                            🎮
                          </div>
                          <h4 className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-red-400 transition-colors duration-300">
                            Killzone Strike
                          </h4>
                          <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">
                            Multiplayer FPS Game
                          </p>
                        </div>
                        <div className="absolute top-3 left-3 md:bottom-3 md:top-auto">
                          <span className="px-2 py-1 bg-red-600/20 border border-red-500/30 text-red-300 text-xs rounded-full">
                            Feb 2025 – Mar 2025
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-red-400 mb-2">
                          Killzone Strike (FPS)
                        </h3>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {[
                            "Lua",
                            "Roblox Studio",
                            "DataStores",
                            "Animations",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs hover:border-red-500/50 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          Multiplayer FPS game with round-based matches and
                          dynamic weapon systems. Built with{" "}
                          <span className="text-orange-400">Lua OOP</span>{" "}
                          featuring custom recoil patterns and hit detection.
                        </p>
                        <div className="flex space-x-3">
                          <a
                            href="https://www.roblox.com/games/105488737856096/Killzone-Strike"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-red-600/20 border border-red-500/30 hover:bg-red-600 hover:border-red-500 px-3 py-2 rounded font-medium transition-all duration-300 text-sm text-red-300 hover:text-white"
                          >
                            <svg
                              className="w-3 h-3 mr-1"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Play Game
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

import React from "react";

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {/* Chicmic Studios Experience */}
          <div className="bg-gray-900 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-1">
                  Associate SDE Intern
                </h3>
                <p className="text-lg text-gray-300 font-medium">
                  Chicmic Studios
                </p>
                <p className="text-gray-400">Punjab, India</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium">
                  Jan 2025 – Present
                </span>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span>
                  Engineered scalable gameplay systems in{" "}
                  <span className="text-orange-400 font-semibold">Lua</span>,
                  leveraging metatables to streamline development workflows,
                  resulting in a{" "}
                  <span className="text-green-400 font-semibold">
                    30% reduction
                  </span>{" "}
                  in redundant code and improved system efficiency.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span>
                  Designed and implemented{" "}
                  <span className="text-purple-400 font-semibold">
                    15+ custom UI/UX elements
                  </span>{" "}
                  using TweenService, driving a{" "}
                  <span className="text-green-400 font-semibold">
                    25% increase
                  </span>{" "}
                  in user engagement through enhanced visual interactivity and
                  seamless transitions.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span>
                  Created a modular{" "}
                  <span className="text-blue-400 font-semibold">
                    Knit-based client-server communication framework
                  </span>
                  , optimizing performance by reducing network latency by{" "}
                  <span className="text-green-400 font-semibold">20%</span> and
                  ensuring robust data synchronization across platforms.
                </span>
              </li>
            </ul>
          </div>

          {/* Knowe Digitech Experience */}
          <div className="bg-gray-900 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-1">
                  Full-Stack Developer Trainee
                </h3>
                <p className="text-lg text-gray-300 font-medium">
                  Knowe Digitech
                </p>
                <p className="text-gray-400">Delhi, India</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">
                  Jun 2023 – Jul 2023
                </span>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span>
                  Authored comprehensive study materials and delivered hands-on
                  training for{" "}
                  <span className="text-yellow-400 font-semibold">
                    100+ students
                  </span>{" "}
                  on the{" "}
                  <span className="text-blue-400 font-semibold">
                    MERN stack
                  </span>{" "}
                  (MongoDB, Express.js, React, Node.js), fostering a{" "}
                  <span className="text-green-400 font-semibold">
                    90% improvement
                  </span>{" "}
                  in their understanding of full-stack development concepts.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">•</span>
                <span>
                  Transformed{" "}
                  <span className="text-purple-400 font-semibold">
                    20+ Figma designs
                  </span>{" "}
                  into responsive, pixel-perfect{" "}
                  <span className="text-blue-400 font-semibold">
                    React.js components
                  </span>
                  , enhancing front-end usability and ensuring cross-device
                  compatibility for a seamless user experience.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

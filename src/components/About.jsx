import React from "react";

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate{" "}
              <span className="text-blue-400 font-semibold">
                Software Engineer
              </span>{" "}
              with a strong foundation in
              <span className="text-purple-400 font-semibold">
                {" "}
                backend development
              </span>
              ,
              <span className="text-green-400 font-semibold">
                {" "}
                data analysis
              </span>
              ,
              <span className="text-orange-400 font-semibold">
                {" "}
                machine learning
              </span>
              , and
              <span className="text-red-400 font-semibold">
                {" "}
                game development
              </span>
              . I thrive on building scalable solutions that solve real-world
              problems and create engaging user experiences.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across{" "}
              <span className="text-blue-400">full-stack web development</span>{" "}
              using React and Node.js, building robust APIs with FastAPI, and
              leveraging cloud technologies like AWS for deployment. I have a
              particular interest in{" "}
              <span className="text-yellow-400">data-driven applications</span>,
              utilizing Python libraries like pandas, NumPy, and scikit-learn to
              extract insights and build predictive models.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              As a <span className="text-red-400">Roblox game developer</span>,
              I create immersive multiplayer experiences using
              <span className="text-orange-400"> Lua and Roblox Studio</span>,
              including tower defense games, FPS shooters, and racing
              simulators. Currently diving deeper into{" "}
              <span className="text-orange-400">machine learning</span> with
              hands-on projects using scikit-learn for classification,
              regression, and clustering tasks. When I'm not coding, you'll find
              me exploring new technologies, contributing to open-source
              projects, or experimenting with data visualization using
              Matplotlib.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                Full-Stack Developer
              </span>
              <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
                Data Enthusiast
              </span>
              <span className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm">
                ML Explorer
              </span>
              <span className="px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-sm">
                Game Developer
              </span>
              <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-sm">
                Cloud Native
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                💻 Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "C/C++",
                  "JavaScript",
                  "Lua",
                  "SQL",
                  "HTML/CSS",
                ].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-400 mb-4">
                🚀 Frameworks & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js",
                  "FastAPI",
                  "Roblox Studio",
                  "Docker",
                  "AWS",
                  "Git",
                  "VS Code",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                📊 Data & ML
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "pandas",
                  "NumPy",
                  "Matplotlib",
                  "scikit-learn",
                  "PostgreSQL",
                ].map((lib) => (
                  <span
                    key={lib}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                  >
                    {lib}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-400 mb-4">
                🎮 Game Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Lua",
                  "Roblox Studio",
                  "Game Design",
                  "Multiplayer Systems",
                  "UI/UX",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

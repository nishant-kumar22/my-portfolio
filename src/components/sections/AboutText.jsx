import React from 'react';

function AboutText() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-300 leading-relaxed">
        I'm a passionate{" "}
        <span className="text-blue-400 font-semibold">Software Engineer</span>{" "}
        with a strong foundation in{" "}
        <span className="text-purple-400 font-semibold">backend development</span>,{" "}
        <span className="text-green-400 font-semibold">data analysis</span>,{" "}
        <span className="text-orange-400 font-semibold">machine learning</span>, and{" "}
        <span className="text-red-400 font-semibold">game development</span>.
        I thrive on building scalable solutions that solve real-world problems and create engaging user experiences.
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
        I create immersive multiplayer experiences using{" "}
        <span className="text-orange-400">Lua and Roblox Studio</span>,
        including tower defense games, FPS shooters, and racing simulators.
        Currently diving deeper into{" "}
        <span className="text-orange-400">machine learning</span> with
        hands-on projects using scikit-learn for classification, regression,
        and clustering tasks. When I'm not coding, you'll find me exploring
        new technologies, contributing to open-source projects, or experimenting
        with data visualization using Matplotlib.
      </p>
    </div>
  );
}

export default AboutText;
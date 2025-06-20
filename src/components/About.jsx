import React from "react";
import AboutText from "./sections/AboutText";
import SkillsSection from "./sections/SkillsSection";
import PersonalityBadge from "./ui/PersonalityBadge";
import {
  aboutText,
  skillCategories,
  personalityBadges,
} from "../data/aboutData";

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2> */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Passionate developer crafting innovative solutions with cutting-edge
            technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <AboutText paragraphs={aboutText} />
            <PersonalityBadge badges={personalityBadges} />
          </div>
          <SkillsSection categories={skillCategories} />
        </div>
      </div>
    </section>
  );
}

export default About;

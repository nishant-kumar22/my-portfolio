import React from "react";
import AboutText from './sections/AboutText';
import SkillsSection from './sections/SkillsSection';
import PersonalityBadge from './ui/PersonalityBadge';
import { aboutText, skillCategories, personalityBadges } from '../data/aboutData';

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
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
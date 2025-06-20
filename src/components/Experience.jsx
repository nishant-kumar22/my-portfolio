import React from "react";
import { ExperienceSection } from './sections';
import { experienceData } from '../data/experienceData';

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <ExperienceSection experiences={experienceData} />
      </div>
    </section>
  );
}

export default Experience;
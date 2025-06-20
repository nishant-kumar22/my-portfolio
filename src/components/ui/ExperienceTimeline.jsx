import React from 'react';
import ExperienceCard from './ExperienceCard';

function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
      
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative">
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-800"></div>
            
            {/* Content */}
            <div className="md:ml-16">
              <ExperienceCard experience={experience} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
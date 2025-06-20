import React from 'react';
import ExperienceCard from '../ui/ExperienceCard';

function ExperienceSection({ experiences, title = "Experience" }) {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-12 text-center">{title}</h2>
      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceCard 
            key={experience.id} 
            experience={experience} 
          />
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
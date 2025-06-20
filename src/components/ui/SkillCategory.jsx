import React from 'react';
import SkillTag from './SkillTag';

function SkillCategory({ title, icon, titleColor, skills }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h3 className={`text-xl font-bold text-${titleColor}-400 mb-4`}>
        {icon} {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
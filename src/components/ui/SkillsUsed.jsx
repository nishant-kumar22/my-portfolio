import React from 'react';
import SkillTag from './SkillTag';

function SkillsUsed({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="mt-4 pt-4 border-t border-gray-700">
      <p className="text-sm text-gray-400 mb-2">Technologies used:</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillTag key={skill.name} skill={skill.name} variant={skill.color || 'default'} />
        ))}
      </div>
    </div>
  );
}

export default SkillsUsed;
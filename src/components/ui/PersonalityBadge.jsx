import React from 'react';
import SkillTag from './SkillTag';

function PersonalityBadge({ badges }) {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {badges.map((badge) => (
        <SkillTag key={badge.label} skill={badge.label} variant={badge.color} />
      ))}
    </div>
  );
}

export default PersonalityBadge;
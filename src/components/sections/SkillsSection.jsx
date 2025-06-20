import React from 'react';
import SkillCategory from '../ui/SkillCategory';

function SkillsSection({ categories }) {
  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <SkillCategory
          key={category.title}
          title={category.title}
          icon={category.icon}
          titleColor={category.titleColor}
          skills={category.skills}
        />
      ))}
    </div>
  );
}

export default SkillsSection;
import React from 'react';
import AchievementItem from './AchievementItem';

function AchievementList({ achievements }) {
  return (
    <ul className="space-y-3 text-gray-300">
      {achievements.map((achievement, index) => (
        <AchievementItem key={index} achievement={achievement} />
      ))}
    </ul>
  );
}

export default AchievementList;
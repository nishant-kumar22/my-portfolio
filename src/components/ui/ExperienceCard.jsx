import React from 'react';
import DateBadge from './DateBadge';
import AchievementList from './AchievementList';

function ExperienceCard({ experience }) {
  const { role, company, location, duration, badgeColor, achievements } = experience;

  return (
    <div className="bg-gray-900 rounded-lg p-8 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-1">
            {role}
          </h3>
          <p className="text-lg text-gray-300 font-medium">
            {company}
          </p>
          <p className="text-gray-400">{location}</p>
        </div>
        <div className="mt-2 md:mt-0">
          <DateBadge duration={duration} color={badgeColor} />
        </div>
      </div>
      <AchievementList achievements={achievements} />
    </div>
  );
}

export default ExperienceCard;
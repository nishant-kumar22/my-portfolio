// import React from 'react';
// import DateBadge from './DateBadge';
// import AchievementList from './AchievementList';

// function ExperienceCard({ experience }) {
//   const { role, company, location, duration, badgeColor, achievements } = experience;

//   return (
//     <div className="bg-gray-900 rounded-lg p-8 hover:shadow-lg transition-shadow">
//       <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
//         <div>
//           <h3 className="text-2xl font-bold text-blue-400 mb-1">
//             {role}
//           </h3>
//           <p className="text-lg text-gray-300 font-medium">
//             {company}
//           </p>
//           <p className="text-gray-400">{location}</p>
//         </div>
//         <div className="mt-2 md:mt-0">
//           <DateBadge duration={duration} color={badgeColor} />
//         </div>
//       </div>
//       <AchievementList achievements={achievements} />
//     </div>
//   );
// }

// export default ExperienceCard;

import React from 'react';
import DateBadge from './DateBadge';
import AchievementList from './AchievementList';

function ExperienceCard({ experience, index }) {
  const { role, company, location, duration, badgeColor, achievements } = experience;

  return (
    <div className="relative">
      {/* Timeline connector (except for last item) */}
      <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-transparent hidden md:block"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 hidden md:block z-10"></div>
      
      {/* Card content */}
      <div className="md:ml-16 bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group relative overflow-hidden">
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                  {role}
                </h3>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
              </div>
              
              <div className="space-y-1">
                <p className="text-xl text-gray-200 font-semibold group-hover:text-white transition-colors duration-300">
                  {company}
                </p>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{location}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 lg:mt-0">
              <DateBadge duration={duration} color={badgeColor} />
            </div>
          </div>

          {/* Achievements */}
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500/30 to-purple-500/30 rounded-full"></div>
            <AchievementList achievements={achievements} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
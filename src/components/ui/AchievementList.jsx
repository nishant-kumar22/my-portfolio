// import React from 'react';
// import AchievementItem from './AchievementItem';

// function AchievementList({ achievements }) {
//   return (
//     <ul className="space-y-3 text-gray-300">
//       {achievements.map((achievement, index) => (
//         <AchievementItem key={index} achievement={achievement} />
//       ))}
//     </ul>
//   );
// }

// export default AchievementList;

import React from 'react';
import AchievementItem from './AchievementItem';

function AchievementList({ achievements }) {
  return (
    <div className="relative">
      <h4 className="text-lg font-semibold text-gray-200 mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Key Achievements
      </h4>
      
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <AchievementItem 
            key={index} 
            achievement={achievement} 
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default AchievementList;
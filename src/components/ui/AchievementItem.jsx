// import React from 'react';
// import HighlightedText from './HighlightedText';

// function AchievementItem({ achievement }) {
//   return (
//     <li className="flex items-start">
//       <span className="text-green-400 mr-3 mt-1">•</span>
//       <span>
//         <HighlightedText text={achievement.description} highlights={achievement.highlights} />
//       </span>
//     </li>
//   );
// }

// export default AchievementItem;

import React from 'react';
import HighlightedText from './HighlightedText';

function AchievementItem({ achievement, index }) {
  return (
    <li className="flex items-start gap-4 group">
      {/* Enhanced bullet point */}
      <div className="mt-2 relative">
        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
        <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-ping opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-4">
        <p className="text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
          {achievement.content ? achievement.content : (
            <HighlightedText text={achievement.description} highlights={achievement.highlights} />
          )}
        </p>
        
        {/* Optional metrics or tags */}
        {achievement.metrics && (
          <div className="flex flex-wrap gap-2 mt-3">
            {achievement.metrics.map((metric, idx) => (
              <span 
                key={idx}
                className="px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300 rounded-md text-xs font-medium"
              >
                {metric}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

export default AchievementItem;
import React from 'react';
import HighlightedText from './HighlightedText';

function AchievementItem({ achievement }) {
  return (
    <li className="flex items-start">
      <span className="text-green-400 mr-3 mt-1">•</span>
      <span>
        <HighlightedText text={achievement.description} highlights={achievement.highlights} />
      </span>
    </li>
  );
}

export default AchievementItem;
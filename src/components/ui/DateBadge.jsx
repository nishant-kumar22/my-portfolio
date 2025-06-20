import React from 'react';

function DateBadge({ duration, color = 'blue' }) {
  const colorClasses = {
    blue: 'bg-blue-600/20 text-blue-300',
    purple: 'bg-purple-600/20 text-purple-300',
    green: 'bg-green-600/20 text-green-300',
    orange: 'bg-orange-600/20 text-orange-300',
    red: 'bg-red-600/20 text-red-300',
  };

  return (
    <span className={`px-4 py-2 ${colorClasses[color]} rounded-full text-sm font-medium`}>
      {duration}
    </span>
  );
}

export default DateBadge;
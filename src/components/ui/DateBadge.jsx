// import React from 'react';

// function DateBadge({ duration, color = 'blue' }) {
//   const colorClasses = {
//     blue: 'bg-blue-600/20 text-blue-300',
//     purple: 'bg-purple-600/20 text-purple-300',
//     green: 'bg-green-600/20 text-green-300',
//     orange: 'bg-orange-600/20 text-orange-300',
//     red: 'bg-red-600/20 text-red-300',
//   };

//   return (
//     <span className={`px-4 py-2 ${colorClasses[color]} rounded-full text-sm font-medium`}>
//       {duration}
//     </span>
//   );
// }

// export default DateBadge;

import React from 'react';

function DateBadge({ duration, color = 'blue' }) {
  const colorClasses = {
    blue: {
      bg: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-400/30',
      text: 'text-blue-300',
      glow: 'shadow-lg shadow-blue-500/20'
    },
    purple: {
      bg: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20',
      border: 'border-purple-400/30',
      text: 'text-purple-300',
      glow: 'shadow-lg shadow-purple-500/20'
    },
    green: {
      bg: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20',
      border: 'border-green-400/30',
      text: 'text-green-300',
      glow: 'shadow-lg shadow-green-500/20'
    },
    orange: {
      bg: 'bg-gradient-to-r from-orange-500/20 to-amber-500/20',
      border: 'border-orange-400/30',
      text: 'text-orange-300',
      glow: 'shadow-lg shadow-orange-500/20'
    },
    red: {
      bg: 'bg-gradient-to-r from-red-500/20 to-rose-500/20',
      border: 'border-red-400/30',
      text: 'text-red-300',
      glow: 'shadow-lg shadow-red-500/20'
    },
  };

  const styles = colorClasses[color];

  return (
    <div className={`px-4 py-2 ${styles.bg} backdrop-blur-sm border ${styles.border} ${styles.text} rounded-full text-sm font-semibold ${styles.glow} hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
      <span className="relative z-10 flex items-center gap-2">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        {duration}
      </span>
    </div>
  );
}

export default DateBadge;
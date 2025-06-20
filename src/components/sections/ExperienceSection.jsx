// import React from 'react';
// import ExperienceCard from '../ui/ExperienceCard';

// function ExperienceSection({ experiences, title = "Experience" }) {
//   return (
//     <div>
//       <h2 className="text-4xl font-bold mb-12 text-center">{title}</h2>
//       <div className="space-y-8">
//         {experiences.map((experience) => (
//           <ExperienceCard 
//             key={experience.id} 
//             experience={experience} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ExperienceSection;

import React from 'react';
import ExperienceCard from '../ui/ExperienceCard';

function ExperienceSection({ experiences, title = "Experience" }) {
  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          My professional journey and key accomplishments
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Main timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 hidden md:block"></div>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
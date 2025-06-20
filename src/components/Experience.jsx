// import React from "react";
// import { ExperienceSection } from './sections';
// import { experienceData } from '../data/experienceData';

// function Experience() {
//   return (
//     <section id="experience" className="py-20 px-6 bg-gray-800">
//       <div className="max-w-6xl mx-auto">
//         <ExperienceSection experiences={experienceData} />
//       </div>
//     </section>
//   );
// }

// export default Experience;

import React from "react";
import ExperienceSection from './sections/ExperienceSection';
import { experienceData } from '../data/experienceData';

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/3 to-transparent rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ExperienceSection 
          experiences={experienceData}
          title="Professional Experience"
        />
      </div>
    </section>
  );
}

export default Experience;
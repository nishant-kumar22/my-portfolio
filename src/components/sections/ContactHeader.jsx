import React from 'react';

function ContactHeader({ title = "Get In Touch", subtitle }) {
  return (
    <div className="text-center mb-12">
       <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
    {title}
  </h2>
   <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full"></div>
      {subtitle && (
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default ContactHeader;
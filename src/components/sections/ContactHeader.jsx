import React from 'react';

function ContactHeader({ title = "Get In Touch", subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      {subtitle && (
        <p className="text-xl text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default ContactHeader;
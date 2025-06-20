import React from 'react';

function ContactFooter({ location, availability }) {
  return (
    <div className="mt-12 pt-8 border-t border-gray-700">
      <p className="text-gray-400">
        {location} • {availability}
      </p>
    </div>
  );
}

export default ContactFooter;
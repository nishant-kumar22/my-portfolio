import React from 'react';
import SocialLink from '../ui/SocialLink';

function SocialLinksSection({ socialLinks, title = "Or connect with me on" }) {
  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-400">{title}</p>
      <div className="flex justify-center space-x-6">
        {socialLinks.map((link) => (
          <SocialLink
            key={link.id}
            href={link.href}
            label={link.label}
            icon={link.icon}
            hoverColor={link.hoverColor}
          />
        ))}
      </div>
    </div>
  );
}

export default SocialLinksSection;
import React from "react";
import { ContactHeader, SocialLinksSection, ContactFooter } from './sections';
import { EmailButton } from './ui';
import { contactInfo, socialLinks } from '../data/contactData';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ContactHeader 
          title="Get In Touch"
          subtitle="I'm always open to discussing new opportunities and interesting projects."
        />
        
        <EmailButton email={contactInfo.email} />
        <SocialLinksSection socialLinks={socialLinks} />
        <ContactFooter {...contactInfo} />
      </div>
    </section>
  );
}

export default Contact;
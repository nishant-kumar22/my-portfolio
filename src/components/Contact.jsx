import React from "react";
function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to discussing new opportunities and interesting
          projects.
        </p>

        <div className="mb-12">
          <a
            href="mailto:ktanay7870@gmail.com"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Send me an email
          </a>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-400">Or connect with me on</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/nishant-kumar2210/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="https://x.com/Nishantk2210"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 bg-gray-800 hover:bg-black rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="https://bsky.app/profile/nishant-kumar.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 bg-gray-800 hover:bg-sky-500 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 64 57"
              >
                <path d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            India • Available for freelance & full-time opportunities
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

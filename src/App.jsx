import React, { useState, useEffect } from 'react';
import ParticlesBackground from './ParticlesBackground';

function App() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
   
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
     return (
     <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">💻</div>
        <h2 className="text-2xl font-bold text-white mb-4">Building Portfolio...</h2>
        <div className="font-mono text-green-400 text-sm">
          <div className="animate-pulse">{'>'} Loading components...</div>
          <div className="animate-pulse" style={{animationDelay: '0.5s'}}>{'>'} Fetching projects...</div>
          <div className="animate-pulse" style={{animationDelay: '1s'}}>{'>'} Initializing experience...</div>
          <div className="animate-pulse" style={{animationDelay: '1.5s'}}>{'>'} Ready!</div>
        </div>
      </div>
    </div>
  );
  }

  

  return (
    <div className="min-h-screen bg-gray-900 text-white">
       <ParticlesBackground />
       
    <div className="relative z-10"></div>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-6 py-6 border-b border-gray-800 transition-all duration-300 ${
          scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md py-4' : 'bg-gray-900/95 backdrop-blur-md'
        }`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nishant Kumar
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-lg hover:text-blue-400 transition-colors font-medium">About</a>
          <a href="#projects" className="text-lg hover:text-blue-400 transition-colors font-medium">Projects</a>
          <a href="#experience" className="text-lg hover:text-blue-400 transition-colors font-medium">Experience</a>
          <a href="#contact" className="text-lg hover:text-blue-400 transition-colors font-medium">Contact</a>
        </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-lg hover:text-blue-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="text-lg hover:text-blue-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#experience" className="text-lg hover:text-blue-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
            <a href="#contact" className="text-lg hover:text-blue-400 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
      </nav>

      {/* Hero Section */}
<section className="pt-40 pb-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      Software Developer
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
      I create innovative solutions and build amazing web applications
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <a 
        href="https://github.com/nishant-kumar22" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        View GitHub
      </a>
      
      <a 
        href="https://leetcode.com/u/nishant2210/" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.036l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
        </svg>
        LeetCode
      </a>

      <a 
        href="https://drive.google.com/file/d/1KMq-ew508PqDPhmDqk8zG3c_Y5TEr-Hx/view" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-semibold transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        Download Resume
      </a>
    </div>
  </div>
</section>


      {/* About Section */}
       <section id="about" className="py-20 px-6 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-blue-400 font-semibold">Software Engineer</span> with a strong foundation in 
                <span className="text-purple-400 font-semibold"> backend development</span>, 
                <span className="text-green-400 font-semibold"> data analysis</span>, 
                <span className="text-orange-400 font-semibold"> machine learning</span>, and 
                <span className="text-red-400 font-semibold"> game development</span>. I thrive on building scalable solutions 
                that solve real-world problems and create engaging user experiences.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across <span className="text-blue-400">full-stack web development</span> using React and Node.js, 
                building robust APIs with FastAPI, and leveraging cloud technologies like AWS for deployment. 
                I have a particular interest in <span className="text-yellow-400">data-driven applications</span>, 
                utilizing Python libraries like pandas, NumPy, and scikit-learn to extract insights and build predictive models.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                As a <span className="text-red-400">Roblox game developer</span>, I create immersive multiplayer experiences using 
                <span className="text-orange-400"> Lua and Roblox Studio</span>, including tower defense games, FPS shooters, and racing simulators. 
                Currently diving deeper into <span className="text-orange-400">machine learning</span> with hands-on projects using scikit-learn 
                for classification, regression, and clustering tasks. When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or experimenting with data visualization using Matplotlib.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">Problem Solver</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">Full-Stack Developer</span>
                <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">Data Enthusiast</span>
                <span className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-full text-sm">ML Explorer</span>
                <span className="px-3 py-1 bg-red-600/20 text-red-300 rounded-full text-sm">Game Developer</span>
                <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 rounded-full text-sm">Cloud Native</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-400 mb-4">💻 Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C/C++', 'JavaScript', 'Lua', 'SQL', 'HTML/CSS'].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-400 mb-4">🚀 Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'FastAPI', 'Roblox Studio', 'Docker', 'AWS', 'Git', 'VS Code'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-400 mb-4">📊 Data & ML</h3>
                <div className="flex flex-wrap gap-2">
                  {['pandas', 'NumPy', 'Matplotlib', 'scikit-learn', 'PostgreSQL'].map((lib) => (
                    <span key={lib} className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                      {lib}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-400 mb-4">🎮 Game Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['Lua', 'Roblox Studio', 'Game Design', 'Multiplayer Systems', 'UI/UX'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* Projects Section */}
<section id="projects" className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
    <div className="space-y-8">
      
      {/* Project 1: Real Time 1v1 Quiz */}
      <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="h-56 md:h-auto bg-gray-800 border border-gray-700 flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/30 transition-all duration-300">
            {/* Subtle animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Content - with better mobile spacing */}
            <div className="text-center p-4 md:p-8 relative z-10 pt-12 md:pt-8">
              <div className="text-4xl md:text-6xl mb-2 md:mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">💻</div>
              <h4 className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-blue-400 transition-colors duration-300">Horse Horizon</h4>
              <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">A multiplayer horse racing game</p>
            </div>
            
            {/* Project status badge - improved positioning */}
            <div className="absolute top-3 left-3 md:bottom-3 md:top-auto">
              <span className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs rounded-full">
                Mar 2025 – Apr 2025
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Horse Horizon</h3>
            <div className="flex flex-wrap gap-1 mb-3">
              {['Roblox', 'Roblox Studio', 'Luau', 'Metatables', 'Components'].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs hover:border-blue-500/50 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
             Built an immersive 3D horse racing simulator on Roblox with four unique locations including Private Island
and Central Hub, offering both single-player and multiplayer experiences.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.roblox.com/games/107896324788699/Horse-Horizon" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600 hover:border-blue-500 px-3 py-2 rounded font-medium transition-all duration-300 text-sm text-blue-300 hover:text-white"
              >
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Play game
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2: Email Automation Tool */}
       {/* Tech Wars Project */}
      <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="md:order-2 h-56 md:h-auto bg-gray-800 border border-gray-700 flex items-center justify-center relative overflow-hidden group-hover:border-green-500/30 transition-all duration-300">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Project visual */}
            <div className="text-center p-4 md:p-8 relative z-10 pt-12 md:pt-8">
              <div className="text-4xl md:text-6xl mb-2 md:mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">🚀</div>
              <h4 className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-green-400 transition-colors duration-300">Tech Wars</h4>
              <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">Tower Defense Strategy</p>
            </div>
            
            {/* Date badge */}
            <div className="absolute top-3 left-3 md:bottom-3 md:top-auto">
              <span className="px-2 py-1 bg-green-600/20 border border-green-500/30 text-green-300 text-xs rounded-full">
                May 2025 – Present
              </span>
            </div>
          </div>
          
          <div className="md:order-1 p-6">
            <h3 className="text-xl font-bold text-green-400 mb-2">Tech Wars – Tower Defense</h3>
            <div className="flex flex-wrap gap-1 mb-3">
              {['Roblox Studio', 'Lua', 'Game Design', 'Tower Defense', 'Strategy'].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs hover:border-green-500/50 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Developed a <span className="text-green-400">sci-fi themed tower defense game</span> on Roblox where players strategically 
              place defensive towers to protect their base from waves of enemies. Features multiple tower types, upgrade systems, 
              and challenging gameplay mechanics.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.roblox.com/games/109605270004732/Tech-Wars-Tower-Defense" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600/20 border border-green-500/30 hover:bg-green-600 hover:border-green-500 px-3 py-2 rounded font-medium transition-all duration-300 text-sm text-green-300 hover:text-white"
              >
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Play Game
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3: Killzone Strike (FPS) */}
<div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 group">
  <div className="grid md:grid-cols-2 gap-0">
    <div className="h-56 md:h-auto bg-gray-800 border border-gray-700 flex items-center justify-center relative overflow-hidden group-hover:border-red-500/30 transition-all duration-300">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content - with better mobile spacing */}
      <div className="text-center p-4 md:p-8 relative z-10 pt-12 md:pt-8">
        <div className="text-4xl md:text-6xl mb-2 md:mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300">🎮</div>
        <h4 className="text-lg md:text-xl font-bold text-gray-300 group-hover:text-red-400 transition-colors duration-300">FPS Game</h4>
        <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2">Multiplayer Gaming</p>
      </div>
      
      {/* Project status badge - improved positioning */}
      <div className="absolute top-3 left-3 md:bottom-3 md:top-auto">
        <span className="px-2 py-1 bg-red-600/20 border border-red-500/30 text-red-300 text-xs rounded-full">
          Feb 2025 – Mar 2025
        </span>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold text-red-400 mb-2">Killzone Strike (FPS)</h3>
      <div className="flex flex-wrap gap-1 mb-3">
        {['Lua', 'Roblox Studio', 'DataStores', 'Animations'].map((tech) => (
          <span key={tech} className="px-2 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded text-xs hover:border-red-500/50 transition-colors">
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        Multiplayer FPS game with round-based matches and dynamic weapon systems. 
        Built with <span className="text-orange-400">Lua OOP</span> featuring custom recoil patterns and hit detection.
      </p>
      <div className="flex space-x-3">
        <a 
          href="https://www.roblox.com/games/105488737856096/Killzone-Strike" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-red-600/20 border border-red-500/30 hover:bg-red-600 hover:border-red-500 px-3 py-2 rounded font-medium transition-all duration-300 text-sm text-red-300 hover:text-white"
        >
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          Play Game
        </a>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</section>

{/* ML & Data Science Projects */}
<section className="py-20 px-6 bg-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">Machine Learning Projects</h2>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      
      {/* ML Project 1: Customer Purchase Prediction */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">💳</div>
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">KNN</span>
        </div>
        
        <h3 className="text-lg font-bold text-purple-400 mb-2">Customer Purchase Prediction</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
          Developed a K-Nearest Neighbors (KNN) classification model to predict whether a customer will purchase a specific product based on their age and salary.
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {['Python', 'KNN', 'scikit-learn', 'pandas', 'Matplotlib'].map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-center mt-auto">
          <a 
            href="https://github.com/nishant-kumar22/machine_learning/blob/main/Classification/KNN_Classification.ipynb" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2 bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600 text-purple-300 hover:text-white rounded transition-all text-sm font-medium"
          >
            📓 View Project
          </a>
        </div>
      </div>

      {/* ML Project 2: Customer Segmentation */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">👥</div>
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">K-Means</span>
        </div>
        
        <h3 className="text-lg font-bold text-green-400 mb-2">Customer Segmentation</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
          Segmented customers using K-Means clustering, identifying key customer personas based on spending habits and income.
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {['Python', 'K-Means', 'Clustering', 'pandas', 'NumPy'].map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-center mt-auto">
          <a 
            href="https://github.com/nishant-kumar22/machine_learning/blob/main/Clustering/KMeansClustering.ipynb" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2 bg-green-600/20 border border-green-500/30 hover:bg-green-600 text-green-300 hover:text-white rounded transition-all text-sm font-medium"
          >
            📓 View Project
          </a>
        </div>
      </div>

      {/* ML Project 3: Market Basket Analysis */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">🛒</div>
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">Association Rules</span>
        </div>
        
        <h3 className="text-lg font-bold text-blue-400 mb-2">Market Basket Analysis</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
          Performed market basket analysis to discover frequently purchased item combinations, providing insights for targeted promotions using Apriori and Eclat algorithms.
        </p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {['Python', 'Apriori', 'Eclat', 'Association Rules', 'mlxtend'].map((tech) => (
            <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-center mt-auto">
          <a 
            href="https://github.com/nishant-kumar22/machine_learning/blob/main/AssociationRuleMining/Apriori.ipynb" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-2 bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600 text-blue-300 hover:text-white rounded transition-all text-sm font-medium"
          >
            📓 View Project
          </a>
        </div>
      </div>

    </div>

    {/* View All ML Projects Button - Bottom Center */}
    <div className="flex justify-center">
      <a 
        href="https://github.com/nishant-kumar22/machine_learning" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        View All ML Projects
      </a>
    </div>

  </div>
</section>

{/* Experience Section */}
<section id="experience" className="py-20 px-6 bg-gray-800">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
    <div className="space-y-8">
      {/* Associate SDE Intern */}
      <div className="bg-gray-900 rounded-lg p-8 hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-1">Associate SDE Intern</h3>
            <p className="text-lg text-gray-300 font-medium">Chicmic Studios</p>
            <p className="text-gray-400">Punjab, India</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium">
              Jan 2025 – Present
            </span>
          </div>
        </div>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-green-400 mr-3 mt-1">•</span>
            <span>Engineered scalable gameplay systems in <span className="text-orange-400 font-semibold">Lua</span>, leveraging metatables to streamline development workflows, resulting in a <span className="text-green-400 font-semibold">30% reduction</span> in redundant code and improved system efficiency.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-3 mt-1">•</span>
            <span>Designed and implemented <span className="text-purple-400 font-semibold">15+ custom UI/UX elements</span> using TweenService, driving a <span className="text-green-400 font-semibold">25% increase</span> in user engagement through enhanced visual interactivity and seamless transitions.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-3 mt-1">•</span>
            <span>Created a modular <span className="text-blue-400 font-semibold">Knit-based client-server communication framework</span>, optimizing performance by reducing network latency by <span className="text-green-400 font-semibold">20%</span> and ensuring robust data synchronization across platforms.</span>
          </li>
        </ul>
      </div>

      {/* Full-Stack Developer Trainee */}
      <div className="bg-gray-900 rounded-lg p-8 hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-1">Full-Stack Developer Trainee</h3>
            <p className="text-lg text-gray-300 font-medium">Knowe Digitech</p>
            <p className="text-gray-400">Delhi, India</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">
              Jun 2023 – Jul 2023
            </span>
          </div>
        </div>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <span className="text-green-400 mr-3 mt-1">•</span>
            <span>Authored comprehensive study materials and delivered hands-on training for <span className="text-yellow-400 font-semibold">100+ students</span> on the <span className="text-blue-400 font-semibold">MERN stack</span> (MongoDB, Express.js, React, Node.js), fostering a <span className="text-green-400 font-semibold">90% improvement</span> in their understanding of full-stack development concepts.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-3 mt-1">•</span>
            <span>Transformed <span className="text-purple-400 font-semibold">20+ Figma designs</span> into responsive, pixel-perfect <span className="text-blue-400 font-semibold">React.js components</span>, enhancing front-end usability and ensuring cross-device compatibility for a seamless user experience.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          
          {/* Email Button */}
          <div className="mb-12">
            <a 
              href="mailto:ktanay7870@gmail.com" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Send me an email
            </a>
          </div>

          {/* Social Media Links */}
          <div className="space-y-6">
            <p className="text-lg text-gray-400">Or connect with me on</p>
            <div className="flex justify-center space-x-6">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/nishant-kumar2210/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a 
                href="https://x.com/Nishantk2210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-gray-800 hover:bg-black rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Bluesky */}
              <a 
                href="https://bsky.app/profile/nishant-kumar.bsky.social" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-gray-800 hover:bg-sky-500 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 64 57">
                  <path d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Alternative contact info */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              India • Available for freelance & full-time opportunities
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
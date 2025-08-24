# Nishant Kumar - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my experience as a Software Developer with expertise in full-stack development, machine learning, data analysis, and game development.

## 🌟 Features

- **Modern Component Architecture**: Modular React components with custom hooks for better maintainability
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Interactive Animations**: Particle background effects and smooth hover transitions
- **Performance Optimized**: Built with Vite for lightning-fast development and production builds
- **Component-Based Structure**: Separated concerns with dedicated components for each section
- **Custom Hooks**: Reusable logic for scroll detection, loading states, and outside click handling

## 🚀 Tech Stack

- **Frontend**: React 19, JavaScript ES6+
- **Styling**: Tailwind CSS v4 with custom animations
- **Build Tool**: Vite 6
- **Architecture**: Custom hooks, component composition
- **Development**: ESLint for code quality
- **Deployment**: Vercel (recommended)

## 📱 Portfolio Sections

### 🎯 Hero Section
- Introduction with role-specific resume downloads
- Quick access to GitHub and LeetCode profiles
- Interactive dropdown with specialized resumes (Software Engineering, ML, Game Development)

### 👨‍💻 About Me
- Personal introduction and career overview
- Technical skills organized by category:
  - **Languages**: Python, C/C++, JavaScript, Lua, SQL, HTML/CSS
  - **Frameworks & Tools**: React, Node.js, FastAPI, Roblox Studio, Docker, AWS
  - **Data & ML**: pandas, NumPy, Matplotlib, scikit-learn, PostgreSQL
  - **Game Development**: Lua, Roblox Studio, UI/UX Design

### 🚀 Projects (Categorized)

#### **Full-Stack Development**
- **Real-time Quiz Platform**: FastAPI, WebSockets, React - 1v1 multiplayer quiz battles
- **Email Automation Tool**: Node.js, Gemini AI, Gmail API - Intelligent email responses

#### **Machine Learning & Data Science**
- **Customer Purchase Prediction**: KNN classification model
- **Customer Segmentation**: K-Means clustering analysis
- **Market Basket Analysis**: Association rule mining with Apriori/Eclat algorithms

#### **Roblox Game Development**
- **Horse Horizon**: 3D racing simulator with multiplayer support
- **Tech Wars**: Tower defense strategy game
- **Killzone Strike**: Multiplayer FPS with custom weapon systems

### 💼 Professional Experience
- **Associate SDE Intern** at Chicmic Studios (Jan 2025 – June 2025)
- **Full-Stack Developer Trainee** at Knowe Digitech (Jun 2023 – Jul 2023)

### 📞 Contact
- Multiple contact methods with social media integration
- Location and availability information

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/nishant-kumar22/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📂 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/           # Modular React components
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── ProjectCard.jsx       # Project display cards
│   │   │   ├── TechTag.jsx          # Technology tags
│   │   │   ├── ExperienceCard.jsx   # Experience timeline cards
│   │   │   ├── DateBadge.jsx        # Date display component
│   │   │   ├── AchievementList.jsx  # Achievement listings
│   │   │   ├── AchievementItem.jsx  # Individual achievement items
│   │   │   ├── HighlightedText.jsx  # Text highlighting component
│   │   │   ├── GitHubIcon.jsx       # GitHub icon component
│   │   │   ├── PlayIcon.jsx         # Play icon component
│   │   │   ├── ProfileCard.jsx      # About section profile card
│   │   │   ├── SkillsGrid.jsx       # Skills display grid
│   │   │   ├── SkillCategory.jsx    # Individual skill categories
│   │   │   ├── DropdownButton.jsx   # Dropdown button component
│   │   │   └── DropdownMenu.jsx     # Dropdown menu component
│   │   ├── sections/        # Page section components
│   │   │   ├── ContactHeader.jsx    # Contact section header
│   │   │   ├── ProjectsSection.jsx  # Projects main section
│   │   │   ├── ExperienceSection.jsx # Experience main section
│   │   │   ├── AboutSection.jsx     # About main section
│   │   │   └── ProjectCategory.jsx  # Project category display
│   │   ├── About.jsx        # About section wrapper
│   │   ├── Contact.jsx      # Contact section component
│   │   ├── Experience.jsx   # Experience section wrapper
│   │   ├── Hero.jsx         # Hero section component
│   │   ├── Loading.jsx      # Loading screen component
│   │   ├── Navigation.jsx   # Navigation component
│   │   ├── Projects.jsx     # Projects section wrapper
│   │   └── ResumeDropdown.jsx # Resume dropdown component
│   ├── data/                # Data configuration files
│   │   ├── projectsData.js  # Project information and categories
│   │   ├── experienceData.js # Work experience data
│   │   ├── aboutData.js     # Personal information and skills
│   │   └── resumeData.js    # Resume download options
│   ├── hooks/               # Custom React hooks
│   │   ├── useLoadingState.js    # Loading state management
│   │   ├── useOutsideClick.js    # Outside click detection
│   │   └── useScrollPosition.js  # Scroll position tracking
│   ├── Effects/
│   │   └── ParticlesBackground.jsx # Interactive particle animation
│   ├── styles/              # Custom styles (optional)
│   │   └── custom.css       # Additional CSS utilities
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles with Tailwind imports
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code analysis

## 🎨 Key Components & Features

### Custom Hooks Architecture
- **useScrollPosition**: Tracks scroll position for navbar styling
- **useLoadingState**: Manages loading screen with customizable duration
- **useOutsideClick**: Handles clicks outside components (dropdowns, modals)

### Interactive Components
- **ParticlesBackground**: Dynamic particle system with collision detection
- **ResumeDropdown**: Multi-option resume selector with smooth animations
- **Navigation**: Responsive navigation with mobile hamburger menu
- **ProjectCards**: Expandable project sections with categorized display

### Performance Optimizations
- Component-based architecture for better code splitting
- Custom hooks for reusable logic
- Efficient state management
- Optimized animations with requestAnimationFrame

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Automatic deployments on every push to main branch

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.0s
- **Interactive**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔄 Recent Updates

- ✅ Modularized components for better maintainability
- ✅ Implemented custom hooks for reusable logic
- ✅ Added loading screen with animations
- ✅ Enhanced project categorization system
- ✅ Improved responsive design across all sections
- ✅ Optimized performance with better state management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: ktanay7870@gmail.com
- **LinkedIn**: [nishant-kumar2210](https://www.linkedin.com/in/nishant-kumar2210/)
- **X (Twitter)**: [@Nishantk2210](https://x.com/Nishantk2210)
- **Bluesky**: [nishant-kumar.bsky.social](https://bsky.app/profile/nishant-kumar.bsky.social)
- **GitHub**: [nishant-kumar22](https://github.com/nishant-kumar22)
- **LeetCode**: [nishant2210](https://leetcode.com/u/nishant2210/)

## 🙏 Acknowledgments

- React team for the powerful component-based framework
- Tailwind CSS for the utility-first styling approach
- Vite team for the exceptional development experience
- Open-source community for continuous inspiration

---

**Built with ⚡ React + Vite | Styled with 🎨 Tailwind CSS | Deployed on 🚀 Vercel**

**Made with ❤️ by Nishant Kumar**
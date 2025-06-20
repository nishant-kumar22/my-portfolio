// Remove React import and JSX, use plain strings/objects instead

export const projectCategories = [
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description: 'React, Node.js, FastAPI, and database solutions',
    color: 'blue',
    projectCount: 2
  },
  {
    id: 'ml',
    title: 'Machine Learning & Data Science',
    description: 'Classification, clustering, and data analysis projects',
    color: 'purple',
    projectCount: 3
  },
  {
    id: 'roblox',
    title: 'Roblox Game Development',
    description: 'Multiplayer games, tower defense, FPS, and racing simulators',
    color: 'red',
    projectCount: 3
  }
];

export const projectsData = {
  fullstack: [
    {
      id: 'quiz-platform',
      title: 'Real-time Quiz Platform',
      shortTitle: 'QuizDuel',
      subtitle: 'Real-time 1v1 Quiz Platform',
      emoji: '⚡',
      period: 'Feb 2025 – Mar 2025',
      color: 'green',
      technologies: ['FastAPI', 'WebSockets', 'React', 'Python', 'Real-time'],
      description: 'Built a real-time multiplayer quiz platform where users can compete in 1v1 matches. Features live question delivery, instant scoring, and real-time opponent tracking using WebSocket connections for seamless gameplay experience.',
      highlights: [
        { text: 'real-time multiplayer quiz platform', color: 'green-400' }
      ],
      links: [
        {
          type: 'github',
          url: 'https://github.com/nishant-kumar22/quiz-game',
          label: 'View Code',
          icon: 'github'
        }
      ]
    },
    {
      id: 'email-automation',
      title: 'Email Automation Tool',
      shortTitle: 'AutoMailer',
      subtitle: 'AI-Powered Email Automation',
      emoji: '📧',
      period: 'Nov 2024 – Dec 2024',
      color: 'blue',
      imageOrder: 'right',
      technologies: ['Node.js', 'Gemini API', 'Gmail API', 'JavaScript', 'AI'],
      description: 'Developed an intelligent email automation system that uses Google\'s Gemini AI to generate personalized email responses. Integrates with Gmail API for seamless email management and automated workflow processing with smart content generation.',
      highlights: [
        { text: 'intelligent email automation system', color: 'blue-400' }
      ],
      links: [
        {
          type: 'github',
          url: 'https://github.com/nishant-kumar22/email-automation-tool',
          label: 'View Code',
          icon: 'github'
        }
      ]
    }
  ],
  ml: [
  {
    id: 'customer-prediction',
    title: 'Customer Purchase Prediction',
    emoji: '💳',
    badge: 'KNN',
    color: 'purple',
    technologies: ['Python', 'KNN', 'scikit-learn', 'pandas', 'Matplotlib'],
    description: 'Developed a K-Nearest Neighbors (KNN) classification model to predict whether a customer will purchase a specific product based on their age and salary.',
    links: [
      {
        type: 'github',
        url: 'https://github.com/nishant-kumar22/machine_learning/blob/main/Classification/KNN_Classification.ipynb',
        label: 'View Project',
        icon: 'github'  // Changed from 'notebook' to 'github'
      }
    ]
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation',
    emoji: '👥',
    badge: 'K-Means',
    color: 'green',
    technologies: ['Python', 'K-Means', 'Clustering', 'pandas', 'NumPy'],
    description: 'Segmented customers using K-Means clustering, identifying key customer personas based on spending habits and income.',
    links: [
      {
        type: 'github',
        url: 'https://github.com/nishant-kumar22/machine_learning/blob/main/Clustering/KMeansClustering.ipynb',
        label: 'View Project',
        icon: 'github'  // Changed from 'notebook' to 'github'
      }
    ]
  },
  {
    id: 'market-basket',
    title: 'Market Basket Analysis',
    emoji: '🛒',
    badge: 'Association Rules',
    color: 'blue',
    technologies: ['Python', 'Apriori', 'Eclat', 'Association Rules', 'mlxtend'],
    description: 'Performed market basket analysis to discover frequently purchased item combinations, providing insights for targeted promotions using Apriori and Eclat algorithms.',
    links: [
      {
        type: 'github',
        url: 'https://github.com/nishant-kumar22/machine_learning/blob/main/AssociationRuleMining/Apriori.ipynb',
        label: 'View Project',
        icon: 'github'  // Changed from 'notebook' to 'github'
      }
    ]
  }
],
  roblox: [
    {
      id: 'horse-horizon',
      title: 'Horse Horizon',
      shortTitle: 'Horse Horizon',
      subtitle: 'Multiplayer horse racing game',
      emoji: '🏇',
      period: 'Mar 2025 – Apr 2025',
      color: 'blue',
      technologies: ['Roblox', 'Roblox Studio', 'Luau', 'Metatables', 'Components'],
      description: 'Built an immersive 3D horse racing simulator on Roblox with four unique locations including Private Island and Central Hub, offering both single-player and multiplayer experiences.',
      links: [
        {
          type: 'play',
          url: 'https://www.roblox.com/games/107896324788699/Horse-Horizon',
          label: 'Play Game',
          icon: 'play'
        }
      ]
    },
    {
      id: 'tech-wars',
      title: 'Tech Wars – Tower Defense',
      shortTitle: 'Tech Wars',
      subtitle: 'Tower Defense Strategy',
      emoji: '🚀',
      period: 'May 2025 – Present',
      color: 'green',
      imageOrder: 'right',
      technologies: ['Roblox Studio', 'Lua', 'Game Design', 'Tower Defense', 'Strategy'],
      description: 'Developed a sci-fi themed tower defense game on Roblox where players strategically place defensive towers to protect their base from waves of enemies. Features multiple tower types, upgrade systems, and challenging gameplay mechanics.',
      highlights: [
        { text: 'sci-fi themed tower defense game', color: 'green-400' }
      ],
      links: [
        {
          type: 'play',
          url: 'https://www.roblox.com/games/109605270004732/Tech-Wars-Tower-Defense',
          label: 'Play Game',
          icon: 'play'
        }
      ]
    },
    {
      id: 'killzone-strike',
      title: 'Killzone Strike (FPS)',
      shortTitle: 'Killzone Strike',
      subtitle: 'Multiplayer FPS Game',
      emoji: '🎮',
      period: 'Feb 2025 – Mar 2025',
      color: 'red',
      technologies: ['Lua', 'Roblox Studio', 'DataStores', 'Animations'],
      description: 'Multiplayer FPS game with round-based matches and dynamic weapon systems. Built with Lua OOP featuring custom recoil patterns and hit detection.',
      highlights: [
        { text: 'Lua OOP', color: 'orange-400' }
      ],
      links: [
        {
          type: 'play',
          url: 'https://www.roblox.com/games/105488737856096/Killzone-Strike',
          label: 'Play Game',
          icon: 'play'
        }
      ]
    }
  ]
};
// ============ Karthick Prabakaran — portfolio content ============

export const profile = {
  name: 'Karthick Prabakaran',
  role: 'Software Engineer @ SurveySparrow',
  tagline: 'Curiosity-driven engineer building software that feels alive.',
  location: 'Chennai, India',
  status: 'Engineering @ SurveySparrow',
  email: 'karthickop6@gmail.com',
  bio: [
    '"Every invention starts with the curiosity to understand how things work." That one question pulled me into computers — and I never left. I\'m the engineer who gets genuinely excited by a gnarly problem and isn\'t afraid to own it, even if that means debugging on a Friday night.',
    'The scoreboard so far: 7+ client projects shipped at a 100% completion rate, lifting business metrics by up to 18%, with clients across Europe and India. From BERT-powered NLP pipelines to pixel-perfect React frontends, I don\'t just pick a stack — I hunt for the right tool for every problem.',
    'Off the keyboard, I\'ve been Technical Advisor to a tech society of 800+ students and organized the Hack Hustle 2024 hackathon — because good ideas are meant to be shared.',
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/karthickop6' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/karthickprabakaran' },
    { label: 'Portfolio', url: 'https://karthickop6.github.io/Portfolio/' },
    { label: 'Email', url: 'mailto:karthickop6@gmail.com' },
  ],
}

export const skills = [
  {
    group: 'Front-End',
    icon: '⌘',
    items: ['React.js', 'JavaScript (ES6+)', 'Redux', 'HTML5 / CSS3', 'Responsive UI', 'Figma → Code'],
  },
  {
    group: 'Back-End',
    icon: '▲',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Java / Python'],
  },
  {
    group: 'AI & ML',
    icon: '◐',
    items: ['BERT / NLP', 'Prompt Engineering', 'OpenAI API', 'Classification Pipelines', 'YOLO', 'Data Preprocessing'],
  },
  {
    group: 'Cloud & Craft',
    icon: '✦',
    items: ['AWS (Athena, EC2)', 'Google Cloud', 'Performance Optimization', 'On-page SEO', 'Security / Pentesting Basics', 'Framework Evaluation'],
  },
]

export const projects = [
  {
    id: 'ticket-nlp',
    name: 'Support Ticket NLP Classifier',
    type: 'AI / NLP System',
    year: '2025',
    description:
      'BERT-based hierarchical model that auto-classifies support tickets into two-level categories (Finance → Refund) — cutting manual triage and speeding up response times at serviceMob. Deployed on AWS with Athena-powered pipelines.',
    stack: ['Python', 'BERT', 'AWS Athena', 'Prompt Engineering'],
    accent: '#7C8CFF',
    link: '#',
  },
  {
    id: 'ace-tta',
    name: 'Ace Table Tennis Academy',
    type: 'Client Website',
    year: '2024',
    description:
      'End-to-end freelance build — from Figma mockups to a fully responsive, performance-optimized, SEO-friendly site for a sports academy. One of 7+ client projects delivered at a 100% completion rate.',
    stack: ['React', 'Node.js', 'Figma', 'SEO'],
    accent: '#34D399',
    link: 'https://acetabletennisacademy.in',
  },
  {
    id: 'spr-traders',
    name: 'SPR Traders',
    type: 'Business Website',
    year: '2024',
    description:
      'Custom business website engineered for speed and search visibility — responsive across devices with a clean, conversion-focused UX. Part of a freelance portfolio that lifted client metrics by up to 18%.',
    stack: ['React', 'JavaScript', 'Express', 'SEO'],
    accent: '#FFB45E',
    link: 'https://sprtraders.com',
  },
  {
    id: 'srijaishanthi',
    name: 'Sri Jai Shanthi',
    type: 'Client Website',
    year: '2025',
    description:
      'Freelance build taken from design mockup to production — mobile-ready, performance-optimized, and SEO-friendly, tailored to client-specific business needs.',
    stack: ['React', 'Node.js', 'Responsive UI', 'SEO'],
    accent: '#4FD1FF',
    link: 'https://srijaishanthi.com',
  },
  {
    id: 'spectale',
    name: 'Spectale + 3 Client Sites',
    type: 'Agency Work',
    year: '2023',
    description:
      'Built and shipped 4 client websites at Desperately Cinema — spectale.in, bioscholar.in, hassanacademia.com, ayandesignstudio.in — with responsive UIs from Figma, API integrations, and on-page SEO.',
    stack: ['HTML5 / CSS3', 'JavaScript', 'PHP', 'CMS'],
    accent: '#F472B6',
    link: 'https://spectale.in',
  },
  {
    id: 'hack-hustle',
    name: 'Hack Hustle 2024',
    type: 'Hackathon / Community',
    year: '2024',
    description:
      'Organized a hackathon for a tech society of 800+ students as Technical Advisor — steering themes, judging criteria, and mentorship across Web Dev, AI/ML, Cybersecurity, and more.',
    stack: ['Leadership', 'Mentorship', 'Event Ops', '5 Tech Domains'],
    accent: '#A78BFA',
    link: '#',
  },
]

export const experience = [
  {
    company: 'SurveySparrow',
    role: 'Software Engineer',
    period: 'Feb 2026 — Present',
    points: [
      'Started as Frontend Engineer and moved to Software Engineer within four months.',
      'Engineering across the stack on a survey platform used by teams worldwide — where performance, scale, and UX all matter.',
    ],
  },
  {
    company: 'serviceMob',
    role: 'Machine Learning Engineer (NLP)',
    period: 'Jul 2025 — Nov 2025',
    points: [
      'Built a BERT-based hierarchical classifier that auto-sorts support tickets into two-level categories (e.g., Finance → Refund), cutting manual triage and speeding up response times.',
      'Prepared training, testing, and golden datasets, and engineered prompts to extract cleaner data from ticketing systems.',
      'Deployed on AWS with Athena-powered querying and scalable batch inference pipelines.',
    ],
  },
  {
    company: 'Tech Society',
    role: 'Technical Advisor · prev. Assistant Coordinator',
    period: 'Jul 2024 — Oct 2025',
    points: [
      'Promoted to a strategy and leadership role guiding projects across Web Dev, AI/ML, Cybersecurity, Intelligent Systems, and Game/App Development.',
      'Mentored student teams of 800+ members, led tech-stack and feasibility decisions, and organized Hack Hustle 2024.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Software Engineer',
    period: 'Jan 2023 — Oct 2025',
    points: [
      'Took 7+ client projects end-to-end — from Figma mockups to responsive, production web apps — at a 100% delivery rate.',
      'Built React frontends and Node/Express/Java/Python backends, with AI/ML features to automate client workflows.',
      'Shipped performance-optimized, SEO-friendly sites like acetabletennisacademy.in, sprtraders.com, and srijaishanthi.com.',
    ],
  },
  {
    company: 'Skill First Labs',
    role: 'SDE Intern',
    period: 'Jul 2024 — Sep 2024',
    points: [
      'Built responsive React + Redux frontends and scalable Node/Express/PostgreSQL APIs alongside the design, backend, and AI teams.',
      'Integrated the OpenAI API with prompt engineering for AI-driven features, deployed securely on AWS.',
    ],
  },
  {
    company: 'Desperately Cinema',
    role: 'Frontend Developer',
    period: 'Jul 2023 — Dec 2023',
    points: [
      'Built and delivered 4 client websites (spectale.in, bioscholar.in, hassanacademia.com, ayandesignstudio.in) with HTML5, CSS3, JavaScript, and PHP.',
      'Turned Figma designs into responsive, cross-browser UIs with API integrations and on-page SEO.',
    ],
  },
]

export const navItems = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'about', label: 'About', icon: '◐' },
  { id: 'skills', label: 'Skills', icon: '⌘' },
  { id: 'projects', label: 'Projects', icon: '▣' },
  { id: 'experience', label: 'Experience', icon: '◷' },
  { id: 'contact', label: 'Contact', icon: '✉' },
]

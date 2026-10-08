/**
 * Central portfolio data — generated from Sushmita's resume (Sushmita_dasari.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Vicky Kumar',
  displayName: 'Vicky Kumar',
  firstName: 'VICKY',
  seriesTag: 'THE DEVELOPER',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A VICKY ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer'],
  intro:
    'A B.Tech Computer science student with (CGPA 8.50) and full-stack developer building AI-powered platforms, Python, React, Node.js and Docker.',
  location: 'Patna Bihar',
  email: 'vickykrdst1008@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/feed/',
    github: 'https://github.com/',
  },
  resumePdf: '/assets/Vicky_Kumar_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet:
      '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Vicky Kumar',
  },
  interests: ['MERN Stack Development', 'Artificial Intelligence'],
};

export const education = [
  {
    school: 'Arya College Of Engineering',
    place: 'Jaipur',
    degree: 'Bachelor of Technology — Computer Science',
    period: 'Oct 2022 – May-2026',
    score: 'CGPA 8.50',
  },
  {
    school: 'Bindeshwar Singh College',
    place: 'Danapur',
    degree: 'Intermediate— PCM',
    period: 'June 2018 – May 2020',
    score: 'Score 353/500',
  },

  {
    school: 'S.R.G.P.S High School',
    place: 'Vyapur',
    degree: 'Matriculation',
    period: '2017 – 2018',
    score: 'Score 329/500',
  },
];

export const experience = [
  {
    company: 'HJ Infotech pvt.ltd',
    role: 'Trainee',
    place: 'Jaipur',
    period: 'Sep 2026 – Now',
    points: [
      'Completed one year of intensive Full-Stack Development (FSD) training covering frontend, backend, database integration, and deployment workflows.',
      'Developed responsive and functional web applications by implementing user interfaces, server-side logic, and database connectivity.',
      'Deployed and managed web applications while applying version control, debugging, and end-to-end development practices.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'skillpat',
    title: 'SkillPat',
    year: '2026',
    genre: 'AI • Full-Stack • Hiring Tech',
    logline:
      'An AI-powered platform that automates candidate onboarding, interviews, assessments, AI evaluation and real-time proctoring.',
    stack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Node.js',
      'Express',
      'Redis',
      'BullMQ',
    ],
    build: [
      'Built SkillPat, an AI-powered platform that automates candidate onboarding, interviews, assessments, AI evaluation, and real-time proctoring to streamline the hiring process.',
      'Integrated a Generative AI API for automated interview evaluation and candidate assessment, with Redis and BullMQ handling background job processing and PostgreSQL as the primary database.',
    ],
    features: [
      'Automated candidate onboarding',
      'AI-driven interviews and assessments',
      'AI evaluation using a Generative AI API',
      'Real-time proctoring',
      'Background job queues with Redis and BullMQ',
    ],
    metrics: [
      { value: '5', label: 'hiring stages automated' },
      { value: '7', label: 'core technologies' },
    ],
    // Add `github: 'https://github.com/vickykumar2003/<repo-name>',` once the repo is ready.
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'tenants',
  },
  {
    id: 'hotel-booking',
    title: 'Hotel Booking Website',
    year: '2025',
    genre: 'Full-Stack • MERN • Booking Platform',
    logline:
      'A scalable hotel booking platform with secure authentication and role-based access for admins and users.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Cloudinary'],
    build: [
      'Built a scalable hotel booking platform enabling users to search, book, and manage reservations with secure authentication and role-based access (Admin & User).',
      'Developed RESTful APIs with full CRUD operations for hotels, rooms, and bookings, integrated Cloudinary for image uploads, and ensured proper validation, error handling, and API security following MVC architecture and clean coding practices.',
    ],
    features: [
      'Search, book and manage reservations',
      'Secure authentication',
      'Role-based access (Admin & User)',
      'Full CRUD APIs for hotels, rooms and bookings',
      'Cloudinary image uploads',
    ],
    metrics: [
      { value: '2', label: 'user roles (Admin & User)' },
      { value: '3', label: 'resources with full CRUD' },
    ],
    // Add `github: 'https://github.com/vickykumar2003/<repo-name>',` once the repo is ready.
    palette: {
      from: '#1a0d02',
      via: '#8a4a07',
      to: '#0a0806',
      accent: '#ffb547',
    },
    motif: 'flow',
  },
  {
    id: 'code-reviewer',
    title: 'Code Reviewer',
    year: '2025',
    genre: 'AI • Full-Stack • Developer Tools',
    logline:
      'An AI-powered code reviewer that gives feedback, optimization suggestions and error explanations using the Google Gemini API.',
    stack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Google Gemini API',
    ],
    build: [
      'Built an AI-powered Code Reviewer using the MERN stack integrated with the Google Gemini API.',
      'Analyzes user-submitted code and provides intelligent feedback, optimization suggestions, and error explanations; designed RESTful APIs, implemented secure backend logic, and stored review history in MongoDB.',
    ],
    features: [
      'AI analysis of user-submitted code',
      'Optimization suggestions',
      'Error explanations',
      'Review history stored in MongoDB',
      'Secure RESTful backend',
    ],
    metrics: [
      { value: '3', label: 'feedback types (review, optimize, explain)' },
    ],
    // Add `github: 'https://github.com/vickykumar2003/<repo-name>',` once the repo is ready.
    palette: {
      from: '#2a0610',
      via: '#7a0f24',
      to: '#0b0710',
      accent: '#ff3d5a',
    },
    motif: 'shield',
  },
  {
    id: 'food-ordering',
    title: 'E-Commerce Food Website',
    year: '2025',
    genre: 'Frontend • React • E-Commerce',
    logline:
      'A responsive food ordering web app with global state management for cart and product data.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux', 'Context API'],
    build: [
      'Built a responsive Food Ordering Web Application using React, with global state management through Context API and Redux to manage cart and product data efficiently.',
      'Developed dynamic product listing, filtering, and cart functionality with optimized component rendering.',
    ],
    features: [
      'Responsive food ordering interface',
      'Dynamic product listing and filtering',
      'Cart functionality',
      'Global state with Context API and Redux',
      'Optimized component rendering',
    ],
    metrics: [{ value: '2', label: 'state tools (Context API & Redux)' }],
    // Add `github: 'https://github.com/vickykumar2003/<repo-name>',` once the repo is ready.
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'btech-cgpa',
    title: '8.5 CGPA',
    org: 'Arya College of Engineering',
    detail:
      'Graduated with an 8.5 CGPA in B.Tech Computer Science and Engineering, affiliated with Rajasthan Technical University.',
    laurel: 'Academic Achievement',
  },

  {
    id: 'web-development-certification',
    title: 'Web Development Certified',
    org: 'Grastech Pvt. Ltd.',
    detail:
      'Completed professional certification in full-stack web development with hands-on experience in the MERN stack.',
    laurel: 'Certification',
  },

  {
    id: 'c-programming-certification',
    title: 'C Programming Certified',
    org: 'NPTEL',
    detail:
      'Earned an NPTEL certification in C Programming, strengthening core programming and problem-solving fundamentals.',
    laurel: 'NPTEL Certification',
  },

  {
    id: 'hunt-till-down',
    title: 'Hunt Till Down Participant',
    org: 'Arya College of Engineering',
    detail:
      'Participated in Hunt Till Down, a technical event organized by Arya College of Engineering, Jaipur.',
    laurel: 'Technical Event',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'NPTEL',
    name: 'Database Management System',
    link: 'https://drive.google.com/file/d/1MqkJHchXeaGD4S8mzPmEGxEYddAsxAjN/view?usp=drive_link',
  },
  {
    issuer: 'MongoDB',
    name: 'MongoDB Certified Associate Developer',
    link: 'https://www.credly.com/badges/fd3362bd-743a-4c4d-a68e-b1fdc5d46811/public_url',
  },
  {
    issuer: 'GitHub',
    name: 'GitHub Foundations',
    link: 'https://drive.google.com/file/d/1o0fkCAMRWTg1oMwxlqu6t6wnOpBv66Vq/view?usp=sharing',
  },
  {
    issuer: 'Pearson',
    name: 'IT Specialist – HTML and CSS',
    link: 'https://www.credly.com/badges/e4a55298-e396-41d8-a032-283aafe9fab7/public_url',
  },

  {
    issuer: 'Udemy',
    name: 'Microsoft Azure Hands-On Training (AZ-900, AZ-104, AZ-305)',
    link: 'https://drive.google.com/file/d/1KrXClhY0nJ3Acxs7DioNf4Q1rpaMvgPT/view?usp=sharing',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'JavaScript is the primary language',
    skills: [
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'ReactJs', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'TAILWIND', mono: 'Tw' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'NextJs', mono: 'Nj' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'Dc' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'System Design', mono: 'Sd' },
      { name: 'Cloud Computing (AWS)', mono: 'Aw' },
      { name: 'Machine Learning', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  JavaScript: ['E-Commerce Food Website', 'MERN Stack Training'],

  TypeScript: ['Software Engineering at HJ Infotech', 'Programming skils'],

  React: ['Hotel Booking Website', 'Code Reviewer', 'E-Commerce Food Website'],

  'Next.js': ['Software Engineering at HJ Infotech'],

  HTML: ['E-Commerce Food Website', 'Web Development Certification'],

  CSS: ['E-Commerce Food Website', 'Web Development Certification'],

  'Node.js': ['Hotel Booking Website', 'Code Reviewer', 'MERN Stack Training'],

  'Express.js': [
    'Hotel Booking Website',
    'Code Reviewer',
    'MERN Stack Training',
  ],

  'REST APIs': [
    'Hotel Booking Website',
    'Code Reviewer',
    'MERN Stack Training',
  ],

  'JWT Authentication': ['Hotel Booking Website', 'MERN Stack Training'],

  MongoDB: ['Hotel Booking Website', 'Code Reviewer', 'MERN Stack Training'],

  Mongoose: ['Hotel Booking Website', 'MERN Stack Training'],

  PostgreSQL: ['Software Engineering at HJ Infotech'],

  Python: ['Programming Skills'],

  'C Programming': ['NPTEL C Programming Certification'],

  'C++': ['Programming Skills'],

  Redux: ['E-Commerce Food Website'],

  'Context API': ['E-Commerce Food Website'],

  Tailwind: ['Software Engineering at HJ Infotech'],

  Docker: ['Software Engineering at HJ Infotech'],

  Git: ['Software Engineering at HJ Infotech'],

  GitHub: ['Software Engineering at HJ Infotech'],

  Postman: ['Software Engineering at HJ Infotech'],

  'Data Structures': ['Core Computer Science Skills'],

  'Problem Solving': ['Core Computer Science Skills'],

  Networking: ['Networking Basics'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};
const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};
const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};
const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};
const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2020',
    synopsis:
      'Completed Senior Secondary education at Bindeshwar Singh College, Danapur, building the academic foundation for a career in Computer Science.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description:
          'Completed Senior Secondary under BSEB with 70.06%, developing a strong foundation in Mathematics, Science and core academic subjects.',
        tags: ['Senior Secondary', 'BSEB', '70.06%'],
        runtime: '2020',
        palette: amber,
      },
    ],
  },

  {
    number: 2,
    title: 'Becoming an Engineer',
    period: '2022 – 2026',
    synopsis:
      'B.Tech in Computer Science and Engineering at Arya College of Engineering, affiliated with Rajasthan Technical University.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Student',
        description:
          'Started the B.Tech journey in Computer Science and Engineering, developing strong foundations in programming, data structures, databases, networking and software development.',
        tags: ['B.Tech', 'Computer Science', 'Programming'],
        runtime: 'Sep 2022 – Jun 2026',
        palette: violet,
      },

      {
        code: 'S02 E02',
        title: 'The Developer',
        description:
          'Built hands-on experience with web development technologies including JavaScript, React, Node.js, Express.js, MongoDB and REST APIs.',
        tags: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
        runtime: '2022 – 2026',
        palette: ocean,
      },

      {
        code: 'S02 E03',
        title: 'The Graduate',
        description:
          'Completed B.Tech in Computer Science and Engineering with an overall CGPA of 8.5.',
        tags: ['B.Tech', 'CSE', 'CGPA 8.5'],
        runtime: 'Jun 2026',
        palette: jade,
      },
    ],
  },

  {
    number: 3,
    title: 'Learning to Build',
    period: '2025 – 2025',
    synopsis:
      'Intensive MERN Stack training at Grastech Pvt. Ltd., Noida, focused on practical full-stack web development.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Trainee',
        description:
          'Completed hands-on training in MongoDB, Express.js, React.js and Node.js, gaining practical experience across the full development stack.',
        tags: ['MERN', 'React', 'Node.js', 'MongoDB'],
        runtime: 'Jun 2025 – Dec 2025',
        palette: ocean,
      },

      {
        code: 'S03 E02',
        title: 'The Backend Builder',
        description:
          'Developed RESTful APIs, implemented JWT authentication and worked with MongoDB while following MVC architecture and clean coding practices.',
        tags: ['REST APIs', 'JWT', 'Express.js', 'MVC'],
        runtime: '2025',
        palette: violet,
      },

      {
        code: 'S03 E03',
        title: 'The Full-Stack Developer',
        description:
          'Built and deployed full-stack applications while developing responsive interfaces and integrating frontend, backend and database systems.',
        tags: ['Full Stack', 'Deployment', 'Web Development'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },

  {
    number: 4,
    title: 'Entering the Industry',
    period: '2026 – Present',
    synopsis:
      'Joined HJ Infotech and progressed from Software Development Intern to Software Engineer Trainee, working on real-world full-stack applications.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Intern',
        description:
          'Joined HJ Infotech as a Software Development Intern, contributing to the design, development and testing of web application features.',
        tags: ['Software Development', 'Web Applications', 'Testing'],
        runtime: 'Mar 2026 – Sep 2026',
        palette: amber,
      },

      {
        code: 'S04 E02',
        title: 'The Engineer',
        description:
          'Progressed to Software Engineer Trainee, contributing to full-stack application development, feature implementation, debugging and software engineering practices.',
        tags: ['Full Stack', 'Development', 'Debugging'],
        runtime: 'Sep 2026 – Present',
        palette: crimson,
      },

      {
        code: 'S04 E03',
        title: 'The Builder',
        description:
          'Working with modern web technologies and collaborating with the engineering team to build, maintain and improve scalable application features.',
        tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
        runtime: 'Present',
        palette: ocean,
      },
    ],
  },

  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis:
      'The next chapter is focused on becoming a stronger full-stack engineer while continuing to explore modern software technologies.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description:
          'Continuing to strengthen full-stack development, problem solving, system design, cloud technologies and modern software engineering practices.',
        tags: ['Full Stack', 'System Design', 'Cloud', 'Problem Solving'],
        runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Current role',
    title: 'Software Engineer Trainee',
    detail: 'HJ Infotech • Full-stack web application development',
    palette: amber,
  },

  {
    label: 'Career milestone',
    title: 'Software Development Intern',
    detail: 'HJ Infotech • Mar 2026 – Sep 2026',
    palette: crimson,
  },

  {
    label: 'Academic achievement',
    title: '8.5 CGPA',
    detail: 'B.Tech Computer Science & Engineering • RTU',
    palette: ocean,
  },

  {
    label: 'Core stack',
    title: 'MERN Stack',
    detail: 'MongoDB • Express.js • React.js • Node.js',
    palette: violet,
  },

  {
    label: 'AI-powered project',
    title: 'Code Reviewer',
    detail: 'MERN application integrated with Google Gemini API',
    palette: jade,
  },

  {
    label: 'Full-stack project',
    title: 'Hotel Booking',
    detail: 'REST APIs • JWT Authentication • Role-based Access',
    palette: amber,
  },

  {
    label: 'Development training',
    title: 'MERN Stack Training',
    detail: 'Grastech Pvt. Ltd. • Jun 2025 – Dec 2025',
    palette: crimson,
  },

  {
    label: 'Certification',
    title: 'C Programming',
    detail: 'NPTEL Certified • Programming fundamentals',
    palette: ocean,
  },

  {
    label: 'Web development',
    title: 'Web Development',
    detail: 'Certified by Grastech Pvt. Ltd.',
    palette: jade,
  },

  {
    label: 'Current focus',
    title: 'Full-Stack Development',
    detail: 'Building scalable applications with modern web technologies',
    palette: violet,
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Science',
    lines: [
      'Arya College of Engineering, Jaipur',
      'September 2022 – June 2026',
    ],
    chips: ['CGPA 8.5'],
  },

  {
    kicker: 'Skills',
    title: 'Full-Stack Development',
    lines: [
      'JavaScript, TypeScript, Python, C, C++',
      'React, Next.js, Node.js, Express.js, Tailwind',
      'MongoDB, PostgreSQL · REST APIs · JWT · Docker',
    ],
    chips: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'MongoDB',
      'PostgreSQL',
    ],
  },

  {
    kicker: 'Training',
    title: 'The MERN Journey',
    lines: [
      'Hands-on Full-Stack Development training',
      'Grastech Pvt. Ltd., Noida · June 2025 – December 2025',
      'Frontend · Backend · REST APIs · Authentication · Databases',
    ],
    chips: ['MERN', 'REST APIs', 'JWT', 'MongoDB'],
  },

  {
    kicker: 'Experience',
    title: 'From Intern to Engineer',
    lines: [
      'Software Development Intern · HJ Infotech',
      'March 2026 – September 2026',
      'Now working as a Software Engineer Trainee',
    ],
    chips: ['Full Stack', 'Development', 'Debugging'],
  },

  {
    kicker: 'Projects',
    title: 'Building Real Solutions',
    lines: [
      'Hotel Booking — authentication, bookings, REST APIs & role-based access',
      'Code Reviewer — AI-powered code analysis with Google Gemini',
      'Food Ordering — React, Redux, Context API & dynamic product management',
    ],
    chips: ['Hotel Booking', 'AI Code Reviewer', 'Food Ordering'],
  },

  {
    kicker: 'Certified',
    title: 'Professional Credentials',
    lines: ['Web Development — Grastech Pvt. Ltd.', 'C Programming — NPTEL'],
    chips: ['Web Development', 'C Programming'],
  },

  {
    kicker: 'Current mission',
    title: 'Building What Matters',
    lines: [
      'Growing as a full-stack software engineer',
      'Exploring scalable applications, modern web technologies and better engineering practices',
    ],
    chips: ['Full Stack', 'System Design', 'Cloud', 'Problem Solving'],
  },
];

export type ProfileId = 'vicky' | 'recruiter' | 'developer' | 'creative';
export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'vicky',
    name: 'vicky',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: [
      'about',
      'journey',
      'originals',
      'picks',
      'skills',
      'moments',
      'story',
    ],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: [
      'story',
      'moments',
      'skills',
      'originals',
      'about',
      'journey',
      'picks',
    ],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: [
      'originals',
      'skills',
      'journey',
      'moments',
      'about',
      'picks',
      'story',
    ],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: [
      'journey',
      'picks',
      'originals',
      'moments',
      'about',
      'skills',
      'story',
    ],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'The Pilot • Education & training',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Originals',
    card: 'My Projects',
    meta: `${projects.length} Originals • 2026`,
    palette: crimson,
  },
  picks: {
    nav: 'Top Picks',
    card: 'Top Picks',
    meta: 'Top 10 from the resume',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Moments',
    card: 'My Achievements',
    meta: `${achievements.length} Moments • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Resume • View & download',
    palette: violet,
  },
};

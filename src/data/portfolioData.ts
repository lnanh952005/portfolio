import type { CandidateInfo, Project, SkillCategory, Experience, Certification } from '../types/portfolio'

export const candidateData: CandidateInfo = {
  name: 'Alex Nguyen',
  headline: 'Building Digital Experiences Through Code.',
  targetRoles: ['Software Engineering Intern', 'Backend Developer Intern', 'Frontend Developer Intern'],
  status: {
    available: true,
    label: 'Open to Internship',
    details: 'Available for Summer & Fall 2025 / 2026 Internships (Full-time or Part-time)',
  },
  bio: "Hi, I'm Alex. A 3rd-year Computer Science student passionate about building scalable backend services, type-safe APIs, and responsive, accessible frontend applications. Seeking internship opportunities to contribute and learn in high-velocity engineering teams.",
  longBio: [
    "I'm an aspiring Software Developer currently pursuing my Bachelor of Science in Computer Science. My journey began with competitive programming, which instilled a deep appreciation for algorithms and system efficiency.",
    "Today, I balance both ends of the stack: designing resilient microservices with Node.js/Go and PostgreSQL, while crafting snappy, polished user interfaces using React 19, TypeScript, and modern CSS architectures.",
    "Outside coursework, I lead workshops in our university's Google Developer Student Club, mentor freshmen in Data Structures, and actively contribute to developer tooling."
  ],
  location: {
    city: 'Hanoi',
    country: 'Vietnam',
    timezone: 'GMT+7',
    remotePreference: 'Hybrid / On-site / Remote',
  },
  education: {
    degree: 'Bachelor of Science in Computer Science',
    major: 'Software Engineering & Distributed Systems',
    institution: 'University of Science and Technology',
    period: '2022 — 2026 (Expected)',
    gpa: '3.78 / 4.00 (Top 5%)',
    status: '3rd Year Undergraduate',
    relevantCourses: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Database Management Systems',
      'Computer Networks',
      'Software Architecture',
      'Distributed Systems'
    ],
    highlights: [
      "Dean's List for Academic Excellence (Consecutive 4 semesters)",
      'Undergraduate Research Scholarship recipient',
      'Finalist at National Collegiate Hackathon 2024'
    ]
  },
  careerGoal: 'To join an engineering team as a Software Developer Intern where I can contribute to production-grade distributed architectures, build robust user interfaces, and collaborate with experienced mentors.',
  currentlyLearning: {
    topic: 'Distributed Systems & Go concurrency primitives',
    reason: 'Deepening understanding of consensus algorithms (Raft), message queues, and high-throughput microservices.',
    progress: 'Building an in-memory key-value store with WAL and Raft consensus.'
  },
  contacts: {
    email: 'alex.nguyen.dev@example.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    leetcode: 'https://leetcode.com',
    twitter: 'https://twitter.com'
  },
  stats: {
    projectsCompleted: 12,
    technologiesMastered: 18,
    githubContributions: '650+ commits this year',
    gpa: '3.78/4.0'
  }
}

export const projectsData: Project[] = [
  {
    id: 'algorise',
    title: 'Algorise — Interactive Algorithm Visualizer & Judge',
    tagline: 'Step-by-step visual engine for graph algorithms and code sandbox execution',
    description: 'A full-stack learning platform designed to help CS students grasp complex graph algorithms (Dijkstra, A*, BFS/DFS) and dynamic programming through customizable animations and an isolated WebAssembly code sandbox.',
    category: 'fullstack',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Docker', 'WebSockets', 'Canvas API'],
    githubUrl: 'https://github.com/alexnguyen/algorise-visualizer',
    liveUrl: 'https://algorise-demo.vercel.app',
    highlights: [
      'Implemented custom 60fps graph layout engine using HTML5 Canvas and spring-embedder simulation',
      'Built a sandboxed execution container in Node.js & Docker with strict memory and CPU throttling to safely run student code submissions',
      'Engineered bi-directional WebSocket streaming for step-by-step playback with pause, resume, and variable playback speeds',
      'Adopted by 300+ students in university Data Structures laboratory sessions'
    ],
    architectureDetails: 'Architecture consists of a React 19 frontend utilizing customized state machines for deterministic visual step replays, paired with a Node.js orchestrator that delegates test runs to ephemeral, secure Docker sandboxes.',
    stats: [
      { label: 'Active Users', value: '1.2k+' },
      { label: 'Sandbox Runs', value: '18k+' },
      { label: 'Frame Rate', value: '60 FPS' }
    ]
  },
  {
    id: 'campuspulse',
    title: 'CampusPulse — Student Marketplace & Community',
    tagline: 'Verified peer-to-peer campus marketplace and academic event hub',
    description: 'A responsive web application enabling university students to exchange textbooks, electronics, and study notes with official university email authentication and real-time messaging.',
    category: 'fullstack',
    featured: false,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
    tags: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Pusher'],
    githubUrl: 'https://github.com/alexnguyen/campuspulse-platform',
    liveUrl: 'https://campuspulse-preview.vercel.app',
    highlights: [
      'Implemented university email (.edu) domain verification with one-time verification tokens and role-based access control',
      'Designed PostgreSQL schema with Prisma ORM featuring optimized indexes and composite constraints for sub-50ms search queries',
      'Integrated real-time buyer-seller chat with presence indicators and instant unread notification badges'
    ],
    stats: [
      { label: 'Listings', value: '450+' },
      { label: 'Query Latency', value: '<45ms' }
    ]
  },
  {
    id: 'devsync',
    title: 'DevSync — Lightweight Distributed Task Queue',
    tagline: 'High-throughput background job processor with real-time telemetry dashboard',
    description: 'A robust background worker system modeled after BullMQ and Celery, featuring exponential backoff retries, dead-letter queues, and a clean web monitor dashboard for inspecting running tasks.',
    category: 'backend',
    featured: false,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    tags: ['Go / Node.js', 'Redis', 'TypeScript', 'REST API', 'Docker', 'Tailwind CSS'],
    githubUrl: 'https://github.com/alexnguyen/devsync-task-queue',
    liveUrl: 'https://devsync-telemetry.fly.dev',
    highlights: [
      'Engineered priority task scheduling and sliding-window rate limiters utilizing Redis Lua scripts for atomic operations',
      'Handled worker crash scenarios with heartbeat tracking and automatic orphaned job reclamation',
      'Benchmarked at 8,500 jobs/sec throughput with minimal latency under sustained concurrency'
    ],
    stats: [
      { label: 'Throughput', value: '8.5k jobs/s' },
      { label: 'Reliability', value: '99.9%' }
    ]
  },
  {
    id: 'aurora-ui',
    title: 'Aurora UI — Accessible Headless Component Library',
    tagline: 'Clean, keyboard-navigable UI primitives built for design system consistency',
    description: 'A polished set of unstyled and lightly styled React 19 UI components with strict WAI-ARIA compliance, automated accessibility testing, and smooth physics-based micro-interactions.',
    category: 'frontend',
    featured: false,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Radix Primitives', 'Storybook', 'Vitest'],
    githubUrl: 'https://github.com/alexnguyen/aurora-component-system',
    liveUrl: 'https://aurora-ui-docs.vercel.app',
    highlights: [
      'Built 18 accessible components (combobox, modal dialogs, data table, tooltip) passing WCAG 2.1 AA standards',
      'Configured comprehensive unit and snapshot tests with Vitest and Testing Library achieving 94% test coverage',
      'Packaged and published as an open-source npm package with TypeScript declaration maps'
    ],
    stats: [
      { label: 'Components', value: '18+' },
      { label: 'Test Coverage', value: '94%' }
    ]
  }
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages used for systems, scripting, and web applications',
    icon: 'Code2',
    skills: [
      { name: 'TypeScript', level: 'Core', description: 'Advanced types, generics, strict type checking' },
      { name: 'JavaScript (ESNext)', level: 'Core', description: 'Async/await, event loop, closures, DOM' },
      { name: 'Python', level: 'Core', description: 'Scripting, FastAPI, algorithm problem solving' },
      { name: 'Java', level: 'Proficient', description: 'OOP, Spring Boot, data structures coursework' },
      { name: 'Go', level: 'Proficient', description: 'Goroutines, channels, REST microservices' },
      { name: 'C / C++', level: 'Familiar', description: 'Memory management, pointers, competitive coding' }
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, high-performance user interfaces',
    icon: 'Layout',
    skills: [
      { name: 'React 19', level: 'Core', description: 'Hooks, Server Components, React Compiler, Suspense' },
      { name: 'Next.js 15', level: 'Core', description: 'App router, server actions, SSR & SSG' },
      { name: 'Tailwind CSS v4', level: 'Core', description: 'Design tokens, custom utility classes, responsive UI' },
      { name: 'HTML5 & Semantic Web', level: 'Core', description: 'SEO optimization, semantic markup structure' },
      { name: 'Framer Motion', level: 'Proficient', description: 'Layout animations, gesture feedback, transitions' },
      { name: 'State Management', level: 'Proficient', description: 'Zustand, TanStack Query, Context API' }
    ]
  },
  {
    title: 'Backend Development',
    description: 'Architecting resilient APIs, data flows, and microservices',
    icon: 'Server',
    skills: [
      { name: 'Node.js & Express', level: 'Core', description: 'REST APIs, middleware, authentication & JWT' },
      { name: 'FastAPI / Python', level: 'Proficient', description: 'Pydantic validation, async endpoints, OpenAPI' },
      { name: 'RESTful API Design', level: 'Core', description: 'Versioning, idempotency, rate limiting, pagination' },
      { name: 'WebSockets & SSE', level: 'Proficient', description: 'Bi-directional real-time communication' },
      { name: 'Microservices Concepts', level: 'Familiar', description: 'Service decoupling, message brokers, caching' }
    ]
  },
  {
    title: 'Databases & Storage',
    description: 'Data modeling, relational indexing, and low-latency caching',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Core', description: 'Relational modeling, indexing, ACID transactions' },
      { name: 'Prisma ORM', level: 'Core', description: 'Schema migrations, type-safe queries, relations' },
      { name: 'Redis', level: 'Proficient', description: 'In-memory caching, rate limiting, pub/sub' },
      { name: 'MongoDB', level: 'Proficient', description: 'Document stores, aggregations, flexible schemas' },
      { name: 'MySQL', level: 'Proficient', description: 'University coursework & enterprise databases' }
    ]
  },
  {
    title: 'Tools & DevOps',
    description: 'Developer workflow, containerization, and automated deployment',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 'Core', description: 'Branching workflows, PR reviews, merge strategies' },
      { name: 'Docker', level: 'Proficient', description: 'Multi-stage container builds, Docker Compose' },
      { name: 'Linux / Bash', level: 'Proficient', description: 'Command-line navigation, shell scripting, SSH' },
      { name: 'Postman & Insomnia', level: 'Core', description: 'API testing, automated request collections' },
      { name: 'Vite & Rolldown', level: 'Core', description: 'Modern build pipelines, HMR optimization' },
      { name: 'CI/CD (GitHub Actions)', level: 'Familiar', description: 'Automated linting, testing, and deployment' }
    ]
  }
]

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Lead Technical Coordinator',
    organization: 'Google Developer Student Club (GDSC)',
    location: 'University Campus',
    period: 'Aug 2024 — Present',
    type: 'Club & Community',
    description: 'Leading technical workshops, mentoring 80+ junior student developers in modern web development, and spearheading annual campus hackathon technical infrastructure.',
    achievements: [
      'Organized 6 hands-on workshops covering React, TypeScript, and REST API fundamentals with 95% positive feedback',
      'Architected the official hackathon scoring and registration web portal serving 450+ participants',
      'Mentored 4 teams in collegiate software project showcases'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker']
  },
  {
    id: 'exp-2',
    role: 'Undergraduate Research Assistant',
    organization: 'Distributed Computing & AI Laboratory',
    location: 'Faculty of Computer Science',
    period: 'Jan 2024 — Jul 2024',
    type: 'University Lab',
    description: 'Researched low-latency consensus protocols and edge computing data collection under the guidance of Associate Professor Dr. Pham.',
    achievements: [
      'Evaluated network jitter and replication latency across simulated multi-node clusters',
      'Assisted in drafting research benchmark analysis accepted for campus engineering colloquium',
      'Built automated Python data aggregation scripts processing 100k+ telemetry points'
    ],
    technologies: ['Python', 'Docker', 'Linux', 'Go', 'Data Visualization']
  },
  {
    id: 'exp-3',
    role: 'Teaching Assistant — Data Structures & Algorithms',
    organization: 'Department of Computer Science',
    location: 'University Campus',
    period: 'Sep 2023 — Dec 2023',
    type: 'Academic Teaching',
    description: 'Assisted course professor in conducting weekly lab sessions, reviewing student code assignments, and hosting office hours for 120+ undergraduates.',
    achievements: [
      'Reviewed and debugged 400+ student C++ / Java submissions, emphasizing time and space complexity analysis',
      'Designed supplementary visual practice guides for recursion, binary search trees, and dynamic programming'
    ],
    technologies: ['C++', 'Java', 'Algorithms', 'Git']
  }
]

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta / Coursera',
    date: 'Oct 2024',
    badgeText: 'Verified Credential',
    credentialUrl: 'https://coursera.org',
    icon: 'Award'
  },
  {
    id: 'cert-2',
    title: 'AWS Certified Cloud Practitioner (Foundational)',
    issuer: 'Amazon Web Services',
    date: 'Jul 2024',
    badgeText: 'Active',
    credentialUrl: 'https://aws.amazon.com',
    icon: 'Cloud'
  },
  {
    id: 'cert-3',
    title: 'Problem Solving (Advanced) Certificate',
    issuer: 'HackerRank',
    date: 'May 2024',
    badgeText: 'Top 5%',
    credentialUrl: 'https://hackerrank.com',
    icon: 'Code'
  },
  {
    id: 'cert-4',
    title: 'National Collegiate Programming Contest (ICPC) — Regional Finalist',
    issuer: 'ICPC Asia Regional',
    date: 'Dec 2023',
    badgeText: 'Finalist',
    credentialUrl: '#',
    icon: 'Trophy'
  }
]


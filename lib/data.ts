// ─────────────────────────────────────────────
// PERSONAL CONFIG
// Edit this section to update your info everywhere at once.
// ─────────────────────────────────────────────

export const config = {
  name: "Edward Sung",
  initials: "ES",
  title: "Software Engineer",
  location: "Los Angeles, CA",
  email: "edwardsungswe@gmail.com",
  bio: "I build clean, performant software and thoughtful digital experiences. Focused on systems design, developer tooling, and the intersection of engineering and product.",
  social: {
    github: "https://github.com/edwardsungswe",
    linkedin: "https://linkedin.com/in/edwardsung",
  },
  site: {
    title: "Edward Sung — Software Engineer",
    description: "Software Engineer building performant systems and thoughtful digital experiences.",
  },
};

// ─────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────

export const skills: string[] = [
  "TypeScript",
  "Go",
  "Python",
  "C#",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "CI/CD",
  "REST APIs",
];

// ─────────────────────────────────────────────
// EXPERIENCE
// Add new jobs to the top of the array.
// Education entries use role: "" to distinguish them visually if needed.
// ─────────────────────────────────────────────

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  /** Set to true for education entries */
  isEducation?: boolean;
  startYear: number;
  startMonth: number; // 1–12
  endYear?: number;
  endMonth?: number; // absent = present
}

export const experience: ExperienceItem[] = [
  {
    company: "Varmodel",
    role: "Software Engineer Intern",
    period: "February 2026 — Present",
    description: "",
    isEducation: false,
    startYear: 2026,
    startMonth: 2,
    
  },
  {
    company: "University of Southern California",
    role: "Master of Science in Computer Science",
    period: "June 2025 — May 2027",
    description: "",
    isEducation: true,
    startYear: 2025,
    startMonth: 6,
    endYear: 2027,
    endMonth: 5,
  },
  {
    company: "FAST Enterprises",
    role: "Software Engineer",
    period: "June 2023 — May 2025",
    description:
      "Developed enforcement services to optimize revenue collection for the states of Massachusetts and Michigan. Led development of scalable features across 10+ projects, improving system reliability and accelerating deployments through CI/CD pipelines. Designed an audit tool that increased audit speed by 30% and reduced clerical errors by 20%. Optimized database performance, cutting latency by 47% across 10K+ daily transactions, and developed multiple user-facing web portals to automate tasks and streamline workflows, improving efficiency by 80%.",
    startYear: 2023,
    startMonth: 6,
    endYear: 2025,
    endMonth: 5,
  },
  {
    company: "Clark County Water Reclamation District",
    role: "Software Developer",
    period: "June 2022 — June 2023",
    description:
      "Designed and launched the company's first mobile application, improving operational efficiency for over 400 internal users. Developed an automated database rollback system that reduced deployment failure recovery time by 40%. Optimized database queries reducing retrieval latency by 28%, and built a REST API to support the mobile app enabling secure CRUD operations on internal employee databases.",
    startYear: 2022,
    startMonth: 6,
    endYear: 2023,
    endMonth: 6,
  },
  {
    company: "University of Nevada, Las Vegas",
    role: "Bachelor of Science in Computer Science",
    period: "August 2020 — May 2023",
    description: "",
    isEducation: true,
    startYear: 2020,
    startMonth: 8,
    endYear: 2023,
    endMonth: 5,
  },
];

// ─────────────────────────────────────────────
// PROJECTS
// Add new projects to the top of the array.
// slug must be URL-safe and match the MDX filename in content/projects/ (if one exists).
// githubUrl is optional — shown as a link on the project detail page.
// ─────────────────────────────────────────────

export interface Project {
  slug: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "blockmo",
    title: "BlockMo",
    description:
      "Cryptocurrency web application which allows users to conduct transactions and mine new currency. Utilizes a hashing algorithm designed with encryption best practices. Features 2-step email verification and auto-rotating session tokens.",
    year: "2023",
    tags: ["JavaScript", "Blockchain", "Cryptography", "Authentication"],
    githubUrl: "https://github.com/edwardsungswe/BlockMo",
  },
  {
    slug: "load-balancer",
    title: "Load Balancer",
    description:
      "Load balancer using a round-robin algorithm to distribute requests across a set of backend services with retry support. Performs active health checking and passive recovery for unhealthy backends.",
    year: "2023",
    tags: ["Go", "Networking", "Systems"],
    githubUrl: "https://github.com/edwardsungswe/Load-Balancer",
  },
  {
    slug: "bulletin",
    title: "Bulletin",
    description:
      "Social media application built with a modern full-stack: React, Node.js, GraphQL, MongoDB, and Apollo. Supports posts, comments, and real-time updates.",
    year: "2022",
    tags: ["React", "Node.js", "GraphQL", "MongoDB", "Apollo"],
    githubUrl: "https://github.com/ry-nl/Bulletin",
  },
  {
    slug: "volunteerone",
    title: "VolunteerOne",
    description:
      "Peer-based mobile app that connects volunteers to community opportunities and events. Matches volunteers to suitable opportunities based on skills, interests, and experience.",
    year: "2022",
    tags: ["Mobile", "React Native", "Community"],
    githubUrl: "https://github.com/VolunteerOne/volunteer-one-app",
  },
  {
    slug: "pregnancy-tracker",
    title: "Pregnancy Tracker",
    description:
      "Comprehensive pregnancy tracking app with three user portals — Patient, Doctor, and System Admin — each providing tailored functionality for managing and tracking information throughout the pregnancy journey.",
    year: "2022",
    tags: ["Full Stack", "Healthcare", "Multi-role"],
    githubUrl: "https://github.com/carmen-lee/pregnancy-tracker",
  },
  {
    slug: "shell-in-go",
    title: "Shell in Go",
    description: "A simple Unix shell for macOS built from scratch in Go.",
    year: "2022",
    tags: ["Go", "Systems", "CLI"],
    githubUrl: "https://github.com/edwardsungswe/Shell-in-Go",
  },
];

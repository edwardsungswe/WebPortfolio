// ─────────────────────────────────────────────
// PERSONAL CONFIG
// Edit this section to update your info everywhere at once.
// ─────────────────────────────────────────────

export const config = {
  name: "Edward Sung",
  initials: "ES",
  title: "Software Engineer",
  location: "Los Angeles, CA",
  email: "edwardsung.swe@gmail.com",
  bio: "I build backend systems and scalable web applications. Focused on APIs, data systems, and performance.",
  aboutBio:"Software engineer with 2+ years of experience at FAST Enterprises, currently pursuing a Master’s at USC — interning at Avanade and joining NASA as a software engineering intern in August 2026.",
  social: {
    github: "https://github.com/edwardsungswe",
    linkedin: "https://www.linkedin.com/in/edwardsungswe/",
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
  "Python",
  "TypeScript",
  "JavaScript",
  "Go",
  "Java",
  "C++",
  "C#",
  "SQL",
  "REST APIs",
  "Django",
  "Node.js",
  "Express",
  "WebSockets",
  "Celery/Redis",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Firebase",
  "PyTorch",
  "Vector Embeddings",
  "Qdrant",
  "RAG",
  "Hugging Face",
  "Claude Code",
  "GitHub Copilot",
  "AWS",
  "Docker",
  "OAuth",
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
  description: string[];
  /** Set to true for education entries */
  isEducation?: boolean;
  startYear: number;
  startMonth: number; // 1–12
  endYear?: number;
  endMonth?: number; // absent = present
}

export const experience: ExperienceItem[] = [
  {
    company: "NASA",
    role: "Software Engineering Intern",
    period: "Incoming August 2026",
    description: [],
    isEducation: false,
    startYear: 2026,
    startMonth: 8,
  },
  {
    company: "Avanade",
    role: "Software Engineer Intern",
    period: "June 2026 — August 2026",
    description: [
      "Leading prototype development for a speech-to-text engagement, converting real-time and recorded audio into structured text outputs on a Databricks and Azure stack, and presenting prototype iterations directly to the client",
      "Benchmarking on-device versus cloud LLM deployments across latency, security, and scalability to guide architecture selection for environments with intermittent or restricted connectivity",
    ],
    isEducation: false,
    startYear: 2026,
    startMonth: 6,
    endYear: 2026,
    endMonth: 8,
  },
  {
    company: "Varmodel",
    role: "Software Engineer Intern",
    period: "February 2026 — May 2026",
    description: [
      "Architected a 3-stage video upload pipeline with presigned URLs to DigitalOcean Spaces, enabling direct client uploads and eliminating server-side FFmpeg processing, reducing upload latency by 40%",
      "Owned the Stripe billing integration (subscription management, webhook handling) and shipped real-time chat using Django Channels WebSockets",
      "Replaced keyword-based partner search with a RAG discovery system using OpenAI and Gemini embeddings and Qdrant vector search, improving match relevance across the platform",
    ],
    isEducation: false,
    startYear: 2026,
    startMonth: 2,
    endYear: 2026,
    endMonth: 5,
  },
  {
    company: "University of Southern California",
    role: "Master of Science in Computer Science",
    period: "June 2025 — May 2027 (Expected)",
    description: ["GPA: 3.5"],
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
    description: [
      "Owned enforcement modules end-to-end as the sole engineer, orchestrating multi-step workflows across Massachusetts state tax systems, integrating validation, rule evaluation, and automated actions over 2M+ records, increasing revenue recovery efficiency by 15%",
      "Responded to production incidents and stabilized a large-scale deployment by fixing frontend-backend contract mismatches and unhandled API failure states through schema validation and improved error handling, reducing crash rate from 20% to 5%",
      "Designed and implemented an audit tool used by 50+ internal users, reducing average audit time from 60 minutes to 30 minutes per case and eliminating clerical errors per audit cycle",
      "Reduced page load time from 10s to 4s across 10K+ daily transactions by analyzing query logs and execution plans, rewriting joins, adding composite indexes on high-cardinality columns, and removing redundant sub-queries",
      "Mentored 2 engineering interns and worked directly with Massachusetts state agency stakeholders on enforcement system delivery",
    ],
    startYear: 2023,
    startMonth: 6,
    endYear: 2025,
    endMonth: 5,
  },
  {
    company: "Clark County Water Reclamation District",
    role: "Software Engineer Intern",
    period: "June 2022 — May 2023",
    description: [
      "Built the agency's first mobile app using React Native and REST APIs, digitizing paper-based vehicle checkout workflows for 400+ employees, and cut average request latency from 287ms to 94ms by restructuring backend queries",
    ],
    startYear: 2022,
    startMonth: 6,
    endYear: 2023,
    endMonth: 5,
  },
  {
    company: "University of Nevada, Las Vegas",
    role: "Bachelor of Science in Computer Science",
    period: "August 2020 — May 2023",
    description: ["Dean's List | GPA: 3.4"],
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
  description: string[];
  year: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "vla-steering",
    title: "Steering-Time Guidance for a Vision-Language-Action Driving Model",
    description: [
      "Built an A/B experiment harness with paired-seed baseline-vs-guided runs, structured CSV/JSON logging, per-pair trajectory artifacts, and an ADE/FDE metrics module",
    ],
    year: "2026",
    tags: ["Python", "PyTorch", "Hugging Face", "NumPy"],
    githubUrl: "https://github.com/mattheqd/vla-steering",
  },
  {
    slug: "computational-image-puzzle-solver",
    title: "Computational Image Puzzle Solver",
    description: [
      "Built a computer vision system that reconstructs images from scattered puzzle pieces, supporting 4 rotation orientations and automatic grid inference",
      "Optimized solver using beam search (5000 states) with precomputed pairwise compatibility caching across rotations",
      "Developed OpenCV pipeline for piece extraction using contour detection, morphological filtering, Sobel gradients, and artifact removal"
    ],
    year: "2025",
    tags: ["C++", "OpenCV", "CMake"],
    githubUrl: "https://github.com/edwardsungswe/Computational-Image-Puzzle-Solver",
  },
  {
    slug: "blockmo",
    title: "BlockMo",
    description: [
      "Cryptocurrency web application which allows users to conduct transactions and mine new currency.",
      "Utilizes a hashing algorithm designed with encryption best practices.",
      "Features 2-step email verification and auto-rotating session tokens.",
    ],
    year: "2023",
    tags: ["JavaScript", "Blockchain", "Cryptography", "Authentication"],
    githubUrl: "https://github.com/edwardsungswe/BlockMo",
  },
  {
    slug: "load-balancer",
    title: "Load Balancer",
    description: [
      "Load balancer using a round-robin algorithm to distribute requests across a set of backend services with retry support.",
      "Performs active health checking and passive recovery for unhealthy backends.",
    ],
    year: "2023",
    tags: ["Go", "Networking", "Systems"],
    githubUrl: "https://github.com/edwardsungswe/Load-Balancer",
  },
  {
    slug: "bulletin",
    title: "Bulletin",
    description: [
      "Social media application built with a modern full-stack: React, Node.js, GraphQL, MongoDB, and Apollo.",
      "Supports posts, comments, and real-time updates.",
    ],
    year: "2022",
    tags: ["React", "Node.js", "GraphQL", "MongoDB", "Apollo"],
    githubUrl: "https://github.com/ry-nl/Bulletin",
  },
  {
    slug: "volunteerone",
    title: "VolunteerOne",
    description: [
      "Peer-based mobile app that connects volunteers to community opportunities and events.",
      "Matches volunteers to suitable opportunities based on skills, interests, and experience.",
    ],
    year: "2022",
    tags: ["Mobile", "React Native", "Community"],
    githubUrl: "https://github.com/VolunteerOne/volunteer-one-app",
  },
  {
    slug: "pregnancy-tracker",
    title: "Pregnancy Tracker",
    description: [
      "Comprehensive pregnancy tracking app with three user portals — Patient, Doctor, and System Admin.",
      "Each portal provides tailored functionality for managing and tracking information throughout the pregnancy journey.",
    ],
    year: "2022",
    tags: ["Full Stack", "Healthcare", "Multi-role"],
    githubUrl: "https://github.com/carmen-lee/pregnancy-tracker",
  },
  {
    slug: "shell-in-go",
    title: "Shell in Go",
    description: ["A simple Unix shell for macOS built from scratch in Go."],
    year: "2022",
    tags: ["Go", "Systems", "CLI"],
    githubUrl: "https://github.com/edwardsungswe/Shell-in-Go",
  },
];

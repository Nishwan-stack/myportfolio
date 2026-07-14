// ============================================================
// Central content file — edit everything about the site here.
// ============================================================

export const profile = {
  name: "Nishwan S",
  roles: [
    "Software Developer",
    "AI Enthusiast",
    "Full Stack Developer",
    "Problem Solver",
  ],
  tagline:
    "Computer Science and Engineering student building software and AI systems that hold up under real use.",
  summary:
    "I'm a CSE undergraduate at SNS College of Engineering, working across full-stack development and applied AI. I like taking a project from a blank repo to something people can actually open and use — clean architecture, honest UX, and code I'd be comfortable defending in a review. Product companies interest me because they ship at a scale where small engineering decisions compound.",
  location: "Tirupur, Tamil Nadu, India",
  email: "nishwansridhar12@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/Nishwan-stack",
    linkedin: "https://www.linkedin.com/in/nishwan-s/",
    leetcode: "https://leetcode.com/u/NISHWAN_/",
  },
};

export const education = [
  {
    id: "edu-1",
    degree: "B.E. Computer Science and Engineering",
    institution: "SNS College of Engineering",
    meta: "CGPA: 8.0",
    period: "2024 — 2028",
    detail:
      "Regulations 2023 · Coursework spanning DBMS, Data Communication & Networks, Operating Systems, and core CS theory.",
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "",
    meta: "87%",
    period: "2022 — 2024",
    detail: "Computer Science stream.",
  },
];

export const skillGroups = [
  {
    label: "Programming",
    skills: [
      { name: "Java", level: 80 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "C", level: 75 },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React.js", level: 85 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 76 },
      { name: "REST APIs", level: 82 },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "MongoDB", level: 78 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "npm", level: 80 },
    ],
  },
  {
    label: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms", level: 82 },
      { name: "OOP", level: 85 },
      { name: "DBMS", level: 80 },
      { name: "Operating Systems", level: 75 },
      { name: "Computer Networks", level: 78 },
    ],
  },
];

export const projects = [
  {
    id: "proj-stock",
    title: "Stock Market Dashboard",
    description:
      "A real-time market dashboard for tracking equities, building watchlists, and reading trend data at a glance.",
    features: [
      "Live stock prices",
      "Custom watchlists",
      "Market trend visualizations",
      "Portfolio analytics",
    ],
    tech: ["React", "Node.js", "REST APIs", "Chart.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nishwan-stack/stockpulse",
  },
  {
    id: "proj-job",
    title: "Job Portal",
    description:
      "A two-sided hiring platform connecting candidates with companies, with a dedicated admin layer for oversight.",
    features: [
      "Job listings & search",
      "Candidate applications",
      "Company dashboard",
      "Admin management console",
    ],
    tech: ["React", "Express.js", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nishwan-stack/job_portal",
  },
  {
  id: "rag-chatbot",
  title: "RAG AI ChatBot",

  description:
    "AI chatbot that answers questions from uploaded documents.",

  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS"
  ],

  features: [
    "Document Upload",
    "AI Question Answering",
    "Semantic Search",
    "Chat History"
  ],

  github: "https://github.com/Nishwan-stack/RAG-ChatBot"

},

  {
    id: "proj-netflix",
    title: "Netflix Clone",
    description:
      "A pixel-conscious streaming UI clone focused on authentication flows and a responsive watch experience.",
    features: [
      "Authentication",
      "Watchlist",
      "Search",
      "Fully responsive UI",
    ],
    tech: ["React", "Tailwind CSS", "Firebase"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nishwan-stack/streamvault",
  },
  {
    id: "proj-ai-summarizer",
    title: "AI Document Summarizer",
    description:
      "Upload a PDF and get a structured summary — key points and action items extracted automatically.",
    features: [
      "PDF upload",
      "AI summary generation",
      "Key point extraction",
      "Action item detection",
    ],
    tech: ["Python", "AI/NLP", "Streamlit"],
    liveUrl: "#",
    githubUrl: "https://github.com/Nishwan-stack/Ai_Summarizer",
  },
];

export const experience = [
  {
    id: "exp-1",
    role: "Artificial Intelligence Intern",
    org: "EDUFYI Tech Solutions",
    period: "2026",
    highlights: [
      "Contributed to AI model development for applied use cases",
      "Practical implementation of ML concepts in production-style workflows",
      "Gained exposure to how AI teams operate inside industry",
      "Worked on problem-solving across the model pipeline",
    ],
  },
];

export const certifications = [
  { id: "cert-1", title: "AI Internship Certificate", issuer: "EDUFYI Tech Solutions" },
  { id: "cert-2", title: "NEOVERSE Hackathon Certificate", issuer: "NEOVERSE '26" },
  { id: "cert-3", title: "LUNARA Hackathon Certificate", issuer: "LUNARA '26" },
  { id: "cert-4", title: "CICADA Hackathon Certificate", issuer: "CICADA '25" },
  { id: "cert-5", title: "20+ Online Certifications", issuer: "Various platforms" },
];

export const hackathons = [
  {
    id: "hack-1",
    name: "NEOVERSE '26",
    detail: "Built and pitched a product concept under a fixed-time sprint format.",
    outcome: "Participation & shortlisting experience",
  },
  {
    id: "hack-2",
    name: "LUNARA '26",
    detail: "Collaborated in a cross-functional team to design and demo a working prototype.",
    outcome: "Hands-on rapid-prototyping experience",
  },
  {
    id: "hack-3",
    name: "CICADA '25",
    detail: "First competitive hackathon — focused on scoping a problem fast and shipping a demo.",
    outcome: "Foundational hackathon experience",
  },
];

export const services = [
  {
    title: "Web Development",
    description: "Fast, accessible websites built on modern frameworks and clean markup.",
  },
  {
    title: "Full Stack Development",
    description: "End-to-end products — frontend, backend, and the database layer in between.",
  },
  {
    title: "AI Solutions",
    description: "Applied AI features: summarization, classification, and recommendation systems.",
  },
  {
    title: "API Development",
    description: "REST APIs designed to be predictable, documented, and easy to integrate.",
  },
  {
    title: "Responsive Website Design",
    description: "Interfaces that hold their layout and intent from a phone to a wide monitor.",
  },
];

export const achievements = [
  { label: "Certifications", value: 20, suffix: "+" },
  { label: "Hackathons", value: 3, suffix: "" },
  { label: "Internships", value: 1, suffix: "" },
  { label: "Projects Built", value: 5, suffix: "+" },
];


export const githubUsername = "Nishwan-stack";
export const leetcodeUsername = "NISHWAN_";

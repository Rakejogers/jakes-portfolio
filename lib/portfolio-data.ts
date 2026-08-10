export type PortfolioAsset = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  title: string;
  accolade?: string;
  description: string;
  longDescription: string;
  tech: string[];
  links: PortfolioLink[];
  media: PortfolioAsset[];
};

export type PortfolioExperience = {
  period: string;
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

export type PortfolioSkillGroup = {
  title: string;
  items: string[];
};

export const portfolioData = {
  profile: {
    name: "Jake Rogers",
    headline:
      "Computer science student building useful products across web, AI, and the spaces between.",
    bio: "I build full-stack products, hackathon projects, and practical tools across web, mobile, AI, and data-heavy workflows.",
  },
  contact: {
    email: "jarog2005@gmail.com",
    github: "https://github.com/rakejogers",
    linkedin: "https://linkedin.com/in/jake-rogers-engineer",
    resume: {
      label: "Resume",
      href: "/Resume.pdf",
      downloadName: "Jake_Rogers_Resume.pdf",
    },
  },
  education: {
    school: "University of Kentucky",
    degree: "BS in Computer Science",
    expectedGraduation: "May 2027",
    gpa: "3.98",
    coursework: [
      "AI Certificate",
      "Intro to Generative AI",
      "Data Structures and Algorithms",
      "Discrete Math",
    ],
    activities: [
      "Association of Computing Machinery (ACM)",
      "CatHacks First Place Overall — 2x",
    ],
  },
  skills: [
    {
      title: "Languages",
      items: ["C++", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "MATLAB"],
    },
    {
      title: "Frameworks",
      items: [
        "Next.js",
        "React",
        "React Native",
        "Tailwind CSS",
        "Supabase",
        "Pocketbase",
        "PyTorch",
        "Vapi",
      ],
    },
    {
      title: "Tools",
      items: [
        "Git",
        "Linux",
        "Nginx",
        "Vercel",
        "Splunk",
        "CI/CD",
        "SQLite",
        "Codex",
        "Claude Code",
        "Cursor",
      ],
    },
  ] satisfies PortfolioSkillGroup[],
  experience: [
    {
      period: "Summer 2026",
      role: "Software Engineering Intern",
      company: "Hudl",
      dates: "May 2026 — Present",
      bullets: [
        "Building product experiences inside the Hudl app and related frontends with a cross-functional engineering team.",
        "Contributing to the parent experience, helping families stay connected to athlete activity, teams, and video workflows.",
        "Working across modern frontend surfaces to ship user-facing features in a large-scale sports technology product.",
      ],
      tech: ["Frontend Engineering", "Product Development", "Mobile App", "Web Frontends"],
    },
    {
      period: "Summer 2025",
      role: "Software Engineering Intern",
      company: "SOIDEM Data Technologies",
      dates: "June 2025 — August 2025",
      bullets: [
        "Engineered a full-stack version control system to manage and track changes across 500+ client Splunk dashboard pages.",
        "Developed an 11-page Next.js dashboard adopted as the primary interface for a product used by 5+ enterprise clients.",
        "Helped maintain a legacy Splunk codebase while contributing to its migration to a modern stack.",
      ],
      tech: ["Next.js", "React", "Splunk", "Git", "SQL", "CI/CD"],
    },
    {
      period: "2024 — Present",
      role: "Engineering Prototyping Guide",
      company: "University of Kentucky Innovation Center",
      dates: "Aug 2024 — Present",
      bullets: [
        "Collaborate with 30 peers to run the university's engineering makerspace.",
        "Guide students through the design and prototyping of engineering projects.",
        "Provide hands-on help with 3D printing, laser cutting, CNC machining, and other fabrication techniques.",
      ],
      tech: ["3D Printing", "CNC", "Prototyping"],
    },
    {
      period: "Summer 2024",
      role: "IT Technician",
      company: "Grayson County Board of Education",
      dates: "May 2024 — Aug 2024",
      bullets: [
        "Helped maintain technology across schools throughout the district.",
        "Built practical experience with networking, cybersecurity, and cloud system management.",
        "Responded quickly to service issues and requests from staff across the district.",
      ],
      tech: ["Networking", "Cybersecurity", "IT Support"],
    },
  ] satisfies PortfolioExperience[],
  projects: [
    {
      title: "Nora",
      accolade: "First Place · CatHacks XII",
      description: "An AI voice companion that calls seniors on their phone.",
      longDescription:
        "Nora places gentle scheduled phone calls, captures check-in context, and gives guardians a dashboard for schedules, transcripts, and summaries.",
      tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "Vapi", "Edge Functions"],
      links: [
        { label: "Visit", href: "https://nora-topaz.vercel.app" },
        {
          label: "Devpost",
          href: "https://devpost.com/software/nora-3gdjy6?ref_content=my-projects-tab&ref_feature=my_projects",
        },
      ],
      media: [{ type: "image", src: "/nora-landing.png", alt: "Nora landing page" }],
    },
    {
      title: "Scholar Seats",
      accolade: "Used by 120+ UK students",
      description: "A student-focused ticket exchange platform.",
      longDescription:
        "A university ticket exchange that helps student buyers and sellers connect. Released at the University of Kentucky and used by more than 120 students.",
      tech: ["Next.js", "TypeScript", "Pocketbase", "SQLite", "Linux", "Nginx", "Vercel"],
      links: [
        { label: "Visit", href: "https://scholarseats.com" },
        { label: "GitHub", href: "https://github.com/rakejogers/student-ticket-app" },
      ],
      media: [
        {
          type: "video",
          src: "/scholar-seats-demo.mp4",
          poster: "/scholarseats.png",
          alt: "Scholar Seats product demo",
        },
      ],
    },
    {
      title: "Factify",
      accolade: "First Place · CatHacks XI",
      description: "A Chrome extension for fact checking claims on the web.",
      longDescription:
        "Factify evaluates a highlighted statement or webpage for factual accuracy and bias using Perplexity's Sonar Reasoning API.",
      tech: ["HTML", "CSS", "JavaScript", "Perplexity API", "Chrome Extension API"],
      links: [{ label: "GitHub", href: "https://github.com/ImNateBerry/Factify" }],
      media: [{ type: "image", src: "/factify.png", alt: "Factify browser extension" }],
    },
    {
      title: "Snake Game Neural Network",
      description: "An AI agent that learns to play Snake through deep reinforcement learning.",
      longDescription: "An AI agent that learns to play Snake using deep reinforcement learning.",
      tech: ["Python", "PyTorch"],
      links: [{ label: "GitHub", href: "https://github.com/rakejogers/snake_game_ai" }],
      media: [{ type: "video", src: "/snake-project-demo.mp4", alt: "Snake AI demo" }],
    },
    {
      title: "Portfolio Website",
      description: "An earlier portfolio iteration with motion and interactive effects.",
      longDescription:
        "An earlier portfolio website built with Next.js and Tailwind CSS, featuring smooth scrolling and interactive visual effects.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
      links: [{ label: "GitHub", href: "https://github.com/Rakejogers/portfolio-nextjs" }],
      media: [{ type: "video", src: "/portfolio-demo.mov", alt: "Previous portfolio demo" }],
    },
  ] satisfies PortfolioProject[],
};

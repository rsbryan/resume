import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Steven Bryan",
  initials: "SB",
  location: "San Diego, CA",
  locationLink: "https://www.google.com/maps/place/San+Diego+CA",
  about: "prev @ browserbase",
  summary:
    "Computer Science student at SDSU, graduating May 2027, with a research focus in machine learning. Most recently I built evaluation infrastructure at Browserbase for Google's Computer Use model launch. Right now I'm shipping The Lifting App, an iOS strength tracker with an AI coach, to the App Store.",
  avatarUrl: "https://avatars.githubusercontent.com/rsbryan",
  personalWebsiteUrl: "https://stevenbryanc.vercel.app",
  contact:  {
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rsbryan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/stevenbryan-",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/rstevencs",
        icon: XIcon,
      }
    ],
    email: "sbryancs@gmail.com",
  },
  education: [
    {
      school: "San Diego State University",
      degree:
        "Bachelor of Science in Computer Science",
      major: "Computer Science",
      minor: "Applied Mathematics",
      gpa: "3.5",
      start: "2023",
      end: "2027",
    },
  ],
  certifications: [],
  work: [
    {
      company: "Browserbase",
      link: "https://www.browserbase.com",
      badges: [],
      title: "Software Engineer Intern",
      start: "Aug 2025",
      end: "Nov 2025",
      description:
        "Engineered evaluation infrastructure for Google’s Computer Use Model launch, executing benchmarks against OpenAI and Anthropic models and producing performance data used in launch day marketing materials. Architected an end-to-end task runner using Stagehand and Braintrust to automate browser task execution while capturing comprehensive logs and screenshots across 5,000+ automated test runs. Developed the “Speech to Browser” (SToB) demo with Cartesia, leveraging low-latency voice inference to drive browser actions and showcasing it to strategic partners to validate voice-driven automation use cases. Contributed production code to Stagehand v3, improving API stability and documentation clarity for the open-source community. Scaled the developer community by 28% via technical advocacy on Discord/Slack, providing high-touch support to enterprise customers including engineers at Ramp and Vercel.",
    },
    {
      company: "Digital Innovation Lab",
      link: "https://www.sdsu.edu",
      badges: [],
      title: "Software Engineer",
      start: "Feb 2025",
      end: "Sept 2025",
      description:
        "Delivered production React/Node.js web applications for clients, integrating complex PostgreSQL schemas for data-intensive features. Maintained a 99.9% uptime SLA on AWS infrastructure (EC2, S3, RDS) through load balancing and monitoring configuration. Designed scalable RESTful microservices using Express.js and Auth0, implementing secure role-based access control (RBAC) for client user bases. Optimized the CI/CD deployment workflow using GitHub Actions, reducing build-to-deploy time by 40% and eliminating manual deployment errors.",
    },
    {
      company: "Code Research Lab",
      link: "https://www.sdsu.edu",
      badges: [],
      title: "Lead Researcher",
      start: "May 2025",
      end: "Present",
      description:
        "Engineered a custom Machine Learning training pipeline that cut experiment iteration cycles to roughly a quarter of what they were. Spearheaded technology transfer initiatives, collaborating with early-stage startups to convert research-grade ML prototypes into production-ready APIs.",
    },
  ],
  skills: [
    "Go",
    "Python",
    "Ruby",
    "TypeScript",
    "JavaScript",
    "SQL",
    "C++",
    "React Native",
    "React",
    "Node.js",
    "Next.js",
    "Rails",
    "AWS (EC2, S3, RDS)",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "PyTorch",
    "TensorFlow",
    "Braintrust",
    "OpenAI/Anthropic APIs",
    "RAG"
  ],
  projects: [
    {
      "title": "The Lifting App — AI Strength Coach",
      "techStack": [
        "React Native",
        "TypeScript",
        "Swift",
        "Supabase",
        "Claude API"
      ],
      "description": "Shipped a full-stack iOS training platform to TestFlight: a React Native client, a Postgres backend with row-level security on every table, and a pure domain layer gated by 600+ unit tests in CI. The AI coach runs on Claude tool use through serverless edge functions to draft and revise complete training programs, with validators that repair malformed model output and feed tool errors back for self-correction. Native Swift Live Activities and home-screen widgets sync through App Groups, and an over-the-air pipeline ships JavaScript updates without an App Store release.",
      "link": {
        "label": "theliftingapp.com",
        "href": "https://theliftingapp.com"
      }
    },
    {
      "title": "SToB — Speech to Browser Agent",
      "techStack": [
        "Browserbase",
        "Stagehand",
        "Cartesia",
        "Cerebras",
        "Voice Agent"
      ],
      "description": "Architected a real-time voice agent combining Cartesia (ASR) and Cerebras (LLM) to translate natural language into executable Stagehand browser commands with sub-second latency. Implemented a persistent session manager preserving authentication state to enable complex multi-step workflows across browser reloads (login, navigation, data extraction).",
      "link": {
        "label": "View on GitHub",
        "href": "https://github.com/rsbryan/stob"
      }
    },
    {
      "title": "Multi-OS Startup Infrastructure",
      "techStack": [
        "Linux/BSD",
        "Ansible",
        "Docker",
        "OpenLDAP",
        "Proxmox"
      ],
      "description": "Architected a six-node network across OpenBSD, FreeBSD, Linux, Solaris, and AIX to simulate a scaling startup environment. Established a private certificate authority and an OpenLDAP directory for centralized encrypted authentication, deployed BIND9 DNS, a Sendmail and Dovecot mail server, cross-platform NFS sharing, and a Docker and Nginx web stack, then automated configuration with Ansible and implemented physical-to-virtual disaster recovery on Proxmox."
    },
  ],
  students: [],
} as const;

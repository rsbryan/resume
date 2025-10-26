import {
  ClevertechLogo,
  ParabolLogo,
} from "@/images/logos";
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
  about: "Community Engineering Intern at Browserbase",
  summary:
    "Computer Science student at SDSU with a passion for Machine Learning and Neuroscience, browser automation, and building dev tools. Currently cooking on AI agents and web automation at Browserbase.",
  avatarUrl: "https://avatars.githubusercontent.com/rsbryan",
  personalWebsiteUrl: "https://stevenbryan.vercel.app",
  contact: {
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
      title: "Community Engineering Intern",
      logo: ParabolLogo,
      start: "Aug 2025",
      end: "Current",
      description:
        "Shipped user-facing demos and example automations on Stagehand+Browserbase; authored social promo threads/posts to drive developer adoption. Co-developed a browser-agent evaluator for unreleased LLMs (task success, E2E latency, failure modes); produced executive-ready benchmarks for a Fortune 100 hyperscaler and other Tier-1 AI vendors to guide model selection and go-to-market demos. Built showcase integrations with Cerebras and Cartesia for company partner demos to users; owned integration and end-to-end debugging.",
    },
    {
      company: "Digital Innovation Lab",
      link: "https://www.sdsu.edu",
      badges: [],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "Feb 2025",
      end: "Current",
      description:
        "Built multiple production client web apps using React, Node.js, PostgreSQL. Designed RESTful micro-services in Express.js and integrated Auth0, supporting role-based access for 10k+ users. Reduced deployment friction by ~40% with CI/CD pipeline using GitHub Actions. Managed AWS infrastructure (EC2, S3, RDS) for client applications, maintaining 99.9% uptime.",
    },
    {
      company: "Code Research Lab",
      link: "https://www.sdsu.edu",
      badges: [],
      title: "Lead Researcher",
      logo: ClevertechLogo,
      start: "May 2025",
      end: "Current",
      description:
        "Developed Machine Learning training pipeline enabling 3× faster model experimentation for internal tooling. Drove technology transfer from research to production, collaborating with Machine Learning focused startups to productionize technical tools. Collaborating with 2+ startups to convert research prototypes into production-ready ML APIs.",
    },
  ],
  skills: [
    "Python",
    "C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "Go",
    "C#",
    "Node.js",
    "Linux/Unix",
    "Kubernetes",
    "AWS",
    "Docker",
    "PyTorch",
    "TensorFlow",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "PostgreSQL",
    "React",
    "Next.js",
    "Tailwind",
    "Stagehand",
    "Browserbase",
    "Machine Learning",
    "REST APIs",
    "CI/CD",
    "Git",
    "Express.js",
    "Auth0",
    "Agile/Scrum"
  ],
  projects: [
    {
      "title": "SToB — Speech-to-Browser (Partner Demo)",
      "techStack": [
        "Browserbase",
        "Stagehand",
        "Cartesia",
        "Cerebras",
        "JavaScript",
        "Voice Recognition",
        "LLM"
      ],
      "description": "Voice-controlled browser agent that transcribes speech, interprets commands via LLM, and executes browser actions using Stagehand and Browserbase.",
      "link": {
        "label": "View on GitHub",
        "href": "https://github.com/rsbryan/stob"
      }
    },
    {
      "title": "ModelScript — Machine Learning DSL + Compiler",
      "techStack": [
        "Python",
        "TensorFlow",
        "NumPy",
        "Compiler Design",
        "DSL",
        "Machine Learning",
        "NLP"
      ],
      "description": "Domain-specific language and compiler that automates neural network prototyping from declarative .ms files to TensorFlow/Keras with built-in REPL CLI.",
      "link": {
        "label": "View on GitHub",
        "href": "https://github.com/rsbryan/ModelScript"
      }
    },
  ],
  students: [],
} as const;

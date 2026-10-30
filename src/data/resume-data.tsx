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
  about: "Software engineer · Previously at Browserbase",
  summary:
    "Computer science student and machine learning researcher at SDSU, graduating May 2027. Previously built AI model evaluation tools at Browserbase; now building The Lifting App, an iOS workout tracker with an AI coach.",
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
      description: [
        "Built an automated test runner comparing Google's Computer Use model with OpenAI and Anthropic across 5,000+ runs; results appeared in Google's launch materials.",
        "Built a voice-controlled browser demo with Cartesia and presented it to partners.",
        "Contributed code and documentation to Stagehand v3, improving API reliability for its open-source browser automation tools.",
        "Helped grow the developer community by 28% and supported engineers at Ramp and Vercel.",
      ],
    },
    {
      company: "Digital Innovation Lab",
      link: "https://www.sdsu.edu",
      badges: [],
      title: "Software Engineer",
      start: "Feb 2025",
      end: "Sept 2025",
      description: [
        "Built client web apps with React, Node.js, and PostgreSQL, including secure user access.",
        "Maintained 99.9% uptime on AWS through monitoring and load balancing.",
        "Automated deployments with GitHub Actions, cutting build and deployment time by 40% and eliminating manual deployment errors.",
      ],
    },
    {
      company: "Code Research Lab",
      link: "https://www.sdsu.edu",
      badges: [],
      title: "Lead Researcher",
      start: "May 2025",
      end: "Present",
      description: [
        "Built training tools that cut the time between machine learning experiments by about 75%.",
        "Worked with startups to turn machine learning research prototypes into production APIs.",
      ],
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
      "description": [
        "Built an iOS workout tracker with React Native and released it to TestFlight for beta testing.",
        "Built an AI coach with Claude that creates and updates training plans.",
        "Tested core app logic with 600+ unit tests.",
        "Added live workout updates on the lock screen and home-screen widgets."
      ],
      "link": {
        "label": "theliftingapp.com",
        "href": "https://theliftingapp.com"
      }
    },
    {
      "title": "SToB — Speech to Browser",
      "techStack": [
        "Browserbase",
        "Stagehand",
        "Cartesia",
        "Cerebras",
        "Voice Agent"
      ],
      "description": [
        "Built a voice-controlled browser using Stagehand and Cartesia, translating spoken instructions into actions in under a second.",
        "Kept users signed in across page reloads so it could complete tasks with multiple steps."
      ],
      "link": {
        "label": "View on GitHub",
        "href": "https://github.com/rsbryan/stob"
      }
    },
    {
      "title": "Startup Server Network",
      "techStack": [
        "Linux/BSD",
        "Ansible",
        "Docker",
        "OpenLDAP",
        "Proxmox"
      ],
      "description": [
        "Built a six-server network across five operating systems to simulate a growing startup.",
        "Set up shared sign-in, email, file sharing, and web hosting.",
        "Automated server setup with Ansible and added disaster recovery with Proxmox."
      ]
    },
  ],
  students: [],
} as const;

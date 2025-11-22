import { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
  name: "Tilak Kadlaskar",
  title: "Senior Software Engineer",
  tagline: "Building scalable, user-centric digital experiences with modern web technologies.",
  location: "India",
  email: "tilak.kadlaskar@example.com", // Placeholder
  avatarUrl: "https://picsum.photos/400/400", // Placeholder for profile pic
  about: "I am a passionate Software Engineer with extensive experience in full-stack development. My expertise lies in building robust, scalable web applications using React, Node.js, and Cloud technologies. I thrive in collaborative environments and enjoy solving complex problems through clean, efficient code. I am dedicated to continuous learning and staying updated with the latest industry trends.",
  socials: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/tilakkadlaskar/",
      icon: "Linkedin"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com", // Update with actual URL
      icon: "Instagram"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/",
      icon: "Twitter"
    },
    {
      platform: "Facebook",
      url: "https://facebook.com", // Update with actual URL
      icon: "Facebook"
    },
    {
      platform: "GitHub",
      url: "https://github.com/",
      icon: "Github"
    },
    {
      platform: "Email",
      url: "mailto:tilak.kadlaskar@example.com",
      icon: "Mail"
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior Software Engineer",
      company: "Tech Innovations Corp",
      period: "2021 - Present",
      description: [
        "Lead a team of 5 developers in rebuilding the core customer dashboard, improving load times by 40%.",
        "Architected microservices using Node.js and AWS Lambda to handle high-concurrency traffic.",
        "Implemented CI/CD pipelines reducing deployment time by 60%."
      ],
      technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker"]
    },
    {
      id: "exp-2",
      role: "Software Engineer",
      company: "Digital Solutions Ltd",
      period: "2018 - 2021",
      description: [
        "Developed responsive front-end interfaces using React and Redux.",
        "Collaborated with UX designers to implement pixel-perfect designs.",
        "Optimized database queries in PostgreSQL, reducing latency by 25%."
      ],
      technologies: ["React", "Redux", "PostgreSQL", "Express.js"]
    },
    {
      id: "exp-3",
      role: "Junior Developer",
      company: "StartUp Inc",
      period: "2016 - 2018",
      description: [
        "Assisted in the development of the company's flagship mobile app using React Native.",
        "Maintained legacy codebases and fixed critical bugs.",
        "Participated in agile ceremonies and code reviews."
      ],
      technologies: ["JavaScript", "React Native", "HTML/CSS"]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Engineering in Computer Science",
      school: "Visvesvaraya Technological University",
      period: "2012 - 2016",
      description: "Focused on Data Structures, Algorithms, and Database Management Systems. Graduated with First Class with Distinction."
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued Jan 2023",
      url: "#"
    },
    {
      id: "cert-2",
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta",
      date: "Issued Mar 2022",
      url: "#"
    },
    {
      id: "cert-3",
      title: "Full Stack Web Development",
      issuer: "Udacity",
      date: "Issued Dec 2018",
      url: "#"
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "E-Commerce Analytics Dashboard",
      description: "A comprehensive dashboard for tracking real-time sales data, user behavior, and inventory levels. Features interactive charts and downloadable reports.",
      imageUrl: "https://picsum.photos/600/400?random=1",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "proj-2",
      title: "Task Management System",
      description: "A collaborative task management tool with real-time updates, drag-and-drop interface, and team chat functionality.",
      imageUrl: "https://picsum.photos/600/400?random=2",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "proj-3",
      title: "AI-Powered Content Generator",
      description: "An application leveraging generative AI to help marketers create social media posts and blog outlines instantly.",
      imageUrl: "https://picsum.photos/600/400?random=3",
      technologies: ["React", "Gemini API", "Express", "OAuth"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML5/CSS3"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      category: "DevOps & Tools",
      items: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Jest"]
    }
  ]
};
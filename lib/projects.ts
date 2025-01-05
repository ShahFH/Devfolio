export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "LinkedIn Post Generator",
    description: "An AI-powered tool to generate engaging LinkedIn posts.",
    technologies: ["Next.js", "Gemmini API", "Tailwind CSS"],
    liveUrl: "https://yx7x46cv1oxwlldn.vercel.app/",
    githubUrl: "https://github.com/ShahFH"
  },
  {
    id: "2",
    title: "BGStrip",
    description: "A tool for removing backgrounds from images.",
    technologies: ["React", "Image Processing", "API Integration"],
    liveUrl: "https://bgstrip.netlify.app/",
    githubUrl: "https://github.com/ShahFH/bgstrip"
  },
  {
    id: "3",
    title: "Tom Website",
    description: "A personal website for Tom, showcasing portfolio and services.",
    technologies: ["React", "Tailwind", "Framer-motion"],
    liveUrl: "https://tom-adrien.netlify.app/",
    githubUrl: "https://github.com/ShahFH/Tom-Website"
  },
  {
    id: "4",
    title: "Social Media Profile",
    description: "A responsive social media profile page design.",
    technologies: ["React", "Next.js", "Responsive Design", "Framer-motion"],
    liveUrl: "https://github.com/ShahFH/Social-M-Profile",
    githubUrl: "https://github.com/ShahFH/Social-M-Profile"
  },
  {
    id: "5",
    title: "Code Snaping tool",
    description: "Nice Coding Snaps Tool",
    technologies: ["React", "Typescript", "tailwind"],
    liveUrl: "https://github.com/ShahFH/Code-Snap.io",
    githubUrl: "https://github.com/ShahFH/Code-Snap.io"
  },
  {
    id: "6",
    title: "Blog website",
    description: "personal blog website",
    technologies: ["React", "Typescript", "tailwind", "astro"],
    liveUrl: "https://shahblogg.netlify.app/",
    githubUrl: "https://github.com/ShahFH/final-blogge"
  },
];


export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    id: "1",
    company: "IAP (Intellectual Application & Products)",
    position: "Software Developer",
    duration: "Jun 2023 - May 2024 · 1 yr",
    location: "Kabul Province, Afghanistan · Hybrid",
    description: "Worked as a full-time Software Developer, focusing on problem-solving and utilizing various technologies.",
    skills: ["Problem Solving", "Node.js", "Software Development"]
  },
  {
    id: "2",
    company: "Prifina - Liberty. Equality. Data.",
    position: "Frontend Developer Intern",
    duration: "May 2023 - Aug 2023 · 4 mos",
    location: "United States · Remote",
    description: "Led and worked closely with a talented team of developers, UI/UX designers to create immersive and intuitive user experiences.",
    skills: ["React.js", "JavaScript", "Frontend Development"]
  },
  {
    id: "3",
    company: "Sports.Excitement",
    position: "Software Engineer - Full Stack Intern",
    duration: "Feb 2023 - Jul 2023 · 6 mos",
    location: "United States · Remote",
    description: "As a Full Stack Developer Intern, I learned and worked on both the front-end and back-end parts of web applications, websites, and software programs. Under the guidance of senior developers, I gained valuable experience in full-stack development.",
    skills: ["Node.js", "React.js", "Full Stack Development"]
  },
  {
    id: "4",
    company: "Freelance",
    position: "Full Stack Developer",
    duration: "Jan 2022 - Present",
    location: "Remote",
    description: "Developing full-stack web applications for various clients using React, Node.js, and MongoDB. Implementing responsive designs and ensuring cross-browser compatibility.",
    skills: ["React", "Node.js", "MongoDB", "Responsive Design"]
  },
];


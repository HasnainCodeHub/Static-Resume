// data.ts
export const profileData = {
  name: "Hasnain Ali",
  title: "Web Developer and AI Engineer",
  photo: "/images/profile.jpg", // Path to your profile image
  summary:
    "Passionate web developer with a focus on client-driven designs and functionality. Enthusiast of AI technologies, with experience in developing dynamic web applications and AI-driven solutions.",
  contact: {
    email: "azeemhusnain048@gmail.com",
    linkedin: "https://www.linkedin.com/in/hasnain-ali-developer/",
    github: "https://github.com/HasnainCodeHub",
    phone: "03702537927",
  },
  courses: [
    {
      name: "Certified Agentic and Robotic AI Engineering Course",
      institution: "PIAIC",
      year: "2024",
      description:
        "Currently enrolled in the Certified Agentic and Robotic AI Engineering Course at PIAIC, focusing on developing expertise in AI-driven solutions, robotics, and automation.",
    },
    {
      name: "Learning Agentic AI and Custom GPTs",
      institution: "Self-paced Learning",
      year: "2024",
      description:
        "Actively learning about Agentic AI and developing custom GPTs to enhance AI-based applications and integrations.",
    },
  ],
};

export const educationData = [
  {
    degree: "Diploma In Associate Engineering (Mechanical)",
    school: "Govt Mono Technical Institute",
    year: "2022 - 2024",
    location: "Karachi, Pakistan",
  },
  // Including the courses
  ...profileData.courses.map(course => ({
    degree: course.name,
    school: course.institution,
    year: course.year,
    location: course.description, // Using description to include extra course details
  })),
];

export const experienceData = [
  {
    role: "Frontend Developer",
    company: "Freelance Projects",
    duration: "2023 - Present",
    location: "Karachi, Pakistan",
    description:
      "Developed interactive UI components and web applications, working with React and Next.js to deliver dynamic user experiences.",
  },
];

export const skillsData = [
  "JavaScript",
  "Tailwind CSS",
  "Shadcn",
  "React",
  "Node.js",
  "Next.js",
  "TypeScript",
  "CSS",
  "HTML",
  "Git",
  "Python",
  "Langchain",
  "Langgraph",
  "GraphQL",
  "Docker",
  "AI Engineering",
  "Custom GPTs",
  "Agentic AI",
];

export const projectsData = [
  {
    name: "Portfolio",
    description: "Built a Personal Portfolio To Showcase My Whole Projects",
    tech: "Next.js, React, Typescript, Tailwind CSS",
    link: "https://my-portfolio-next-js-7olh.vercel.app/",
  },
  {
    name: "E-commerce Store",
    description:
      "Developed a Dynamic E-Commerce Store With Payment Integration And Manage All Backend On Sanity, responsive design, and a custom content management system (CMS) to publish Products.",
    tech: "Next.js, Tailwind CSS, Node Mailer, Sanity",
    link: "https://e-commerce-nine-taupe-22.vercel.app/",
  },
];

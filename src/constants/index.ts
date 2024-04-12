import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project2.jpeg";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = ``;

export const ABOUT_TEXT = `I am a Project Lead in an Outsourcing company and have worked with a variety of technologies and clients.
This helps me adapt to challenging environments. With my efforts, I have achieved several awards at my current company.
Outside of leading and coding, I continuously strive to learn new technologies and skills to improve myself and achieve my long-term goals.`;

export const EXPERIENCES = [
  {
    year: "April 2016 - Present",
    role: "Project Lead",
    company: "Quantic",
    descriptions:[
      'Work with a US client and a Japan client',
      'Write and analyze user stories, features',
      'Assign tasks, code, review code and test',
      'Communicate and report to clients',
      'Do production deployment (the US client)'
    ],
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Typescript", "Javascript", "Loopback", "Angular 2", "Ionic 3", "Electron", "SCSS", "MongoDB", "AWS", "JIRA", "GitHub"],
  },
  {
    year: "2011 - 2016",
    role: "Senior Developer",
    company: "Quantic",
    descriptions:[
      'Work with Japan clients mostly',
      'Code and test',
      'Report to project manager',
    ],
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Java", "Javascript", "Spring", "SAStruts", "Bootstrap", "jQuery", "MySQL"],
  },
  
];

export const PROJECTS = [
  {
    title: "InsightPro",
    url:'javascript:void(0);',
    image: project1,
    description:
      "InsightPro is developed specifically to manage all post-sales service operations in window/door providers. Able to manage complex processes with ease, leveraging the power of mobile forms and real-time data to help you be efficient and proactive. Core modules include Customer Service Center, Notification/Reminder System, Supervisor/Executive View, Field Service (mobile) and Reports.",
    technologies: ["Typescript", "Javascript", "Loopback", "Angular 2", "Ionic 3", "Electron", "SCSS", "MongoDB", "AWS", "JIRA", "GitHub"],
  },
  {
    title: "OMISE NET",
    url:'javascript:void(0);',
    image: project2,
    description:
      "A web application to manage all operations in convenience stores. Able to manage complex protocols such as inventory and stock management, category and commodity management, price management, daily sales, payment, invoices, reports, ...",
    technologies: ["Asp.Net", "WebMethod Webservice", "MySQL", "jQuery", "HTML", "CSS", "GitHub"],
  },
  {
    title: "Portfolio Website",
    url:'#',
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Typescript", "React", "TailwindCSS", "Framer Motion", "Vite", "Netlify"],
  },
  {
    title: "Landing Page",
    url:'https://gym-react-ts-6qb.pages.dev/',
    image: project4,
    description:
      "A landing page for learning purpose only.",
    technologies: ["Typescript", "React", "TailwindCSS", "Framer Motion", "Vite", "Cloudfare"],
  },
];

export const CONTACT = {
  address: "68/69/18/8M Tran Thi Co Street, District 12, HCM City ",
  phoneNo: "+84 0979 454 238 ",
  email: "vuonglg@gmail.com",
};

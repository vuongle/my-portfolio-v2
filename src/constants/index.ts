import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project2.jpeg";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import projectBlog from "../assets/projects/blog_go_react.png";
import projectFlutter from "../assets/projects/Flutter.png";
import projectJenkins from "../assets/projects/jenkins.png";

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
    title: "Personal Portfolio Website",
    url:'https://vuongle-portfolio.netlify.app/',
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
      `A landing page for learning purpose only. I have learned how to build a react app using: Typescript, React, TailwindCSS, Framer Motion, Vite. And how to deploy it on Cloudfare.
      A part from this, I have also researched React and React Native by making hands-on projects. Please take a look at my Github for more details.`,
    technologies: ["Typescript", "React", "TailwindCSS", "Framer Motion", "Vite", "Cloudfare"],
  },
  {
    title: "Blog App with Go and React",
    url:'https://github.com/vuongle/Learn_Go',
    image: projectBlog,
    description:
      "I have learned how to build a blog app with Go and React. A part from this, I have also researched Go by making hands-on projects. Please take a look at my Github for more details.",
    technologies: ["Go", "React", "TailwindCSS", "MySQL"],
  },
  {
    title: "Flutter Learning Projects",
    url:'https://github.com/vuongle/Learn_Flutter',
    image: projectFlutter,
    description:
      "I have spent time to research Flutter by making hands-on projects. Please take a look at my Github for more details.",
    technologies: ["Flutter", "Payment Integration", "ChatGPT Intergration", "Map Intergration", "Google/Apple Authentication Intergration", "Clean Architecture/MVVM Architecture"],
  },
  {
    title: "Jenkins CI/CD",
    url:'https://github.com/vuongle/jenkins-docker-golang',
    image: projectJenkins,
    description:
      "I have spent time to research Jenkins by making hands-on projects. Please take a look at my Github for more details.",
    technologies: ["Jenkins Pipeline", "Github Webbooks", "Sonar Cloud", "Docker", "Go"],
  },
];

export const CONTACT = {
  address: "68/69/18/8M Tran Thi Co Street, District 12, HCM City ",
  phoneNo: "+84 0979 454 238 ",
  email: "vuonglg@gmail.com",
};

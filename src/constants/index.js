import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpeg";

export const HERO_CONTENT = `Final-year Information & Technology student at L.D. College of Engineering with hands-on experience in full-stack development using React.js, Node.js, Express.js, MongoDB, and MySQL. Built 4 projects and solved 400+ DSA problems on LeetCode and GFG.`;

export const ABOUT_TEXT = `I am a final-year Information & Technology student at L.D. College of Engineering with strong skills in full-stack web development and computer science fundamentals.

I have built 4  projects using HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and MySQL. I have also solved over 400+ Data Structures and Algorithms problems on LeetCode and GeeksforGeeks, showcasing my ability to write efficient and optimized code.

My academic strengths include core CS subjects such as Object-Oriented Programming (OOP), Operating Systems, Computer Networks, and Database Management Systems. I am focused, adaptable, and committed to delivering clean and scalable software solutions.`;

export const EXPERIENCES = [
  {
    year: "july 2025 - july 2025",
    role: "Virtual Community Support Intern",
    company: "Tatvasoft",
    description: `Completed a 15-day virtual internship focused on building a community engagement platform using Angular, .NET Core, and PostgreSQL. Implemented full-stack features including user authentication, role-based access, and CRUD operations. Gained hands-on experience in deploying applications and working with AWS cloud services`,
    technologies: [
      "PostgreSQL",
      "Angular",
      ".NET Core",
      "LINQ",
      "REST API",
      "AWS",
      "Swagger",
    ],
  },
];

export const PROJECTS = [
  {
    title: "CPU-scheduling",
    image: project1,
    description:
      "A web based tool to generate gantt chart and calculate TAT (turnaround time) and WAT (waiting time) based on various scheduling algorithms.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://abhaykarena11.github.io/CPU-scheduling",
  },
  {
    title: "ChatApp",
    image: project2,
    description:
      "A real-time chat web app that allows multiple users to communicate seamlessly. It supports instant messaging with smooth and interactive user experience.",
    technologies: ["HTML", "CSS", "JS", "MERN", "WebSocket"],
    link: "https://chatting-1-w2or.onrender.com/",
  },
  {
    title: "Elastic Collision Simulator",
    image: project3,
    description:
      "Simulates and animates real-time elastic collisions based on user-defined mass, velocity, and distance.",
    technologies: ["HTML", "Tailwind", "React"],
    link: "https://abhaykarena11.github.io/Collision-Simulator/",
  },
];

export const CONTACT = {
  address: "gangotri society ,University Road , Ahmedabad",
  phoneNo: "+91 9825316686",
  email: "karenaabhay8@gmail.com",
};

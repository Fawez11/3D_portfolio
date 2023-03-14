import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  vue,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  RBK,
  MUN,
  Youtube,
  MySQL,
  next,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Vue JS',
    icon: vue,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Next JS',
    icon: next,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'MySQL',
    icon: MySQL,
  },
];

const experiences = [
  {
    title: 'Instructor',
    company_name: 'RBK Tunisia',
    icon: RBK,
    iconBg: '#383E56',
    date: 'November 2022',
    points: [
      ' I am responsible for teaching students the technical skills and knowledge needed for a career in the IT field, such as JavaScript, web development, and database management.',
      " I am also responsible for creating and updating course materials, delivering lectures and hands-on training, providing feedback and support to students, and assessing students' progress and understanding of the material.",
    ],
  },
  
];



const projects = [
  {
    name: 'Municipality-TN',
    description:
      'Our mobile app provides a user-friendly platform for citizens to share their concerns and ideas within their municipality. With just a few taps, users can submit feedback on various topics such as public services, transportation, public safety, and more. The app also allows users to engage in discussions with other members of the community and local government officials, fostering transparency, accountability, and collaboration.',
    tags: [
      {
        name: 'react native',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: MUN,
    source_code_link: 'https://github.com/Fawez11/Municipality-TN',
  },

  {
    name: 'Youtube Clone',
    description:
   "My YouTube clone is a React-based web app that uses RapidAPI and Material UI. It allows users to search for and watch YouTube videos within the site, using the YouTube Data API to fetch and display data. The sleek, responsive design makes it easy to use on any device. Through this project, I gained experience with complex APIs and modern front-end development techniques, demonstrating my ability to create high-quality web applications." ,
    tags: [
      {
        name: 'React JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'RapidAPI',
        color: 'green-text-gradient',
      },
      {
        name: 'Material UI',
        color: 'pink-text-gradient',
      },
    ],
    image: Youtube,
    source_code_link: 'https://github.com/Fawez11/Youtube-clone',
  },
  
];

export { services, technologies, experiences, projects };

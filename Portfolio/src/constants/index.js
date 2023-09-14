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
  redux,
  tailwind,
  c,
  bootstrap,
  nodejs,
  mongodb,
  git,
  aithon,
  freelancer,
  shopify,
  sas,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Develepor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "C",
    icon: c,
  },
];

const experiences = [
  {
    title: "Aithon 2023 Winner",
    company_name: "College of engineering Karunagapally",
    icon: aithon,
    iconBg: "#383E56",
    date: "Novermber 25-27",
    points: [
      "An Artifical Intelligence based hackathon Conducted at the College of Engineering Karunagappaly.",
      "Developing an Artificial intelligence within 24 hours that is capable of recognising human emotions based on photos uploaded .",
      "Implementing different tools and languages like tensorflow pandas and teachable machine to develop the base and providing separate testing and training data to get working AI."
    ],
  },
  {
    title: "Freelancer",
    company_name: "local",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "December 2020 - March 2022",
    points: [
      "Developing and maintaining web applications using Html CSS and other related technologies.",
      "Collaborating with local teams  and small business owners creating high demand for their  products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
     
    ],
  },
  {
    title: "Web Developer",
    company_name: "GBHSS Cherukunnu",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2018- Februaury 2020",
    points: [
      "Developing and maintaining web applications of my School to promote publicity and increase demand of our School.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Desigining Champion",
    company_name: "Shashthrolsavam",
    icon: sas,
    iconBg: "#E6DEDD",
    date: "November 10 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Adith proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Adith does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Adith optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tindog",
    description:
      "Web-based platform that frees your dog from lonliness and able to meet with other dogs on the internet through Social media  developed based on pure Sarcasm.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://adith000.github.io/TINDOG/",
  },
  {
    name: "Blog Site",
    description:
      " Feeling to write a blog about your day or an valuable experience but dont know where to post it?. Well Dont worry WERE here! An online platform to upload your blogs and experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "EJS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
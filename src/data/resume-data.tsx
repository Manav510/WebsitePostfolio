
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Manav Jain",
  initials: "MJ",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "I'm a recent graduate from the Dhirubhai Ambani Institute of Information and Communication Technology, with robust technical skills and practical experience in React and web development. Currently, as a Founding Engineer at Toast Studios, I lead projects that showcase my expertise in React and Next.js. I developed a high-performance Gin Rummy game using React Native for over 1,000 concurrent users, optimized a company website for dynamic content with a 40% faster load time, and implemented real-time gaming features using Socket.IO for seamless gameplay. Additionally, I created a responsive client dashboard with React, enabling active users to manage accounts and view analytics in real time. At Amazon, I further honed my web development skills, leading a UI migration from AngularJS to ReactJS, which improved performance by 35% and decreased technical debt. I also introduced automated testing to increase product reliability and efficiency.",
  
  personalWebsiteUrl: "", // Add if you have a personal website
  contact: {
    email: "manavjainimp@gmail.com",
    tel: "+91 7008443133",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manavjain510/",
        icon: LinkedInIcon,
      },
      {
        name: "Github",
        url: "https://github.com/Manav510",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "Dhirubhai Ambani Institute of Information and Communication Technology",
      degree: "Bachelor of Technology in Information and Communication Technology",
      start: "August 2019",
      end: "August 2023",
      // logo: DAIICTLogo,
    },
  ],
  work: [
    {
      company: "Toast Studios",
      link: "", // Add company website if available
      badges: ["Remote"],
      title: "Founding Engineer",
      // logo: ToastStudiosLogo,
      start: "May 2024",
      end: null,
      description:
        "Led development for multiple React Native projects and improved web performance.",
      responsibilities: [
        "Developed a mobile app for a Gin Rummy game in React Native with 1000+ concurrent users, ensuring webview compatibility across platforms.",
        "Created the official company website using React and Next.js, optimizing load time by 40%.",
        "Implemented real-time features for Gin Rummy using Socket.IO, managing game data with sub-second latency for 500+ players.",
        "Designed a React-based client dashboard for 100+ users to manage accounts and view analytics.",
        "Integrated Sentry for error tracking, reducing debugging time by 30%.",
        "Developed a Blackjack game using React and Pixi.js, increasing user engagement by 25% through fluid animations and an intuitive interface."
      ],
    },
    {
      company: "Svabag Labs",
      link: "", // Add company website if available
      badges: ["Remote"],
      title: "Frontend Engineer",
      // logo: SvabagLabsLogo,
      start: "October 2023",
      end: "February 2024",
      description:
        "Led frontend development for customer management tools and mobile app solutions.",
      responsibilities: [
        "Designed and implemented a customer dashboard using ChartsJS and Tables for detailed data visualization.",
        "Built an authorization portal with Appwrite for secure user data storage, including a cookie management system for data retention and URL-based filter sharing.",
        "Led frontend development in a team of three, gathering user feedback to iterate on design and user experience.",
        "Developed a mobile app using Flutter from scratch, integrating OAuth and Syncfusion, achieving high user satisfaction."
      ],
    },
    {
      company: "Amazon JWO Store",
      link: "", // Add company website if available
      badges: [],
      title: "SDET Intern",
      // logo: AmazonJWOStoreLogo,
      start: "January 2023",
      end: "July 2023",
      description:
        "Assisted in UI and feature development, focusing on optimization and automated testing.",
      responsibilities: [
        "Migrated a user-facing UI from AngularJS to ReactJS, enhancing performance by 35% and reducing technical debt by 20%.",
        "Implemented automated testing with the CDK library, decreasing manual testing efforts by 50%.",
        "Developed four new client-facing features, resulting in $2000 savings per use and increasing engagement by 15%."
      ],
    },
  ],
  skills: [
    "JavaScript",
    "ReactJS",
    "CSS",
    "Redux",
    "NextJS",
    "React Native",
    "Java",
    "C",
    "C++",
    "HTML",
    "CSS",
    "Dart",
    "Flutter",
    "AngularJS",
    "Selenium",
    
    "Pixi JS",
    "AWS",
    "DBMS (MongoDB, SQL)"
  ],
} as const;

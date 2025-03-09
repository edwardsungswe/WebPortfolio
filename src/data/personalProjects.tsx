import shell from "../assets/images/shell.jpeg";
import blockchain from "../assets/images/blockchain.jpeg";
import loadbalancer from "../assets/images/loadbalancer.jpeg";
import bulletin from "../assets/images/bulletin.jpeg";
import volunteerone from "../assets/images/volunteerone.jpeg";
import pregtracker from "../assets/images/pregtracker.jpeg";
import headshot from "../assets/images/headshot.png";
let personalProjects = {
  project: [
    {
      expData: {
        title: "BlockMo",
        details: [
          "Cryptocurrency web application which allows users to conduct transactions and mine new currency. Utilizes hashing algorithm designed with encryption best practices.",
          "Developed user authentication using 2-step email verification and auto-rotating session tokens.",
        ],
        image: blockchain,
        githublnk: "https://github.com/edwardsungswe/BlockMo",
      },
    },
    {
      expData: {
        title: "Load Balancer",
        details: [
          "Load balances which uses a round-robin algoritm to send requests into a set of backend services and support retries too. Performs active cleaning and passive recovery for unhealthy backends",
        ],
        image: loadbalancer,
        githublnk: "https://github.com/edwardsungswe/Load-Balancer",
      },
    },
    {
      expData: {
        title: "Bulletin",
        details: [
          "Social media application project using HTML, CSS, JavaScript, NodeJS, ExpressJS, ReactJS, GraphQL, MongoDB, and Apollo",
        ],
        image: bulletin,
        githublnk: "https://github.com/ry-nl/Bulletin",
      },
    },
    {
      expData: {
        title: "VolunteerOne",
        details: [
          "A peer-based mobile app that aims to connect volunteers to their communities through posted opportunities and events. Its purpose is to increase community engagement, emphasize input from volunteers on their skills, interests, and experience to match suitable opportunities and create more impactful contributions",
        ],
        image: volunteerone,
        githublnk:
          "https://github.com/VolunteerOne/volunteer-one-app?tab=readme-ov-file",
      },
    },
    {
      expData: {
        title: "Pregnancy Tracker",
        details: [
          "A comprehensive pregnancy tracking app designed to assist expectant mothers, healthcare providers, and system administrators in managing and tracking essential information throughout the pregnancy journey. The app features three main user portals—Patient, Doctor, and System Admin—each providing tailored functionalities for streamlined management",
        ],
        image: pregtracker,
        githublnk: "https://github.com/carmen-lee/pregnancy-tracker",
      },
    },
    {
      expData: {
        title: "Website Portfolio App",
        details: ["Website portfolio app for Edward Sung"],
        image: headshot,
        githublnk: "https://github.com/edwardsungswe/WebPortfolio",
      },
    },
    {
      expData: {
        title: "Shell in Go",
        details: ["Simple Shell for Mac OS built in Go"],
        image: shell,
        githublnk: "https://github.com/edwardsungswe/Shell-in-Go",
      },
    },
  ],
};

export default personalProjects;

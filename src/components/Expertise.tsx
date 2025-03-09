import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  ".NET",
  "Node.js",
  "Express",
  "Django",
  "Flask",
  "Python",
  "C#",
  "SQL",
  "AWS",
  "Docker",
  "Git",
];

const labelsSecond = [
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQL Query Optimizationg",
  "Database Indexing",
];

const labelsThird = [
  "Docker",
  "AWS",
  "Git",
  "Github Actions",
  "Postman",
  "Jupyter",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              Experienced in building robust web applications with a strong
              focus on both front-end and back-end development. I specialize in
              creating scalable solutions using modern technologies.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Database Optimization & Performance Engineering</h3>
            <p>
              Skilled in optimizing databases to enhance performance, focusing
              on query optimization, indexing, and reducing latency for
              high-traffic systems.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Proficient in implementing CI/CD pipelines, automating
              deployments, and ensuring smooth application rollouts to support
              continuous integration and scalability.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

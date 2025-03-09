import React from "react";
import personalProjects from "../data/personalProjects";
import "../assets/styles/Project.scss";
import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {personalProjects.project.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.expData.title}
            image={project.expData.image}
            details={project.expData.details.join(", ")}
            githublnk={project.expData.githublnk}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;

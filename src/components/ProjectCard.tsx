import React from "react";
import "../assets/styles/Project.scss";

// ProjectCard component accepts props: title, image, and description
interface ProjectCardProps {
  title: string;
  image: any;
  details: string;
  githublnk: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  details,
  githublnk,
}) => {
  return (
    <div className="project">
      <a href={githublnk} target="_blank" rel="noreferrer">
        <img
          src={image}
          className="zoom"
          alt="thumbnail"
          style={{ width: "400px", height: "400px", objectFit: "cover" }}
        />
      </a>
      <a href={githublnk} target="_blank" rel="noreferrer">
        <h2>{title}</h2>
      </a>
      <p>{details}</p>
    </div>
  );
};

export default ProjectCard;

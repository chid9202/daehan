import React from "react";
import { ProjectCardWrapper, ProjectTextWrapper } from "./style";

interface Props {
  projectImage: string;
  projectTitle?: string;
  projectDesc?: string;
}

const ProjectCard = (props: Props) => {
  return (
    <ProjectCardWrapper>
      <img src={props.projectImage} />
      <ProjectTextWrapper>
        <p className="title">{props.projectTitle}</p>
        <p className="desc">{props.projectDesc}</p>
      </ProjectTextWrapper>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;

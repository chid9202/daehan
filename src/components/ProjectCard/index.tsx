import React, { ReactChild } from "react";
import {
  ProjectCardWrapper,
  ProjectTextWrapper,
  ProjectImageWrapper,
} from "./style";
// import SimpleImageSlider from "react-simple-image-slider";

interface Props {
  projectImage?: string;
  projectImageSlider?: { url: string }[];
  projectTitle?: string;
  projectDesc?: string;
  child?: ReactChild;
}

const ProjectCard = (props: Props) => {
  return (
    <ProjectCardWrapper>
      <ProjectImageWrapper>
        {props.projectImage && (
          <img src={props.projectImage} alt={props.projectTitle} />
        )}
      </ProjectImageWrapper>
      <ProjectTextWrapper>
        <p className="title">{props.projectTitle}</p>
        <p className="desc">{props.projectDesc}</p>
      </ProjectTextWrapper>
      {props.child}
    </ProjectCardWrapper>
  );
};

export default ProjectCard;

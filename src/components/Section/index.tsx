import React, { ReactComponentElement, ReactElement, ReactChild } from "react";

import {
  SectionWrapper,
  SectionHeader,
  SectionIcon,
  SectionTitle,
  SectionDivider,
} from "./style";

interface Props {
  title: string;
  icon?: ReactElement;
  children: ReactChild;
}

const Section = (props: Props) => {
  return (
    <SectionWrapper>
      <SectionHeader>
        {props.icon && <SectionIcon>{props.icon}</SectionIcon>}
        <SectionTitle>{props.title}</SectionTitle>
        <SectionDivider></SectionDivider>
      </SectionHeader>
      <div className="section-content">{props.children}</div>
    </SectionWrapper>
  );
};

export default Section;

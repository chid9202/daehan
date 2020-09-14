import React, { ReactElement, ReactNode } from "react";

import {
  SectionWrapper,
  SectionHeader,
  SectionIcon,
  SectionTitle,
  SectionDivider,
  SectionContent,
} from "./style";

interface Props {
  title: string;
  icon?: ReactElement;
  children: ReactNode;
}

const Section = (props: Props) => {
  return (
    <SectionWrapper>
      <SectionHeader>
        {props.icon && <SectionIcon>{props.icon}</SectionIcon>}
        <SectionTitle>{props.title}</SectionTitle>
        <SectionDivider></SectionDivider>
      </SectionHeader>
      <SectionContent>{props.children}</SectionContent>
    </SectionWrapper>
  );
};

export default Section;

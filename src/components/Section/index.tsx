import React from "react";
import Icon from "components/Icon";

interface SectionProps {
  title: string;
  icon?: string;
}
const Section = (props: SectionProps) => {
  return (
    <div className="">
      <div className="section-header">
        {props.icon ? <Icon name={props.icon} /> : ""}
      </div>
      {props.title}
    </div>
  );
};

export default Section;

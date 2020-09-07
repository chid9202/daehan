import React, { ReactComponentElement, ReactElement } from "react";
// import Icon from "components/Icon";
// import { ReactComponent as Image } from "components/Image";

interface Props {
  title: string;
  icon?: ReactElement;
}
const Section = (props: Props) => {
  return (
    <div className="">
      <div className="section-header">{props.icon ? props.icon : ""}</div>
      {props.title}
    </div>
  );
};

export default Section;

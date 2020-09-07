import React from "react";

interface IconProps {
  name: string;
}
const Icon = (props: IconProps) => {
  return <i className={props.name}></i>;
};

export default Icon;

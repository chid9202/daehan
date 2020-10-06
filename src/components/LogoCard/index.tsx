import React, { ReactElement } from "react";
import { LogoCardWrapper, LogoWrapper, NameWrapper } from "./style";

interface Props {
  logo: ReactElement;
  name?: string;
  link?: string;
}

const LogoCard = (props: Props) => {
  return (
    <LogoCardWrapper
      elevation={3}
      {...(props.link && { onClick: () => window.open(props.link, "_blank") })}
      // {...(props.link && hoverEffect)}
      hoverEffect={props.link}
    >
      <LogoWrapper>{props.logo}</LogoWrapper>
      <NameWrapper>{props.name}</NameWrapper>
    </LogoCardWrapper>
  );
};

export default LogoCard;

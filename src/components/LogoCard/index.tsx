import React, { ReactElement } from "react";
import { LogoCardWrapper, LogoWrapper, NameWrapper } from "./style";

interface Props {
  logo: ReactElement;
  name: string;
}

const LogoCard = (props: Props) => {
  return (
    <LogoCardWrapper>
      <LogoWrapper>{props.logo}</LogoWrapper>
      <NameWrapper>{props.name}</NameWrapper>
    </LogoCardWrapper>
  );
};

export default LogoCard;

import React, { ReactElement } from "react";
import { LogoCardWrapper, LogoWrapper, NameWrapper } from "./style";
import { Paper } from "@material-ui/core";

interface Props {
  logo: ReactElement;
  name: string;
}

const LogoCard = (props: Props) => {
  return (
    <LogoCardWrapper elevation={3}>
      <LogoWrapper>{props.logo}</LogoWrapper>
      <NameWrapper>{props.name}</NameWrapper>
    </LogoCardWrapper>
  );
};

export default LogoCard;

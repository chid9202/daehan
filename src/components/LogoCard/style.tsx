import styled from "styled-components";
import { MIN_WIDTH } from "styles/layout";
import { Paper } from "@material-ui/core";

export const LogoCardWrapper = styled(Paper)`
  width: 45%;
  margin-bottom: 16px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  svg {
    width: 80%;
    max-width: 160px;
  }
`;

export const NameWrapper = styled.div`
  text-align: center;
  padding: 16px 0;
`;

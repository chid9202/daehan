import styled, { css } from "styled-components";
import { MIN_WIDTH } from "styles/layout";
import { Paper } from "@material-ui/core";

export const LogoCardWrapper = styled(Paper)`
  width: 48%;
  margin-bottom: 16px;

  ${(props) =>
    props.hoverEffect &&
    css`
      cursor: pointer;
      &:hover {
        box-shadow: 0px 8px 8px 4px rgba(0, 0, 0, 0.2);
      }
    `}
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
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

import styled from "styled-components";
import { MIN_WIDTH } from "styles/layout";

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  @media (max-width: ${MIN_WIDTH}px) {
    flex-flow: row wrap;
  }
  width: 100%;
  margin-bottom: 32px;
`;

export const ProjectImageWrapper = styled.div`
  min-width: 50%;
  width: 50%;
  height: auto;
  img {
    width: 100%;
  }
  @media (max-width: ${MIN_WIDTH}px) {
    width: 100%;
  }
`;

export const ProjectTextWrapper = styled.div`
  padding: 16px;
  .title {
    text-align: left;
    padding-bottom: 8px;
    @media (max-width: ${MIN_WIDTH}px) {
      text-align: center;
    }
  }
  .desc {
    text-align: left;
    font-size: 1em;
  }
`;

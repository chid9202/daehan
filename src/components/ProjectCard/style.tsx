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
  margin-bottom: 16px;
  img {
    width: 50%;
    height: auto;
    @media (max-width: ${MIN_WIDTH}px) {
      width: 100%;
    }
  }
`;

export const ProjectTextWrapper = styled.div`
  padding: 16px;
  .title {
    text-align: left;
    @media (max-width: ${MIN_WIDTH}px) {
      text-align: center;
    }
  }
  .desc {
    text-align: left;
    font-size: 1em;
  }
`;

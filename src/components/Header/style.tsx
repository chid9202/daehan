import styled from "styled-components";
import { MIN_WIDTH } from "styles/layout";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 2em;
  @media (max-width: ${MIN_WIDTH}px) {
    padding: 1.4em 1em 0.2em 1em;
  }
`;

export const JobTitle = styled.p`
  font-size: 1em;
  font-style: italic;
  margin: 0.1em 0 0.6em;
  padding: 6px 10px;
  background: #faf46a;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  line-height: 1;
`;

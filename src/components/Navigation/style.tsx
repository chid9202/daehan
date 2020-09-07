import styled from "styled-components";
import { MIN_WIDTH } from "styles/layout";

export const NavigationWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  height: 60px;

  @media (max-width: ${MIN_WIDTH}px) {
    height: 40px;
  }
`;

export const NavigationItem = styled.li`
  font-size: 1.5em;
  letter-spacing: -1;
  text-align: center;
  width: 33%;
  line-height: 1;
  align-self: center;
  cursor: pointer;
  color: ${(props) => (props.active ? "#345" : "#d0dadc")};
`;

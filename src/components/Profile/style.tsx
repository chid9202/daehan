import styled from "styled-components";
import { MIN_WIDTH } from "styles/layout";

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 160px;
  @media (max-width: ${MIN_WIDTH}px) {
    width: 120px;
  }
`;

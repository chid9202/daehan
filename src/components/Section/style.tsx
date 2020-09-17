import styled from "styled-components";
import { MIN_WIDTH } from "styles/layout";

export const SectionWrapper = styled.section`
  padding: 16px 32px;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  align-items: center;
`;

export const SectionIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #f4f6f7;
  min-width: 47px;
  height: 47px;
  border-radius: 50%;
  margin-right: 14px;
`;

export const SectionTitle = styled.p`
  color: #334455;
  margin-right: 14px;
  white-space: pre;
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #d4d6d7;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-flow: wrap;
  padding: 32px 0;
  p {
    margin: 0;
    color: #334455;
    text-align: left;
    line-height: 1.4;
    font-weight: 200;
    font-size: 2em;
    @media (max-width: ${MIN_WIDTH}px) {
      font-size: 1.6em;
    }
  }
`;

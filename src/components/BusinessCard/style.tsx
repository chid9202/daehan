import styled from "styled-components";
import { MIN_WIDTH } from "styles/layout";

export const BusinessCardWrapper = styled.div`
  width: 360px;
  height: 200px;
  border: 1px solid #334455;
  box-shadow: 2px 2px #c9ced6;
  padding: 12px;
  letter-spacing: 2px;
  margin-bottom: 12px;
  .title {
    font-weight: bold;
  }
  .position {
    font-size: 12px;
    font-weight: normal;
  }
  .location {
    margin-top: 100px;
    font-weight: 200;
    font-size: 12px;
  }
  .email {
    font-weight: 200;
    font-size: 12px;
  }
`;

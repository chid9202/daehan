import React from "react";
import { BusinessCardWrapper } from "./style";

interface Props {}

const BusinessCard = (props: Props) => {
  return (
    <BusinessCardWrapper>
      <p className="title">Daehan Chi, B.S</p>
      <p className="position">Software Engineer</p>
      <p className="location">Houston, Texas</p>
      <p className="email">chid9202@gmail.com</p>
    </BusinessCardWrapper>
  );
};

export default BusinessCard;

import React from "react";
import Profile from "components/Profile";
import ProfileImage from "img/avatar.gif";
import { HeaderWrapper, JobTitle } from "./style";
// import Navigation from "components/Navigation";

const Header = () => {
  return (
    <HeaderWrapper>
      <Profile srcImage={ProfileImage}></Profile>
      <h1>Daehan Chi</h1>
      <JobTitle>Software Developement Engineer</JobTitle>
      {/* <Navigation /> */}
    </HeaderWrapper>
  );
};

export default Header;

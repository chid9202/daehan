import React from "react";
import Profile from "components/Profile";
import ProfileImage from "img/avatar.gif";
import { HeaderWrapper, JobTitle } from "./style";
// import Navigation from "components/Navigation";
import AboutMe from "components/AboutMe";

const Header = () => {
  return (
    <HeaderWrapper>
      <Profile srcImage={ProfileImage}></Profile>
      <h1>Daehan Chi</h1>
      <JobTitle>Software Developement Engineer</JobTitle>
      {/* <Navigation /> */}
      <div className="content">
        <AboutMe />
      </div>
    </HeaderWrapper>
  );
};

export default Header;

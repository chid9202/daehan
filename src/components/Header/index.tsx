import React from "react";
import Profile from "components/Profile";
import ProfileImage from "img/avatar.gif";
import { HeaderWrapper, JobTitle } from "./style";
// import Navigation from "components/Navigation";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <HeaderWrapper>
      <Profile srcImage={ProfileImage}></Profile>
      <Typography variant="h4" component="h1" gutterBottom>
        Daehan Chi
      </Typography>
      <JobTitle variant="subtitle2" component="h2">
        Software Developement Engineer
      </JobTitle>
    </HeaderWrapper>
  );
};

export default Header;

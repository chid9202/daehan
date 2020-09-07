import React from "react";
import { ProfileImage } from "./style";

const Profile = (props) => {
  return <ProfileImage src={props.srcImage} alt="profile avatar" />;
};

export default Profile;

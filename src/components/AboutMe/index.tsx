import React from "react";
import Section from "components/Section";
import Person from "assets";

const AboutMe = () => {
  return (
    <div>
      Introduction
      <Section title="Intro" icon={<Person />}></Section>
    </div>
  );
};

export default AboutMe;

import React from "react";
import Section from "components/Section";
import { Person, Construction, Design, System } from "assets";

const AboutMe = () => {
  return (
    <div>
      <Section title="INTRO" icon={<Person />}>
        This is intro content
      </Section>
      <Section title="Front-End" icon={<Design />}>
        This is Front-end content
      </Section>
      <Section title="Back-End" icon={<Construction />}>
        This is Back-end content
      </Section>
      <Section title="System" icon={<System />}>
        This is System content
      </Section>
    </div>
  );
};

export default AboutMe;

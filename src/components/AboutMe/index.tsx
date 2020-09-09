import React from "react";
import Section from "components/Section";
import Person from "assets";

const AboutMe = () => {
  return (
    <div>
      <Section title="INTRO" icon={<Person />}>
        This is intro content
      </Section>
      <Section title="TAGS" icon={<Person />}>
        This is tags content
      </Section>
      <Section title="Front-End" icon={<Person />}>
        This is Front-end content
      </Section>
      <Section title="Back-End" icon={<Person />}>
        This is Back-end content
      </Section>
      <Section title="ETC" icon={<Person />}>
        This is ETC content
      </Section>
    </div>
  );
};

export default AboutMe;

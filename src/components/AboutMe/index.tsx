import React from "react";
import Section from "components/Section";
import {
  Person,
  Construction,
  Design,
  System,
  LogoDjango,
  LogoNginx,
  LogoReact,
  LogoStyledComponents,
  LogoTypeScript,
} from "assets";
import LogoCard from "components/LogoCard";

const AboutMe = () => {
  return (
    <div>
      <Section title="INTRODUCE" icon={<Person />}>
        {/* <React.Fragment> */}
        <p>
          Hello! I am Full-Stack Software Engineer.
          <br />I code from physical to application layer!
        </p>
        {/* </React.Fragment> */}
      </Section>
      <Section title="FRONT-END" icon={<Design />}>
        {/* <React.Fragment> */}
        <LogoCard logo={<LogoTypeScript />} name="TypeScript" />
        <LogoCard logo={<LogoReact />} name="React" />
        <LogoCard logo={<LogoStyledComponents />} name="Styled-components" />
        {/* <LogoCard logo={<LogoExpress />} name="Express" /> */}
        <LogoCard logo={<LogoNginx />} name="NginX" />
        {/* </React.Fragment> */}
      </Section>
      <Section title="BACK-END" icon={<Construction />}>
        Python, Django,
      </Section>
      <Section title="SYSTEM" icon={<System />}>
        AWS, DataDog, Ubuntu, MSSQL
      </Section>
      <Section title="INTERESTED IN.." icon={<System />}>
        Dark, GO, React Native
      </Section>
    </div>
  );
};

export default AboutMe;

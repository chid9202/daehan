import React from "react";
import Section from "components/Section";
import {
  Person,
  Construction,
  Design,
  System,
  LogoNginx,
  LogoReact,
  LogoStyledComponents,
  LogoTypeScript,
  LogoPython,
  LogoDjango,
  LogoDataDog,
  LogoAWS,
  LogoSQLServer,
  LogoUbuntu,
} from "assets";
import LogoCard from "components/LogoCard";

const AboutMe = () => {
  return (
    <div>
      <Section title="INTRODUCE" icon={<Person />}>
        <p>
          Hello! I am Full-Stack Software Engineer.
          <br />I code from physical to application layer!
        </p>
      </Section>
      <Section title="FRONT-END" icon={<Design />}>
        <LogoCard logo={<LogoTypeScript />} name="TypeScript" />
        <LogoCard logo={<LogoReact />} name="React" />
        <LogoCard logo={<LogoStyledComponents />} name="Styled-components" />
        <LogoCard logo={<LogoNginx />} name="NginX" />
      </Section>
      <Section title="BACK-END" icon={<Construction />}>
        <LogoCard logo={<LogoPython />} name="Python" />
        <LogoCard logo={<LogoDjango />} name="Django" />
      </Section>
      <Section title="SYSTEM" icon={<System />}>
        <LogoCard logo={<LogoDataDog />} name="DataDog" />
        <LogoCard logo={<LogoAWS />} name="AWS" />
        <LogoCard logo={<LogoSQLServer />} name="SQL Server" />
        <LogoCard logo={<LogoUbuntu />} name="Ubuntu" />
      </Section>
      {/* <Section title="INTERESTED IN.." icon={<System />}>
        Dark, GO, React Native
      </Section> */}

      <Section title="PROJECTS" icon={<System />}>
        Projects,,.,,
      </Section>
    </div>
  );
};

export default AboutMe;

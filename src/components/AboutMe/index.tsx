import React from "react";
import { AboutMeWrapper } from "./style";
import Section from "components/Section";
import {
  IconPerson,
  IconConstruction,
  IconDesign,
  IconSystem,
  IconProject,
  IconContact,
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
  ProjectImageDbalance1,
  // ProjectImageDbalance2,
  ProjectFoodup1,
  // ProjectFoodup2
} from "assets";
import LogoCard from "components/LogoCard";
import ProjectCard from "components/ProjectCard";
import BusinessCardWrapper from "components/BusinessCard";

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <Section title="INTRODUCE" icon={<IconPerson />}>
        <p>
          Hello! I am Full-Stack Software Engineer.
          <br />I code from physical to application layer!
        </p>
      </Section>
      <Section title="FRONT-END" icon={<IconDesign />}>
        <LogoCard logo={<LogoTypeScript />} name="TypeScript" />
        <LogoCard logo={<LogoReact />} name="React" />
        <LogoCard logo={<LogoStyledComponents />} name="Styled-components" />
        <LogoCard logo={<LogoNginx />} name="NginX" />
      </Section>
      <Section title="BACK-END" icon={<IconConstruction />}>
        <LogoCard logo={<LogoPython />} name="Python" />
        <LogoCard logo={<LogoDjango />} name="Django" />
      </Section>
      <Section title="SYSTEM" icon={<IconSystem />}>
        <LogoCard logo={<LogoDataDog />} name="DataDog" />
        <LogoCard logo={<LogoAWS />} name="AWS" />
        <LogoCard logo={<LogoSQLServer />} name="SQL Server" />
        <LogoCard logo={<LogoUbuntu />} name="Ubuntu" />
      </Section>
      {/* <Section title="INTERESTED IN.." icon={<System />}>
        Dark, GO, React Native
      </Section> */}
      <Section title="PROJECTS" icon={<IconProject />}>
        <ProjectCard
          projectImage={ProjectImageDbalance1}
          projectTitle="Balance Adjustment"
          projectDesc="This project is to test body central weight and determine wedight compensation adjustment. The data is collected from electric weight scale with multiple weight scale sensors and display the data in real-time. After customizable assessment, it determins possilbe weight compensations."
        ></ProjectCard>
        <ProjectCard
          projectImage={ProjectFoodup1}
          projectTitle="FoodUp"
          projectDesc="This project is Yelp-like mobile application which specialized in K-town area in Los Angeles. This project was initialized by COVID-19 which rapidly increased the food delivery. It collects users recommandations and shows popular restaurant by locations and categories."
        ></ProjectCard>
      </Section>
      <Section title="CONTACT" icon={<IconContact />}>
        <BusinessCardWrapper />
        <div>
          Check my LinkedIn for detail!
          <br />
          <a className="linkein" href="https://www.linkedin.com/in/chid9202/">
            https://www.linkedin.com/in/chid9202/
          </a>
        </div>
      </Section>
    </AboutMeWrapper>
  );
};

export default AboutMe;

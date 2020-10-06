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
  LogoLinkedIn,
  LogoGithub,
  ProjectImageDbalance1,
  ProjectFoodup1,
  ProjectMyPeekcok,
} from "assets";
import LogoCard from "components/LogoCard";
import ProjectCard from "components/ProjectCard";
import BusinessCard from "components/BusinessCard";
import { Typography, Link } from "@material-ui/core";

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <Section title="INTRODUCE" icon={<IconPerson />}>
        <Typography variant="body1">
          Hello! I am Full-Stack Software Engineer.
          <br />I code from physical to application layer!
        </Typography>
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
        <ProjectCard projectImage={ProjectMyPeekcok} projectTitle="MyPeekcok">
          <Typography variant="body1" className="desc">
            Clone coding project copied iPhone 11 iMessage (hybrid) application.
            Created with <b>React Native</b> and deployed on <b>AWS Amplify</b>.
            You can see the{" "}
            <a href="https://www.mypeekcok.daehanchi.info/">SOURCE CODE</a> and{" "}
            <a href="https://github.com/chid9202/MyPeekcok">WEBSITE</a>
          </Typography>
        </ProjectCard>
        <ProjectCard projectImage={ProjectFoodup1} projectTitle="FoodUp">
          <Typography variant="body1" className="desc">
            This project is Yelp-like mobile application which specialized in
            K-town area in Los Angeles. This project was initialized by COVID-19
            which rapidly increased the food delivery. It collects users
            recommandations and shows popular restaurant by locations and
            categories. I was in charge of creating <b>REST API</b> and admin
            pages.
          </Typography>
        </ProjectCard>
        <ProjectCard
          projectImage={ProjectImageDbalance1}
          projectTitle="Balance Adjustment"
        >
          <Typography variant="body1" className="desc">
            This project is to test body central weight and determine wedight
            compensation adjustment. The data is collected from electric weight
            scale with multiple weight scale sensors and display the data in
            real-time. After customizable assessment, it determins possilbe
            weight compensations.
          </Typography>
        </ProjectCard>
      </Section>
      <Section title="CONTACT" icon={<IconContact />}>
        <LogoCard
          logo={<LogoGithub />}
          name="Go to Github"
          link="https://github.com/chid9202"
        />
        <LogoCard
          logo={<LogoLinkedIn />}
          name="Go to LInkedIn"
          link="https://www.linkedin.com/in/chid9202/"
        />
      </Section>
    </AboutMeWrapper>
  );
};

export default AboutMe;

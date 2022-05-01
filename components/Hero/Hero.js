import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I&apos;m Yusufboy Saydullayev <br />
        </SectionTitle>
        <SectionText>
          I am a full stack web developer and build websites using HTML, CSS, Javascript, ReactJs.
          I have also good grasp on Node, NoSQL(MongoDb),Sql(Postgresql) and other technologies.
        </SectionText>
        <a href="https://github.com/yusuf591-cpu" target={"_blank"} rel="noreferrer">
          <Button>
            Learn More
          </Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
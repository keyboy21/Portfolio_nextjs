import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 30, text: 'Open Source Projects' },
  { number: 637, text: 'Total Github Contributions' },

];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card?.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
      <Box>
        <BoxText>
          Arctic Code Vault
          Contributed code to the 2020 GitHub Archive Program</BoxText>
      </Box>
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;

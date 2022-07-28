import React from 'react';
import { AiFillGithub, AiFillInstagram,AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+998935910126">+998935910126</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:yusufsaydullayev@gmail.com">
            yusufsaydullayev@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/yusuf591-cpu" target={"_blank"}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/YusufWeb_Dev" target={"_blank"}>
          <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/key_web22/" target={'_blank'}>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

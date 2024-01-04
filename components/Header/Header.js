import NextLink from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <NextLink href="/" style={{ display: 'flex', alignItems: 'center', color: "white", marginBottom: "20px" }}>
        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
      </NextLink>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink href="#tech">
          Technologies
        </NavLink>
      </li>
      <li>
        <NavLink href="#about">
          About
        </NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/yusuf-saydullayev" target={"_blank"}>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/YusufWeb_Dev" target={"_blank"} >
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/key_web22/" target={'_blank'}>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

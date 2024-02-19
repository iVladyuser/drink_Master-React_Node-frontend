import {
  FooterContainer,
  FooterSection,
  FooterDivOne,
  FooterDivTwo,
  FooterDivDesk,
  FooterDivTab,
  FooterDivMob,
  FooterDiv
} from './Footer.styled';
import FormFooter from './FormFooter/FormFooter';
import Info from './Info/Info';
import LogoFooter from './LogoFooter/LogoFooter';
import NavFooter from './NavFooter/NavFooter';
import SocialNov from './SocialNav/SocialNov';

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterDiv>
          <FooterDivMob>
            <FooterDivTwo>
              <FooterDivOne>
                <LogoFooter />
                <SocialNov />
              </FooterDivOne>
              <NavFooter />
              <FooterDivDesk>
                <FormFooter />
              </FooterDivDesk>
            </FooterDivTwo>
            <FooterDivTab>
              <FormFooter />
            </FooterDivTab>
          </FooterDivMob>
          <Info />
        </FooterDiv>
      </FooterContainer>
    </FooterSection>
  );
};
export default Footer;

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
import SubscribeForm from './SubscribeForm/SubscribeForm';
import Info from './Info/Info';
import LogoFooter from './LogoFooter/LogoFooter';
import NavFooter from './NavFooter/NavFooter';
import FollowUs from './FollowUsFooter/FollowUs';

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterDiv>
          <FooterDivMob>
            <FooterDivTwo>
              <FooterDivOne>
                <LogoFooter />
                <FollowUs />
              </FooterDivOne>
              <NavFooter />
              <FooterDivDesk>
                <SubscribeForm />
              </FooterDivDesk>
            </FooterDivTwo>
            <FooterDivTab>
              <SubscribeForm />
            </FooterDivTab>
          </FooterDivMob>
          <Info />
        </FooterDiv>
      </FooterContainer>
    </FooterSection>
  );
};
export default Footer;

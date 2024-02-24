import {
  FooterContainer,
  FooterSection,
  FooterDivOne,
  FooterDivTwo,
  FooterDivDesk,
  FooterDivTab,
  FooterDivMob,
  FooterDiv,
  FooterElipseDiv,
} from './Footer.styled';
import SubscribeForm from './SubscribeForm/SubscribeForm';
import Info from './Info/Info';
import LogoFooter from './LogoFooter/LogoFooter';
import NavFooter from './NavFooter/NavFooter';
import FollowUs from './FollowUsFooter/FollowUs';

import PageEllipse223 from './Ellipse223/Ellipse223';
import PageEllipseMob from './Ellipse223/EllipseMob';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
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
      </FooterSection>
      <FooterElipseDiv>
        <PageEllipse223 />
        <PageEllipseMob />
      </FooterElipseDiv>
    </FooterContainer>
  );
};
export default Footer;

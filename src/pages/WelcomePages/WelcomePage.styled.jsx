import styled from 'styled-components';
import { Link } from 'react-router-dom';

import welcomeMob1x from '../../images/welcome/welcomeMob@1x.jpg';
// import welcomeMob2x from '../../images/welcome/welcomeMob@2x.jpg';

import welcomeTab1x from '../../images/welcome/welcomeTab@1x.jpg';
// import welcomeTab2x from '../../images/welcome/welcomeTab@2x.jpg';

import welcomeDesk1x from '../../images/welcome/welcomeDesk@1x.jpg';
// import welcomeDesk2x from '../../images/welcome/welcomeDesk@2x.jpg';

import welcomeElipseRightMob from '../../images/welcome/welcomeElipseRightMob.svg';
import welcomeElipseLeftMob from '../../images/welcome/welcomeElipseLeftMob.svg';
import welcomeElipseBottomMob from '../../images/welcome/welcomeElipseBottomMob.svg';

import welcomeElipseRightTab from '../../images/welcome/welcomeElipseRightTab.svg';
import welcomeElipseLeftTab from '../../images/welcome/welcomeElipseLeftTab.svg';
import welcomeElipseBottomTab from '../../images/welcome/welcomeElipseBottomTab.svg';

import welcomeElipseRightDesk from '../../images/welcome/welcomeElipseRightDesk.svg';
import welcomeElipseLeftDesk from '../../images/welcome/welcomeElipseLeftDesk.svg';
import welcomeElipseBottomDesk from '../../images/welcome/welcomeElipseBottomDesk.svg';

export const WelcomePageStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 100vw;
  height: 100vh;

  background: url(${welcomeElipseLeftMob}), url(${welcomeElipseRightMob}),
    url(${welcomeElipseBottomMob}), url(${welcomeMob1x});

  background-repeat: no-repeat;
  background-size: 80%, 100%, 40%, auto;
  background-position: top left, top left, bottom right, center right;
  background-color: #0a090f;

  @media (min-width: 768px) {
    background: url(${welcomeElipseLeftTab}), url(${welcomeElipseRightTab}),
      url(${welcomeElipseBottomTab}), url(${welcomeTab1x});
    background-repeat: no-repeat;
    background-size: 30%, 70%, 30%, 55%;
    background-position: top left, top left, bottom right, center right;
    background-color: #0a090f;
  }
  @media (min-width: 1440px) {
    background: url(${welcomeElipseLeftDesk}), url(${welcomeElipseRightDesk}),
      url(${welcomeElipseBottomDesk}), url(${welcomeDesk1x});
    background-repeat: no-repeat;
    background-size: 30%, 50%, 25%, 45%;
    background-position: top left, top left, bottom right, center right;
    background-color: #07060b;
  }
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.02px;
  line-height: 1.14;
  color: #fafafa;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;
export const WelcomeText = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02px;
  line-height: 1.28;
  color: #fafafa;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 470px;
    font-size: 18px;
    line-height: 1.3;
  }

  @media (min-width: 1440px) {
    width: 485px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: 767.98px) {
    justify-content: center;
  }

  @media (min-width: 1440px) {
    gap: 15px;
  }
`;

export const ButtonLink = styled(Link)`
  padding: 14px 40px;
  border-radius: 42px;
  min-width: 52px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: #f3f3f3;
  background-color: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  cursor: pointer;

  transition: color 300ms linear, background-color 300ms linear;

  &:hover {
    color: #161f37;
    background-color: #f3f3f3;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    min-width: 59px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.12;
  }
`;
export const ButtonLinkActive = styled(ButtonLink)`
  color: #161f37;
  background-color: #f3f3f3;
  border-color: rgba(64, 112, 205, 0.5);
`;

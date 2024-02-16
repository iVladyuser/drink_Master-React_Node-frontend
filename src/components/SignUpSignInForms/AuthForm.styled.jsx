import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StandartContainer } from '../../styles/Container.styled';

import welcomeMob1x from '../../images/welcome/welcomeMob@1x.jpg';
// import welcomeMob2x from '../../images/welcome/welcomeMob@2x.jpg';

import welcomeTab1x from '../../images/welcome/welcomeTab@1x.jpg';
// import welcomeTab2x from '../../images/welcome/welcomeTab@2x.jpg';

import welcomeDesk1x from '../../images/welcome/welcomeDesk@1x.jpg';
// import welcomeDesk2x from '../../images/welcome/welcomeDesk@2x.jpg';

import welcomeElipseTopMob from '../../images/welcome/welcomeElipsesTopMob.svg';
import welcomeElipseBottomMob from '../../images/welcome/welcomeElipseBottomMob.svg';

import welcomeElipseTopTab from '../../images/welcome/welcomeElipsesTopTab.svg';
import welcomeElipseBottomTab from '../../images/welcome/welcomeElipseBottomTab.svg';

import welcomeElipseTopDesk from '../../images/welcome/welcomeElipsesTopDesk.svg';
import welcomeElipseBottomDesk from '../../images/welcome/welcomeElipseBottomDesk.svg';

export const AuthSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 100vw;
  height: 100vh;

  background: url(${welcomeElipseTopMob}), url(${welcomeElipseBottomMob}),
    url(${welcomeMob1x});

  background-repeat: no-repeat;
  background-size: 100%, 40%, auto;
  background-position: top left, bottom right, center right;
  background-color: #0a090f;

  @media (min-width: 768px) {
    background: url(${welcomeElipseTopTab}), url(${welcomeElipseBottomTab}),
      url(${welcomeTab1x});
    background-repeat: no-repeat;
    background-size: 70%, 30%, 60%;
    background-position: top left, bottom right, center right;
    background-color: #0a090f;
  }
  @media (min-width: 1440px) {
    background: url(${welcomeElipseTopDesk}), url(${welcomeElipseBottomDesk}),
      url(${welcomeDesk1x});
    background-repeat: no-repeat;
    background-size: 50%, 25%, 60%;
    background-position: top left, bottom right, center right;
    background-color: #07060b;
  }
`;

export const Container = styled(StandartContainer)`
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
  font-weight: 600;
  letter-spacing: -0.02px;
  line-height: 1.14;
  color: #fafafa;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }

  @media (min-width: 1440px) {
    text-shadow: 0 4px 0 rgba(0, 0, 0, 0.25);
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const ButtonLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  text-decoration: underline;
  color: #f3f3f3;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;

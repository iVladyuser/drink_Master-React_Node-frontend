import styled from 'styled-components';
import { Form } from 'formik';

import LeftLightDesctop from '../../images/drinksPageImage/LeftLightDesctop.svg';
import LeftLightPhone from '../../images/drinksPageImage/LeftLightPhone.svg';
import LeftLightTablet from '../../images/drinksPageImage/LeftLightTablet.svg';
import RightLightTablet from '../../images/drinksPageImage/RightLightTablet.svg';
import RightLightDesctop from '../../images/drinksPageImage/RightLightDesctop.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;
  padding: 80px 20px 80px;
  background: url(${LeftLightPhone});
  background-position: top -64px left;

  @media (min-width: 768px) {
    background: url(${LeftLightTablet}), url(${RightLightTablet});
    background-repeat: no-repeat;
    background-size: 100%, 40%, auto;
    background-position: top -64.45px left, top 414px right;
  }

  @media (min-width: 1440px) {
    background: url(${LeftLightDesctop}), url(${RightLightDesctop});
    background-repeat: no-repeat;
    background-size: 100%, 40%, auto;
    background-position: top left, top 394px right;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 140px 32px 140px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 160px 100px 140px;
  }
`;
export const FormStyled = styled(Form)`
  display: flex;
  gap: 8px;
`;
export const WraperForm = styled.div`
  display: flex;
  gap: 8px;
`;
export const DrinksPageStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 100vw;
  height: 100vh;
  background-color: rgba(14, 10, 17, 1);
`;
export const WraperSvg = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  svg {
    width: 20px;
    height: 20px;
   
  `;
export const ForInputLupaSvg = styled.div`
  position: relative;
`;

import styled from 'styled-components';
import { Form } from 'formik';

import LeftLightDesctop from '../../images/drinksPageImage/LeftLightDesctop.svg';
import LeftLightPhone from '../../images/drinksPageImage/LeftLightPhone.svg';
import LeftLightTablet from '../../images/drinksPageImage/LeftLightTablet.svg';
import RightLightTablet from '../../images/drinksPageImage/RightLightTablet.svg';
import RightLightDesctop from '../../images/drinksPageImage/RightLightDesctop.svg';

export const ContainerForPage = styled.div`
background: rgba(10, 10, 17, 1);


background: url(${LeftLightPhone});
  background-position: top left;
  background-size: 100%, 40%, auto;
@media (min-width: 768px) {
  width: 768px;
  background:   url(${LeftLightTablet}), url(${RightLightTablet});
  background-repeat: no-repeat;
  background-size: 100%, 40%, auto;
  background-position: top left, top 498px right;
}

@media (min-width: 1440px) {
  width: 1440px;
  background:  url(${LeftLightDesctop}), url(${RightLightDesctop});
  background-repeat: no-repeat;
  background-size: 100%, 40%, auto;
  background-position: top  left, top 458px right;
}

`;
export const Container = styled.section`
  
@media screen and (max-width: 320px) {
  width:  100%;
  padding: 80px 20px 80px;
 }

  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;
  padding: 80px 20px 80px;
  
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
   flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;
export const WraperForm = styled.div`
 display: flex;
 flex-direction: column;
 gap: 14px;

@media screen and (min-width: 768px) {
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom:50px;
}
  
`;
export const DrinksPageStyle = styled.div`
  max-width: 100vw;
  background: rgba(10, 10, 17, 1);
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

export const ListCocktail = styled.ul`
  display: flex;
  row-gap: 28px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
  row-gap: 40px;
  column-gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    
  row-gap: 80px;
  column-gap: 20px;
  }
`;

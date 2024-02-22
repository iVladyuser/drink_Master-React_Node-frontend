import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const SectionContainer = styled.section`
width: 100%;
height: 100%;
margin: 0 auto;
max-width: 375px;
padding: 80px 20px 0 20px;

@media screen and (min-width: 768px) {
  max-width: 768px;
  padding: 120px 32px 0 32px;
}

@media screen and (min-width: 1440px) {
  max-width: 1440px;
  padding: 185px 100px 0 100px;
}
`;


export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 47px;

  @media screen and (min-width: 768px) {
    row-gap: 54px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 130px;
  }
`;

export const MainWrap = styled.div`
  max-width: 716px;
`;

export const Title = styled.h1`
  font-style: normal;
  color: #f3f3f3;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 68px;
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const MainDescr = styled.p`
  font-size: 14px;
  color: #f3f3f3;
  line-height: 1.4;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    max-width: 619px;
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 486px;
    margin-bottom: 40px;
  }
`;

export const MainLink = styled(Link)`
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 43px;
  border-radius: 42px;

  background: #f3f3f3;
  color: #161f37;

  font-weight: 600;
  line-height: 1.285;
  border: 1px solid #f3f3f3;
  transition: color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
    background-color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96),
    border-color 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 16px 48px;
  }

  &:hover,
  &:focus {
    color: #f3f3f3;
    background: #161f37;
    border-color: #161f37;
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  z-index: 2;
`;


import { styled } from 'styled-components';

export const InfoContainer = styled.div`
margin-top: 60px;
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;

  

  @media (min-width: 768px) {
    
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`;
export const InfoContPriv = styled.div`

  

  @media (min-width: 768px) {
    
  
  }

  @media (min-width: 1440px) {
    
  }
`;

export const InfoUl = styled.ul`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: row;
gap: 14px;
padding-right: 40px;
  

  @media (min-width: 768px) {
    
    gap: 18px;
    padding-right: 100px;
  }

  @media (min-width: 1440px) {
    
  }
`;
export const InfoLi = styled.li`
font-family: "Manrope", sans-serif;
font-weight: 400;
font-size: 12px;


line-height: 1.33333;
letter-spacing: -0.02em;

color: rgba(243, 243, 243, 0.5);

&:hover {
    color: #253d6f;
  }
  &:focus {
    color: #253d6f;
  }


  @media (min-width: 768px) {
font-size: 14px;

line-height: 1.28571;
letter-spacing: -0.02em;

  }

  @media (min-width: 1440px) {
    
  }
`;

export const InfoText = styled.p`

font-family: "Manrope", sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 1.33333;
letter-spacing: -0.02em;
color: rgba(243, 243, 243, 0.5);


  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;

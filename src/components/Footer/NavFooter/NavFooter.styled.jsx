import { styled } from 'styled-components';




export const FooterNav = styled.li`
 


  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
  }
`;

export const FooterUl = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 14px;
  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const ButtonLink = styled.button`
border: medium none;
	background-image: none; 
	background: transparent;
	float: left;
	background-color: transparent;
  
font-family: 'Manrope', sans-serif;
font-weight: 500;
font-size: 14px;
line-height: 1.6;
color: #f3f3f3; 

&:hover,
&:focus
 {
  outline: none;
  color: #253d6f;
}

  @media screen and (min-width: 768px) {
   
  }

  @media screen and (min-width: 1440px) {

  }
`;
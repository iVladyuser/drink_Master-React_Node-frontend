import { styled } from 'styled-components';

export const SocialNovUl = styled.ul`
 
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: row;
gap: 14px;

@media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 1440px) {
    gap: 16px;
  }

`;
export const SocialNovLi = styled.li`
 
border: 1px solid rgba(243, 243, 243, 0.2);
border-radius: 10px;
padding: 8px;
width: 44px;
height: 44px;

&:hover{
    border: 1px solid rgba(243, 243, 243, 0.5);
  }
  &:focus{
    border: 1px solid rgba(243, 243, 243, 0.5);
  }


`;


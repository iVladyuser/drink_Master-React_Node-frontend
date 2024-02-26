import styled from 'styled-components';

export const StyledSvg = styled.svg`
  width: 28px;
  height: 28px;
  fill: ${({ theme }) => theme.colorText};
`;

export const LogoContainer = styled.div`
display: flex;
gap: 14px;
align-items: center;

`;
export const StyleLink = styled.a`
font-weight: 600;
font-size: 18px;
line-height: 122%;
color: ${({ theme }) => theme.colorText};
`;

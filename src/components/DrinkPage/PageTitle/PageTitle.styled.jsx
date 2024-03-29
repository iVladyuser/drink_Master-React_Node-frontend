import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.19;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
    line-height: 1.06;
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
`;

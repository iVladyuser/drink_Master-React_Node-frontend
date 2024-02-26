import styled from 'styled-components';

export const StandartContainer = styled.div`
  width: 320px;
  margin: 24px auto 0;
  padding: 0px 20px 40px;
  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 40px auto 0;
    padding: 0px 32px 44px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    margin: 20px auto 0;
    padding: 0px 112px 56px;
  }
`;

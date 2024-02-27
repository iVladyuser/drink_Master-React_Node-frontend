import styled from 'styled-components';

export const Container = styled.div`
  z-index: 20;
  padding: 80px 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: ${({ theme }) => theme.colorText};

  @media screen and (min-width: 375px) {
    .container {
      width: 375px;
    }
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 140px 32px;

    font-size: 16px;
    line-height: 1.37;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-top: 132px;
    padding-bottom: 140px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

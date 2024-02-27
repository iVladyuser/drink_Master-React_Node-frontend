import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 91px;

  @media (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 60px;
  }

  @media (min-width: 1440px) {
    margin-top: 67px;
  }
`;

export const Card = styled.img`
  width: 198px;
  height: 247px;

  margin-left: 0;
  padding: 0;
  text-align: center;

  @media (min-width: 768px) {
    width: 261px;
    height: 326px;
  }

  @media (min-width: 1440px) {
  }
`;

export const Text = styled.p`
  width: 205px;
  color: ${({ theme }) => theme.colorText};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  @media (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    line-height: 1.37;
  }

  @media (min-width: 1440px) {
    margin-top: 27px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 375px;
  padding-top: 152px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    margin-bottom: 40px;

    font-size: 32px;
    font-weight: 600;
    line-height: 1.2;
  }

  h3 {
    font-size: 28px;
    font-weight: 600;
    line-height: 1.14;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
  }

  h2,
  h3,
  h4 {
    color: #f3f3f3;
  }

  & > div {
    margin-bottom: 80px;
  }

  & > div > div:not(:last-of-type) {
    margin-bottom: 80px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    padding-top: 224px;
    padding-bottom: 140px;
    padding-left: 32px;
    padding-right: 32px;

    h2 {
      font-size: 56px;
      font-weight: 600;
      line-height: 1.07;
    }

    h3 {
      font-size: 40px;
      font-weight: 600;
      line-height: 1.1;
    }

    h4 {
      font-size: 24px;
      font-weight: 500;
      line-height: 1.3;
    }
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding-top: 244px;
    padding-bottom: 140px;
    padding-left: 100px;
    padding-right: 100px;

    display: flex;
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    h2 {
      margin-bottom: 40px;

      font-size: 64px;
      font-weight: 600;
      line-height: 1.06;
    }

    h3 {
      font-size: 40px;
      font-weight: 600;
      line-height: 1.1;

    h4 {
      font-size: 32px;
      font-weight: 500;
      line-height: 1.3;
    }
  }
`;

export const ContentBlock = styled.div`
  @media (min-width: 1440px) {
    flex-basis: 33%;
  }
`;

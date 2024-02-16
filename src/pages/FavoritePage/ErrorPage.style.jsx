import styled from 'styled-components';

export const ContainerError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 188px;
  margin-bottom: 260px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    margin-top: 175px;
    margin-bottom: 195px;
  }

  @media (min-width: 1440px) {
    margin-top: 200px;
    margin-bottom: 140px;
  }
`;

export const Wrapper = styled.div`
  padding-top: 200px;
  padding-bottom: 140px;
  display: flex;
`;

export const Image = styled.img`
  width: 123px;
  height: 156px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 158px;
    height: 201px;
  }
`;

export const Title = styled.p`
  color: rgba(64, 112, 205, 0.1);
  font-size: 120px;
  font-weight: 600;
  line-height: 1.02;

  @media (min-width: 768px) {
    font-size: 150px;
    line-height: 0.82;
  }

  @media (min-width: 1440px) {
    font-size: 200px;
    line-height: 1;
  }
`;

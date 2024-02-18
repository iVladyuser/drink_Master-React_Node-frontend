import styled from 'styled-components';

export const HeroWraper = styled.section`
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1440px) {
    margin-bottom: 80px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 100px;
    flex-direction: row;
    gap: 249px;
  }
`;

export const HeroTextWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  @media (min-width: 1440px) {
    max-width: 593px;
    padding-top: 26px;
    padding-bottom: 98px;
  }
`;

export const GlassTypeAndServ = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  color: rgba(243, 243, 243, 0.5);

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const DrinkDescr = styled.p`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.37;
  }
`;

export const HeroImgWraper = styled.div`
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1439px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

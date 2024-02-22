import styled from 'styled-components';

export const FavBtn = styled.button`
  border-radius: 42px;
  /* padding: 14px 40px; */
  padding-top: 14px;
  padding-bottom: 14px;
  width: 222px;
  height: 46px;
  background-color: #f3f3f3;
  color: #161f37;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: #161f37;

  transition: all 0.3s;
  &:hover {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  @media (min-width: 768px) {
    /* padding: 18px 44px; */
    padding-top: 18px;
    padding-bottom: 18px;
    width: 250px;
    height: 54px;

    font-size: 16px;
    line-height: 1.12;
  }
`;

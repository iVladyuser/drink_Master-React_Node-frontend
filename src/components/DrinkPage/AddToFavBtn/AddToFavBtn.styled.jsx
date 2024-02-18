import styled from 'styled-components';

export const FavBtn = styled.button`
  border-radius: 42px;
  padding: 14px 40px;
  width: 222px;
  height: 46px;
  color: #161f37;
  background-color: #f3f3f3;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  color: #161f37;

  transition: all 0.3s;
  &:hover {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    width: 250px;
    height: 54px;

    font-size: 16px;
    line-height: 1.12;
  }
`;

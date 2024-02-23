import styled from 'styled-components';

export const FavBtn = styled.button`
  border-radius: 42px;
  border-color: transparent;
  /* padding: 14px 40px; */
  padding-top: 14px;
  padding-bottom: 14px;
  width: 222px;
  height: 46px;
  /* background-color: #f3f3f3; */
  /* color: #161f37; */
  background-color: ${props => (props.bg = 'white' ? '#f3f3f3' : '#161f37')};
  color: ${props => (props.color = 'darkblue' ? '#161f37' : '#f3f3f3 ')};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  transition: all 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
    box-shadow: rgba(243, 243, 243, 0.2);
  }

  &:hover,
  &:focus {
    color: #f3f3f3;
    background: #161f37;
    border-color: transparent;
    box-shadow: rgba(243, 243, 243, 0.2);
  }

  &:disabled {
    color: rgba(243, 243, 243, 0.2);
    background: #434d67;

    svg {
      stroke: rgba(243, 243, 243, 0.2);
    }
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

export const SVGwithTextWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

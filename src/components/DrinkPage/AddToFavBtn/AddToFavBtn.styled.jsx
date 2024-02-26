import styled from 'styled-components';

export const FavBtn = styled.button`
  border-radius: 42px;
  border: none;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 222px;
  height: 46px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  transition: color var(--transition), background-color var(--transition);

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.button.buttonBg};
    background-color: ${({ theme }) => theme.button.buttonText};
  }

  &:disabled {
    color: ${({ theme }) => theme.button.disableColorFavBtn};
    background: ${({ theme }) => theme.button.disableBgcFavBtn};

    svg {
      stroke: ${({ theme }) => theme.button.disableColorFavBtn};
    }
  }

  @media (min-width: 768px) {
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

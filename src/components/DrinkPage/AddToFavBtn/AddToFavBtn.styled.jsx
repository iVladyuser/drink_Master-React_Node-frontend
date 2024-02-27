import styled from 'styled-components';

export const FavBtn = styled.button`
  z-index: 2;
  border-radius: 42px;
  border: none;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 222px;
  height: 46px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  transition: all var(--transition);

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

export const AddFavBtn = styled(FavBtn)`
  color: ${({ theme }) => theme.button.buttonText};
  background-color: ${({ theme }) => theme.button.buttonBg};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.button.buttonTextHover};
    background-color: ${({ theme }) => theme.button.buttonBgcHover};
    box-shadow: 0px 1px 7px 0px var(--grey-transp-fifty-light-theme);
  }
`;

export const AddedFavBtn = styled(FavBtn)`
  color: ${({ theme }) => theme.button.buttonBg};
  background-color: ${({ theme }) => theme.button.buttonText};
  box-shadow: 0px 1px 7px 0px var(--grey-transp-fifty-light-theme);

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.button.buttonBgcHover};
    background-color: ${({ theme }) => theme.button.buttonTextHover};
    box-shadow: 0px 1px 7px 0px var(--grey-transp-fifty-light-theme);

    svg {
      stroke: ${({ theme }) => theme.button.buttonBgcHover};
    }
  }
`;

export const SVGwithTextWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const StyledSVG = styled.svg`
  width: 18px;
  height: 18px;
  stroke: ${({ theme }) => theme.button.buttonBg};
  transition: all var(--transition);
`;

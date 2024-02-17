import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  margin: 0 auto;
  padding: 8px 20px 0;
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    width: 768px;
    padding: 16px 32px 0;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 12px 112px 0;
  }
`;

// export const UserLogoContainer = styled.div`
//   position: relative;
//   display: flex;
//   cursor: pointer;
//   align-items: center;

//   & :nth-child(2) {
//     margin-left: 8px;
//   }

//   & :nth-child(3) {
//     margin-left: 4px;
//   }

//   &:hover > *,
//   &:focus-within > * {
//     color: ${props => `${props.theme.colors.secondaryOrange}`};
//   }
// `;

// export const UserName = styled.p``;

// export const DefaultNeme = styled.p`
//   text-transform: uppercase;
// `;

// export const Button = styled.button`
//   width: 48px;
//   background-color: transparent;
//   color: ${props => `${props.theme.colors.primaryBlue}`};
//   font-size: ${props => `${props.theme.fontSizes.text}`};
//   font-weight: ${props => `${props.theme.fontWeights.regular}`};
//   line-height: ${props => `${props.theme.lineHeights.text}`};
//   border: none;
//   padding: 0;
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: 54px;
//     font-size: ${props => `${props.theme.fontSizes.listTitle}`};
//     line-height: 1.33;
//   }
// `;

import styled from 'styled-components';

export const Ellipse224Tab = styled.img`
display:none;

  @media (min-width: 768px) {
   display: ${({ theme }) => theme.blackedPng};
    position: absolute;
   

z-index: 1;
top : 250px;
right: 1px;



// animation-name: animateEllipse;
//   animation-duration: 3s;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
//   animation-direction: alternate;

// @keyframes animateEllipse {
//     0% {
//       opacity : 0
//     }
//     50% {
//         opacity : 0.5
//       }
//     100% {
//         opacity : 1
//     }
//   }
  }
  @media (min-width: 1440px) {
   
    display:none;
  }
`;
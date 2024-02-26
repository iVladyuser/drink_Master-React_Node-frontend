import styled from 'styled-components';

export const EllipseMain= styled.img`
  display: none;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1440px) {
    display: block;
    position: absolute;
    z-index: 1;

    top: 200px;
    left:700px;

    // animation-name: animateEllipse;
    // animation-duration: 3s;
    // animation-timing-function: linear;
    // animation-iteration-count: infinite;
    // animation-direction: alternate;

    // @keyframes animateEllipse {
    //   0% {
    //     opacity: 0;
    //   }
    //   50% {
    //     opacity: 0.5;
    //   }
    //   100% {
    //     opacity: 1;
    //   }
    // }
  }
`;

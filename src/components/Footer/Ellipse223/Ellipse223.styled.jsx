import styled from 'styled-components';

export const Ellipse223 = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    /* position: absolute;
    z-index: 1; */

    bottom: 1px;
    left: 100px;

    animation-name: animateEllipse;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;

    @keyframes animateEllipse {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }

  @media (min-width: 1440px) {
    bottom: 1px;
    left: 350px;
  }
`;

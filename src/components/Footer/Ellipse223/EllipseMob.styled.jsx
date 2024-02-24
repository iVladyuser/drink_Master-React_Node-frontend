import styled from 'styled-components';

export const EllipseMob = styled.img`
  display: block;
  position: absolute;
  z-index: 1;

  bottom: 1px;
  left: 1;

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

  @media (min-width: 768px) {
    display: none;
  }
`;

import { styled } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
`;

export const StyledInput = styled.input`
  display: none;
  visibility: hidden;
  overflow: hidden;
`;

export const BackgroundImg = styled.div`
  position: absolute;
  ${
    '' /* top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
  }

  opacity: 0.5;
  border-radius: 8px;
  overflow: hidden;

  img {
    display: block;
    ${
      '' /* width: 100%;
    height: 100%; */
    }
    object-fit: cover;
  }
`;

export const AddFileButton = styled.div`
  display: block;
  position: relative;

  label {
    width: 335px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #161f3780;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    label {
      width: 320px;
      height: 320px;
    }
  }

  @media (min-width: 1440px) {
    label {
      width: 400px;
      height: 400px;
    }
  }

  label:hover,
  label:focus,
  label:active {
    background-color: #161f37d7;
  }

  label:hover span,
  label:focus span,
  label:active span {
    background-color: #fff;
  }

  label:hover div,
  label:focus div,
  label:active div {
    color: #fff;
  }
`;

export const Button = styled.div`
  height: 90px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f3f3f3;
  z-index: 1;
`;

export const Icon = styled.span`
  width: 50px;
  height: 50px;
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #161f37;
  border-radius: 6px;
  background-color: #f3f3f3;
`;

export const ErrorText = styled.div`
  position: absolute;
  bottom: 24px;
  margin-top: 4px;
  display: block;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  color: #da1414;
  text-align: center;
`;

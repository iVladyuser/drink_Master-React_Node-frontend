import styled from 'styled-components';

export const SwitchWrapper = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 1px;
    bottom: 1px;
    background-color: #161f37;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #f3f3f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #f3f3f3;
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }
`;

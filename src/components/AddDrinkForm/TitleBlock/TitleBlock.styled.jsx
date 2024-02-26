import styled from 'styled-components';
import { Field } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    & > div:not(:last-of-type) {
      margin-right: 32px;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  & > div:nth-last-of-type(2) {
    margin-bottom: 40px;
  }
`;

export const LabelStyled = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colorText};
  opacity: 0.5;
`;

export const FieldWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }

  &:hover label,
  &:focus-within label {
    color: ${({ theme }) => theme.colorText};
    transition: 200ms ease transform;
  }
`;

export const FieldStyled = styled(Field)`
  display: block;
  height: 34px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  text-align: right;
  color: ${({ theme }) => theme.colorText};

  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.fieldColor};
  background: transparent;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.fieldColorFocus};
    outline: transparent;
  }

  &::placeholder {
    opacity: 0;
  }

  @media (min-width: 768px) {
    height: 41px;
  }
`;

export const FieldRadioLabel = styled.label`
  margin-left: 4px;
  color: ${({ theme }) => theme.fieldColor};
  &:first-of-type {
    margin-right: 14px;
  }
`;

export const FieldRadio = styled(Field)`
  margin: 0;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: inherit;
  color: currentColor;
  border: 1.5px solid ${({ theme }) => theme.fieldColor};
  border-radius: 50%;
  appearance: none;
  cursor: pointer;

  & + label {
    cursor: pointer;
  }

  &:hover + label {
    color: ${({ theme }) => theme.fieldColorFocus};
  }

  &:checked {
    border: 1.5px solid ${({ theme }) => theme.fieldColorFocus};
  }

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: ${({ theme }) => theme.fieldColorFocus};
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export const RadioButtonsWrapper = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
  }

  input:checked ~ label {
    color: ${({ theme }) => theme.fieldColorFocus};
  }
`;

export const ErrorText = styled.div`
  margin-top: 4px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  color: #da1414;
  text-align: right;
`;

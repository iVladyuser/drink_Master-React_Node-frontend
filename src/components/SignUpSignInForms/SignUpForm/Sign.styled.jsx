import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm, Field as FormikField } from 'formik';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (min-width: 375px) {
    width: 335px;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
`;
export const FormField = styled(FormikField)`
  width: 335px;
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  color: rgba(243, 243, 243, 0.5);
  background-color: transparent;
  font-size: 14px;
  line-height: 1.29;

  &:focus,
  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);
    background-color: transparent;
    color: rgba(243, 243, 243, 100%);
  }

  outline: 1px solid rgba(243, 243, 243, 0.2);
  ${({ error }) =>
    error === 'true' &&
    css`
      border: 1px solid red;
    `}
  ${({ success }) =>
    success === 'true' &&
    css`
      border: 1px solid green;
    `}
    

  @media (min-width: 768px) {
    width: 400px;
    padding: 14px 24px;
    font-size: 17px;
    line-height: 1.56;
  }

  @media (min-width: 1440px) {
    width: 400px;
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 18px;

  background-color: #161f37
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.12;
  border-radius: 42px;
  margin-top:26px;

  cursor: pointer;

  
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const SignInLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  text-decoration: underline;
  color: #f3f3f3;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;

  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;
export const ErrorBorder = styled.div`
  border: 1px solid red;
`;

export const SuccessBorder = styled.div`
  border: 1ch solid green;
`;
export const ErrorIcon = styled(AiOutlineExclamationCircle)`
  color: red;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 18px;
  right: 24px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const SuccessIcon = styled(AiOutlineCheckCircle)`
  color: green;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 18px;
  right: 24px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

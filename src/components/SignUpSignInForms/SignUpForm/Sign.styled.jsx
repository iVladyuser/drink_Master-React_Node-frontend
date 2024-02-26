import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm, Field as FormikField } from 'formik';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
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
export const Wrrap = styled.div`
  max-height: 68px;
`;
export const FormField = styled(FormikField)`
  width: 335px;
  padding: 18px 24px;
  border-radius: 200px;
  min-height: 54px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  color: rgba(243, 243, 243, 0.5);
  background-color: transparent;
  font-size: 14px;
  line-height: 1.29;
  outline: none;

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
      outline: none;
    `}
  ${({ success }) =>
    success === 'true' &&
    css`
      border: 1px solid green;
      outline: none;
    `}
  ${({ value }) =>
    value &&
    css`
      border: 1px solid green;
      outline: none;
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

  background-color: #f3f3f3;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.12;
  border-radius: 42px;
  margin-top: 26px;

  cursor: pointer;
  transition: color 300ms linear, background-color 300ms linear;
  &:hover {
    color: #f3f3f3;
    background-color: #161f37;
    border: 1px solid transparent;
  }

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
  transition: color 300ms linear;
  &:hover {
    color: #253d6f;
  }

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
  position: relative;

  @media screen and (min-width: 375px) {
    left: 300px;
    bottom: 58px;
  }

  @media screen and (min-width: 768px) {
    left: 360px;
    bottom: 58px;
    width: 20px;
    height: 20px;
  }
`;

export const SuccessIcon = styled(AiOutlineCheckCircle)`
  color: green;
  width: 18px;
  height: 18px;
  position: relative;

  @media screen and (min-width: 375px) {
    left: 300px;
    bottom: 36px;
  }

  @media screen and (min-width: 768px) {
    left: 360px;
    bottom: 36px;
    width: 20px;
    height: 20px;
  }
`;

export const TogglePasswordButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 18px;
  right: 24px;
  padding: 0;
`;
export const PasswordInputWrap = styled.div`
  position: relative;
`;
export const StyledDontShowPasswordIcon = styled(AiOutlineEye)`
  fill: #f3f3f3;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 375px) {
    left: 290px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const StyledShowPasswordIcon = styled(AiOutlineEyeInvisible)`
  fill: #f3f3f3;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 375px) {
    left: 290px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

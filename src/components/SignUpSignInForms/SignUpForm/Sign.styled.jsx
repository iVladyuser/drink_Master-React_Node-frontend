import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

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
  width: 100%;
  padding: 18px 24px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: rgba(243, 243, 243, 0.5);
  background-color: transparent;
  font-size: 14px;
  line-height: 1.29;

  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);
    color: rgba(243, 243, 243, 100%);
  }

  outline: 1px solid rgba(243, 243, 243, 0.2);

  @media (min-width: 768px) {
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
export const ErrorMessage = styled(FormikError)``;

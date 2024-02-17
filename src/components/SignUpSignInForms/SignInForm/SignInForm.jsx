// import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';

import {
  AuthForm,
  Input,
  Button,
  PasswordInputWrap,
  SignInLink,
} from '../SignUpForm/SignUp.styled';

const validateFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Field is required.'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters.')
    .max(20, 'Password is too Long!')
    .required('Field is required.'),
});

const initialValues = { email: '', password: '' };

export const SignInForm = () => {
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateFormSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <AuthForm>
          <>
            <PasswordInputWrap>
              <Input type="email" name="email" placeholder="Email" />
            </PasswordInputWrap>

            <PasswordInputWrap>
              <Input
                value={values.password}
                name="password"
                placeholder="Password"
              />
            </PasswordInputWrap>
          </>

          <Button type="submit">Sign In</Button>
          <SignInLink to="/signup">Sign Up</SignInLink>
        </AuthForm>
      )}
    </Formik>
  );
};

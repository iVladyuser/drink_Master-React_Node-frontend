// import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signUp } from '../../../redux/auth/operations';

import {
  AuthForm,
  Input,
  Button,
  PasswordInputWrap,
  SignInLink,
} from './SignUp.styled';

const validateFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'The name is short.')
    .required('Field is required.'),
  dateBirth: Yup.string().required('Field is required.'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Field is required.'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters.')
    .max(20, 'Password is too Long!')
    .required('Field is required.'),
});

const initialValues = { name: '', dateBirth: '', email: '', password: '' };

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values, { resetForm }) => {
    const { name, dateBirth, email, password } = values;

    dispatch(signUp({ name, dateBirth, email, password }))
      .unwrap()
      .then(() => toast.success('Registration successfully'))
      .catch(() => toast.error('Something went wrong. Try again'));
    resetForm();
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
              <Input type="text" name="name" placeholder="Name" />
            </PasswordInputWrap>

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

          <Button type="submit">Sign Up</Button>
          <SignInLink to="/signin">Sign In</SignInLink>
        </AuthForm>
      )}
    </Formik>
  );
};

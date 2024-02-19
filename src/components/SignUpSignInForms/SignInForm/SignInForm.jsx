// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signInThunk } from '../../../services/fetchAuth';
// import { toast } from 'react-toastify';

import {
  AuthForm,
  Input,
  Button,
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

export const SignInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    console.log('email:', email);
    console.log('password:', password);
    dispatch(signInThunk({ email, password }));
  };
  return (
    <AuthForm validationSchema={validateFormSchema} onSubmit={handleSubmit}>
      <>
        <Input type="email" name="userEmail" placeholder="Email" required />

        <Input name="userPassword" placeholder="Password" required />
      </>

      <Button type="submit">Sign In</Button>
      <SignInLink to="/signup">Sign Up</SignInLink>
    </AuthForm>
  );
};

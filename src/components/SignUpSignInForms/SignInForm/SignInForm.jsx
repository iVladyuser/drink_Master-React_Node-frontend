// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signInThunk } from '../../../services/fetchAuth';
import { toast } from 'react-toastify';

import { Form, FormField, Button, SignInLink } from '../SignUpForm/Sign.styled';
import { Formik } from 'formik';

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
  const handleSubmit = values => {
    // e.preventDefault();

    // const email = e.currentTarget.elements.userEmail.value;
    // const password = e.currentTarget.elements.userPassword.value;

    // console.log('email:', email);
    // console.log('password:', password);
    const { email, password } = values;
    dispatch(signInThunk({ email, password }))
      .unwrap()
      .then(() => {
        toast.success('Registration successful');
      })
      .catch(() => {
        toast.error('Something went wrong... Try again...');
      });
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validation={validateFormSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <>
            <FormField
              type="email"
              name="email"
              placeholder="Email"
              errors={errors}
            />

            <FormField name="password" placeholder="Password" errors={errors} />
          </>

          <Button type="submit">Sign In</Button>
          <SignInLink to="/signup">Sign Up</SignInLink>
        </Form>
      )}
    </Formik>
  );
};

import React, { useState, useRef } from 'react';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signUpThunk } from '../../../services/fetchAuth';
import StyledDatePicker from '../../DatePicker/DatePicker';
import FormError from '../../FormError/FormError';
import {
  Form,
  FormField,
  Button,
  SignInLink,
  ErrorIcon,
  SuccessIcon,
  TogglePasswordButton,
  StyledDontShowPasswordIcon,
  StyledShowPasswordIcon,
  PasswordInputWrap,
} from './Sign.styled';
import { differenceInYears } from 'date-fns';

import { Formik } from 'formik';

const validateFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'The name is short.')
    .required('Field is required.'),
  dateBirth: Yup.date().required('Field is required.'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Field is required.'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters.')
    .max(20, 'Password is too Long!')
    .required('Field is required.'),
});

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [age, setAge] = useState(null);
  const inputRef = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const { name, dateBirth, email, password } = values;
    const currentDate = new Date();
    const userAge = differenceInYears(currentDate, dateBirth);
    setAge(userAge);
    console.log('name:', name);
    console.log('age:', age);
    console.log('email:', email);
    console.log('password', password);
    dispatch(signUpThunk({ name, age: userAge, email, password }))
      .unwrap()
      .then(() => toast.success('Registration successful'))
      .catch(() => toast.error('Something went wrong... Try again...'));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        dateBirth: '',
        email: '',
        password: '',
      }}
      validationSchema={validateFormSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched }) => (
        <Form>
          <>
            <div>
              <FormField
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                error={errors.name && touched.name ? 'true' : 'false'}
                success={values.name && !errors.name ? 'true' : 'false'}
              />
              <FormError name="name" />
              {errors.name && touched.name ? (
                <ErrorIcon />
              ) : values.name && !errors.name ? (
                <SuccessIcon />
              ) : null}
            </div>
            <div>
              <FormField
                ref={inputRef}
                name="dateBirth"
                component={StyledDatePicker}
                error={errors.dateBirth && touched.dateBirth ? 'true' : 'false'}
                success={
                  values.dateBirth && !errors.dateBirth ? 'true' : 'false'
                }
              />

              <FormError name="dateBirth" />
            </div>
            <div>
              <FormField
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                error={errors.email && touched.email ? 'true' : 'false'}
                success={values.email && !errors.email ? 'true' : 'false'}
              />
              <FormError name="email" />
              {errors.email && touched.email ? (
                <ErrorIcon />
              ) : values.email && !errors.email ? (
                <SuccessIcon />
              ) : null}
            </div>
            <PasswordInputWrap>
              <FormField
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                placeholder="Password"
                autoComplete="off"
                error={errors.password && touched.password ? 'true' : 'false'}
                success={values.password && !errors.password ? 'true' : 'false'}
              />
              <FormError name="password" />
              <TogglePasswordButton
                type="button"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <StyledDontShowPasswordIcon />
                ) : (
                  <StyledShowPasswordIcon />
                )}
              </TogglePasswordButton>
            </PasswordInputWrap>
          </>
          <Button type="submit">Sign Up</Button>
          <SignInLink to="/signin">Sign In</SignInLink>
        </Form>
      )}
    </Formik>
  );
};

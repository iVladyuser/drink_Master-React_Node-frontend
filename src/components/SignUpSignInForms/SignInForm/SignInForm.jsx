import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { signInThunk } from '../../../services/fetchAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  Wrrap,
} from '../SignUpForm/Sign.styled';
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
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = values => {
    // e.preventDefault();

    // const email = e.currentTarget.elements.userEmail.value;
    // const password = e.currentTarget.elements.userPassword.value;

    const { email, password } = values;
    dispatch(signInThunk({ email, password }))
      .unwrap()
      .then(() => {
        toast.success('Sign In successful');
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
      validationSchema={validateFormSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched }) => (
        <Form>
          <>
            <Wrrap>
              <FormField
                type="email"
                name="email"
                placeholder="Email"
                error={errors.email && touched.email ? 'true' : 'false'}
                success={values.email && !errors.email ? 'true' : 'false'}
              />
              <FormError name="email" />
              {errors.email && touched.email ? (
                <ErrorIcon />
              ) : values.email && !errors.email ? (
                <SuccessIcon />
              ) : null}
            </Wrrap>
            <PasswordInputWrap>
              <FormField
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
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

          <Button type="submit">Sign In</Button>
          <SignInLink to="/signup">Sign Up</SignInLink>
        </Form>
      )}
    </Formik>
  );
};

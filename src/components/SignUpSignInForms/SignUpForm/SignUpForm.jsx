import { React } from 'react';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signUpThunk } from '../../../services/fetchAuth';
// import StyledDatePicker from '../../DatePicker/DatePicker';

import { Form, FormField, Button, SignInLink } from './Sign.styled';
import { Formik } from 'formik';

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

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    // e.preventDefault();

    // const name = e.currentTarget.elements.userName.value;
    // // const dateBirth = e.currentTarget.elements.dateofBirth.value;
    // const email = e.currentTarget.elements.userEmail.value;
    // const password = e.currentTarget.elements.userPassword.value;
    // console.log('name:', name);
    // // console.log('date:', dateBirth);
    // console.log('email:', email);
    // console.log('password:', password);
    const { name, email, password } = values;
    dispatch(signUpThunk({ name, email, password }))
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
        name: '',
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
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              errors={errors}
            />

            {/* <div>
              <StyledDatePicker
                name="dateofBirth"
                type="text"
                value={values.dateBirth}
                placeholder="Date of birth"
              />
            </div> */}

            <FormField
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              errors={errors}
            />

            <FormField
              type="password"
              name="password"
              value={values.password}
              placeholder="Password"
              autoComplete="off"
              errors={errors}
            />
          </>
          <Button type="submit">Sign Up</Button>
          <SignInLink to="/signin">Sign In</SignInLink>
        </Form>
      )}
    </Formik>
  );
};

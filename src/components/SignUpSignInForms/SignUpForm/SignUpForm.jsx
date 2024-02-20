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
  const handleSubmit = ({ name, email, password }) => {
    // e.preventDefault();

    // const name = e.currentTarget.elements.userName.value;
    // // const dateBirth = e.currentTarget.elements.dateofBirth.value;
    // const email = e.currentTarget.elements.userEmail.value;
    // const password = e.currentTarget.elements.userPassword.value;
    // console.log('name:', name);
    // // console.log('date:', dateBirth);
    // console.log('email:', email);
    // console.log('password:', password);

    dispatch(signUpThunk({ name, email, password }))
      .unwrap()
      .then(res => {
        if (res && res.status === 201) {
          toast.success('Registration successful');
        }
      })
      .catch(errorStatus => {
        if (errorStatus === 409) toast.error('User already exists...');
        else toast.error('Something went wrong... Try again...');
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
      {({ errors }) => (
        <Form>
          <>
            <FormField
              type="text"
              name="userName"
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
              name="userEmail"
              placeholder="Email"
              autoComplete="off"
              errors={errors}
            />

            <FormField
              type="password"
              name="userPassword"
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

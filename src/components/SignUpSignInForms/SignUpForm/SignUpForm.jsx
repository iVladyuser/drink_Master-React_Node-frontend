import { React } from 'react';

// import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import { signUpThunk } from '../../../services/fetchAuth';
// import StyledDatePicker from '../../DatePicker/DatePicker';

import { AuthForm, Input, Button, SignInLink } from './SignUp.styled';

// const validateFormSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'The name is short.')
//     .required('Field is required.'),
//   dateBirth: Yup.string().required('Field is required.'),
//   email: Yup.string()
//     .email('Please enter a valid email')
//     .required('Field is required.'),
//   password: Yup.string()
//     .min(8, 'Password must contain 8 characters.')
//     .max(20, 'Password is too Long!')
//     .required('Field is required.'),
// });

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    // const dateBirth = e.currentTarget.elements.dateofBirth.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    console.log('name:', name);
    // console.log('date:', dateBirth);
    console.log('email:', email);
    console.log('password:', password);

    dispatch(signUpThunk({ name, email, password }));
  };
  return (
    <AuthForm onSubmit={handleSubmit}>
      <>
        <Input type="text" name="userName" placeholder="Name" required />

        {/* <div>
              <StyledDatePicker
                name="dateofBirth"
                type="text"
                value={values.dateBirth}
                placeholder="Date of birth"
              />
            </div> */}

        <Input type="email" name="userEmail" placeholder="Email" required />

        <Input
          type="password"
          name="userPassword"
          placeholder="Password"
          required
        />
      </>
      <Button type="submit">Sign Up</Button>
      <SignInLink to="/signin">Sign In</SignInLink>
    </AuthForm>
  );
};

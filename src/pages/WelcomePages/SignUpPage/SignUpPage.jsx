import { SignUpForm } from 'components/SignUpSignInForms/SignUpForm/SignUpForm';
import { AuthFormSection } from '../../../components/SignUpSignInForms/AuthForm';

const SignUpPage = () => {
  return (
    <AuthFormSection title={'Sign Up'}>
      <SignUpForm></SignUpForm>
    </AuthFormSection>
  );
};

export default SignUpPage;

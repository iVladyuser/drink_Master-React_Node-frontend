import { SignInForm } from 'components/SignUpSignInForms/SignInForm/SignInForm';
import { AuthFormSection } from '../../../components/SignUpSignInForms/AuthForm';

const SignUpPage = () => {
  return (
    <AuthFormSection title={'Sign In'}>
      <SignInForm></SignInForm>
    </AuthFormSection>
  );
};

export default SignUpPage;

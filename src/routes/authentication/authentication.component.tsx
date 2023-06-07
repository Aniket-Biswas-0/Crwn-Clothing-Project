import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <div>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <SignInForm />
      </div>
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;

import Footer from 'components/Footer/Footer';
import {
  WelcomePageStyle,
  Container,
  WelcomeText,
  Title,
  ButtonWrapper,
  ButtonLinkActive,
  ButtonLink,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <WelcomePageStyle>
      <Container>
        <Title>Welcome to the app!</Title>
        <WelcomeText>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </WelcomeText>
        <ButtonWrapper>
          <ButtonLinkActive to="/signup">Sign Up</ButtonLinkActive>
          <ButtonLink to="/signin">Sign In</ButtonLink>
        </ButtonWrapper>
      </Container>
      <Footer/>
    </WelcomePageStyle>
  );
};

export default WelcomePage;

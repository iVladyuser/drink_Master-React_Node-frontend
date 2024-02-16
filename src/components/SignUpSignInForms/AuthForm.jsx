import {
  Container,
  Title,
  ButtonWrapper,
  AuthSection,
} from './AuthForm.styled';

export const AuthForm = ({ title, children }) => {
  return (
    <AuthSection>
      <Container>
        <ButtonWrapper>
          <Title>{title}</Title>
          {children}
        </ButtonWrapper>
      </Container>
    </AuthSection>
  );
};

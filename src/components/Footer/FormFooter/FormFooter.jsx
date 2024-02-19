import React from 'react';

import {
  ButtonSubmit,
  FormContainer,
  InputForm,
  Title,
  InputNameEmail,
} from './FormFooter.styled';

export const FormFooter = () => {
  return (
    <FormContainer>
      <Title>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </Title>
      <InputForm>
        <InputNameEmail
          placeholder= "Enter the email"
          type= "email"
          name="user-email"
          id="user-email"
          required
        />
      </InputForm>

      <ButtonSubmit type="submit">Sign In</ButtonSubmit>
    </FormContainer>
  );
};

export default FormFooter;

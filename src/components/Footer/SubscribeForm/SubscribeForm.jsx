import React from 'react';

import { useForm } from 'react-hook-form';
import { ErrorsSvg } from 'images/footer/svg/Errors';
import { CorrectSvg } from 'images/footer/svg/Correct';

import {
  ButtonSubmit,
  FormContainer,
  InputForm,
  Title,
  InputNameEmail,
  InputLabel,
  Error,
  ErrorDiv,
  Correct,
  Relative,
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm(
    {
      mode: 'all', 
    });

  const onSubmit = data => {
    // alert(JSON.stringify(data));
    reset();
  };


  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </Title>
      <InputForm>
        <Relative>
        
          <InputLabel>
  
            <InputNameEmail
          
            border={(errors?.email && "1px solid #DA1414") || (isValid && "1px solid #3CBC81")}
            
          
            
              placeholder="Enter the email"
              type="email"
              name="email"
              id="email"
              {...register('email', {
                required: 'Field is required for recording',
                pattern: {
                  value: /[a-zA-Z0-9]{5}@[a-zA-Z0-9]{2,10}.(es|com|org)/,
                  message: 'This is an ERROR email',
                  
                },
              })}
            />
          </InputLabel>
          {isValid && <CorrectSvg />}
          {errors?.email && <ErrorsSvg />}
        </Relative>
        <ErrorDiv>
          {isValid && <Correct>This is an CORRECT email</Correct>}
          {errors?.email && <Error>{errors?.email?.message}</Error>}
        </ErrorDiv>

        <ButtonSubmit type="submit" disabled={!isValid}>Subscribe</ButtonSubmit>
      </InputForm>
    </FormContainer>
  );
};

export default SubscribeForm;

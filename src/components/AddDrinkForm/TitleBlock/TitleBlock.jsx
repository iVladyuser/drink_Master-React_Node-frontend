import AddImage from '../AddImageForm';
// import CustomSelect from '../CustomSelect';

import {
  FieldStyled,
  FieldWrapper,
  LabelStyled,
  FieldRadio,
  FieldRadioLabel,
  RadioButtonsWrapper,
  Wrapper,
  ContentWrapper,
  ErrorText,
} from './TitleBlock.styled';

const TitleBlock = ({
  categoriesList,
  glassesList,
  setValue,
  touched,
  errors,
  fileRef,
}) => {
  return (
    <Wrapper>
      <AddImage setValue={setValue} fileRef={fileRef} />

      <ContentWrapper>
        <FieldWrapper>
          <LabelStyled htmlFor="title">Enter item title</LabelStyled>
          <FieldStyled name={'title'} placeholder="Enter item title" />
          {touched.title && errors.title ? (
            <ErrorText>{errors.title}</ErrorText>
          ) : null}
        </FieldWrapper>

        <FieldWrapper>
          <LabelStyled htmlFor="recipe">Enter about recipe</LabelStyled>
          <FieldStyled name={'recipe'} placeholder="Enter about recipe" />
          {touched.recipe && errors.recipe ? (
            <ErrorText>{errors.recipe}</ErrorText>
          ) : null}
        </FieldWrapper>

        {/* <CustomSelect />

        <CustomSelect /> */}

        <RadioButtonsWrapper
          role="cocktailTypeSelect"
          aria-labelledby="cocktailTypeSelect-group"
        >
          <div>
            <FieldRadio
              type="radio"
              name="alcoholicType"
              id="radioAlcoholic"
              value={'Alcoholic'}
            />
            <FieldRadioLabel htmlFor="radioAlcoholic">
              Alcoholic
            </FieldRadioLabel>
          </div>

          <div>
            <FieldRadio
              type="radio"
              name="alcoholicType"
              id="radioNonAlcoholic"
              value={'Non-alcoholic'}
            />
            <FieldRadioLabel htmlFor="radioNonAlcoholic">
              Non-alcoholic
            </FieldRadioLabel>
          </div>
        </RadioButtonsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default TitleBlock;

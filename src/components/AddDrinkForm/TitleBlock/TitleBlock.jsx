import AddImage from '../AddImage';
import CustomSelect from '../CustomSelect';

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
          <LabelStyled htmlFor="drink">Enter item title</LabelStyled>
          <FieldStyled name={'drink'} placeholder="Enter item drink" />
          {touched.drink && errors.drink ? (
            <ErrorText>{errors.drink}</ErrorText>
          ) : null}
        </FieldWrapper>

        <FieldWrapper>
          <LabelStyled htmlFor="description">Enter about recipe</LabelStyled>
          <FieldStyled name={'description'} placeholder="Enter about recipe" />
          {touched.description && errors.description ? (
            <ErrorText>{errors.description}</ErrorText>
          ) : null}
        </FieldWrapper>

        <CustomSelect
          items={categoriesList}
          title={'Category'}
          touched={touched.category}
          error={errors.category}
        />

        <CustomSelect
          items={glassesList}
          title={'Glass'}
          touched={touched.glass}
          error={errors.glass}
        />

        <RadioButtonsWrapper
          role="cocktailTypeSelect"
          aria-labelledby="cocktailTypeSelect-group"
        >
          <div>
            <FieldRadio
              type="radio"
              name="alcoholic"
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
              name="alcoholic"
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

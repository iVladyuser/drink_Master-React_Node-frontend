import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import AddImage from '../AddImage';
import CustomSelect from '../CustomSelect';
import { selectUserDataAge } from '../../../redux/auth/auth.selectors.js';

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
  const age = useSelector(selectUserDataAge);

  const handleDisabledClick = () => {
    if (age < 18) {
      toast.error('To choose Alcoholic you need to be 18+!');
    }
  };

  console.log('age', age);

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
          onClick={() => handleDisabledClick()}
          disabled={age < 18}
        >
          <div>
            <FieldRadio
              type="radio"
              name="alcoholic"
              id="radioAlcoholic"
              value={'Alcoholic'}
              disabled={age < 18}
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
              disabled={age < 18}
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

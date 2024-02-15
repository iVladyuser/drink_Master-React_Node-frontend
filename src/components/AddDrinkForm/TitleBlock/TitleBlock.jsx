import { Field } from 'formik';

import AddImage from '../AddImageForm';
import CustomSelect from '../CustomSelect';

const TitleBlock = () => {
  return (
    <div>
      <AddImage />

      <div>
        <div>
          <label htmlFor="title">Enter item title</label>
          <Field name={'title'} placeholder="Enter item title" />
        </div>

        <div>
          <label htmlFor="recipe">Enter about recipe</label>
          <Field name={'recipe'} placeholder="Enter about recipe" />
        </div>

        <CustomSelect />

        <CustomSelect />

        <div>
          <div>
            <Field
              type="radio"
              name="alcoholicType"
              id="radioAlcoholic"
              value={'Alcoholic'}
            />
            <label htmlFor="radioAlco">Alcoholic</label>
          </div>

          <div>
            <Field
              type="radio"
              name="alcoholicType"
              id="radioNonAlcoholic"
              value={'Non-alcoholic'}
            />
            <label htmlFor="radioNonAlco">Non-alcoholic</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBlock;

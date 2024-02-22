import { Container } from './AddDrinkPages.styled';

import MainForm from 'components/AddDrinkForm/MainForm/MainForm';

// import PopularDrinks from '../../components/PopularDrinks';
// import FollowUs from '../../components/FollowUs';

const AddDrinkPage = () => {
  return (
    <>
      <Container>
        <MainForm />
        {/* <AdditionalBlock>
        <FollowUs />
        <PopularDrinks />
      </AdditionalBlock> */}
      </Container>
    </>
  );
};

export default AddDrinkPage;

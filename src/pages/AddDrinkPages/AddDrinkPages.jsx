import { Container } from './AddDrinkPages.styled';

import { Header } from 'components/Header/Header';
import MainForm from '../../components/AddDrinkForm/MainForm';
import Footer from 'components/Footer/Footer';
// import PopularDrinks from '../../components/PopularDrinks';
import FollowUs from '../../components/FollowUs';

const AddDrinkPage = () => {
  return (
    <>
      <Header />
      <Container>
        <MainForm />
        {/* <AdditionalBlock>
        <FollowUs />
        <PopularDrinks />
      </AdditionalBlock> */}
      </Container>
      <Footer />
    </>
  );
};

export default AddDrinkPage;

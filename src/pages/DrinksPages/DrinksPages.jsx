// import {  } from './DrinksPages.styled';
import TitlePage from '../../components/TitlePage';
import SearchDrinksInput from '../../components/SearchDrinksInput';
import { Container } from '../../styles/GlobalStyle';
import {DrinksPageStyle} from './DrinksPages.styled';
import { CustomSelect } from 'components/AddDrinkForm/CustomSelect/CustomSelect.styled';
const a = ['vlad', 'fox', 'fix']
const DrinksPage = () => {
    return (
      <DrinksPageStyle> 
      <Container>
       <TitlePage 
       title={"Drinks"}/>
       <SearchDrinksInput/>
       <CustomSelect 
        items={a}
        title={'Category'}
       />
      </Container>
      </DrinksPageStyle>
    );
  };
  
  export default DrinksPage;
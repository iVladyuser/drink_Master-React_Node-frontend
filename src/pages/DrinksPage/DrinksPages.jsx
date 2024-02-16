// import {  } from './DrinksPages.styled';
import TitlePage from '../../components/TitlePage';
import SearchDrinksInput from '../../components/SearchDrinksInput';
import SelectCategories from '../../components/SelectCategories';
import { Container } from '../../styles/GlobalStyle';
import {DrinksPageStyle} from './DrinksPage.styled'
const DrinksPage = () => {
    return (
      <DrinksPageStyle> 
      <Container>
       <TitlePage 
       title={"Drinks"}/>
       <SearchDrinksInput/>
       <SelectCategories/>
      </Container>
      </DrinksPageStyle>
    );
  };
  
  export default DrinksPage;
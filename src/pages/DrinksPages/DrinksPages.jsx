// import {  } from './DrinksPages.styled';
import TitlePage from '../../components/TitlePage';
import SearchDrinksInput from '../../components/SearchDrinksInput';
import { Container } from '../../styles/GlobalStyle';
import {DrinksPageStyle} from './DrinksPages.styled'
const DrinksPage = () => {
    return (
      <DrinksPageStyle> 
      <Container>
       <TitlePage 
       title={"Drinks"}/>
       <SearchDrinksInput/>
       
      </Container>
      </DrinksPageStyle>
    );
  };
  
  export default DrinksPage;
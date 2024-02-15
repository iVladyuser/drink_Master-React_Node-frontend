import { HeaderContainer } from './Header.styled';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();


  const isHomePage = location.pathname === '/';


  return (
    <HeaderContainer>
      {isHomePage && <h1>Welcome to the Home Page</h1>}
      {}
    </HeaderContainer>
  );
};

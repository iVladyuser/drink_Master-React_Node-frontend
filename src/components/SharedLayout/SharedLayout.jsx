import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { OutletDiv, PngDiv } from './SharedLayout.styled';
import PageEllipse222 from './Ellipse/Elipse222/Elipse222';
import PageEllipse224 from './Ellipse/Elipse224/Elipse224';
import { Loader } from 'components/Loader/Loader';
import PageEllipse224Tab from './Ellipse/Elipse224Tab/Elipse224Tab';

export const SharedLayout = ({ theme, toggleTheme }) => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <PngDiv>
        <PageEllipse222 />
          <PageEllipse224 />
          <PageEllipse224Tab/>
        
        <OutletDiv>
          <Outlet />
          
        </OutletDiv>
        </PngDiv>
        <Footer />
      </Suspense>
    </>
  );
};

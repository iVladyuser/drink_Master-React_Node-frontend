import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { OutletDiv, PngDiv } from './SharedLayout.styled';
import PageEllipse222 from './Ellipse/Elipse222/Elipse222';
import PageEllipse224 from './Ellipse/Elipse224/Elipse224';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = ({ theme, toggleTheme }) => {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <PngDiv>
          <PageEllipse222 />
          <PageEllipse224 />
        </PngDiv>
        <OutletDiv>
          <Outlet />
        </OutletDiv>

        <Footer />
      </Suspense>
    </>
  );
};

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { OutletDiv,PngDiv } from './SharedLayout.styled';
import PageEllipse222 from './Ellipse/Elipse222/Elipse222';
import PageEllipse224 from './Ellipse/Elipse224/Elipse224';

export const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        <Header />
        <PngDiv>
          <PageEllipse222/>
          <PageEllipse224/>
        <OutletDiv>
        <Outlet />
        </OutletDiv>
        </PngDiv>
        <Footer />
      </Suspense>
    </>
  );
};

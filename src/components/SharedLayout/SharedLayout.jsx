import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

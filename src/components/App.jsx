import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'services/fetchAuth';
import * as ROUTES from 'constants/routes';
import { AppWrapper } from './App.styled';

// import RestrictedRoute from './RestrictedRoute';
// import PrivateRoute from './PrivateRoute';

const Welcome = lazy(() => import('pages/WelcomePages/WelcomePage'));
const Register = lazy(() => import('pages/WelcomePages/SignUpPage/SignUpPage'));
const Login = lazy(() => import('pages/WelcomePages/SignInPage/SignInPage'));
const Home = lazy(() => import('pages/HomePage/HomePage'));
const AddDrinkPage = lazy(() => import('pages/AddDrinkPages/AddDrinkPages'));
const Drinks = lazy(() => import('pages/DrinksPages/DrinksPages'));
const FavoriteDrinksPage = lazy(() =>
  import('pages/FavoritePage/FavoriteDrinksPage')
);

const appRoutes = [
  {
    path: ROUTES.WELCOME_ROUTE,
    element: <Welcome />,
  },
  {
    path: ROUTES.SIGNIN_ROUTE,
    element: <Login />,
  },
  {
    path: ROUTES.SIGNUP_ROUTE,
    element: <Register />,
  },
  
  { path: ROUTES.HOME_ROUTE, element: <Home /> },
  { path: ROUTES.FAVORITES_ROUTE, element: <FavoriteDrinksPage /> },

  { path: ROUTES.ADDDRINK_ROUTE, element: <AddDrinkPage /> },
  { path: ROUTES.DRINKS_ROUTE, element: <Drinks /> },
];

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <AppWrapper>
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          <Route path="*" element={<Navigate to="/welcome" />} />
        </Routes>
      </Suspense>
    </Layout>
    </AppWrapper>
  );
};

export default App;

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
const DrinkPage = lazy(() => import('pages/DrinkPage/DrinkPage'));

const appRoutes = [
  {
    path: ROUTES.WELCOME_ROUTE,
    element: (
      // <RestrictedRoute>
      <Welcome />
      // </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.SIGNIN_ROUTE,
    element: (
      // <RestrictedRoute>
      <Login />
      // </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.SIGNUP_ROUTE,
    element: (
      // <RestrictedRoute>
      <Register />
      // </RestrictedRoute>
    ),
  },

  {
    path: ROUTES.HOME_ROUTE,
    element: (
      // <PrivateRoute>
      <Home />
      // </PrivateRoute>
    ),
  },
  {
    path: ROUTES.FAVORITES_ROUTE,
    element: (
      // <PrivateRoute>
      <FavoriteDrinksPage />
      // </PrivateRoute>
    ),
  },

  {
    path: ROUTES.ADDDRINK_ROUTE,
    element: (
      // <PrivateRoute>
      <AddDrinkPage />
      // </PrivateRoute>
    ),
  },
  {
    path: ROUTES.DRINKS_ROUTE,
    element: (
      // <PrivateRoute>
      <Drinks />
      // </PrivateRoute>
    ),
  },
  {
    path: ROUTES.DRINKPAGE_ROUTE,
    element: (
      // <PrivateRoute>
      <DrinkPage />
      // </PrivateRoute>
    ),
  },
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

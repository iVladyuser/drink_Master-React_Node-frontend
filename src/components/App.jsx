import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'services/fetchAuth';
import * as ROUTES from 'constants/routes';
import { AppWrapper } from './App.styled';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import WelcomePage from 'pages/WelcomePages/WelcomePage';
import SignUpPage from '../pages/WelcomePages/SignUpPage/SignUpPage';
import SignInPage from '../pages/WelcomePages/SignInPage/SignInPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AddDrinkPage = lazy(() => import('../pages/AddDrinkPages/AddDrinkPages'));
const Drinks = lazy(() => import('../pages/DrinksPages/DrinksPages'));
const FavoriteDrinksPage = lazy(() =>
  import('../pages/FavoritePage/FavoriteDrinksPage')
);
const DrinkPage = lazy(() => import('../pages/DrinkPage/DrinkPage'));

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <HomePage />,
  },

  {
    path: ROUTES.FAVORITES_ROUTE,
    element: <FavoriteDrinksPage />,
  },

  {
    path: ROUTES.ADDDRINK_ROUTE,
    element: <AddDrinkPage />,
  },
  {
    path: ROUTES.DRINKS_ROUTE,
    element: <Drinks />,
  },
  {
    path: ROUTES.DRINKPAGE_ROUTE,
    element: <DrinkPage />,
  },
];

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Routes>
        <Route
          path={ROUTES.WELCOME_ROUTE}
          element={<RestrictedRoute component={<WelcomePage />} />}
        />
        <Route
          path={ROUTES.SIGNUP_ROUTE}
          element={<RestrictedRoute component={<SignUpPage />} />}
        />
        <Route
          path={ROUTES.SIGNIN_ROUTE}
          element={<RestrictedRoute component={<SignInPage />} />}
        />
        <Route path="/" element={<PrivateRoute component={<SharedLayout />} />}>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </AppWrapper>
  );
};

export default App;

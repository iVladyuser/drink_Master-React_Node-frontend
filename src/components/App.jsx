import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ThemeProvider } from 'styled-components';
import { ToggleThemes } from './ToggleThemes/ToggleThemes';
import { DarkTheme, LightTheme } from '../styles/theme';
import { useDispatch } from 'react-redux';
import { refreshThunk } from '../services/fetchAuth';
import * as ROUTES from 'constants/routes';
import { AppWrapper } from './App.styled';
import { ToastContainer } from 'react-toastify';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import WelcomePage from 'pages/WelcomePages/WelcomePage';
import SignUpPage from '../pages/WelcomePages/SignUpPage/SignUpPage';
import SignInPage from '../pages/WelcomePages/SignInPage/SignInPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const AddDrinkPage = lazy(() => import('../pages/AddDrinkPages/AddDrinkPages'));
const Drinks = lazy(() => import('../pages/DrinksPages/DrinksPages2'));
const FavoriteDrinksPage = lazy(() =>
  import('../pages/FavoritePage/FavoriteDrinksPage')
);
const DrinkPage = lazy(() => import('../pages/DrinkPage/DrinkPage'));
const MyDrinksPage = lazy(() => import('../pages/MyDrinksPage/MyDrinksPage'));

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
  {
    path: ROUTES.MYDRINKS_ROUTE,
    element: <MyDrinksPage />,
  },
];

const App = () => {
  const [theme, themeToggle] = ToggleThemes();
  const themeMode = theme === 'dark' ? DarkTheme : LightTheme;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeMode}>
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
          <Route
            path="/"
            element={
              <PrivateRoute
                component={
                  <SharedLayout theme={theme} toggleTheme={themeToggle} />
                }
              />
            }
          >
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
        <ToastContainer />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;

import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'services/fetchAuth';
import * as ROUTES from 'constants/routes';

import RestrictedRoute from './RestrictedRoute';
// import PrivateRoute from './PrivateRoute';

const Welcome = lazy(() => import('pages/WelcomePages/WelcomePage'));
const Register = lazy(() => import('pages/RegisterPage'));
const Login = lazy(() => import('pages/LogInPage'));

const appRoutes = [
  { path: ROUTES.HOME_ROUTE, element: <Home /> },
  {
    path: ROUTES.SIGNIN_ROUTE,
    element: (
      <RestrictedRoute>
        <Login />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.SIGNUP_ROUTE,
    element: (
      <RestrictedRoute>
        <Register />
      </RestrictedRoute>
    ),
  },
  { path: ROUTES.ADDDRINK_ROUTE, element: <AddDrinkPage /> },
];

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
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
  );
};

export default App;

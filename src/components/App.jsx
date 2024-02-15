import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'services/fetchAuth';
import {
  WELCOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from 'constants/routes';
import RestrictedRoute from './RestrictedRoute';
// import PrivateRoute from './PrivateRoute';

const Welcome = lazy(() => import('pages/WelcomePages/WelcomePage'));
const Register = lazy(() => import('pages/RegisterPage'));
const Login = lazy(() => import('pages/LogInPage'));

const appRoutes = [
  { path: WELCOME_ROUTE, element: <Welcome /> },
  {
    path: LOGIN_ROUTE,
    element: (
      <RestrictedRoute>
        <Login />
      </RestrictedRoute>
    ),
  },
  {
    path: REGISTRATION_ROUTE,
    element: (
      <RestrictedRoute>
        <Register />
      </RestrictedRoute>
    ),
  },
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

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;

import { useSelector } from 'react-redux';

import {
  selectIsLoading,
  selectName,
  selectIsLoggedIn,
  selectUser,
  selectUserBirthDate,
  selectIsRefreshing,
} from '../redux/selectors';

export const useAuth = () => {
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectName);
  const user = useSelector(selectUser);

  const isRefreshing = useSelector(selectIsRefreshing);
  const userBirthDate = useSelector(selectUserBirthDate);

  return {
    isLoading,
    isLoggedIn,
    isRefreshing,
    name,
    user,
    userBirthDate,
  };
};

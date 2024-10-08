import { useSelector } from 'react-redux';
// prettier-ignore
import { selectUser, selectIsLoggedIn, selectIsRefreshing, selectIsLoading } from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoading,
  };
};

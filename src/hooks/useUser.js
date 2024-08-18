import { useSelector } from 'react-redux';
// prettier-ignore
import { selectInfo, selectIsLoading } from '../redux/user/userSelectors';

export const useUser = () => {
  const info = useSelector(selectInfo);
  const isLoading = useSelector(selectIsLoading);

  return {
    info,
    isLoading
  };
};
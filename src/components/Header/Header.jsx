import { Navigation } from '../Navigation/Navigation';

// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from '../../hooks/useAuth';
import css from './Header.module.css';
import UserBarBtn from 'components/UserBarBtn/UserBarBtn';

export const Header = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      <UserBarBtn />
    </header>
  );
};

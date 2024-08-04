import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';
import { Icon } from 'components/Icon/Icon';
import { Logo } from 'components/Logo/Logo';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" >
        <Logo><span><Icon icon='logo' /></span><span>ExpenseTracker</span></Logo>
      </NavLink>
      {/* <NavLink
        to="/"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        Home
      </NavLink> */}
      {isLoggedIn && (
        <NavLink
          to="/transactions/expense"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Transactions
        </NavLink>
      )}
    </nav>
  );
};

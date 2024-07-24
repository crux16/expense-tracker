import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <nav>
      <NavLink
        to="/signup"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        Log In
      </NavLink>
    </nav>
  );
};

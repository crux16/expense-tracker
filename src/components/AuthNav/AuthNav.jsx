// import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';

// export const AuthNav = () => {
//   return (
//     <nav>
//       <NavLink
//         to="/signup"
//         className={({ isActive }) => (isActive ? css.linkActive : css.link)}
//       >
//         Register
//       </NavLink>
//       <NavLink
//         to="/login"
//         className={({ isActive }) => (isActive ? css.linkActive : css.link)}
//       >
//         Log In
//       </NavLink>
//     </nav>
//   );
// };

import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        {({ isActive }) => (
          <button className={isActive ? css.buttonActive : css.button}>
            <p className={css.buttonText}>Sign Up</p>
          </button>
        )}
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
      >
        {({ isActive }) => (
          <button className={isActive ? css.buttonActive : css.button}>
            <p className={css.buttonText}>Sign In</p>
          </button>
        )}
      </NavLink>
    </nav>
  );
};

